import { useState, useEffect } from "react";
import { Phone, Home, ArrowUp } from "lucide-react";

// Define interfaces for the menu data structure
interface MenuItem {
  name: string;
  price: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

type MenuData = Record<string, MenuCategory>;

const SunsetMenu = () => {
  const [searchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const menuData: MenuData = {
    vegSoup: {
      title: "VEG SOUP",
      items: [
        { name: "Veg Sweet Corn Soup", price: "160 / 120" },
        { name: "Veg Manchow Soup", price: "160 / 120" },
        { name: "Veg Hot 'N' Sour", price: "160 / 120" },
        { name: "Veg Talumein Soup", price: "160 / 120" },
        { name: "Veg Tum Yum Soup", price: "160 / 120" },
        { name: "Veg Noodle Soup", price: "160 / 120" },
        { name: "Veg Wanton Soup", price: "180 / 130" },
        { name: "Veg Lemon Coriander", price: "160 / 120" },
      ],
    },
    nonVegSoup: {
      title: "NON-VEG SOUP",
      items: [
        { name: "Chicken Sweet Corn Soup", price: "170 / 130" },
        { name: "Chicken Manchow Soup", price: "170 / 130" },
        { name: "Chicken Hot 'n' Sour", price: "170 / 130" },
        { name: "Chicken Lemon Coriander Soup", price: "170 / 130" },
        { name: "Chicken Talumein Soup", price: "170 / 130" },
        { name: "Chicken Clear Soup", price: "170 / 130" },
        { name: "Chicken Tum Yum Soup", price: "170 / 130" },
        { name: "Chicken Noodle Soup", price: "170 / 130" },
        { name: "Chicken Lung Fung Soup", price: "190 / ----" },
        { name: "Chicken Wanton Soup", price: "190 / ----" },
      ],
    },
    vegStarters: {
      title: "VEG STARTERS",
      items: [
        { name: "Veg Hunan Dry", price: "220 / 170" },
        { name: "Veg Manchurian Dry", price: "220 / 170" },
        { name: "Veg Schezwan Dry", price: "220 / 170" },
        { name: "Veg Chilly Dry", price: "220 / 170" },
        { name: "Shanghai Potatoes", price: "240 / ----" },
        { name: "Kung Pao Potatoes", price: "240 / ----" },
        { name: "Crispy Potatoes", price: "240 / ----" },
        { name: "Mushroom Manchurian", price: "240 / ----" },
        { name: "Mushroom Schezwan", price: "240 / ----" },
        { name: "Paneer Chilly Dry", price: "250 / ----" },
        { name: "Paneer Whole Garlic", price: "250 / ----" },
        { name: "Paneer Shanghai", price: "250 / ----" },
        { name: "Paneer Hong Kong Dry", price: "250 / ----" },
        { name: "Paneer Ginger", price: "250 / ----" },
        { name: "Veg Spring Roll", price: "240 / ----" },
        { name: "Veg Fried Wanton", price: "240 / ----" },
      ],
    },
    nonVegStarters: {
      title: "NON-VEG STARTERS",
      items: [
        { name: "Hunan Chicken Dry", price: "250 / 190" },
        { name: "Chicken Chilly Dry", price: "250 / 190" },
        { name: "Chicken Manchurian Dry", price: "250 / 190" },
        { name: "Schezwan Chicken Dry", price: "250 / 190" },
        { name: "Shanghai Chicken Dry", price: "250 / 190" },
        { name: "Lolipop", price: "230 / 170" },
        { name: "Lolipop Masala", price: "260 / 200" },
        { name: "Drums of Heaven", price: "280 / 220" },
        { name: "Mongolian Chicken", price: "290 / ----" },
        { name: "Red Pepper Chicken", price: "290 / ----" },
        { name: "Butter Garlic Chicken", price: "290 / ----" },
        { name: "Thread Chicken", price: "310 / ----" },
        { name: "Spicy Crispy Chicken", price: "290 / ----" },
        { name: "Grilled Barbeque Chicken", price: "340 / ----" },
        { name: "Shredded Chilly Basil Chicken", price: "300 / ----" },
        { name: "Roasted Chilly Chicken", price: "320 / ----" },
        { name: "Dragon Chicken", price: "290 / ----" },
        { name: "Chicken Spring Roll", price: "270 / ----" },
        { name: "Chicken Dragon Roll", price: "270 / ----" },
        { name: "Chicken Fried Wanton", price: "270 / ----" },
        { name: "Chicken Steam Wanton", price: "270 / ----" },
      ],
    },
    fishStarters: {
      title: "FISH STARTERS",
      items: [
        { name: "Fish Chilly Dry", price: "280" },
        { name: "Fish Hunan Dry", price: "280" },
        { name: "Fish Hong Kong Dry", price: "280" },
        { name: "Fish Oyster Sauce", price: "280" },
        { name: "Fish Manchurian Dry", price: "280" },
        { name: "Fish Schezwan Dry", price: "280" },
        { name: "Fish Garlic Dry", price: "280" },
        { name: "Fish Shanghai Dry", price: "280" },
      ],
    },
    prawnsStarters: {
      title: "PRAWNS STARTERS",
      items: [
        { name: "Prawns Butter Garlic", price: "280 / ----" },
        { name: "Prawns Barbeque", price: "300 / ----" },
        { name: "Prawns Golden Fried", price: "280 / ----" },
        { name: "Prawns Red Pepper", price: "300 / ----" },
        { name: "Prawns Chilly Dry", price: "280 / ----" },
        { name: "Prawns Garlic Dry", price: "280 / ----" },
        { name: "Prawns Sweet 'N' Sour Dry", price: "280 / ----" },
        { name: "Prawns Oyster Sauce Dry", price: "300 / ----" },
        { name: "Prawns Schezwan Dry", price: "280 / ----" },
      ],
    },
    vegRice: {
      title: "VEG RICE",
      items: [
        { name: "Veg Fried Rice", price: "210 / 170" },
        { name: "Veg Schezwan Rice", price: "220 / 180" },
        { name: "Veg Hong Kong Rice", price: "220 / 180" },
        { name: "Veg Singapore Rice", price: "220 / 180" },
        { name: "Veg Combination Rice", price: "220 / 180" },
        { name: "Veg Burnt Garlic Rice", price: "240 / 200" },
        { name: "Veg Stewed Rice", price: "280 / ----" },
        { name: "Veg Triple Rice", price: "280 / ----" },
        { name: "Veg Pot Rice", price: "310 / ----" },
        { name: "Veg Korean Rice", price: "310 / ----" },
      ],
    },
    nonVegRice: {
      title: "NON-VEG RICE",
      items: [
        { name: "Egg Fried Rice", price: "210 / 150" },
        { name: "Egg Schezwan Rice", price: "220 / 160" },
        { name: "Chicken Fried Rice", price: "220 / 180" },
        { name: "Chicken Schezwan Rice", price: "230 / 190" },
        { name: "Chicken Hong Kong Rice", price: "230 / 190" },
        { name: "Chicken Singapore Rice", price: "230 / 190" },
        { name: "Chicken Burnt Garlic Rice", price: "250 / ----" },
        { name: "Chicken Triple Rice", price: "290 / ----" },
        { name: "Chicken Stewed Rice", price: "290 / ----" },
        { name: "Chicken Pot Rice", price: "320 / ----" },
        { name: "Chicken Chopper Rice", price: "290 / ----" },
        { name: "Chicken Korean Rice", price: "320 / ----" },
        { name: "Chicken Chilly Basil Rice", price: "320 / ----" },
        { name: "Prawns Fried Rice", price: "230 / 190" },
        { name: "Prawns Schezwan Rice", price: "240 / 200" },
        { name: "Prawns Singapore Rice", price: "240 / 200" },
        { name: "Prawns Hong Kong Rice", price: "240 / 200" },
      ],
    },
    vegNoodles: {
      title: "VEG NOODLES",
      items: [
        { name: "Veg Hakka Noodles", price: "210 / 170" },
        { name: "Veg Schezwan Noodles", price: "220 / 180" },
        { name: "Veg Singapore Noodles", price: "220 / 180" },
        { name: "Veg Hong Kong Noodles", price: "220 / 180" },
        { name: "Veg Burnt Garlic Noodles", price: "240 / ----" },
        { name: "Veg Triple Noodles", price: "280 / ----" },
        { name: "Veg Pot Noodles", price: "310 / ----" },
        { name: "Veg Korean Noodles", price: "310 / ----" },
      ],
    },
    nonVegNoodles: {
      title: "NON-VEG NOODLES",
      items: [
        { name: "Egg Hakka Noodles", price: "210 / 150" },
        { name: "Egg Schezwan Noodles", price: "220 / 160" },
        { name: "Chicken Hakka Noodles", price: "220 / 180" },
        { name: "Chicken Schezwan Noodles", price: "230 / 190" },
        { name: "Chicken Hong Kong Noodles", price: "230 / 190" },
        { name: "Chicken Burnt Garlic Noodles", price: "250 / 190" },
        { name: "Chicken Triple Noodles", price: "290 / ----" },
        { name: "Chicken Stewed Noodles", price: "290 / ----" },
        { name: "Chicken Pot Noodles", price: "320 / ----" },
        { name: "Chicken Chopper Noodles", price: "320 / ----" },
        { name: "Chicken Korean Noodles", price: "320 / ----" },
        { name: "Chicken Chilly Basil Noodles", price: "320 / ----" },
        { name: "Prawns Fried Noodles", price: "230 / 190" },
        { name: "Prawns Schezwan Noodles", price: "240 / 200" },
        { name: "Prawns Singapore Noodles", price: "240 / 200" },
        { name: "Prawns Hong Kong Noodles", price: "240 / 200" },
      ],
    },
    vegGravy: {
      title: "VEG GRAVY",
      items: [
        { name: "Veg Chilly Gravy", price: "230 / 180" },
        { name: "Veg Manchurian Gravy", price: "230 / 180" },
        { name: "Veg Garlic Gravy", price: "230 / 180" },
        { name: "Veg Hunan Gravy", price: "230 / 180" },
        { name: "Veg Hong Kong Gravy", price: "230 / 180" },
        { name: "Mushroom Chilly Gravy", price: "250 / ----" },
        { name: "Mushroom Manchurian Gravy", price: "250 / ----" },
        { name: "Mushroom Schezwan Gravy", price: "250 / ----" },
      ],
    },
    paneerGravy: {
      title: "PANEER GRAVY",
      items: [
        { name: "Paneer Hot Garlic Gravy", price: "250 / ----" },
        { name: "Paneer Chilly Gravy", price: "250 / ----" },
        { name: "Paneer Hunan Gravy", price: "250 / ----" },
        { name: "Paneer Garlic Gravy", price: "250 / ----" },
        { name: "Paneer Green Gravy", price: "250 / ----" },
        { name: "Paneer Oyster Gravy", price: "250 / ----" },
      ],
    },
    chickenGravy: {
      title: "CHICKEN GRAVY",
      items: [
        { name: "Chicken Chilly Gravy", price: "250 / 190" },
        { name: "Chicken Manchurian Gravy", price: "250 / 190" },
        { name: "Chicken Hunan Gravy", price: "250 / 190" },
        { name: "Chicken Garlic Gravy", price: "250 / 190" },
        { name: "Chicken Hot Garlic Gravy", price: "250 / 190" },
        { name: "Chicken Green Sauce Gravy", price: "250 / 190" },
        { name: "Chicken Hong Kong Gravy", price: "250 / 190" },
        { name: "Chicken Sweet 'N' Sour Gravy", price: "250 / 190" },
        { name: "Chicken Oyster Gravy", price: "250 / 190" },
        { name: "Chicken Schezwan Gravy", price: "250 / 190" },
      ],
    },
    prawnsGravy: {
      title: "PRAWNS GRAVY",
      items: [
        { name: "Prawns Chilly Gravy", price: "280 / ----" },
        { name: "Prawns Manchurian Gravy", price: "280 / ----" },
        { name: "Prawns Sweet 'N' Sour Gravy", price: "280 / ----" },
        { name: "Prawns Hot Garlic Gravy", price: "280 / ----" },
        { name: "Prawns Hong Kong Gravy", price: "280 / ----" },
      ],
    },
    fishGravy: {
      title: "FISH GRAVY",
      items: [
        { name: "Fish Garlic Gravy", price: "280 / ----" },
        { name: "Fish Schezwan Gravy", price: "280 / ----" },
        { name: "Fish Manchurian Gravy", price: "280 / ----" },
        { name: "Fish Sweet 'N' Sour Gravy", price: "280 / ----" },
        { name: "Fish Chilly Gravy", price: "280 / ----" },
        { name: "Fish Hong Kong Gravy", price: "280 / ----" },
        { name: "Fish Green Garlic Gravy", price: "280 / ----" },
      ],
    },
  };

  const categories = [
    { id: "all", name: "All Items" },
    { id: "vegSoup", name: "Veg Soup" },
    { id: "nonVegSoup", name: "Non-Veg Soup" },
    { id: "vegStarters", name: "Veg Starters" },
    { id: "nonVegStarters", name: "Non-Veg Starters" },
    { id: "fishStarters", name: "Fish Starters" },
    { id: "prawnsStarters", name: "Prawns Starters" },
    { id: "vegRice", name: "Veg Rice" },
    { id: "nonVegRice", name: "Non-Veg Rice" },
    { id: "vegNoodles", name: "Veg Noodles" },
    { id: "nonVegNoodles", name: "Non-Veg Noodles" },
    { id: "vegGravy", name: "Veg Gravy" },
    { id: "paneerGravy", name: "Paneer Gravy" },
    { id: "chickenGravy", name: "Chicken Gravy" },
    { id: "prawnsGravy", name: "Prawns Gravy" },
    { id: "fishGravy", name: "Fish Gravy" },
  ];

  const filterItems = () => {
    const filtered: MenuData = {};

    Object.entries(menuData).forEach(([key, category]) => {
      if (selectedCategory === "all" || selectedCategory === key) {
        const filteredItems = category.items.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (filteredItems.length > 0) {
          filtered[key] = { ...category, items: filteredItems };
        }
      }
    });

    return filtered;
  };

  const filteredMenu = filterItems();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 relative">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-center mb-2">SUNSET</h1>
          <p className="text-center text-red-100 text-sm mb-4">
            Chinese / Snack Bar
          </p>
          <p className="text-center text-xs text-red-100 mb-4">
            Shop No 1, 222 V.S Marg Mahim, Mumbai-16
          </p>

          <div className="flex flex-wrap gap-3 justify-center items-center">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur">
              <Phone className="w-4 h-4" />
              <span className="text-sm">7208662363 / 8104707025</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur">
              <Home className="w-4 h-4" />
              <span className="text-sm">Free Home Delivery</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Search and Filter */}
        <div className="mb-4 space-y-4">
          <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium transition-all ${
                  selectedCategory === cat.id
                    ? "bg-red-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-red-50 border border-gray-200"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-8">
          {Object.entries(filteredMenu).map(([key, category]) => (
            <div
              key={key}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-4">
                <h2 className="text-2xl font-bold text-white">
                  {category.title}
                </h2>
                <p className="text-red-100 text-sm mt-1">Large / Small</p>
              </div>

              <div className="divide-y divide-gray-100">
                {category.items.map((item, index) => (
                  <div
                    key={index}
                    className="px-6 py-4 hover:bg-red-50 transition-colors flex justify-between items-center"
                  >
                    <span className="text-gray-800 font-medium">
                      {item.name}
                    </span>
                    <span className="text-red-600 font-bold ml-4 whitespace-nowrap">
                      ₹{item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {Object.keys(filteredMenu).length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              No dishes found matching your search.
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-1">
          <p className="text-sm">
            © 2025 Sunset Chinese / Snack Bar. All rights reserved.
          </p>
          <p className="text-sm">
            Powered by{" "}
            <a
              href="https://taplab.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 font-semibold hover:underline"
            >
              TapLab
            </a>
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-red-600 text-white p-3 rounded-full shadow-xl hover:bg-red-700 transition-all duration-300 z-50 border-2 border-white"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default SunsetMenu;
