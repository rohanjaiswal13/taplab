export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-amber-200 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-amber-700 rounded-full border-t-transparent animate-spin"></div>
        </div>
        <p className="text-gray-600 text-lg font-medium">Loading menu...</p>
      </div>
    </div>
  );
}
