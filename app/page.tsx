export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">TapLab</h1>
        <p className="text-gray-600 mb-6">Digital Menu Platform</p>
        <div className="space-y-2">
          <a
            href="/sunsetchinese"
            className="block px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            View Sunset Chinese Menu
          </a>
        </div>
      </div>
    </div>
  );
}
