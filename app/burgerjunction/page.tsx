"use client";

import { useState } from "react";

// ── Branch Data ─────────────────────────────────────────────────────────────
const branches = [
  {
    name: "Jogeshwari",
    numbers: ["99679 64553", "84337 92578"],
    emoji: "📍",
  },
  {
    name: "Mahim",
    numbers: ["73041 09905", "73041 09906"],
    emoji: "📍",
  },
  {
    name: "Madanpura",
    numbers: ["73048 53203", "73043 63203"],
    emoji: "📍",
  },
  {
    name: "Versova",
    numbers: ["73045 29730", "73044 29731"],
    emoji: "📍",
  },
];

// ── Types ───────────────────────────────────────────────────────────────────
type Portion = { label: string; price: number };
type MenuItem = {
  name: string;
  category: string;
  isVeg: boolean;
  price?: number;
  portions?: Portion[];
  desc?: string;
};

// ── Configuration ────────────────────────────────────────────────────────────
// Add item names here to disable them specifically (e.g., ["Veg. Burger"])
const unavailableItems: string[] = [];

const unavailableCategories = [""];

// ── Helpers ──────────────────────────────────────────────────────────────────
function VegBadge({ veg }: { veg: boolean }) {
  return (
    <div
      className={`w-3.5 h-3.5 min-w-[14px] rounded-sm border-2 flex items-center justify-center mt-0.5 flex-shrink-0 ${
        veg ? "border-green-600" : "border-red-600"
      }`}
    >
      <div
        className={`w-1.5 h-1.5 rounded-full ${
          veg ? "bg-green-600" : "bg-red-600"
        }`}
      />
    </div>
  );
}

