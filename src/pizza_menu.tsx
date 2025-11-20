import { useState } from "react";
import { Phone, MapPin, ChevronDown, ChevronUp, Pizza } from "lucide-react";

// --- Interfaces ---

interface MenuItem {
  name: string;
  description?: string;
  price: string; // Can be a single price or "S | M | L"
  isPizza?: boolean;
  isVeg?: boolean;
  isNew?: boolean; // To tag items marked with 'New'
}

interface MenuCategory {
  title: string;
  note?: string; // For things like "Regular / Medium / Large"
  items: MenuItem[];
}

interface LocationInfo {
  area: string;
  numbers: string[];
}

type MenuData = Record<string, MenuCategory>;

const PizzaCaprinaMenu = () => {
  const [searchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showLocations, setShowLocations] = useState(true);

  // --- Data: Locations ---
  const locations: LocationInfo[] = [
    {
      area: "Goregaon",
      numbers: ["8655 563 533", "8655 563 577", "9323 944 189"],
    },
    {
      area: "Chembur",
      numbers: [
        "022-2520 1264",
        "022-2520 1265",
        "8097 651 533",
        "8097 051 544",
        "9820 226 830",
      ],
    },
    {
      area: "Andheri (East)",
      numbers: ["8655 563 588", "8655 063 544", "8433 761 566"],
    },
    { area: "Mulund (West)", numbers: ["8828 000 355", "8828 000 762"] },
    {
      area: "Andheri (West)",
      numbers: ["9029 960 299", "8976 897 643", "8976 897 623"],
    },
    {
      area: "Nerul / Seawoods",
      numbers: ["8655 560 082", "8655 560 083", "9320 517 552"],
    },
    { area: "Thane (West)", numbers: ["7400 445 583", "7400 445 584"] },
    { area: "Tardeo", numbers: ["9136230778", "8356870754", "9323879865"] },
    { area: "Koperkhairane", numbers: ["9987 027 456", "9987 029 756"] },
    { area: "Dombivali", numbers: ["8097 075 051", "8097 075 052"] },
    { area: "Mahim Matunga (West)", numbers: ["7045 109 742", "7045 109 751"] },
  ];

  // --- Data: Menu ---
  const menuData: MenuData = {
    vegPizzas: {
      title: "VEG PIZZAS",
      note: 'Reg (7") | Med (10") | Lar (12")',
      items: [
        // Tier 1
        {
          name: "Margherita",
          description: "Basil + Tomato Slice + Cheese",
          price: "190 | 330 | 480",
          isPizza: true,
          isVeg: true,
        },
        {
          name: "Cheese Corn",
          description: "Cheese + Gold Corn",
          price: "190 | 330 | 480",
          isPizza: true,
          isVeg: true,
        },
        // Tier 2
        {
          name: "Makhani Do Pyaza",
          description: "Makhani Gravy + CAP + Onion + Red Paprika + Cheese",
          price: "250 | 450 | 600",
          isPizza: true,
          isVeg: true,
          isNew: true,
        },
        {
          name: "Garden Delight",
          description: "Onion + Capsicum + Tomato + Cheese",
          price: "250 | 450 | 600",
          isPizza: true,
          isVeg: true,
          isNew: true,
        },
        {
          name: "Veggie Lover",
          description: "Onion + Capsicum + Mushroom",
          price: "250 | 450 | 600",
          isPizza: true,
          isVeg: true,
        },
        {
          name: "Wood Cutter",
          description: "Spinach + Mushroom + Basil + Onion",
          price: "250 | 450 | 600",
          isPizza: true,
          isVeg: true,
        },
        // Tier 3
        {
          name: "Jain Delux",
          description: "Cap + Corn + Pineapple + Ex. Cheese",
          price: "280 | 500 | 640",
          isPizza: true,
          isVeg: true,
          isNew: true,
        },
        {
          name: "Vegetariana",
          description: "Garlic + American Corn + Capsicum + Tomato + Oregano",
          price: "280 | 500 | 640",
          isPizza: true,
          isVeg: true,
        },
        {
          name: "Light & Crispy",
          description:
            "Onion + Capsicum + Tomatoes + Green Chilli, Mixed With Cheese on Thin & Crispy Base",
          price: "280 | 500 | 640",
          isPizza: true,
          isVeg: true,
        },
        {
          name: "Cheese Paneer",
          description: "Onion + Capsicum + Plain Paneer + Tandoori Sauce",
          price: "280 | 500 | 640",
          isPizza: true,
          isVeg: true,
        },
        {
          name: "American Heat",
          description: "Onion + Cap + B.Corn + Jalapeno",
          price: "280 | 500 | 640",
          isPizza: true,
          isVeg: true,
          isNew: true,
        },
        // Tier 4
        {
          name: "Paneer Periperi",
          description: "Onion, Bell pepper, Marinated with Periperi Sauce",
          price: "360 | 530 | 740",
          isPizza: true,
          isVeg: true,
        },
        {
          name: "Devil's Pizza",
          description: "Onion, Cap, Baby Corn, Bell Peppers, Spicy Sauce",
          price: "360 | 530 | 740",
          isPizza: true,
          isVeg: true,
          isNew: true,
        },
        {
          name: "Tandoori Achari Paneer",
          description: "Tandoori Paneer, Onion, Cap, Corn, With Achari Sauce",
          price: "360 | 530 | 740",
          isPizza: true,
          isVeg: true,
          isNew: true,
        },
        {
          name: "Jain Five Pepper Feast Pizza",
          description: "Red Or Yellow, Green Cap., Red Paprika, Jalapeno",
          price: "360 | 530 | 740",
          isPizza: true,
          isVeg: true,
          isNew: true,
        },
        {
          name: "Veggie Cocktail",
          description: "Onion, Corn, Olives, Red Paprika, With Tandoori Paneer",
          price: "360 | 530 | 740",
          isPizza: true,
          isVeg: true,
          isNew: true,
        },
        {
          name: "Jain Tikka Paneer",
          description: "Tandoori Paneer, Cap., Green Chilli",
          price: "360 | 530 | 740",
          isPizza: true,
          isVeg: true,
        },
        {
          name: "Mushroom Delite",
          description:
            "Barbeque Mushroom + Capsicum + Black Olives + Corn + Jalapeno",
          price: "360 | 530 | 740",
          isPizza: true,
          isVeg: true,
        },
        {
          name: "Supreem Veg",
          description:
            "Baby Corn + Capsicum + Tomato + Onion + Mushroom + Olives",
          price: "360 | 530 | 740",
          isPizza: true,
          isVeg: true,
        },
        {
          name: "Paneer Chilli",
          description:
            "Paneer Onion + Capsicum + Green Chilli Cooked In Chinese Style + Sesame Seeds",
          price: "360 | 530 | 740",
          isPizza: true,
          isVeg: true,
        },
        {
          name: "Schezwan Veg",
          description:
            "Baby Corn + Capsicum + Onion & Sp Onion in Hot Schezwan + Sauce",
          price: "360 | 530 | 740",
          isPizza: true,
          isVeg: true,
        },
        {
          name: "Heavenly Harvest",
          description: "Jalapeno Bell Pepper Tomato Fresh Basil with Cheese",
          price: "360 | 530 | 740",
          isPizza: true,
          isVeg: true,
        },
        {
          name: "Tandoori Makhani with Mint Mayo",
          description:
            "Onion, Cap, Red Parika, Paneer Tikka In Tandoori Sauce + Mint mayo",
          price: "360 | 530 | 740",
          isPizza: true,
          isVeg: true,
          isNew: true,
        },
        {
          name: "Sizzling Paneer",
          description: "Tikka Paneer, Olives, Mushroom, Red Paprika",
          price: "360 | 530 | 740",
          isPizza: true,
          isVeg: true,
        },
        {
          name: "Jain Delight",
          description: "Chat Paneer, Cap, Corinder, Red Peprica, Black Olives",
          price: "360 | 530 | 740",
          isPizza: true,
          isVeg: true,
          isNew: true,
        },
      ],
    },
    nonVegPizzas: {
      title: "NON-VEG PIZZAS",
      note: 'Reg (7") | Med (10") | Lar (12")',
      items: [
        // Tier 1
        {
          name: "Hot Chicken",
          description: "Cheese + Hot Chicken",
          price: "270 | 480 | 630",
          isPizza: true,
          isVeg: false,
        },
        {
          name: "Smoke Chicken",
          description: "Cheese + Grilled Chicken",
          price: "270 | 480 | 630",
          isPizza: true,
          isVeg: false,
        },
        {
          name: "Spicy Salami",
          description: "Chicken Salami + Red Paprika",
          price: "270 | 480 | 630",
          isPizza: true,
          isVeg: false,
          isNew: true,
        },
        // Tier 2
        {
          name: "Chicken Tikka",
          description: "Chicken Tikka + Coriander",
          price: "380 | 580 | 730",
          isPizza: true,
          isVeg: false,
        },
        {
          name: "Butter Chicken",
          description: "Butter Chicken Onion + Coriander with Tandoori Sauce",
          price: "380 | 580 | 730",
          isPizza: true,
          isVeg: false,
        },
        {
          name: "Spicy Keema",
          description: "Spicy Chicken Keema Capsicum Onion",
          price: "380 | 580 | 730",
          isPizza: true,
          isVeg: false,
        },
        {
          name: "Chilli Chicken",
          description:
            "Chicken Sp Onion + Green Chilli Cooked in Chinese Style + Spring Onion",
          price: "380 | 580 | 730",
          isPizza: true,
          isVeg: false,
        },
        {
          name: "Schezwan Chicken",
          description: "Chicken Cooked In Hot Schzwan Sauce Spring Onion",
          price: "380 | 580 | 730",
          isPizza: true,
          isVeg: false,
        },
        {
          name: "Mambo Combo",
          description: "Rost Chi. BBQ Chi. Jalapeno Olives",
          price: "380 | 580 | 730",
          isPizza: true,
          isVeg: false,
          isNew: true,
        },
        {
          name: "Chicken Periperi",
          description: "Onion Bellpaper Marinated with Periperi Sauce Chicken",
          price: "380 | 580 | 730",
          isPizza: true,
          isVeg: false,
          isNew: true,
        },
        {
          name: "Chicken Italian",
          description: "Chicken Sausage, Chicken Salami, Olives",
          price: "380 | 580 | 730",
          isPizza: true,
          isVeg: false,
          isNew: true,
        },
        {
          name: "B.B.Q. Delight",
          description: "BBQ Chicken Onion Capsicum Olives",
          price: "380 | 580 | 730",
          isPizza: true,
          isVeg: false,
        },
        // Tier 3
        {
          name: "Bonanza Chicken",
          description:
            "Spicy Chicken Sausage Onion Barbecaued Chicken Jalapeno",
          price: "400 | 630 | 760",
          isPizza: true,
          isVeg: false,
        },
        {
          name: "Chicken Tikka Makhani",
          description: "Onion Cap Red Peprika Chicken Tikka in Tandoori Sauce",
          price: "400 | 630 | 760",
          isPizza: true,
          isVeg: false,
          isNew: true,
        },
        {
          name: "Hot Maxicana",
          description: "Hot Chicken, Chicken Salami, Mushroom, Capsicum",
          price: "400 | 630 | 760",
          isPizza: true,
          isVeg: false,
        },
        {
          name: "Caprina Spl.",
          description:
            "Chicken Sausage, Chicken Salami, Onion, Plain Chicken, Garlic & Herbs",
          price: "400 | 630 | 760",
          isPizza: true,
          isVeg: false,
        },
        {
          name: "Gracy Italian",
          description:
            "Rost Chicken, Chicken Sausage, Garlic, Olives, Mushroom",
          price: "400 | 630 | 760",
          isPizza: true,
          isVeg: false,
        },
        {
          name: "Hurican Pizza",
          description:
            "Chicken Keema, Chicken Tikka, Onion, Red Paprika Olives",
          price: "400 | 630 | 760",
          isPizza: true,
          isVeg: false,
          isNew: true,
        },
        {
          name: "Triple Chicken Feast",
          description: "Spicy Schezwan Chicken, Chicken Tikka, Chicken Sausage",
          price: "400 | 630 | 760",
          isPizza: true,
          isVeg: false,
          isNew: true,
        },
        {
          name: "Chicken Avalanche",
          description: "Chi. Periperi Chi. Tikka Rost Chi. Onion, Olives",
          price: "400 | 630 | 760",
          isPizza: true,
          isVeg: false,
          isNew: true,
        },
        // Tier 4
        {
          name: "Chicken Feast",
          description:
            "Capsicum, Onion, Olives, Spicy Keema, BBQ Chicken, Chicken Sausage",
          price: "420 | 650 | 800",
          isPizza: true,
          isVeg: false,
        },
        {
          name: "Tarnodo",
          description:
            "Chicken Tikka, Butter Chicken, Roast Chicken, Onion Capsicum",
          price: "420 | 650 | 800",
          isPizza: true,
          isVeg: false,
        },
        {
          name: "Real Cocktail",
          description:
            "BBQ Chi. Hot Chi, Roast Chi, Butter Chi, Mush S.Onion, Jalapeno",
          price: "420 | 650 | 800",
          isPizza: true,
          isVeg: false,
          isNew: true,
        },
      ],
    },
    sidesAndAppetizers: {
      title: "APPETIZERS & SIDES",
      items: [
        {
          name: "Chicken Popcorn",
          description: "Golden fried chicken bites",
          price: "150",
          isVeg: false,
          isNew: true,
        },
        {
          name: "Chicken Nuggets",
          description: "Crispy chicken nuggets",
          price: "170",
          isVeg: false,
          isNew: true,
        },
        {
          name: "Chicken Cheese Ball",
          description: "Cheesy chicken balls",
          price: "170",
          isVeg: false,
          isNew: true,
        },
        { name: "Garlic Bread Stick", price: "120", isVeg: true },
        {
          name: "Garlic Bread",
          description: "Four Slice Of Bread Toasted with Garlic butter",
          price: "100",
          isVeg: true,
        },
        {
          name: "Garlic Bread with Cheese",
          description:
            "Four Slice Of Bread Toasted with garlic butter & Cheese",
          price: "130",
          isVeg: true,
        },
        {
          name: "Spicy Garlic Bread With Cheese",
          description: "Spicy Sauce, Coriander, Green Chilli With Cheese",
          price: "200",
          isVeg: true,
          isNew: true,
        },
        {
          name: "Corn & Jalapeno Garlic Bread",
          description:
            "Four Slice Of Bread Toasted with Mix of Cheese Green Chillies A Corns & Jalapeno",
          price: "150",
          isVeg: true,
          isNew: true,
        },
        {
          name: "Chicken Bologinis",
          description: "Chicken Keema with extra Cheese",
          price: "200",
          isVeg: false,
        },
        {
          name: "Garlic Bread BBQ Supreme",
          description:
            "Four Slice Of Bread Toasted with Garlic Butter Cheese & Topped with bbq Chicken",
          price: "200",
          isVeg: false,
          isNew: true,
        },
        { name: "French Fry", price: "130", isVeg: true },
        {
          name: "Peri Peri French Fries",
          price: "150",
          isVeg: true,
        },
        { name: "Chicken Fingers with Cheesy Dip", price: "220", isVeg: false },
        { name: "BBQ Chicken Wings", price: "220", isVeg: false },
      ],
    },
    dips: {
      title: "SIDE DIPS",
      items: [
        { name: "Cheesy Dip", price: "40", isVeg: true },
        { name: "Jalapeno Dip", price: "40", isVeg: true },
        { name: "Tandoori Sauce Dip", price: "30", isVeg: true },
        { name: "Mayonnaise Dip", price: "30", isVeg: true },
      ],
    },
    burgersAndWraps: {
      title: "BURGERS & WRAPS",
      items: [
        { name: "Veg Burger", price: "130", isVeg: true },
        { name: "Veg Cheese Burger", price: "150", isVeg: true },
        { name: "Chicken Burger", price: "170", isVeg: false },
        { name: "Chicken Cheese Burger", price: "180", isVeg: false },
        // Wraps
        { name: "Veg. Wrap", price: "120", isVeg: true, isNew: true },
        { name: "Tandoori Paneer Wrap", price: "130", isVeg: true },
        { name: "Tandoori Chicken Wrap", price: "150", isVeg: false },
        { name: "Schezwan Paneer Wrap", price: "130", isVeg: true },
        { name: "Schezwan Chicken Wrap", price: "150", isVeg: false },
      ],
    },
    pasta: {
      title: "VEG PASTA",
      items: [
        { name: "Veg. Arabiata", price: "350", isVeg: true },
        { name: "Cheese Macroni (Veg.)", price: "350", isVeg: true },
        { name: "Veg. Alfredo", price: "350", isVeg: true },
        {
          name: "All In One (Veg)",
          description:
            "Choice of Sauce Red, Sauce Pink, Sauce White, Sauce Toping, Broccoli, Baby Corn, Mushroom Bell Peppers, Corn",
          price: "350",
          isVeg: true,
        },
      ],
    },
    pastaNonVeg: {
      title: "NON-VEG PASTA",
      items: [
        { name: "Chicken Arabiata", price: "400", isVeg: false },
        { name: "Chicken Alfredo", price: "400", isVeg: false },
        { name: "Cheese & Macroni (Non. Veg.)", price: "400", isVeg: false },
        {
          name: "All In One (Non Veg.)",
          description:
            "Choice Of Sauce Red, Sauce Pink, Sauce White, Sauce Toping, Broccoli, Baby Corn, Mushroom Bell Peppers, Corn, Chicken",
          price: "400",
          isVeg: false,
        },
      ],
    },
    sandwiches: {
      title: "SANDWICHES",
      items: [
        { name: "Veg. Grilled Sandwich", price: "150", isVeg: true },
        { name: "Paneer Peri Peri Sandwich", price: "170", isVeg: true },
        { name: "Cheese Grilled Sandwich", price: "175", isVeg: true },
        { name: "Grilled Tandoori Paneer", price: "180", isVeg: true },
        { name: "Chicken Grill Sandwich", price: "170", isVeg: false },
        { name: "Chicken Peri Peri Sandwich", price: "200", isVeg: false },
        { name: "Chicken Grilled Sandwich", price: "210", isVeg: false },
        {
          name: "Sweet & Spicy Chicken Sandwich",
          description: "With Cheese",
          price: "240",
          isVeg: false,
        },
      ],
    },
    desserts: {
      title: "DESSERTS & BEVERAGES",
      items: [
        { name: "Chocolate Mousse", price: "130", isVeg: true },
        { name: "Chocolava Cake", price: "130", isVeg: true },
        { name: "Soft Drink", price: "50", isVeg: true },
      ],
    },
  };

  const categories = [
    { id: "all", name: "All Items" },
    { id: "vegPizzas", name: "Veg Pizzas" },
    { id: "nonVegPizzas", name: "Non-Veg Pizzas" },
    { id: "sidesAndAppetizers", name: "Appetizers & Sides" },
    { id: "dips", name: "Dips" },
    { id: "burgersAndWraps", name: "Burgers & Wraps" },
    { id: "pasta", name: "Pasta" },
    { id: "sandwiches", name: "Sandwiches" },
    { id: "desserts", name: "Desserts & Beverages" },
  ];

  const filterItems = () => {
    const filtered: MenuData = {};

    Object.entries(menuData).forEach(([key, category]) => {
      if (selectedCategory === "all" || selectedCategory === key) {
        const filteredItems = category.items.filter(
          (item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description?.toLowerCase().includes(searchTerm.toLowerCase())
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
    <div className="min-h-screen bg-[#fcfaf2] font-sans text-gray-800">
      {/* Top Banner */}
      <div className="bg-white shadow-lg sticky top-0 z-50 border-b-4 border-[#D62828]">
        {/* Italian Stripes */}
        <div className="flex h-2 w-full">
          <div className="w-1/3 bg-[#2A9D8F]"></div>
          <div className="w-1/3 bg-white"></div>
          <div className="w-1/3 bg-[#D62828]"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="bg-[#2A9D8F] text-white text-[10px] font-bold px-3 py-1 rounded-full mb-2 uppercase tracking-wider">
              The Italian Bests
            </div>
            <h1
              className="text-4xl md:text-6xl font-extrabold text-[#D62828] tracking-tighter drop-shadow-sm"
              style={{ fontFamily: "Georgia, serif" }}
            >
              PIZZA CAPRINA
            </h1>

            {/* Offers Banner */}
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2 w-full max-w-2xl">
              <div className="bg-red-50 border border-red-100 rounded-lg p-2 text-center">
                <span className="block text-[#D62828] font-black text-sm">
                  BUY 2 ANY SIZE
                </span>
                <span className="text-xs text-gray-600">GET 1 FREE</span>
              </div>
              <div className="bg-green-50 border border-green-100 rounded-lg p-2 text-center">
                <span className="block text-[#2A9D8F] font-black text-sm">
                  BIG COMBO OFFER
                </span>
                <span className="text-xs text-gray-600">VEG 649 / NV 699</span>
              </div>
              <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-2 text-center">
                <span className="block text-yellow-700 font-black text-sm">
                  3PM TO 6PM
                </span>
                <span className="text-xs text-gray-600">VEG 349 / NV 449</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Category Filter */}
        <div className="mb-4 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-bold transition-all border shadow-sm ${
                  selectedCategory === cat.id
                    ? "bg-[#D62828] text-white border-[#D62828] scale-105"
                    : "bg-white text-gray-700 hover:bg-red-50 border-gray-200"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Content */}
        <div className="space-y-10">
          {Object.entries(filteredMenu).map(([key, category]) => (
            <div
              key={key}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
            >
              {/* Category Header */}
              <div className="bg-[#264653] px-6 py-4 flex flex-col sm:flex-row justify-between sm:items-center">
                <h2 className="text-xl font-black text-white uppercase tracking-wide flex items-center gap-2">
                  {category.title.includes("PIZZA") && (
                    <Pizza className="w-6 h-6 text-[#E9C46A]" />
                  )}
                  {category.title}
                </h2>
                {category.note && (
                  <span className="text-[#E9C46A] font-mono text-xs sm:text-sm mt-1 sm:mt-0 font-bold">
                    {category.note}
                  </span>
                )}
              </div>

              <div className="divide-y divide-dashed divide-gray-200">
                {category.items.map((item, index) => (
                  <div
                    key={index}
                    className="px-4 sm:px-6 py-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                      {/* Item Details */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          {/* Veg/Non-Veg Dot */}
                          <div
                            className={`w-4 h-4 border-2 flex items-center justify-center shrink-0 ${
                              item.isVeg
                                ? "border-green-600"
                                : "border-[#D62828]"
                            }`}
                          >
                            <div
                              className={`w-2 h-2 rounded-full ${
                                item.isVeg ? "bg-green-600" : "bg-[#D62828]"
                              }`}
                            ></div>
                          </div>

                          <h3 className="text-gray-800 font-bold text-lg leading-tight">
                            {item.name}
                          </h3>

                          {item.isNew && (
                            <span className="bg-[#E9C46A] text-[#264653] text-[10px] font-bold px-2 py-0.5 rounded">
                              NEW
                            </span>
                          )}
                        </div>

                        {item.description && (
                          <p className="text-gray-500 text-sm mt-1 pl-6 font-medium leading-snug">
                            {item.description}
                          </p>
                        )}
                      </div>

                      {/* Price */}
                      <div className="pl-6 sm:pl-0">
                        {item.isPizza ? (
                          <div className="flex items-center gap-1 bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-200 shadow-sm w-fit sm:w-auto">
                            <span className="text-gray-900 font-bold font-mono text-base">
                              ₹{item.price.split("|")[0]}
                            </span>
                            <span className="text-gray-400 text-xs">|</span>
                            <span className="text-gray-900 font-bold font-mono text-base">
                              ₹{item.price.split("|")[1]}
                            </span>
                            <span className="text-gray-400 text-xs">|</span>
                            <span className="text-gray-900 font-bold font-mono text-base">
                              ₹{item.price.split("|")[2]}
                            </span>
                          </div>
                        ) : (
                          <span className="text-[#D62828] font-black text-xl block w-fit sm:w-auto">
                            ₹{item.price}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {Object.keys(filteredMenu).length === 0 && (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
            <Pizza className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-xl font-medium">
              No items found matching "{searchTerm}"
            </p>
          </div>
        )}
      </div>

      {/* Footer / Locations */}
      <div className="bg-[#264653] text-white mt-12 pt-8 pb-6 rounded-t-3xl shadow-inner">
        <div className="max-w-5xl mx-auto px-6">
          <div
            className="flex justify-between items-center mb-6 cursor-pointer"
            onClick={() => setShowLocations(!showLocations)}
          >
            <h4 className="font-black text-2xl text-[#E9C46A] flex items-center gap-2">
              <MapPin className="w-6 h-6" /> OUR LOCATIONS & NUMBERS
            </h4>
            {showLocations ? (
              <ChevronUp className="text-[#E9C46A]" />
            ) : (
              <ChevronDown className="text-[#E9C46A]" />
            )}
          </div>

          {showLocations && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {locations.map((loc, idx) => (
                <div
                  key={idx}
                  className="bg-[#2A9D8F]/20 p-4 rounded-xl border border-[#2A9D8F]/30"
                >
                  <h5 className="font-bold text-lg mb-2 text-white border-b border-[#2A9D8F]/50 pb-1">
                    {loc.area}
                  </h5>
                  <div className="flex flex-col gap-1">
                    {loc.numbers.map((num, i) => (
                      <a
                        href={`tel:${num.replace(/[\s-]/g, "")}`}
                        key={i}
                        className="flex items-center gap-2 text-[#E9C46A] hover:text-white transition-colors text-sm font-mono"
                      >
                        <Phone className="w-3 h-3" /> {num}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="border-t border-[#2A9D8F]/30 pt-6 text-center text-xs text-gray-400">
            <p className="mb-2">
              Prices subject to change without prior notice.
            </p>

            <p className="mb-1">
              &copy; 2025 Pizza Caprina. All rights reserved.
            </p>

            <p>
              Powered by{" "}
              <a
                href="https://taplab.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2A9D8F] font-medium hover:underline"
              >
                TapLab
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaCaprinaMenu;
