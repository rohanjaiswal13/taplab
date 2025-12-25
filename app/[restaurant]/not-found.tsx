import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-gray-200 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Restaurant Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          The restaurant you're looking for doesn't exist or is not currently active.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-gradient-to-r from-amber-700 to-orange-700 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
