import { notFound } from 'next/navigation';
import { getRestaurant, isSubscriptionActive, getTrialDaysRemaining } from '@/lib/firebase/firestore';
import { MenuRenderer } from '@/components/menu/MenuRenderer';
import { SubscriptionBanner } from '@/components/subscription/SubscriptionBanner';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ restaurant: string }>;
}

/**
 * Generate metadata for SEO
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { restaurant: slug } = await params;
  const restaurant = await getRestaurant(slug);

  if (!restaurant) {
    return {
      title: 'Restaurant Not Found',
    };
  }

  return {
    title: `${restaurant.name} - Menu | TapLab`,
    description: restaurant.branding.footer.description || `View ${restaurant.name}'s menu`,
    keywords: `${restaurant.name}, menu, food, delivery, ${restaurant.contact.address || ''}`,
    openGraph: {
      title: restaurant.name,
      description: restaurant.branding.footer.description || `View ${restaurant.name}'s menu`,
      images: restaurant.branding.logo?.url ? [restaurant.branding.logo.url] : [],
      type: 'website',
    },
  };
}

/**
 * Dynamic Restaurant Menu Page
 * Fetches restaurant data from Firestore and renders the menu
 */
export default async function RestaurantPage({ params }: PageProps) {
  // Await params (Next.js 15+ requirement)
  const { restaurant: slug } = await params;

  // Fetch restaurant data from Firestore
  const restaurant = await getRestaurant(slug);

  // If restaurant doesn't exist or is inactive, show 404
  if (!restaurant || !restaurant.isActive) {
    notFound();
  }

  // Check subscription status
  const isActive = isSubscriptionActive(restaurant);
  const isTrial = restaurant.subscription.status === 'trial';
  const daysRemaining = isTrial ? getTrialDaysRemaining(restaurant) : 0;

  // If subscription is suspended, show suspended page
  if (!isActive) {
    return (
      <SubscriptionBanner
        type="suspended"
        restaurantName={restaurant.name}
      />
    );
  }

  return (
    <>
      {/* Show trial banner if in trial */}
      {isTrial && (
        <SubscriptionBanner
          type="trial"
          trialDaysRemaining={daysRemaining}
        />
      )}

      {/* Render the menu */}
      <MenuRenderer restaurant={restaurant} />
    </>
  );
}
