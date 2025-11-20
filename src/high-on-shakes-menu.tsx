import React, { useState } from "react";
import { Coffee, IceCream, Cookie, Milk, Sandwich, Pizza } from "lucide-react";

const HighOnShakesMenu = () => {
  const [activeCategory, setActiveCategory] = useState("shakes");

  const menuData = {
    shakes: {
      icon: <Milk className="w-6 h-6" />,
      title: "Thick Shakes",
      items: [
        { name: "Oreo Shake", price: 130 },
        { name: "Kitkat Shake", price: 140 },
        { name: "Ferrero Rocher Shake", price: 160 },
        { name: "Brownie Shake", price: 140 },
        { name: "Nutella Shake", price: 150 },
        { name: "Snickers Shake", price: 140 },
        { name: "Bueno Shake", price: 160 },
        { name: "Lotus Biscoff Shake", price: 150 },
        { name: "Peanut Butter Shake", price: 140 },
        { name: "Vanilla Shake", price: 110 },
        { name: "Chocolate Shake", price: 110 },
        { name: "Strawberry Shake", price: 110 },
        { name: "Butterscotch Shake", price: 110 },
        { name: "Mango Shake", price: 110 },
      ],
    },
    coffee: {
      icon: <Coffee className="w-6 h-6" />,
      title: "Coffee",
      items: [
        { name: "Espresso", price: 80 },
        { name: "Americano", price: 100 },
        { name: "Cappuccino", price: 120 },
        { name: "Latte", price: 130 },
        { name: "Cold Coffee", price: 130 },
        { name: "Hazelnut Coffee", price: 150 },
        { name: "Caramel Coffee", price: 150 },
        { name: "Vanilla Coffee", price: 140 },
      ],
    },
    desserts: {
      icon: <IceCream className="w-6 h-6" />,
      title: "Desserts",
      items: [
        { name: "Brownie with Ice Cream", price: 140 },
        { name: "Waffle with Ice Cream", price: 150 },
        { name: "Nutella Waffle", price: 160 },
        { name: "Oreo Waffle", price: 150 },
        { name: "Pancakes", price: 130 },
        { name: "Nutella Pancakes", price: 150 },
      ],
    },
    sandwich: {
      icon: <Sandwich className="w-6 h-6" />,
      title: "Sandwiches & Toast",
      items: [
        { name: "Veg Grilled Sandwich", price: 100 },
        { name: "Cheese Grilled Sandwich", price: 120 },
        { name: "Veg Club Sandwich", price: 140 },
        { name: "Paneer Tikka Sandwich", price: 150 },
        { name: "Corn Cheese Toast", price: 120 },
        { name: "Garlic Bread", price: 100 },
      ],
    },
    maggi: {
      icon: <Pizza className="w-6 h-6" />,
      title: "Maggi & Pasta",
      items: [
        { name: "Classic Maggi", price: 60 },
        { name: "Cheese Maggi", price: 80 },
        { name: "Veg Maggi", price: 80 },
        { name: "White Sauce Pasta", price: 140 },
        { name: "Red Sauce Pasta", price: 140 },
        { name: "Pink Sauce Pasta", price: 150 },
      ],
    },
    fries: {
      icon: <Cookie className="w-6 h-6" />,
      title: "Fries & Snacks",
      items: [
        { name: "Classic Fries", price: 80 },
        { name: "Peri Peri Fries", price: 100 },
        { name: "Cheese Fries", price: 120 },
        { name: "Loaded Fries", price: 150 },
        { name: "Veg Nuggets", price: 120 },
        { name: "Cheese Balls", price: 100 },
      ],
    },
  };

  const categories = Object.keys(menuData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white py-8 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-2 tracking-tight">
            High on Shakes
          </h1>
          <p className="text-xl opacity-90">Sip, Savor & Satisfy</p>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="sticky top-0 bg-white shadow-md z-10 overflow-x-auto">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex space-x-2 py-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {menuData[category].icon}
                <span>{menuData[category].title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-2 flex items-center space-x-3">
            {menuData[activeCategory].icon}
            <span>{menuData[activeCategory].title}</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuData[activeCategory].items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800 flex-1 pr-2">
                    {item.name}
                  </h3>
                  <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full font-bold text-lg shadow-md">
                    ₹{item.price}
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>🌟 Popular choice</span>
                  </div>
                </div>
              </div>
              <div className="h-2 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white py-6 px-4 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg font-semibold">
            Thank you for choosing High on Shakes! 💜
          </p>
          <p className="text-sm opacity-90 mt-2">
            All prices are inclusive of taxes
          </p>
        </div>
      </div>
    </div>
  );
};

export default HighOnShakesMenu;
