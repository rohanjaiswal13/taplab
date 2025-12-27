import { notFound } from 'next/navigation';
import { getRestaurant, isSubscriptionActive } from '@/lib/firebase/firestore';
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

  // If subscription is not active, show unavailable message
  // No pricing, no trial banners - all billing handled in admin app
  if (!isActive) {
    return <SubscriptionBanner restaurantName={restaurant.name} />;
  }

  // Render the menu (no banners, clean UX)
  return <MenuRenderer restaurant={restaurant} />;
}
