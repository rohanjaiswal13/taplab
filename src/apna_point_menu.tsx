import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BurgerJunctionMenu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // --- Scroll Logic ---
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

  const categories = [
    "All",
    "Starters",
    "Fries",
    "Breads & Sides",
    "Mojitos",
    "Extra Items",
    "Cold Drinks",
    "Sandwiches",
    "Pasta",
    "Burgers - Non Veg",
    "Burgers - Egg",
    "Burgers - Fish",
    "Burgers - Veg",
    "Wraps - Non Veg",
    "Wraps - Fish",
    "Wraps - Veg",
    "Pizza",
    "Meals",
    "Family Buckets",
    "All In One",
  ];

  const allItems = [
    // Starters
    { name: "Fish Popus", price: 100, category: "Starters" },
    { name: "Fish Finger (6 pc)", price: 200, category: "Starters" },
    { name: "Prawns (10 pc)", price: 150, category: "Starters" },
    { name: "Crab Lolioop (6 pc)", price: 200, category: "Starters" },
    { name: "Veg. Momos (6 pc)", price: 90, category: "Starters" },
    { name: "Chicken Momos (6 pc)", price: 120, category: "Starters" },
    { name: "Crispy Chicken Strips (3 pcs)", price: 150, category: "Starters" },
    { name: "Crispy Chicken Strips (6 pcs)", price: 280, category: "Starters" },
    {
      name: "Crispy Chicken Strips (10 pcs)",
      price: 400,
      category: "Starters",
    },
    { name: "Crispy Hot Wings (3 pcs)", price: 90, category: "Starters" },
    { name: "Crispy Hot Wings (6 pcs)", price: 160, category: "Starters" },
    { name: "Crispy Hot Wings (10 pcs)", price: 250, category: "Starters" },
    { name: "Crispy Drum Sticks (2 pcs)", price: 150, category: "Starters" },
    { name: "Crispy Drum Sticks (4 pcs)", price: 260, category: "Starters" },
    { name: "Crispy Drum Sticks (6 pcs)", price: 340, category: "Starters" },
    { name: "Chicken Popcorn (15 pcs)", price: 100, category: "Starters" },
    { name: "Chicken Nuggets (6 pcs)", price: 100, category: "Starters" },
    { name: "Chicken Nuggets (10 pcs)", price: 160, category: "Starters" },
    { name: "Tandoori Strips (3 pcs)", price: 150, category: "Starters" },
    { name: "Tandoori Strips (6 pcs)", price: 280, category: "Starters" },
    // Fries
    { name: "Regular Fries", price: 70, category: "Fries" },
    { name: "Large Fries", price: 140, category: "Fries" },
    { name: "Popcorn & Mayo Fries Economy", price: 160, category: "Fries" },
    {
      name: "Budget Bucket (1 Strips, 1 Hot Wings, 1 Drum Stick)",
      price: 180,
      category: "Fries",
    },
    // Breads & Sides
    {
      name: "Garlic Cheese Bread (6 pc)",
      price: 60,
      category: "Breads & Sides",
    },
    {
      name: "Veg. Cheese Nuggets (5 pcs)",
      price: 100,
      category: "Breads & Sides",
    },
    { name: "Nutella Waffles", price: 160, category: "Breads & Sides" },
    { name: "Dark Chocolate Waffles", price: 160, category: "Breads & Sides" },
    // Mojitos
    { name: "Strawberry Mojito", price: 70, category: "Mojitos" },
    { name: "Watermelon Mojito", price: 70, category: "Mojitos" },
    { name: "Lime Mojito", price: 50, category: "Mojitos" },
    // Extra Items
    { name: "Extra Mayo", price: 20, category: "Extra Items" },
    { name: "Ex/SL Cheese", price: 20, category: "Extra Items" },
    { name: "Ex/Pizza Cheese", price: 30, category: "Extra Items" },
    { name: "Extra Masala", price: 20, category: "Extra Items" },
    { name: "Extra Schezwan", price: 20, category: "Extra Items" },
    { name: "Extra Chocolate", price: 40, category: "Extra Items" },
    // Cold Drinks
    { name: "Mineral Bottle 500 ml", price: 10, category: "Cold Drinks" },
    { name: "Mineral Bottle 1 ltr", price: 20, category: "Cold Drinks" },
    { name: "Pepsi 250 ml", price: 20, category: "Cold Drinks" },
    { name: "Pepsi 500ml", price: 40, category: "Cold Drinks" },
    { name: "Pepsi 1.25 Ltr", price: 70, category: "Cold Drinks" },
    // Sandwiches
    { name: "Chicken Grill Sandwich", price: 100, category: "Sandwiches" },
    { name: "Chicken Club Sandwich", price: 160, category: "Sandwiches" },
    { name: "Chicken Cheese Sandwich", price: 140, category: "Sandwiches" },
    { name: "Veg Grill Sandwich", price: 100, category: "Sandwiches" },
    { name: "Veg Cheese Sandwich", price: 130, category: "Sandwiches" },
    { name: "Veg Paneer Cheese Sandwich", price: 170, category: "Sandwiches" },
    // Pasta
    { name: "Chicken White Pasta", price: 140, category: "Pasta" },
    { name: "Chicken Red Pasta", price: 150, category: "Pasta" },
    { name: "Veg White Pasta", price: 120, category: "Pasta" },
    { name: "Veg Red Pasta", price: 140, category: "Pasta" },
    // Burgers - Non Veg
    { name: "Mexican Chi. Burger", price: 120, category: "Burgers - Non Veg" },
    {
      name: "Double Decker Chicken Burger",
      price: 150,
      category: "Burgers - Non Veg",
    },
    {
      name: "Regular Chicken Burger",
      price: 80,
      category: "Burgers - Non Veg",
    },
    {
      name: "Tandoori Chicken Burger",
      price: 90,
      category: "Burgers - Non Veg",
    },
    {
      name: "Makhani Chicken Burger",
      price: 90,
      category: "Burgers - Non Veg",
    },
    {
      name: "Schezwan Chicken Burger",
      price: 90,
      category: "Burgers - Non Veg",
    },
    {
      name: "Seven Sauce Special Burger",
      price: 150,
      category: "Burgers - Non Veg",
    },
    {
      name: "Chicken Harissa Burger",
      price: 90,
      category: "Burgers - Non Veg",
    },
    {
      name: "Chicken Peri Peri Burger",
      price: 90,
      category: "Burgers - Non Veg",
    },
    {
      name: "Chicken Teriyaki Burger",
      price: 90,
      category: "Burgers - Non Veg",
    },
    { name: "Chicken BBQ Burger", price: 90, category: "Burgers - Non Veg" },
    // Burgers - Egg
    { name: "Egg Cheese Burger", price: 60, category: "Burgers - Egg" },
    { name: "Egg Double Cheese Burger", price: 80, category: "Burgers - Egg" },
    {
      name: "Egg Schezwan Cheese Burger",
      price: 80,
      category: "Burgers - Egg",
    },
    // Burgers - Fish
    { name: "Crispy Fish Burger", price: 100, category: "Burgers - Fish" },
    {
      name: "Crispy Fish Cheese Burger",
      price: 120,
      category: "Burgers - Fish",
    },
    {
      name: "Seven Sauce Special Fish Burger",
      price: 150,
      category: "Burgers - Fish",
    },
    // Burgers - Veg
    { name: "Veg. Burger", price: 60, category: "Burgers - Veg" },
    { name: "Veg. Mexican Burger", price: 90, category: "Burgers - Veg" },
    { name: "Veg. Schezwan Burger", price: 80, category: "Burgers - Veg" },
    { name: "Paneer Burger", price: 100, category: "Burgers - Veg" },
    { name: "Paneer Mexican Burger", price: 120, category: "Burgers - Veg" },
    { name: "Paneer Cheese Burger", price: 120, category: "Burgers - Veg" },
    // Wraps - Non Veg
    { name: "Regular Crispy Wrap", price: 80, category: "Wraps - Non Veg" },
    { name: "Tandoori Wrap", price: 100, category: "Wraps - Non Veg" },
    { name: "Spicy Crispy Wrap", price: 100, category: "Wraps - Non Veg" },
    { name: "Nuggets Wrap", price: 100, category: "Wraps - Non Veg" },
    {
      name: "Seven Sauce Special Wrap",
      price: 120,
      category: "Wraps - Non Veg",
    },
    { name: "Mexican Cheese Wrap", price: 120, category: "Wraps - Non Veg" },
    // Wraps - Fish
    { name: "Makhni Fish Wrap", price: 120, category: "Wraps - Fish" },
    { name: "Cheese Fish Wrap", price: 120, category: "Wraps - Fish" },
    { name: "Schezwan Fish Wrap", price: 120, category: "Wraps - Fish" },
    // Wraps - Veg
    { name: "Veg. Wrap", price: 60, category: "Wraps - Veg" },
    { name: "Veg. Schezwan Wrap", price: 70, category: "Wraps - Veg" },
    { name: "Veg. Paneer Wrap", price: 100, category: "Wraps - Veg" },
    { name: "Paneer Mexican Wrap", price: 120, category: "Wraps - Veg" },
    // Pizza
    { name: "Chicken Cheese Pizza (6 inch)", price: 200, category: "Pizza" },
    {
      name: "Makhani Chicken Cheese Pizza (6 inch)",
      price: 200,
      category: "Pizza",
    },
    {
      name: "Seven Sauce Cheese Pizza (6 inch)",
      price: 240,
      category: "Pizza",
    },
    { name: "Tandoori Cheese Pizza (6 inch)", price: 220, category: "Pizza" },
    { name: "Veg. Cheese Pizza (8 inch)", price: 150, category: "Pizza" },
    { name: "Makhani Cheese Pizza (8 inch)", price: 170, category: "Pizza" },
    {
      name: "Seven Sauce Cheese Pizza (8 inch)",
      price: 220,
      category: "Pizza",
    },
    { name: "Paneer Cheese Pizza (8 inch)", price: 220, category: "Pizza" },
    // Meals
    {
      name: "Chicken Burger Meal (1C Burger, 1R Fries, Pepsi 250ml)",
      price: 150,
      category: "Meals",
    },
    {
      name: "Mexican Meal (1 Mex Burger, 1R Fries, Pepsi 250ml)",
      price: 200,
      category: "Meals",
    },
    {
      name: "Pizza Meal (1 Ch.Pizza, 1R Fries, Pepsi 250ml)",
      price: 280,
      category: "Meals",
    },
    {
      name: "CHI. Family Pack Large Meal (4 Burger, 4R Fries, 4 Pepsi 250ml)",
      price: 650,
      category: "Meals",
    },
    {
      name: "Veg. Meal (1 R.V.B., 1R Fries, 1S Pepsi 250ml)",
      price: 140,
      category: "Meals",
    },
    {
      name: "Paneer Meal (1 P Burger, 1R Fries, 1S Pepsi 250ml)",
      price: 180,
      category: "Meals",
    },
    {
      name: "VEG. Family Pack Large Meal (4 Burger, 4R Fries, 4S Pepsi 250ml)",
      price: 550,
      category: "Meals",
    },
    // Family Buckets
    {
      name: "Small Family Bucket (6 Hot Wings, 6 Strips, 2 Drumstick)",
      price: 600,
      category: "Family Buckets",
    },
    {
      name: "Large Family Bucket (12 Hot Wings, 12 Strips, 4 Drumstick)",
      price: 1100,
      category: "Family Buckets",
    },
    // All in One
    {
      name: "ALL IN ONE MEALS (4 Chicken Mix Burger, 1 Large Fries, 1 Chicken Popcorn 15 Pcs, 1 Chicken Nuggets 10 Pcs, 4 Drumstick, 4 Chicken Strips, 1 Chicken Cheese Pizza, 1 1.25 Ltr Pepsi)",
      price: 1450,
      category: "All In One",
    },
  ];

  const filteredItems =
    selectedCategory === "All"
      ? allItems
      : allItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 md:p-8 relative">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10">
        <div className="bg-gradient-to-r from-amber-900 to-red-900 rounded-xl p-8 mb-8 text-center shadow-2xl">
          <h1 className="text-5xl md:text-6xl font-black text-amber-300 mb-3">
            🍔 APNA POINT 🍔
          </h1>
          <p className="text-xl text-amber-200 font-bold">BURGER JUNCTION</p>
          <p className="text-base text-gray-300 mt-3">ALL IN ONE MEALS</p>
        </div>

        {/* Info Box */}
        <div className="bg-gray-900 border-3 border-amber-700 rounded-lg p-5 mb-8 shadow-lg">
          <p className="text-amber-400 font-bold text-center text-lg">
            📦 Order Below ₹300/- | Delivery Charge ₹30/- Extra
          </p>
        </div>
      </div>

      {/* Category Selection */}
      <div className="max-w-7xl mx-auto mb-10">
        <h2 className="text-2xl font-bold text-amber-300 mb-5">
          📂 Choose Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`py-3 px-4 rounded-lg font-bold transition shadow-lg text-sm md:text-base ${
                selectedCategory === category
                  ? "bg-purple-700 text-white border-2 border-purple-400"
                  : "bg-gray-800 text-gray-300 border-2 border-gray-700 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Items Display */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-amber-300 mb-2">
            {selectedCategory}
          </h2>
          <p className="text-gray-400">
            {filteredItems.length} items available
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 rounded-lg p-5 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/50 transition shadow-lg"
            >
              <h3 className="text-lg font-bold text-white mb-3 line-clamp-3">
                {item.name}
              </h3>
              <div className="flex justify-between items-center">
                <span className="text-amber-400 font-bold text-2xl">
                  ₹{item.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-xl">
              No items found in this category
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-16 text-center border-t border-gray-700 pt-8">
        <p className="text-amber-400 font-bold mb-3 text-xl">📞 CONTACT US</p>

        <p className="text-gray-300 text-base mb-4">
          📍 Locations: Jogeshwari | Mahim | Madanpura | Versova
        </p>

        <p className="text-gray-400 text-sm mb-3">
          📧 burgerjunction2021@gmail.com | 🌐 @burgerjunction_
        </p>

        <p className="text-xs text-gray-500">
          Powered by{" "}
          <a
            href="https://taplab.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 font-semibold hover:underline"
          >
            TapLab
          </a>
        </p>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 z-50 border-2 border-white/20"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