// ── Raw item data ────────────────────────────────────────────────────────────
const allItems: MenuItem[] = [
  { name: "Fish Popus", price: 130, category: "Starters", isVeg: false },
  {
    name: "Fish Finger",
    category: "Starters",
    portions: [{ label: "6 pc", price: 240 }],
    isVeg: false,
  },
  {
    name: "Prawns",
    category: "Starters",
    portions: [{ label: "10 pc", price: 180 }],
    isVeg: false,
  },
  {
    name: "Crab Lollipop",
    category: "Starters",
    portions: [{ label: "6 pc", price: 240 }],
    isVeg: false,
  },
  {
    name: "Veg. Momos",
    category: "Starters",
    portions: [{ label: "6 pc", price: 100 }],
    isVeg: true,
  },
  {
    name: "Chicken Momos",
    category: "Starters",
    portions: [{ label: "6 pc", price: 140 }],
    isVeg: false,
  },
  {
    name: "Crispy Chicken Strips",
    category: "Starters",
    portions: [
      { label: "3 pcs", price: 180 },
      { label: "6 pcs", price: 320 },
      { label: "10 pcs", price: 500 },
    ],
    isVeg: false,
  },
  {
    name: "Crispy Hot Wings",
    category: "Starters",
    portions: [
      { label: "3 pcs", price: 100 },
      { label: "6 pcs", price: 200 },
      { label: "10 pcs", price: 300 },
    ],
    isVeg: false,
  },
  {
    name: "Crispy Drum Sticks",
    category: "Starters",
    portions: [
      { label: "2 pcs", price: 180 },
      { label: "4 pcs", price: 300 },
      { label: "6 pcs", price: 440 },
    ],
    isVeg: false,
  },
  {
    name: "Chicken Popcorn",
    category: "Starters",
    portions: [{ label: "15 pcs", price: 130 }],
    isVeg: false,
  },
  {
    name: "Chicken Nuggets",
    category: "Starters",
    portions: [
      { label: "6 pcs", price: 140 },
      { label: "10 pcs", price: 200 },
    ],
    isVeg: false,
  },
  {
    name: "Tandoori Strips",
    category: "Starters",
    portions: [
      { label: "3 pcs", price: 180 },
      { label: "6 pcs", price: 320 },
      { label: "10 pcs", price: 500 },
    ],
    isVeg: false,
  },
  { name: "Regular Fries", price: 80, category: "Fries", isVeg: true },
  { name: "Large Fries", price: 160, category: "Fries", isVeg: true },
  {
    name: "Popcorn & Mayo Fries Economy",
    price: 200,
    category: "Fries",
    isVeg: false,
  },
  {
    name: "Budget Bucket",
    category: "Fries",
    price: 180,
    desc: "1 Strip, 1 Hot Wing, 1 Drum Stick",
    isVeg: false,
  },
  {
    name: "Garlic Cheese Bread",
    category: "Breads & Sides",
    portions: [{ label: "6 pc", price: 70 }],
    isVeg: true,
  },
  {
    name: "Veg. Cheese Nuggets",
    category: "Breads & Sides",
    portions: [{ label: "5 pcs", price: 100 }],
    isVeg: true,
  },
  {
    name: "Nutella Waffles",
    price: 200,
    category: "Breads & Sides",
    isVeg: true,
  },
  {
    name: "Dark Chocolate Waffles",
    price: 200,
    category: "Breads & Sides",
    isVeg: true,
  },
  {
    name: "Hazelnut Brownie",
    price: 150,
    category: "Breads & Sides",
    isVeg: true,
  },
  { name: "Strawberry Mojito", price: 70, category: "Mojitos", isVeg: true },
  { name: "Watermelon Mojito", price: 70, category: "Mojitos", isVeg: true },
  { name: "Lime Mojito", price: 50, category: "Mojitos", isVeg: true },
  { name: "Extra Mayo", price: 20, category: "Extra Items", isVeg: true },
  { name: "Ex/SL Cheese", price: 20, category: "Extra Items", isVeg: true },
  { name: "Ex/Pizza Cheese", price: 30, category: "Extra Items", isVeg: true },
  { name: "Extra Masala", price: 20, category: "Extra Items", isVeg: true },
  { name: "Extra Schezwan", price: 20, category: "Extra Items", isVeg: true },
  { name: "Extra Chocolate", price: 40, category: "Extra Items", isVeg: true },
  {
    name: "Mineral Bottle",
    category: "Cold Drinks",
    portions: [
      { label: "500 ml", price: 10 },
      { label: "1 ltr", price: 20 },
    ],
    isVeg: true,
  },
  {
    name: "Pepsi",
    category: "Cold Drinks",
    portions: [
      { label: "250 ml", price: 20 },
      { label: "500 ml", price: 40 },
      { label: "1.25 Ltr", price: 70 },
    ],
    isVeg: true,
  },
  {
    name: "Mexican Chicken Burger",
    price: 140,
    category: "Burgers - Non Veg",
    isVeg: false,
  },
  {
    name: "Double Decker Chicken Burger",
    price: 180,
    category: "Burgers - Non Veg",
    isVeg: false,
  },
  {
    name: "Regular Chicken Burger",
    price: 90,
    category: "Burgers - Non Veg",
    isVeg: false,
  },
  {
    name: "Tandoori Chicken Burger",
    price: 100,
    category: "Burgers - Non Veg",
    isVeg: false,
  },
  {
    name: "Makhani Chicken Burger",
    price: 100,
    category: "Burgers - Non Veg",
    isVeg: false,
  },
  {
    name: "Schezwan Chicken Burger",
    price: 100,
    category: "Burgers - Non Veg",
    isVeg: false,
  },
  {
    name: "Seven Sauce Special Burger",
    price: 170,
    category: "Burgers - Non Veg",
    isVeg: false,
  },
  {
    name: "Chicken Harissa Burger",
    price: 100,
    category: "Burgers - Non Veg",
    isVeg: false,
  },
  {
    name: "Chicken Peri Peri Burger",
    price: 100,
    category: "Burgers - Non Veg",
    isVeg: false,
  },
  {
    name: "Chicken Teriyaki Burger",
    price: 100,
    category: "Burgers - Non Veg",
    isVeg: false,
  },
  {
    name: "Chicken BBQ Burger",
    price: 100,
    category: "Burgers - Non Veg",
    isVeg: false,
  },
  {
    name: "Egg Cheese Burger",
    price: 70,
    category: "Burgers - Egg",
    isVeg: false,
  },
  {
    name: "Egg Double Cheese Burger",
    price: 90,
    category: "Burgers - Egg",
    isVeg: false,
  },
  {
    name: "Egg Schezwan Cheese Burger",
    price: 90,
    category: "Burgers - Egg",
    isVeg: false,
  },
  {
    name: "Crispy Fish Burger",
    price: 120,
    category: "Burgers - Fish",
    isVeg: false,
  },
  {
    name: "Crispy Fish Cheese Burger",
    price: 140,
    category: "Burgers - Fish",
    isVeg: false,
  },
  {
    name: "Seven Sauce Special Fish Burger",
    price: 170,
    category: "Burgers - Fish",
    isVeg: false,
  },
  { name: "Veg. Burger", price: 70, category: "Burgers - Veg", isVeg: true },
  {
    name: "Veg. Mexican Burger",
    price: 100,
    category: "Burgers - Veg",
    isVeg: true,
  },
  {
    name: "Veg. Schezwan Burger",
    price: 90,
    category: "Burgers - Veg",
    isVeg: true,
  },
  { name: "Paneer Burger", price: 120, category: "Burgers - Veg", isVeg: true },
  {
    name: "Paneer Mexican Burger",
    price: 140,
    category: "Burgers - Veg",
    isVeg: true,
  },
  {
    name: "Paneer Cheese Burger",
    price: 140,
    category: "Burgers - Veg",
    isVeg: true,
  },
  {
    name: "Regular Crispy Wrap",
    price: 100,
    category: "Wraps - Non Veg",
    isVeg: false,
  },
  {
    name: "Tandoori Wrap",
    price: 120,
    category: "Wraps - Non Veg",
    isVeg: false,
  },
  {
    name: "Spicy Crispy Wrap",
    price: 120,
    category: "Wraps - Non Veg",
    isVeg: false,
  },
  {
    name: "Nuggets Wrap",
    price: 140,
    category: "Wraps - Non Veg",
    isVeg: false,
  },
  {
    name: "Seven Sauce Special Wrap",
    price: 150,
    category: "Wraps - Non Veg",
    isVeg: false,
  },
  {
    name: "Mexican Cheese Wrap",
    price: 150,
    category: "Wraps - Non Veg",
    isVeg: false,
  },
  {
    name: "Makhni Fish Wrap",
    price: 140,
    category: "Wraps - Fish",
    isVeg: false,
  },
  {
    name: "Cheese Fish Wrap",
    price: 140,
    category: "Wraps - Fish",
    isVeg: false,
  },
  {
    name: "Schezwan Fish Wrap",
    price: 140,
    category: "Wraps - Fish",
    isVeg: false,
  },
  { name: "Veg. Wrap", price: 60, category: "Wraps - Veg", isVeg: true },
  {
    name: "Veg. Schezwan Wrap",
    price: 70,
    category: "Wraps - Veg",
    isVeg: true,
  },
  {
    name: "Veg. Paneer Wrap",
    price: 100,
    category: "Wraps - Veg",
    isVeg: true,
  },
  {
    name: "Paneer Mexican Wrap",
    price: 120,
    category: "Wraps - Veg",
    isVeg: true,
  },
  {
    name: "Chicken Cheese Pizza (8 inch)",
    price: 220,
    category: "Pizza",
    isVeg: false,
  },
  {
    name: "Makhani Chicken Cheese Pizza (8 inch)",
    price: 220,
    category: "Pizza",
    isVeg: false,
  },
  {
    name: "Seven Sauce Cheese Pizza (8 inch)",
    price: 260,
    category: "Pizza",
    isVeg: false,
  },
  {
    name: "Tandoori Cheese Pizza (8 inch)",
    price: 250,
    category: "Pizza",
    isVeg: false,
  },
  {
    name: "Veg. Cheese Pizza (8 inch)",
    price: 170,
    category: "Pizza",
    isVeg: true,
  },
  {
    name: "Makhani Cheese Pizza (8 inch)",
    price: 190,
    category: "Pizza",
    isVeg: true,
  },
  {
    name: "Seven Sauce Cheese Pizza (8 inch)",
    price: 250,
    category: "Pizza",
    isVeg: true,
  },
  {
    name: "Paneer Cheese Pizza (8 inch)",
    price: 250,
    category: "Pizza",
    isVeg: true,
  },
  {
    name: "Chicken Burger Meal",
    price: 170,
    category: "Meals",
    desc: "1 Chicken Burger + Regular Fries + Pepsi 250ml",
    isVeg: false,
  },
  {
    name: "Mexican Meal",
    price: 220,
    category: "Meals",
    desc: "1 Mexican Burger + Regular Fries + Pepsi 250ml",
    isVeg: false,
  },
  {
    name: "Pizza Meal",
    price: 310,
    category: "Meals",
    desc: "1 Chicken Pizza + Regular Fries + Pepsi 250ml",
    isVeg: false,
  },
  {
    name: "Chicken Family Pack Large Meal",
    price: 700,
    category: "Meals",
    desc: "4 Burgers + 4 Regular Fries + 4 Pepsi 250ml",
    isVeg: false,
  },
  {
    name: "Veg. Meal",
    price: 160,
    category: "Meals",
    desc: "1 Regular Veg Burger + Regular Fries + Pepsi 250ml",
    isVeg: true,
  },
  {
    name: "Paneer Meal",
    price: 210,
    category: "Meals",
    desc: "1 Paneer Burger + Regular Fries + Pepsi 250ml",
    isVeg: true,
  },
  {
    name: "Veg. Family Pack Large Meal",
    price: 600,
    category: "Meals",
    desc: "4 Burgers + 4 Regular Fries + 4 Pepsi 250ml",
    isVeg: true,
  },
  {
    name: "Small Family Bucket",
    price: 700,
    category: "Family Buckets",
    desc: "6 Hot Wings + 6 Strips + 2 Drumsticks",
    isVeg: false,
  },
  {
    name: "Large Family Bucket",
    price: 1300,
    category: "Family Buckets",
    desc: "12 Hot Wings + 12 Strips + 4 Drumsticks",
    isVeg: false,
  },
  {
    name: "ALL IN ONE MEALS",
    price: 1850,
    category: "All In One",
    desc: "4 Chicken Mix Burger · 1 Large Fries · Chicken Popcorn 15 pcs · Chicken Nuggets 10 pcs · 4 Drumstick · 4 Chicken Strips · 1 Chicken Cheese Pizza · 1.25 Ltr Pepsi",
    isVeg: false,
  },
];

