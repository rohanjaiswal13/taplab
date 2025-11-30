import { useState, useEffect } from "react";
import {
  Search,
  Phone,
  MapPin,
  Utensils,
  Sparkles,
  ArrowUp,
  ChevronLeft,
  ChevronRight,
  Menu as MenuIcon,
  X,
} from "lucide-react";

// --- Types ---
interface MenuItem {
  name: string;
  price: string;
  details?: string;
  bestseller?: boolean;
}

interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

const HighOnShakesMenu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // New state for the menu popup
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- Carousel Data ---
  const slides = ["/HOS1.jpg", "/HOS2.jpg", "/HOS3.jpg"];

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

  // --- Carousel Logic ---
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToCategory = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  // --- Data Source ---
  const categories: MenuCategory[] = [
    {
      id: "premium-shakes",
      label: "Premium Shakes",
      items: [
        { name: "Alphanso Mango", price: "230", bestseller: true },
        { name: "Caramel Peanut Butter", price: "180" },
        { name: "Bubble Gum", price: "130" },
        { name: "Banoffee Pie", price: "150" },
        { name: "Nutella", price: "220", bestseller: true },
        { name: "Ferrero Rocher", price: "230", bestseller: true },
        { name: "Brownie", price: "200" },
        { name: "Caramel Brownie", price: "210" },
        { name: "Strawberry Nutella", price: "220" },
        { name: "Kitkat [Chunky]", price: "220" },
        { name: "Caramel Kitkat", price: "230" },
        { name: "Cheese Cake", price: "200" },
        { name: "Oreo Cheese Cake", price: "220" },
        { name: "Nutella Cheese Cake", price: "240" },
        { name: "Nutella Brownie", price: "250", bestseller: true },
        { name: "Nutella Cookie", price: "220" },
        { name: "Lotus Biscof", price: "240", bestseller: true },
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
        { name: "Chicken Bhuna", price: "170" },
        {
          name: "Cheesy BBQ",
          price: "160 / 170",
          details: "Paneer / Chicken",
          bestseller: true,
        },
        {
          name: "Tandoori Tadka",
          price: "160 / 170",
          details: "Paneer / Chicken",
        },
        {
          name: "Chipotle",
          price: "160 / 170",
          details: "Paneer / Chicken",
          bestseller: true,
        },
        {
          name: "Makhani",
          price: "160 / 170",
          details: "Paneer / Chicken",
          bestseller: true,
        },
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
          bestseller: true,
        },
        {
          name: "Hot & Spicy Burger",
          price: "100 / 130 / 150",
          details: "Veg / Chicken / Fish",
          bestseller: true,
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
          bestseller: true,
        },
        {
          name: "Smokey Burger",
          price: "100 / 130 / 150",
          details: "Veg / Chicken / Fish",
        },
      ],
    },
    {
      id: "blitz-bucket",
      label: "Blitz Bucket",
      items: [
        { name: "Korean Bucket", price: "150" },
        { name: "American Bucket", price: "150" },
        { name: "Hindustani Bucket", price: "150" },
        { name: "Zest Bucket", price: "150" },
        { name: "Tex Mex Bucket", price: "150" },
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
        { name: "Jalapeno Dip", price: "20" },
        { name: "Hunny Bunny Dip", price: "20" },
        { name: "Cheesey Dip", price: "20" },
        { name: "Hot & Spicy Dip", price: "20" },
        { name: "Jamaican Dip", price: "20" },
        { name: "Thousand Island Dip", price: "20" },
        { name: "Smokey Dip", price: "20" },
      ],
    },
    {
      id: "fresh-cream",
      label: "Fresh Fruit Cream",
      items: [
        { name: "Coconut Cream", price: "220", bestseller: true },
        { name: "Mango Cream", price: "250", bestseller: true },
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
          bestseller: true,
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
          bestseller: true,
        },
        {
          name: "DXB",
          price: "120",
          details: "Watermelon, Strawberry",
          bestseller: true,
        },
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
        { name: "Chickoo Chocolate", price: "130", bestseller: true },
        { name: "Apple", price: "120" },
        { name: "Shamam [Muskmelon]", price: "120", bestseller: true },
        { name: "Banana Strawberry", price: "130" },
        { name: "Anjeer", price: "160" },
        { name: "Kaju Anjeer", price: "180", bestseller: true },
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
        { name: "Wow Watermelon", price: "140", bestseller: true },
        { name: "Milky Way", price: "170", bestseller: true },
        { name: "Chocolate Chip", price: "140", bestseller: true },
        { name: "Oreo", price: "140", bestseller: true },
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
        { name: "Hazelnut Hot Chocolate", price: "200", bestseller: true },
      ],
    },
  ];

  // --- Filtering ---
  const getFilteredCategories = () => {
    return (
      categories
        .map((cat) => ({
          ...cat,
          items: cat.items.filter(
            (item) =>
              item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              (item.details &&
                item.details.toLowerCase().includes(searchTerm.toLowerCase()))
          ),
        }))
        // We keep all categories that have matches, or if no search, all categories.
        .filter((cat) => cat.items.length > 0)
    );
  };

  const filteredCategories = getFilteredCategories();

  // Helper for Veg Icon
  const VegIcon = () => (
    <div className="flex items-center justify-center w-3.5 h-3.5 rounded-sm border border-green-600 p-[1px]">
      <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
    </div>
  );

  return (
    <>
      {/* Injecting Google Font: Outfit */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
          body { font-family: 'Outfit', sans-serif; }
          /* Hide scrollbar for the popup menu */
          .scrollbar-hide::-webkit-scrollbar {
              display: none;
          }
          .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
          }
        `}
      </style>

      <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 font-sans selection:bg-[#EFEBE9] selection:text-[#4E342E] relative">
        {/* --- Header --- */}
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-xl">
          <div className="container max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <img
                src="/logo_extracted.png"
                alt="Logo"
                className="w-12 h-12 object-contain"
              />

              <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
                High On <span className="text-[#6F4E37]">Shakes</span>
              </h1>
            </div>

            {/* Desktop Info */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
              <div className="flex items-center gap-2 hover:text-[#6F4E37] transition-colors cursor-default">
                <MapPin className="w-4 h-4" />
                <span>Mahim West</span>
              </div>
              <div className="flex items-center gap-2 hover:text-[#6F4E37] transition-colors cursor-pointer">
                <Phone className="w-4 h-4" />
                <span>8652102030</span>
              </div>
            </div>

            {/* Mobile Call Button */}
            <div className="md:hidden">
              <a
                href="tel:8652102030"
                className="flex items-center gap-2 text-sm font-bold text-white bg-[#6F4E37] px-4 py-2 rounded-full shadow-md"
              >
                <Phone className="w-3.5 h-3.5" /> Call
              </a>
            </div>
          </div>
        </header>

        {/* --- Main Content --- */}
        <main className="container max-w-5xl mx-auto px-4 py-8 md:py-12">
          {/* --- Hero Carousel Section --- */}
          <div className="relative w-full h-[250px] md:h-[450px] mb-8 rounded-2xl overflow-hidden shadow-2xl group border border-zinc-100">
            {/* Slides */}
            <div
              className="flex transition-transform duration-700 ease-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full h-full flex-shrink-0">
                  <img
                    src={slide}
                    alt={`Highlight ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg text-zinc-800 hover:bg-[#6F4E37] hover:text-white transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg text-zinc-800 hover:bg-[#6F4E37] hover:text-white transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 shadow-sm ${
                    currentSlide === index
                      ? "bg-white w-6"
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* --- Delivery Partners --- */}
          <div className="grid grid-cols-3 gap-4 mb-12 items-center justify-items-center">
            <a
              href="https://wa.me/918652102030"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center transition-transform duration-300 hover:scale-110"
              aria-label="Chat on WhatsApp"
            >
              <img
                src="/whatsapp.webp"
                alt="WhatsApp"
                className="h-10 w-auto md:h-12 object-contain"
              />
            </a>
            <a
              href="https://www.swiggy.com/menu/857861?source=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center transition-transform duration-300 hover:scale-110"
              aria-label="Order on Swiggy"
            >
              <img
                src="/swiggy.png"
                alt="Swiggy"
                className="h-10 w-auto md:h-12 object-contain"
              />
            </a>
            <a
              href="https://zomato.onelink.me/xqzv/kne0cfnz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center transition-transform duration-300 hover:scale-110"
              aria-label="Order on Zomato"
            >
              <img
                src="/zomato.webp"
                alt="Zomato"
                className="h-10 w-auto md:h-12 object-contain"
              />
            </a>
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
                  className="text-[#6F4E37] font-semibold text-sm mt-2 hover:underline"
                >
                  Clear search
                </button>
              </div>
            ) : (
              filteredCategories.map((category) => (
                <section
                  id={category.id}
                  key={category.id}
                  className="scroll-mt-24"
                >
                  <div className="flex items-baseline gap-4 mb-6 border-b border-zinc-200 pb-4">
                    <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                      {category.label}
                    </h2>
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      {category.items.length} Items
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
                    {category.items.map((item, index) => {
                      const isBestseller = item.bestseller;
                      const isNonVeg =
                        item.details?.toLowerCase().includes("chicken") ||
                        item.details?.toLowerCase().includes("fish") ||
                        item.name?.toLowerCase().includes("chicken") ||
                        item.name?.toLowerCase().includes("bucket") ||
                        item.name?.toLowerCase().includes("fish");

                      return (
                        <div
                          key={index}
                          className="group relative rounded-2xl border border-zinc-100 bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(111,78,55,0.12)] hover:border-[#D7CCC8] hover:-translate-y-1"
                        >
                          <div className="flex flex-col h-full justify-between gap-2">
                            <div>
                              {/* Header Row: Veg Icon + Bestseller */}
                              <div className="flex items-center gap-2 mb-2">
                                {/* Veg/NonVeg Indicator */}
                                {isNonVeg ? (
                                  <div className="flex items-center justify-center w-3.5 h-3.5 rounded-sm border border-red-600 p-[1px]">
                                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                                  </div>
                                ) : (
                                  <VegIcon />
                                )}

                                {/* Bestseller Badge (Matching the Image) */}
                                {isBestseller && (
                                  <div className="flex items-center gap-1">
                                    <Sparkles className="w-3 h-3 fill-[#E23744] text-[#E23744]" />
                                    <span className="text-[11px] font-bold text-[#E23744] uppercase tracking-wide">
                                      Bestseller
                                    </span>
                                  </div>
                                )}
                              </div>

                              <h3 className="font-bold text-lg text-zinc-800 group-hover:text-[#6F4E37] transition-colors">
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
                      );
                    })}
                  </div>
                </section>
              ))
            )}
          </div>
        </main>

        {/* --- Footer --- */}
        <footer className="bg-white border-t border-zinc-200 py-12 mt-12 pb-32 md:pb-12">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-zinc-900 font-bold">
                  <Utensils className="w-4 h-4 text-[#6F4E37]" />
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
                  className="text-[#6F4E37] font-medium hover:underline"
                >
                  TapLab
                </a>
              </p>
            </div>
          </div>
        </footer>

        {/* --- Floating Action Buttons Container --- */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
          {/* Scroll To Top Button */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="bg-white text-[#6F4E37] p-3 rounded-full shadow-lg hover:bg-zinc-50 transition-all duration-300 border border-zinc-200"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          )}

          {/* Menu Button & Popup */}
          <div className="relative">
            {/* The Popup */}
            {isMenuOpen && (
              <div className="absolute bottom-full right-0 mb-4 w-64 bg-white rounded-2xl shadow-2xl border border-zinc-100 overflow-hidden origin-bottom-right animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between p-4 border-b border-zinc-100 bg-zinc-50/50">
                  <h3 className="font-bold text-zinc-900">Menu</h3>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-zinc-400 hover:text-zinc-900"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="max-h-[60vh] overflow-y-auto scrollbar-hide p-2">
                  {filteredCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => scrollToCategory(cat.id)}
                      className="w-full text-left px-4 py-3 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-[#6F4E37] rounded-xl transition-colors flex justify-between items-center"
                    >
                      {cat.label}
                      <span className="text-xs text-zinc-300 font-normal">
                        {cat.items.length}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* The Main Menu Toggle Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 bg-[#6F4E37] text-white px-5 py-3.5 rounded-full shadow-xl hover:bg-[#6F4E37] hover:scale-105 transition-all duration-300 group"
            >
              {isMenuOpen ? (
                <>
                  <X className="w-5 h-5" />
                  <span className="font-bold text-sm">Close</span>
                </>
              ) : (
                <>
                  <MenuIcon className="w-5 h-5" />
                  <span className="font-bold text-sm uppercase tracking-wide">
                    Browse Menu
                  </span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HighOnShakesMenu;
