'use client';

import { AlertCircle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
            <AlertCircle className="w-10 h-10 text-red-600" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Something went wrong!
        </h2>

        <p className="text-gray-600 mb-6">
          {error.message || 'An error occurred while loading the menu.'}
        </p>

        <button
          onClick={reset}
          className="px-6 py-3 bg-gradient-to-r from-amber-700 to-orange-700 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Try again
        </button>

        <p className="mt-6 text-gray-500 text-sm">
          If the problem persists, please contact support.
        </p>
      </div>
    </div>
  );
}