const categories = [
  "All",
  "Starters",
  "Fries",
  "Breads & Sides",
  "Mojitos",
  "Extra Items",
  "Cold Drinks",
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

// ── Item Card ────────────────────────────────────────────────────────────────
function ItemCard({ item }: { item: MenuItem }) {
  const veg = item.isVeg;
  const isCategoryUnavailable = unavailableCategories.includes(item.category);
  const isUnavailable =
    unavailableItems.some(
      (u) => item.name.trim().toLowerCase() === u.trim().toLowerCase()
    ) || isCategoryUnavailable;
  const hasPortions = item.portions && item.portions.length > 0;

  return (
    <div
      className={`bg-amber-50 border-2 rounded-xl p-3 flex flex-col gap-2 transition-all duration-150 ${
        isUnavailable
          ? "border-stone-200 opacity-60"
          : "border-amber-100 hover:border-amber-400 hover:shadow-md"
      }`}
    >
      <div className="flex items-start gap-2">
        <VegBadge veg={veg} />
        <div className="flex-1">
          <p className="text-sm font-bold text-stone-800 leading-snug">
            {item.name}
          </p>
          {item.desc && (
            <p className="text-xs text-amber-800 leading-snug mt-0.5">
              {item.desc}
            </p>
          )}
        </div>
        {isUnavailable && (
          <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-1 rounded flex-shrink-0">
            N/A
          </span>
        )}
      </div>

      {/* Portions table */}
      {hasPortions && !isUnavailable && (
        <div className="mt-auto pt-1 border-t border-amber-200">
          {item.portions!.map((p) => (
            <div
              key={p.label}
              className="flex items-center justify-between py-0.5"
            >
              <span className="text-xs text-stone-500 font-medium">
                {p.label}
              </span>
              <span className="font-serif text-xl font-bold text-amber-700">
                ₹{p.price}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Single price */}
      {!hasPortions && !isUnavailable && item.price !== undefined && (
        <div className="mt-auto pt-1">
          <span className="font-serif text-xl font-bold text-amber-700">
            ₹{item.price}
          </span>
        </div>
      )}
    </div>
  );
}

// ── Section Block ─────────────────────────────────────────────────────────────
function SectionBlock({
  category,
  items,
}: {
  category: string;
  items: MenuItem[];
}) {
  if (items.length === 0) return null;
  const isCategoryUnavailable = unavailableCategories.includes(category);

  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <h2 className="font-serif text-xl font-bold text-amber-400 whitespace-nowrap">
          {category}
        </h2>
        {isCategoryUnavailable && (
          <span className="text-xs font-bold text-red-500 bg-red-900/30 border border-red-800 px-2 py-0.5 rounded">
            Currently Unavailable
          </span>
        )}
        <div className="flex-1 h-px bg-amber-900" />
        <span className="text-xs text-amber-800 font-bold whitespace-nowrap">
          {items.length} items
        </span>
      </div>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 ${
          isCategoryUnavailable ? "opacity-70" : ""
        }`}
      >
        {items.map((item, idx) => (
          <ItemCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
}

// ── Branch Card ───────────────────────────────────────────────────────────────
function BranchCard({ branch }: { branch: (typeof branches)[0] }) {
  return (
    <div className="bg-stone-900 border border-amber-800 rounded-xl p-4 flex flex-col gap-2">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
        <h3 className="font-serif text-amber-400 font-bold text-base tracking-wide">
          {branch.name}
        </h3>
      </div>
      <div className="flex flex-col gap-1.5 mt-1">
        {branch.numbers.map((num) => (
          <a
            key={num}
            href={`tel:${num.replace(/\s/g, "")}`}
            className="flex items-center gap-2 bg-amber-700 hover:bg-amber-600 text-stone-900 font-bold rounded-lg px-3 py-2 text-sm transition-colors"
          >
            <span>📞</span>
            <span>{num}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [vegOnly, setVegOnly] = useState(false);
  const [catsExpanded, setCatsExpanded] = useState(false);

  const PREVIEW_COUNT = 6;

  const filteredItems = allItems.filter((item) => {
    const catMatch =
      selectedCategory === "All" || item.category === selectedCategory;
    const vegMatch = !vegOnly || item.isVeg;
    return catMatch && vegMatch;
  });

  // --- LOGIC FIX: Sort unavailable categories to the bottom ---
  const allSections =
    selectedCategory === "All"
      ? categories
          .filter((cat) => cat !== "All")
          .map((cat) => ({
            category: cat,
            items: filteredItems.filter((item) => item.category === cat),
          }))
          .filter((s) => s.items.length > 0)
      : [{ category: selectedCategory, items: filteredItems }];

  const availableSections = allSections.filter(
    (s) => !unavailableCategories.includes(s.category)
  );
  const unavailableSections = allSections.filter((s) =>
    unavailableCategories.includes(s.category)
  );

  const groupedSections = [...availableSections, ...unavailableSections];

  const previewCats = categories.slice(0, PREVIEW_COUNT);
  const extraCats = categories.slice(PREVIEW_COUNT);

  return (
    <div
      className="min-h-screen p-4 md:p-6"
      style={{
        background: "#3d1f0a",
        backgroundImage: `
          repeating-linear-gradient(90deg, rgba(0,0,0,0.05) 0px, transparent 2px, transparent 40px, rgba(0,0,0,0.03) 42px, transparent 44px),
          repeating-linear-gradient(0deg, rgba(0,0,0,0.04) 0px, transparent 1px, transparent 80px, rgba(0,0,0,0.03) 81px, transparent 83px)
        `,
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          className="rounded-2xl border-2 border-amber-700 p-6 mb-4 text-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #5a2d0c 0%, #3d1f0a 100%)",
          }}
        >
          <h1 className="font-serif text-4xl md:text-5xl font-black text-amber-400 tracking-widest drop-shadow-lg">
            🍔 APNA POINT 🍔
          </h1>
          <div className="flex items-center gap-3 my-3 justify-center">
            <div className="flex-1 h-px bg-amber-700 max-w-[80px]" />
            <span className="text-amber-700 text-sm">✦</span>
            <div className="flex-1 h-px bg-amber-700 max-w-[80px]" />
          </div>
          <p className="text-sm font-bold tracking-[6px] text-amber-200 uppercase">
            Burger Junction
          </p>
          <p className="text-xs text-amber-900 tracking-[3px] mt-1 uppercase">
            All In One Meals · Est. 2021
          </p>
        </div>

        {/* Delivery Notice */}
        <div className="bg-amber-700 rounded-lg px-4 py-2.5 text-center text-sm font-bold text-amber-50 mb-4 tracking-wide">
          📦 Orders below ₹300 — Delivery ₹30/- extra &nbsp;·&nbsp; Available on
          Zomato & Swiggy
        </div>

        {/* Branch Contacts */}
        <div className="bg-stone-950 border-2 border-amber-800 rounded-2xl p-4 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-serif text-amber-400 font-bold text-base">
              📞 Order for Home Delivery
            </span>
            <div className="flex-1 h-px bg-amber-900" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {branches.map((branch) => (
              <BranchCard key={branch.name} branch={branch} />
            ))}
          </div>
          <p className="text-center text-xs text-amber-900 mt-3 tracking-wide">
            burgerjunction2021@gmail.com &nbsp;·&nbsp; @burgerjunction2021
          </p>
        </div>

        {/* Veg Toggle */}
        <div className="flex items-center justify-center gap-3 mb-1">
          <span
            className={`text-sm font-bold flex items-center gap-1.5 transition-opacity text-red-400 ${
              vegOnly ? "opacity-40" : "opacity-100"
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block" />
            Non-Veg
          </span>
          <button
            onClick={() => setVegOnly(!vegOnly)}
            className="relative w-12 h-6 rounded-full border-2 border-amber-700 bg-stone-900 flex-shrink-0 focus:outline-none"
            aria-label="Toggle veg only"
          >
            <span
              className={`absolute top-0.5 w-4 h-4 rounded-full transition-all duration-200 ${
                vegOnly ? "left-6 bg-amber-400" : "left-0.5 bg-amber-700"
              }`}
            />
          </button>
          <span
            className={`text-sm font-bold flex items-center gap-1.5 transition-opacity text-green-400 ${
              vegOnly ? "opacity-100" : "opacity-40"
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-green-600 inline-block" />
            Veg Only
          </span>
        </div>
        <p className="text-center text-xs text-amber-900 mb-4 tracking-wide">
          {vegOnly ? "Showing veg & egg items only" : "Showing all items"}
        </p>

        {/* Categories */}
        <div className="bg-stone-900 border-2 border-amber-900 rounded-xl p-3 mb-6">
          <div className="flex justify-between items-center mb-3">
            <span className="font-serif text-amber-400 font-bold text-base">
              ☰ Categories
            </span>
            <button
              onClick={() => setCatsExpanded(!catsExpanded)}
              className="bg-amber-700 hover:bg-amber-600 text-stone-900 font-bold text-xs px-3 py-1 rounded-lg uppercase tracking-wide transition-colors"
            >
              {catsExpanded ? "Collapse ▲" : `See All (${categories.length}) ▼`}
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {previewCats.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-3.5 py-1 text-xs font-bold border transition-all duration-150 ${
                  selectedCategory === cat
                    ? "bg-amber-400 border-amber-400 text-stone-900"
                    : "bg-stone-800 border-stone-700 text-amber-200 hover:border-amber-700 hover:text-amber-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          {catsExpanded && (
            <div className="flex flex-wrap gap-2 mt-2 pt-2 border-t border-stone-800">
              {extraCats.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-3.5 py-1 text-xs font-bold border transition-all duration-150 ${
                    selectedCategory === cat
                      ? "bg-amber-400 border-amber-400 text-stone-900"
                      : "bg-stone-800 border-stone-700 text-amber-200 hover:border-amber-700 hover:text-amber-400"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Items */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 text-amber-900 text-base">
            No items found in this category
          </div>
        ) : (
          groupedSections.map((section, index) => {
            // Logic to show a "Sold Out" header when the unavailable items start
            const isFirstUnavailable =
              unavailableCategories.includes(section.category) &&
              (index === 0 ||
                !unavailableCategories.includes(
                  groupedSections[index - 1].category
                ));

            return (
              <div key={section.category}>
                {isFirstUnavailable && (
                  <div className="text-center my-10 border-t border-amber-900/30 pt-10">
                    <p className="text-amber-900 text-xs font-bold uppercase tracking-[4px] opacity-60">
                      Currently Not Available
                    </p>
                  </div>
                )}
                <SectionBlock
                  category={section.category}
                  items={section.items}
                />
              </div>
            );
          })
        )}

        {/* Footer */}
        <div className="mt-8 border-t-2 border-dashed border-amber-900 pt-6 text-center">
          <p className="font-serif text-amber-400 text-base mb-1.5">
            🍔 Apna Point — Burger Junction
          </p>
          <p className="text-amber-200 text-xs mb-1 tracking-wide">
            📍 Jogeshwari · Mahim · Madanpura · Versova
          </p>
          <p className="text-amber-900 text-xs">burgerjunction2021@gmail.com</p>
          <p className="text-xs text-gray-600 mt-2">
            Powered by{" "}
            <a
              href="https://taplab.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500 font-semibold hover:underline"
            >
              TapLab
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}