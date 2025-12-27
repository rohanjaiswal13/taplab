import { AlertCircle } from "lucide-react";

interface SubscriptionBannerProps {
  restaurantName?: string;
}

/**
 * SubscriptionBanner - Shows unavailable message for suspended menus
 * PUBLIC APP: No pricing, no trial banners, no subscribe buttons
 * All billing is handled in admin app (admin.taplab.in)
 */
export function SubscriptionBanner({
  restaurantName = "This restaurant",
}: SubscriptionBannerProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center p-8 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
            <AlertCircle className="w-8 h-8 text-gray-600" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Menu Unavailable
        </h1>

        <p className="text-gray-600 mb-6">
          {restaurantName}'s menu is currently unavailable.
        </p>

        <p className="text-gray-500 text-sm">
          Powered by{" "}
          <a
            href="https://taplab.in"
            className="text-gray-700 hover:text-gray-900 font-semibold"
          >
            TapLab
          </a>
        </p>
      </div>
    </div>
  );
}
