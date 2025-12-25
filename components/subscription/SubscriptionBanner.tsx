import React from 'react';
import { AlertCircle, Lock, Calendar } from 'lucide-react';

interface SubscriptionBannerProps {
  type: 'trial' | 'suspended';
  trialDaysRemaining?: number;
  restaurantName?: string;
}

/**
 * SubscriptionBanner - Displays trial or suspended status
 * Trial: Shows days remaining in trial
 * Suspended: Shows full-page suspended message
 */
export function SubscriptionBanner({
  type,
  trialDaysRemaining,
  restaurantName = 'This restaurant',
}: SubscriptionBannerProps) {
  // Trial banner (top of page)
  if (type === 'trial') {
    const daysLeft = trialDaysRemaining || 0;

    return (
      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-b-4 border-yellow-400 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <Calendar className="w-6 h-6 text-yellow-700 flex-shrink-0" />
          <div>
            <p className="font-bold text-yellow-900">
              {daysLeft > 0
                ? `🎉 Trial Period: ${daysLeft} day${daysLeft !== 1 ? 's' : ''} remaining`
                : '🎉 Trial Period Active'}
            </p>
            {daysLeft > 0 && daysLeft <= 3 && (
              <p className="text-sm text-yellow-800 mt-0.5">
                Subscribe soon to keep your menu active!
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Suspended page (full page)
  if (type === 'suspended') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
        <div className="max-w-md w-full text-center p-8 bg-white rounded-2xl shadow-2xl border border-gray-200">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-red-100 to-orange-100 rounded-full flex items-center justify-center">
              <Lock className="w-10 h-10 text-red-600" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Subscription Expired
          </h1>

          {/* Message */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            {restaurantName}'s subscription has expired. Please contact support to
            reactivate your menu.
          </p>

          {/* Notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800 text-left">
                This menu is temporarily unavailable. To restore access, please
                renew your subscription or contact our support team.
              </p>
            </div>
          </div>

          {/* Contact Button */}
          <a
            href="mailto:support@taplab.in"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-700 to-orange-700 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <span>Contact Support</span>
          </a>

          {/* Footer */}
          <p className="text-gray-500 text-sm mt-6">
            Powered by{' '}
            <a
              href="https://taplab.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-700 hover:text-amber-800 font-semibold"
            >
              TapLab
            </a>
          </p>
        </div>
      </div>
    );
  }

  return null;
}
