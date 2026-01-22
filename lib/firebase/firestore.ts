import { adminDb } from './admin';
import { RestaurantDocument } from '../types/restaurant';
import { SubscriptionStatus } from '../types/subscription';

/**
 * Check and update subscription status if expired
 * This runs on every page load to ensure real-time status updates
 * @param slug - Restaurant slug
 * @param restaurant - Restaurant document
 * @returns Updated status if changed, null if no update needed
 */
async function checkAndUpdateSubscriptionStatus(
  slug: string,
  restaurant: RestaurantDocument
): Promise<SubscriptionStatus | null> {
  const now = new Date();
  const { status, trialEnd, currentPeriodEnd } = restaurant.subscription;

  let newStatus: SubscriptionStatus | null = null;

  // Check 1: Trial expired → suspend
  if (status === 'trial' && trialEnd) {
    const trialEndDate = trialEnd instanceof Date ? trialEnd : new Date(trialEnd);
    if (now > trialEndDate) {
      newStatus = 'suspended';
      console.log(`[Subscription Check] Trial expired for ${slug}, suspending...`);
    }
  }

  // Check 2: Paid subscription expired → past_due (grace period)
  if (status === 'active') {
    const periodEndDate = currentPeriodEnd instanceof Date
      ? currentPeriodEnd
      : new Date(currentPeriodEnd);
    if (now > periodEndDate) {
      newStatus = 'past_due';
      console.log(`[Subscription Check] Subscription expired for ${slug}, marking as past_due...`);
    }
  }

  // Check 3: Grace period ended (3 days after expiry) → suspend
  if (status === 'past_due') {
    const periodEndDate = currentPeriodEnd instanceof Date
      ? currentPeriodEnd
      : new Date(currentPeriodEnd);
    const gracePeriodEnd = new Date(periodEndDate);
    gracePeriodEnd.setDate(gracePeriodEnd.getDate() + 3); // 3 day grace period

    if (now > gracePeriodEnd) {
      newStatus = 'suspended';
      console.log(`[Subscription Check] Grace period ended for ${slug}, suspending...`);
    }
  }

  // Update Firestore if status changed
  if (newStatus && newStatus !== status) {
    try {
      await adminDb.collection('restaurants').doc(slug).update({
        'subscription.status': newStatus,
        updatedAt: now,
      });
      console.log(`[Subscription Check] Updated ${slug} status: ${status} → ${newStatus}`);
      return newStatus;
    } catch (error) {
      console.error(`[Subscription Check] Error updating ${slug}:`, error);
      return null;
    }
  }

  return null; // No update needed
}

/**
 * Get a restaurant by slug from Firestore (server-side)
 * Automatically checks and updates subscription status on every page load
 * @param slug - Restaurant slug (e.g., "tazza", "pizzacaprina")
 * @returns Restaurant document or null if not found
 */
export async function getRestaurant(
  slug: string
): Promise<RestaurantDocument | null> {
  try {
    const docRef = adminDb.collection('restaurants').doc(slug);
    const docSnap = await docRef.get();

    if (!docSnap.exists) {
      return null;
    }

    const data = docSnap.data() as RestaurantDocument;

    // Convert Firestore Timestamps to Date objects
    const restaurant: RestaurantDocument = {
      ...data,
      slug,
      createdAt: data.createdAt instanceof Date ? data.createdAt : new Date(data.createdAt),
      updatedAt: data.updatedAt instanceof Date ? data.updatedAt : new Date(data.updatedAt),
      subscription: {
        ...data.subscription,
        currentPeriodStart:
          data.subscription.currentPeriodStart instanceof Date
            ? data.subscription.currentPeriodStart
            : new Date(data.subscription.currentPeriodStart),
        currentPeriodEnd:
          data.subscription.currentPeriodEnd instanceof Date
            ? data.subscription.currentPeriodEnd
            : new Date(data.subscription.currentPeriodEnd),
        trialEnd: data.subscription.trialEnd
          ? data.subscription.trialEnd instanceof Date
            ? data.subscription.trialEnd
            : new Date(data.subscription.trialEnd)
          : undefined,
      },
    };

    // Check and update subscription status (client-side checking on every page load)
    const updatedStatus = await checkAndUpdateSubscriptionStatus(slug, restaurant);

    // If status was updated, return the updated restaurant object
    if (updatedStatus) {
      restaurant.subscription.status = updatedStatus;
      restaurant.updatedAt = new Date();
    }

    return restaurant;
  } catch (error) {
    console.error('Error fetching restaurant:', error);
    return null;
  }
}

/**
 * Get all active restaurant slugs (for static generation)
 * @returns Array of restaurant slugs
 */
export async function getAllRestaurantSlugs(): Promise<string[]> {
  try {
    const snapshot = await adminDb
      .collection('restaurants')
      .where('isActive', '==', true)
      .get();

    return snapshot.docs.map((doc) => doc.id);
  } catch (error) {
    console.error('Error fetching restaurant slugs:', error);
    return [];
  }
}

/**
 * Check if a restaurant subscription is active
 * @param restaurant - Restaurant document
 * @returns True if subscription allows menu access
 */
export function isSubscriptionActive(restaurant: RestaurantDocument): boolean {
  const { status } = restaurant.subscription;
  return status === 'active' || status === 'trial';
}

/**
 * Check if a restaurant is in trial period
 * @param restaurant - Restaurant document
 * @returns True if in trial period
 */
export function isInTrial(restaurant: RestaurantDocument): boolean {
  const { status, trialEnd } = restaurant.subscription;

  if (status !== 'trial' || !trialEnd) {
    return false;
  }

  const trialEndDate = trialEnd instanceof Date ? trialEnd : new Date(trialEnd);
  return new Date() < trialEndDate;
}

/**
 * Get days remaining in trial
 * @param restaurant - Restaurant document
 * @returns Days remaining or 0 if not in trial
 */
export function getTrialDaysRemaining(restaurant: RestaurantDocument): number {
  if (!isInTrial(restaurant) || !restaurant.subscription.trialEnd) {
    return 0;
  }

  const trialEnd =
    restaurant.subscription.trialEnd instanceof Date
      ? restaurant.subscription.trialEnd
      : new Date(restaurant.subscription.trialEnd);

  const now = new Date();
  const diffTime = trialEnd.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return Math.max(0, diffDays);
}
