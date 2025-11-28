import { useState } from "react";
import { Phone, Clock } from "lucide-react"; // Search is no longer needed

// 1. Define Types
type PriceObject = {
  half?: number;
  full?: number;
  veg?: number;
  non_veg?: number;
};

type Price = number | PriceObject;

interface MenuItem {
  name: string;
  price: Price;
  veg?: boolean;
  description?: string;
}

interface Category {
  title: string;
  icon: string;
  items: MenuItem[];
}

interface FilteredItem extends MenuItem {
  category: string;
  categoryKey: string;
}

const TazzaMenu = () => {
  // Removed [searchTerm, setSearchTerm] state
  const [selectedCategory, setSelectedCategory] = useState("all");

  // 2. Apply Type to menuData
  const menuData: Record<string, Category> = {
    soups: {
      title: "Soups",
      icon: "🍲",
      items: [
        { name: "Sweet Corn", veg: true, price: { half: 130, full: 150 } },
        { name: "Manchow", veg: true, price: { half: 130, full: 150 } },
        { name: "Hot & Sour", veg: true, price: { half: 130, full: 150 } },
        { name: "Tomato", veg: true, price: { half: 130, full: 150 } },
        { name: "Clear or Veg", veg: true, price: { half: 130, full: 180 } },
      ],
    },
    chinese: {
      title: "Chinese",
      icon: "🥢",
      items: [
        { name: "Chicken Peri-Peri", price: 270 },
        { name: "Chicken Schezwan Lollypop", price: 270 },
        { name: "Chicken Tikka", price: 270 },
        { name: "Schezwan Trio Chilly", price: 550 },
        { name: "Garlic Chicken", price: 550 },
        { name: "Chicken Manchurian", price: 550 },
        { name: "Chicken Chilly", price: 270 },
        { name: "Dragon Chicken Roll", price: 180 },
        { name: "Chicken Spring Roll", price: 300 },
        { name: "Chicken Lollypop (6 Pcs)", price: 370 },
        { name: "Threaded Chicken", price: 370 },
        { name: "Red Chilly Pepper Chicken", price: 370 },
        { name: "Crispy Chicken", price: 380 },
        { name: "Chicken Chasseur", price: 380 },
        { name: "Crispy Arouser", price: 380 },
        { name: "Chicken Hasin", price: 380 },
        { name: "Chicken Black Pepper", price: 390 },
        { name: "Chicken Black Bean", price: 390 },
      ],
    },
    starter_chinese: {
      title: "Starter (Chinese)",
      icon: "🌶️",
      items: [
        { name: "Veg. Spring Roll", veg: true, price: 100 },
        { name: "Paneer Spring Roll", veg: true, price: 140 },
        { name: "Veg. Chilly", veg: true, price: 180 },
        { name: "Veg. Manchurian", veg: true, price: 180 },
        { name: "Crispy Veg.", veg: true, price: 200 },
        { name: "Mushroom Chilly", veg: true, price: 200 },
      ],
    },
    starter_non_veg: {
      title: "Starter (Non Veg.)",
      icon: "🍗",
      items: [
        { name: "Paneer Chilly (Dry)", veg: true, price: 250 },
        { name: "Paneer Manchurian", veg: true, price: 250 },
        { name: "Threaded Kolhapuri Cheese", veg: true, price: 250 },
        { name: "Paneer Piri-Piri", veg: true, price: 250 },
        { name: "Crispy Paneer", veg: true, price: 250 },
        { name: "Paneer Streeteon", veg: true, price: 250 },
      ],
    },
    main_course: {
      title: "Main Course",
      icon: "🍛",
      items: [
        { name: "Tazza Special Chilly", price: { veg: 160, non_veg: 190 } },
        { name: "Manchurian", price: { veg: 160, non_veg: 190 } },
        { name: "Schezwan", price: { veg: 170, non_veg: 190 } },
        { name: "Hong Kong", price: { veg: 170, non_veg: 190 } },
        { name: "Mushroom Chilly", veg: true, price: 170 },
      ],
    },
    rice_noodles: {
      title: "Rice/Noodles",
      icon: "🍜",
      items: [
        { name: "Fried Rice", veg: true, price: 160 },
        { name: "Chef Fried Rice", price: 170 },
        { name: "Schezwan Rice", price: 170 },
        { name: "Hong Kong Rice", price: 170 },
        { name: "Hakka Noodles", price: 170 },
        { name: "American Chopsuey", price: 180 },
        { name: "Burnt Chilly Fried Rice", price: 180 },
        { name: "Triple Schezwan Rice", veg: true, price: 250 },
        { name: "Combination Fried Rice", price: 300 },
        { name: "Chicken (Fried)", price: 300 },
        { name: "Golden Noodles", price: 300 },
      ],
    },
    combination: {
      title: "Combination",
      icon: "🍱",
      items: [
        {
          name: "Notes",
          description: "Note: ask place to be served in one box",
          price: 300,
        },
        { name: "Curry Fried Rice w/ Pulao + Schezwan", price: 300 },
        { name: "Rice alone", price: 300 },
        { name: "Triple Schezwan Rice", veg: true, price: 250 },
        { name: "Triple Special Rice", price: 300 },
        { name: "Golden Red Rice", price: 300 },
      ],
    },
    falooda: {
      title: "Falooda",
      icon: "🍨",
      items: [
        { name: "Royal Falooda", veg: true, price: 150 },
        { name: "Mawa Milk Falooda", veg: true, price: 160 },
        { name: "Special Kulfi Falooda", veg: true, price: 160 },
      ],
    },
    fresh_fruit_juices: {
      title: "Fresh Fruit Juices",
      icon: "🧃",
      items: [
        { name: "Mosambi Orange", veg: true, price: 100 },
        { name: "Ganga Jumana", veg: true, price: 100 },
        { name: "Pineapple", veg: true, price: 100 },
        { name: "Grapes", veg: true, price: 100 },
        { name: "Apple / Cocktail", veg: true, price: 100 },
        { name: "Fruit Salad", veg: true, price: 100 },
        { name: "Fresh Lime", veg: true, price: 60 },
      ],
    },
    milk_shakes: {
      title: "Milk Shakes",
      icon: "🥤",
      items: [
        { name: "Banana Strawberry Rose", veg: true, price: 130 },
        { name: "Chocolate / Butter Scotch", veg: true, price: 130 },
        { name: "Mango", veg: true, price: 130 },
        { name: "Cold Coffee", veg: true, price: 130 },
        { name: "Custard", veg: true, price: 140 },
        { name: "Pista/Vanilla Ice Cream", veg: true, price: 60 },
        { name: "Dry Fruit", veg: true, price: 150 },
        { name: "Elaichi Matka", veg: true, price: 60 },
        { name: "Masala Matka", veg: true, price: 80 },
        { name: "Fresh Matka", veg: true, price: 100 },
      ],
    },
    tea_pizza: {
      title: "Tazza Pizza",
      icon: "🍕",
      items: [
        { name: "Paneer Tikka", veg: true, price: 250 },
        { name: "Cheese Pizza (Indian Masala)", veg: true, price: 250 },
        { name: "Mushroom Tandoori Pizza", veg: true, price: 300 },
        { name: "Chicken Tandoori Pizza", price: 300 },
        { name: "Chicken Tikka Pizza", price: 300 },
        { name: "Meat Cheesy Pizza", price: 300 },
        { name: "Chicken Double Cheese Pizza", price: 350 },
      ],
    },
    ice_cream: {
      title: "Ice Cream",
      icon: "🍦",
      items: [
        { name: "Vanilla / Strawberry", veg: true, price: 60 },
        { name: "Mixed Fruit", veg: true, price: 60 },
        { name: "Kesar Pista / Butter Scotch", veg: true, price: 60 },
      ],
    },
    veg_pizza: {
      title: "Veg. Pizza",
      icon: "🍕",
      items: [
        { name: "Paneer Tikka", price: { veg: 250, non_veg: 250 } },
        { name: "Chilly Garlic (Veg.)", veg: true, price: 250 },
        { name: "Corn Scramble", veg: true, price: 90 },
        { name: "Cheese Pizza", veg: true, price: 90 },
        { name: "Barbeque", veg: true, price: 70 },
      ],
    },
    paneer: {
      title: "Paneer",
      icon: "🧈",
      items: [
        { name: "Roti Paneer", veg: true, price: 70 },
        { name: "Dal Fry", veg: true, price: 90 },
        { name: "Kadai Khoya", veg: true, price: 70 },
        { name: "Rogan Khoya", veg: true, price: 70 },
        { name: "Roti Khoya", veg: true, price: 60 },
        { name: "Paneer Pasanda", veg: true, price: 90 },
      ],
    },
    grilled_sandwich: {
      title: "Grilled Sandwich",
      icon: "🥪",
      items: [
        { name: "Burger with Cheese", veg: true, price: 150 },
        { name: "Chicken Steak Burger with Cheese", price: 150 },
        { name: "Chicken Burger with Cheese", price: 150 },
        { name: "Veg. Burger", veg: true, price: 120 },
        { name: "Veg. Club Sandwich", veg: true, price: 150 },
        { name: "Paneer Sandwich", veg: true, price: 150 },
        { name: "Veg. Cheese Sandwich", veg: true, price: 110 },
        { name: "Cheese Toast Sandwich", veg: true, price: 110 },
        { name: "Cheese Grill Sandwich", veg: true, price: 60 },
      ],
    },
    burger: {
      title: "Burger",
      icon: "🍔",
      items: [
        { name: "Burger with Cheese", veg: true, price: 150 },
        { name: "Chicken Steak Burger with Cheese", price: 150 },
        { name: "Chicken Burger with Cheese", price: 150 },
        { name: "Veg. Burger", veg: true, price: 120 },
      ],
    },
    uthaps: {
      title: "Uthaps/Rolls",
      icon: "🫓",
      items: [
        { name: "Chicken Uthap (Roll)", price: 150 },
        { name: "Chicken BBQ Roll", price: 130 },
        { name: "Chicken Tikka Roll", price: 130 },
        { name: "Chicken Stick (Nos.)", price: 170 },
        { name: "Gidcha Stick (Traditional Roll)", price: 455 },
        { name: "Golden Smaz. (Anda Roll)", price: 200 },
        { name: "Omelette Cheese Sandwich", price: 100 },
        { name: "Grill Chicken Sandwich", price: 110 },
        { name: "Double Rolling", price: 300 },
        { name: "Grill Health Sandwich", price: 100 },
      ],
    },
    perambos: {
      title: "Parathas",
      icon: "🥙",
      items: [
        { name: "Chicken Parotha", price: 80 },
        { name: "Egg Parotha", price: 70 },
        { name: "Butter Parotha", veg: true, price: 30 },
      ],
    },
    kachho: {
      title: "Kebabs & Grill",
      icon: "🍢",
      items: [
        { name: "Chicken Tikka (Pcs.)", price: 200 },
        { name: "Grill Kebab", price: 200 },
        { name: "Reshmi Kebab (6 Pcs.)", price: 300 },
        { name: "Corn Cheese Grill (mixed) (4 Pcs.)", veg: true, price: 180 },
        { name: "Chicken Handi (mixed) (4 Pcs.)", price: 90 },
        { name: "Course Grill Mix (special) (6 Pcs.)", price: 90 },
        { name: "Grill mixed (6 special) Pcs.", price: 90 },
        { name: "Paneer Tikka (Front) Pcs.", veg: true, price: 180 },
      ],
    },
    biryani_pulao: {
      title: "Biryani Pulao",
      icon: "🍚",
      items: [
        { name: "Chicken Handi", price: 200 },
        { name: "Chicken Hundi", price: 160 },
        { name: "Paneer Khoya", veg: true, price: 160 },
      ],
    },
    sub_roll: {
      title: "Sub Roll",
      icon: "🌯",
      items: [
        { name: "Paneer Mini Roll", veg: true, price: 150 },
        { name: "Chicken BBQ Roll", price: 130 },
        { name: "Chicken Tikka Roll", price: 130 },
        { name: "Chicken Stick (Nos.)", price: 150 },
        { name: "Cheese Roll", veg: true, price: 100 },
        { name: "Chicken Fries", price: 60 },
        { name: "French Fries", veg: true, price: 60 },
      ],
    },
  };

  const categories = [
    { id: "all", name: "All Items", icon: "🍽️" },
    { id: "soups", name: "Soups", icon: "🍲" },
    { id: "chinese", name: "Chinese", icon: "🥢" },
    { id: "starter_chinese", name: "Starters (Chi)", icon: "🌶️" },
    { id: "starter_non_veg", name: "Starters (Non-Veg)", icon: "🍗" },
    { id: "main_course", name: "Main Course", icon: "🍛" },
    { id: "rice_noodles", name: "Rice & Noodles", icon: "🍜" },
    { id: "combination", name: "Combination", icon: "🍱" },
    { id: "grilled_sandwich", name: "Sandwiches", icon: "🥪" },
    { id: "burger", name: "Burgers", icon: "🍔" },
    { id: "tea_pizza", name: "Tazza Pizza", icon: "🍕" },
    { id: "veg_pizza", name: "Veg Pizza", icon: "🍕" },
    { id: "paneer", name: "Paneer", icon: "🧈" },
    { id: "kachho", name: "Kebabs", icon: "🍢" },
    { id: "biryani_pulao", name: "Biryani", icon: "🍚" },
    { id: "uthaps", name: "Uthaps/Rolls", icon: "🫓" },
    { id: "sub_roll", name: "Sub Rolls", icon: "🌯" },
    { id: "perambos", name: "Parathas", icon: "🥙" },
    { id: "fresh_fruit_juices", name: "Juices", icon: "🧃" },
    { id: "milk_shakes", name: "Shakes", icon: "🥤" },
    { id: "falooda", name: "Falooda", icon: "🍨" },
    { id: "ice_cream", name: "Ice Cream", icon: "🍦" },
  ];

  const filteredMenu = () => {
    // 3. Fix array type and initialization
    const items: FilteredItem[] = [];

    // Removed searchTerm logic, only filtering by selectedCategory now
    Object.keys(menuData).forEach((categoryKey) => {
      if (selectedCategory === "all" || selectedCategory === categoryKey) {
        const category = menuData[categoryKey];
        category.items.forEach((item) => {
          // Push all items in the selected category
          items.push({ ...item, category: category.title, categoryKey });
        });
      }
    });

    return items;
  };

  // 4. Fix implicit any on price parameter
  const renderPrice = (price: Price) => {
    if (typeof price === "number") {
      return `₹${price}`;
    } else if (typeof price === "object") {
      // Use 'in' operator check or property check to satisfy TS
      if ("half" in price && "full" in price) {
        return (
          <div className="text-sm">
            <span className="text-amber-700">Half: ₹{price.half}</span>
            <span className="mx-2">|</span>
            <span className="text-amber-800">Full: ₹{price.full}</span>
          </div>
        );
      }
      if ("veg" in price || "non_veg" in price) {
        return (
          <div className="text-sm">
            {price.veg && (
              <span className="text-green-700">Veg: ₹{price.veg}</span>
            )}
            {price.veg && price.non_veg && <span className="mx-2">|</span>}
            {price.non_veg && (
              <span className="text-red-700">Non-Veg: ₹{price.non_veg}</span>
            )}
          </div>
        );
      }
    }
    // Fallback
    return `₹${price}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-800 via-orange-700 to-red-800 text-white shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-2 tracking-wide">TAZZA</h1>
            <p className="text-xl italic opacity-90">Fast Food - means Fresh</p>
            <p className="text-sm mt-2 opacity-80">Veg & Non Veg</p>
          </div>

          {/* Contact Info */}
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <div>
                <div>022 2447 2222</div>
                <div>022 2445 2333</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <div>
                <div>9892 31 83 15</div>
                <div>9167 77 04 61</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <div>
                <div>11:00 AM - 11:30 PM</div>
                <div className="text-xs opacity-80">Closed Fri 12:45-2 PM</div>
              </div>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="mt-4 text-center bg-white/10 rounded-lg py-3 px-4">
            <p className="font-semibold text-lg">HOME DELIVERY</p>
            <p className="text-sm">
              Between 12 noon to 11 pm (Above Rs. 150/-)
            </p>
          </div>
        </div>
      </div>

      {/* Filter only (Search removed) */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-amber-100 border border-amber-200"
              }`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredMenu().map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-amber-100 hover:border-amber-300 transform hover:-translate-y-1"
            >
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {item.veg && (
                        <span className="w-5 h-5 border-2 border-green-600 flex items-center justify-center">
                          <span className="w-2.5 h-2.5 bg-green-600 rounded-full"></span>
                        </span>
                      )}
                      {!item.veg && (
                        <span className="w-5 h-5 border-2 border-red-600 flex items-center justify-center">
                          <span className="w-2.5 h-2.5 bg-red-600 rounded-full"></span>
                        </span>
                      )}
                      <h3 className="font-semibold text-gray-800 text-lg">
                        {item.name}
                      </h3>
                    </div>
                    <p className="text-xs text-amber-600 font-medium">
                      {item.category}
                    </p>
                  </div>
                </div>
                {item.description && (
                  <p className="text-xs text-gray-600 mb-3 italic">
                    {item.description}
                  </p>
                )}
                <div className="pt-3 border-t border-amber-100">
                  <div className="font-bold text-amber-700 text-lg">
                    {renderPrice(item.price)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredMenu().length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No items found matching your filter selection.
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-r from-amber-800 via-orange-700 to-red-800 text-white mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm opacity-90">
            59, Rehmat Manzil, Lady Jamshedji Road, Mahim, Mumbai - 400 016
          </p>
          <p className="text-xs mt-2 opacity-75">tazzafastfood@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default TazzaMenu;
