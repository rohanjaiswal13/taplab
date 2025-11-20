import { useState } from "react";
import { Search, Phone, MapPin, Utensils, Sparkles } from "lucide-react";

// --- Types ---
interface MenuItem {
  name: string;
  price: string;
  details?: string;
}

interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

const HighOnShakesMenu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // --- Data Source ---
  const categories: MenuCategory[] = [
    {
      id: "premium-shakes",
      label: "Premium Shakes",
      items: [
        { name: "Alphanso Mango", price: "230" },
        { name: "Caramel Peanut Butter", price: "180" },
        { name: "Bubble Gum", price: "130" },
        { name: "Banoffee Pie", price: "150" },
        { name: "Nutella", price: "220" },
        { name: "Ferrero Rocher", price: "230" },
        { name: "Brownie", price: "200" },
        { name: "Caramel Brownie", price: "210" },
        { name: "Strawberry Nutella", price: "220" },
        { name: "Kitkat [Chunky]", price: "220" },
        { name: "Caramel Kitkat", price: "230" },
        { name: "Cheese Cake", price: "200" },
        { name: "Oreo Cheese Cake", price: "220" },
        { name: "Nutella Cheese Cake", price: "240" },
        { name: "Nutella Brownie", price: "250" },
        { name: "Nutella Cookie", price: "220" },
        { name: "Lotus Biscof", price: "240" },
        { name: "Mississippi Mud", price: "220" },
        { name: "Belgium Nutty", price: "220" },
        { name: "Blue Berry Cheese Cake", price: "220" },
        { name: "Dry Fruit", price: "240" },
      ],
    },
    {
      id: "sandwiches",
      label: "Sandwiches",
      items: [
        { name: "Cheese Sandwich", price: "100" },
        { name: "Veg Club", price: "130" },
        { name: "Nutella Sandwich", price: "150" },
        { name: "Chicken Club", price: "150" },
        { name: "Chicken Bhuna", price: "160" },
        { name: "Cheesy BBQ", price: "160 / 170", details: "Paneer / Chicken" },
        {
          name: "Tandoori Tadka",
          price: "160 / 170",
          details: "Paneer / Chicken",
        },
        { name: "Chipotle", price: "160 / 170", details: "Paneer / Chicken" },
      ],
    },
    {
      id: "burgers",
      label: "Burgers",
      items: [
        {
          name: "Jalapeno Burger",
          price: "100 / 130 / 150",
          details: "Veg / Chicken / Fish",
        },
        {
          name: "Hunny Bunny Burger",
          price: "100 / 130 / 150",
          details: "Veg / Chicken / Fish",
        },
        {
          name: "Cheesey Burger",
          price: "100 / 130 / 150",
          details: "Veg / Chicken / Fish",
        },
        {
          name: "Hot & Spicy Burger",
          price: "100 / 130 / 150",
          details: "Veg / Chicken / Fish",
        },
        {
          name: "Jamaican Burger",
          price: "100 / 130 / 150",
          details: "Veg / Chicken / Fish",
        },
        {
          name: "Thousand Island Burger",
          price: "100 / 130 / 150",
          details: "Veg / Chicken / Fish",
        },
        {
          name: "Smokey Burger",
          price: "100 / 130 / 150",
          details: "Veg / Chicken / Fish",
        },
      ],
    },
    {
      id: "fries",
      label: "Fries & Dips",
      items: [
        { name: "Peri Peri Fries", price: "100" },
        { name: "Fries", price: "90" },
        { name: "Chicken Popcorn", price: "120" },
        { name: "Chicken Nuggets (10 pcs)", price: "120" },
        { name: "Fish Finger (6 pcs)", price: "150" },
        {
          name: "Jalapeno Dip",
          price: "20",
        },
        {
          name: "Hunny Bunny Dip",
          price: "20",
        },
        {
          name: "Cheesey Dip",
          price: "20",
        },
        {
          name: "Hot & Spicy Dip",
          price: "20",
        },
        {
          name: "Jamaican Dip",
          price: "20",
        },
        {
          name: "Thousand Island Dip",
          price: "20",
        },
        {
          name: "Smokey Dip",
          price: "20",
        },
      ],
    },
    {
      id: "fresh-cream",
      label: "Fresh Fruit Cream",
      items: [
        { name: "Coconut Cream", price: "220" },
        { name: "Mango Cream", price: "250" },
        { name: "Strawberry Cream", price: "250" },
        { name: "Shitafal Cream", price: "200" },
        { name: "Dry Fruits Cream", price: "250" },
        { name: "Strawberry Nutella", price: "250" },
      ],
    },
    {
      id: "juicy-mixes",
      label: "Juicy Mixes",
      items: [
        {
          name: "Thanda Thanda",
          price: "100",
          details: "Watermelon, Muskmelon",
        },
        { name: "Juice Bomb", price: "100", details: "Mosambi, Mint, Lemon" },
        { name: "Pink Orange", price: "110", details: "Strawberry, Orange" },
        { name: "Black Sin", price: "110", details: "Black Grape, Apple" },
        {
          name: "Paradise",
          price: "110",
          details: "Strawberry, Orange, Lemon",
        },
        {
          name: "Black Sea",
          price: "120",
          details: "Pomegranate, Black Grapes",
        },
        {
          name: "Tongue Twister",
          price: "120",
          details: "Pineapple, Pomegranate, Lemon",
        },
        {
          name: "Pinacolada",
          price: "120",
          details: "Pineapple, Orange, Vanilla, Coconut",
        },
        { name: "DXB", price: "120", details: "Watermelon, Strawberry" },
        { name: "Turkish Delight", price: "110", details: "Anar, Orange" },
        { name: "Anarkali", price: "120", details: "Anar, Apple, Pineapple" },
        { name: "Karma", price: "120", details: "Kiwi, Orange, Apple" },
      ],
    },
    {
      id: "pure-juices",
      label: "Refreshing Pure Juices",
      items: [
        { name: "Fresh Lime Water", price: "50" },
        { name: "Fresh Lime Soda", price: "60" },
        { name: "Pineapple", price: "100" },
        { name: "Orange", price: "100" },
        { name: "Mosambi", price: "100" },
        { name: "Watermelon", price: "90" },
        { name: "Ganga-Jamuna", price: "100" },
        { name: "Mara-Mari", price: "100" },
        { name: "Mango Seasonal", price: "120" },
        { name: "Cocktail", price: "120" },
        { name: "Apple & Orange", price: "100" },
        { name: "Black Grapes", price: "100" },
        { name: "Muskmelon", price: "100" },
        { name: "Apple Pineapple", price: "100" },
        { name: "Kiwi Mango", price: "120" },
        { name: "Kiwi Strawberry", price: "120" },
        { name: "Kiwi Juice", price: "100" },
        { name: "Pomegranate", price: "110" },
        { name: "Muskmelon Orange", price: "110" },
        { name: "Apple", price: "100" },
        { name: "Strawberry", price: "110" },
        { name: "Kiwi Lemon", price: "100" },
        { name: "Kiwi Pineapple", price: "110" },
        { name: "Kiwi Strawberry Mango", price: "120" },
      ],
    },
    {
      id: "milk-shakes",
      label: "Milk Shakes",
      items: [
        { name: "Chikoo", price: "110" },
        { name: "Rose", price: "100" },
        { name: "Sharjah [Banana]", price: "90" },
        { name: "Cold Coffee", price: "100" },
        { name: "Caramel Coffee", price: "120" },
        { name: "Chocolate", price: "120" },
        { name: "Vanilla", price: "120" },
        { name: "Mango/Seasonal", price: "140 / 170" },
        { name: "Maple Mango Apple", price: "150" },
        { name: "Strawberry", price: "130" },
        { name: "Sitaphal", price: "130" },
        { name: "Pomegranate", price: "130" },
        { name: "Chickoo Chocolate", price: "130" },
        { name: "Apple", price: "120" },
        { name: "Shamam [Muskmelon]", price: "120" },
        { name: "Banana Strawberry", price: "130" },
        { name: "Anjeer", price: "160" },
        { name: "Kaju Anjeer", price: "180" },
        { name: "Khajur Dates", price: "120" },
      ],
    },
    {
      id: "thick-shakes",
      label: "Thick Shakes",
      items: [
        { name: "Condensed Rose", price: "120" },
        { name: "Orange Vorange", price: "140" },
        { name: "Pineapple Vineapple", price: "140" },
        { name: "Strawberry Vowberry", price: "150" },
        { name: "Wow Watermelon", price: "140" },
        { name: "Milky Way", price: "170" },
        { name: "Chocolate Chip", price: "140" },
        { name: "Oreo", price: "140" },
        { name: "Mint Oreo", price: "150" },
        { name: "Chocolate Chip Cookie", price: "170" },
        { name: "Snickers", price: "190" },
        { name: "Chocolate Mint / Vanilla Mint", price: "150" },
        { name: "Peanut Butter", price: "170" },
      ],
    },
    {
      id: "beverages",
      label: "Beat The Heat",
      items: [
        { name: "Mojito", price: "90" },
        { name: "Blue Curacao", price: "80" },
        { name: "Pink Lemonade", price: "80" },
        { name: "Fizzylicious", price: "80" },
        { name: "Watermelon Cooler", price: "80" },
        { name: "Kiwi Blast", price: "80" },
      ],
    },
    {
      id: "hotchocolate",
      label: "Hot Chocolate",
      items: [
        { name: "Plain Hot Chocolate", price: "150" },
        { name: "White Hot Chocolate", price: "150" },
        { name: "Hazelnut Hot Chocolate", price: "200" },
      ],
    },
  ];

  // --- Filtering ---
  const getFilteredCategories = () => {
    return categories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (item.details &&
              item.details.toLowerCase().includes(searchTerm.toLowerCase()))
        ),
      }))
      .filter(
        (cat) =>
          cat.items.length > 0 &&
          (activeCategory === "all" || activeCategory === cat.id)
      );
  };

  const filteredCategories = getFilteredCategories();

  return (
    <>
      {/* Injecting Google Font: Outfit */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
          body { font-family: 'Outfit', sans-serif; }
        `}
      </style>

      <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 font-sans selection:bg-orange-100 selection:text-orange-900">
        {/* --- Header --- */}
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-xl">
          <div className="container max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
            {/* Brand */}
            <div className="flex items-center gap-2.5">
              <div className="bg-orange-500 text-white p-2 rounded-xl shadow-lg shadow-orange-500/30 transform -rotate-3">
                <Utensils className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight text-zinc-900">
                  High On <span className="text-orange-600">Shakes</span>
                </h1>
              </div>
            </div>

            {/* Desktop Info */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
              <div className="flex items-center gap-2 hover:text-orange-600 transition-colors cursor-default">
                <MapPin className="w-4 h-4" />
                <span>Mahim West</span>
              </div>
              <div className="flex items-center gap-2 hover:text-orange-600 transition-colors cursor-pointer">
                <Phone className="w-4 h-4" />
                <span>8652102030</span>
              </div>
            </div>

            {/* Mobile Call Button */}
            <div className="md:hidden">
              <a
                href="tel:8652102030"
                className="flex items-center gap-2 text-sm font-bold text-white bg-zinc-900 px-4 py-2 rounded-full shadow-md"
              >
                <Phone className="w-3.5 h-3.5" /> Call
              </a>
            </div>
          </div>
        </header>

        {/* --- Main Content --- */}
        <main className="container max-w-5xl mx-auto px-4 py-8 md:py-12">
          {/* --- Hero Section --- */}
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-2">
              Satisfy your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                cravings.
              </span>
            </h2>
            <p className="text-zinc-500 text-lg">
              Premium shakes, gourmet burgers & more.
            </p>
          </div>

          {/* --- Search & Controls --- */}
          <div className="space-y-6 mb-12">
            {/* Category Tabs */}
            <div className="w-full overflow-x-auto pb-4 scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
              <div className="inline-flex gap-2">
                <button
                  onClick={() => setActiveCategory("all")}
                  className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                    activeCategory === "all"
                      ? "bg-zinc-900 text-white shadow-md scale-105"
                      : "bg-white text-zinc-600 border border-zinc-200 hover:border-orange-200 hover:text-orange-600 hover:bg-orange-50"
                  }`}
                >
                  All Items
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                      activeCategory === cat.id
                        ? "bg-zinc-900 text-white shadow-md scale-105"
                        : "bg-white text-zinc-600 border border-zinc-200 hover:border-orange-200 hover:text-orange-600 hover:bg-orange-50"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* --- Menu Grid --- */}
          <div className="space-y-12">
            {filteredCategories.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-3xl border border-zinc-100 shadow-sm">
                <div className="inline-block p-4 rounded-full bg-zinc-50 mb-4">
                  <Search className="h-8 w-8 text-zinc-300" />
                </div>
                <p className="text-zinc-500 font-medium">
                  No items found matching "{searchTerm}"
                </p>
                <button
                  onClick={() => setSearchTerm("")}
                  className="text-orange-600 font-semibold text-sm mt-2 hover:underline"
                >
                  Clear search
                </button>
              </div>
            ) : (
              filteredCategories.map((category) => (
                <section key={category.id} className="scroll-mt-24">
                  <div className="flex items-baseline gap-4 mb-6 border-b border-zinc-200 pb-4">
                    <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                      {category.label}
                    </h2>
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      {category.items.length} Items
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
                    {category.items.map((item, index) => (
                      <div
                        key={index}
                        className="group relative rounded-2xl border border-zinc-100 bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(249,115,22,0.12)] hover:border-orange-100 hover:-translate-y-1"
                      >
                        {/* Optional: Highlight Badge for specific items (mock logic) */}
                        {(item.price === "230" ||
                          item.name.includes("Nutella")) && (
                          <div className="absolute top-0 right-0 bg-gradient-to-bl from-orange-100 to-white px-3 py-1 rounded-bl-2xl rounded-tr-2xl border-b border-l border-orange-50">
                            <Sparkles className="w-3 h-3 text-orange-500" />
                          </div>
                        )}

                        <div className="flex flex-col h-full justify-between gap-3">
                          <div>
                            <h3 className="font-bold text-lg text-zinc-800 group-hover:text-orange-600 transition-colors">
                              {item.name}
                            </h3>
                            {item.details && (
                              <p className="text-sm text-zinc-400 mt-1.5 font-medium">
                                {item.details}
                              </p>
                            )}
                          </div>

                          <div className="flex items-center justify-between pt-4 mt-auto border-t border-dashed border-zinc-100">
                            <div className="text-xs font-bold text-zinc-300 uppercase tracking-wide">
                              Price
                            </div>
                            <div className="flex items-center gap-0.5 text-zinc-900">
                              <span className="text-sm font-medium text-zinc-400">
                                ₹
                              </span>
                              <span className="text-xl font-bold tracking-tight">
                                {item.price}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ))
            )}
          </div>
        </main>

        {/* --- Footer --- */}
        <footer className="bg-white border-t border-zinc-200 py-12 mt-12">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-zinc-900 font-bold">
                  <Utensils className="w-4 h-4 text-orange-500" />
                  High On Shakes
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
                  Orders once placed will not be cancelled. <br></br>Free home
                  delivery applicable for orders above Rs 200/- <br></br> Taxes
                  as Applicable
                </p>
              </div>

              <div className="flex flex-col md:items-end gap-1 text-sm text-zinc-500">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-zinc-400" /> Shop No 5, Om
                  Sainath Sra Chs Ltd
                </p>
                <p>Kapad Bazar Rd, Mahim West, Mumbai 400016</p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-400">
              <p>© 2025 High On Shakes. All rights reserved.</p>

              <p>
                Powered by{" "}
                <a
                  href="https://taplab.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 font-medium hover:underline"
                >
                  TapLab
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HighOnShakesMenu;
