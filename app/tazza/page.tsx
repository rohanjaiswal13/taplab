"use client";

import { useState, useEffect } from "react";
import { Phone, Clock, MapPin, ArrowUp } from "lucide-react";

// 1. Define Types
type PriceObject = {
  half?: number;
  full?: number;
  veg?: number;
  paneer?: number;
  non_veg?: number;
  egg?: number;
};

type Price = number | PriceObject;

interface MenuItem {
  name: string;
  price: Price;
  veg?: boolean;
  description?: string;
  isEgg?: boolean;
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
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle Scroll to Top visibility
  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollTop && window.pageYOffset > 400) {
        setShowScrollTop(true);
      } else if (showScrollTop && window.pageYOffset <= 400) {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScrollTop]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // 2. Menu Data
  const menuData: Record<string, Category> = {
    soups: {
      title: "Soups",
      icon: "🍲",
      items: [
        { name: "Sweet Corn", price: { veg: 130, non_veg: 150 } },
        { name: "Manchow", price: { veg: 130, non_veg: 150 } },
        { name: "Hot & Sour", price: { veg: 130, non_veg: 150 } },
        { name: "Tomato", veg: true, price: 120 },
        { name: "Cream of Veg.", veg: true, price: 120 },
        { name: "Cream of Chicken", veg: false, price: 150 },
      ],
    },
    chinese_starter_veg: {
      title: "Starters (Veg/Paneer)",
      icon: "🌶️",
      items: [
        { name: "Veg. Spring Roll", veg: true, price: 100 },
        { name: "Paneer Spring Roll", veg: true, price: 140 },
        { name: "Veg. Chilly", veg: true, price: 180 },
        { name: "Veg. Manchurian", veg: true, price: 180 },
        { name: "Crispy Veg.", veg: true, price: 200 },
        { name: "Veg. Schezwan", veg: true, price: 190 },
        { name: "Mushroom Chilly", veg: true, price: 200 },
        { name: "Paneer Chilly (Dry)", veg: true, price: 250 },
        { name: "Paneer Manchurian", veg: true, price: 250 },
        { name: "Threaded Cottage Cheese", veg: true, price: 250 },
        { name: "Paneer Peri-Peri", veg: true, price: 260 },
        { name: "Crispy Paneer", veg: true, price: 260 },
        { name: "Crispy Pepper Paneer", veg: true, price: 260 },
        { name: "Paneer Schezwan", veg: true, price: 250 },
      ],
    },
    chinese_starter_non_veg: {
      title: "Starters (Non Veg)",
      icon: "🍗",
      items: [
        { name: "Chicken Black Pepper", veg: false, price: 280 },
        { name: "Chicken Black Bean", veg: false, price: 280 },
        { name: "Chicken Hoisin", veg: false, price: 280 },
        { name: "Chicken Oyster", veg: false, price: 280 },
        { name: "Crispy Chicken", veg: false, price: 270 },
        { name: "Syboo Chicken", veg: false, price: 270 },
        { name: "Red Chilly Pepper Chicken", veg: false, price: 270 },
        { name: "Threaded Chicken", veg: false, price: 270 },
        { name: "Chicken Lollypop (6 Pcs)", veg: false, price: 200 },
        { name: "Chicken Spring Roll", veg: false, price: 120 },
        { name: "Dragon Chicken", veg: false, price: 270 },
        { name: "Chicken Chilly", veg: false, price: 250 },
        { name: "Chicken Manchurian", veg: false, price: 250 },
        { name: "Garlic Chicken", veg: false, price: 250 },
        { name: "Schezwan Chicken", veg: false, price: 250 },
        { name: "Chicken Tikka Chilly", veg: false, price: 270 },
        { name: "Chicken Schezwan Lollypop", veg: false, price: 270 },
        { name: "Chicken Peri-Peri", veg: false, price: 270 },
      ],
    },
    main_course: {
      title: "Main Course",
      icon: "🍛",
      items: [
        {
          name: "TAZZA Special Chilly",
          veg: false,
          price: 200,
        },
        { name: "Chilly", price: { veg: 160, paneer: 190, non_veg: 180 } },
        { name: "Manchurian", price: { veg: 160, paneer: 190, non_veg: 180 } },
        { name: "Garlic", price: { veg: 160, paneer: 190, non_veg: 180 } },
        { name: "Shanghai", price: { veg: 170, paneer: 190, non_veg: 180 } },
        { name: "Schezwan", price: { veg: 170, paneer: 190, non_veg: 180 } },
        { name: "Hong Kong", price: { veg: 170, paneer: 190, non_veg: 180 } },
        { name: "Mushroom Chilly", veg: true, price: 170 },
      ],
    },
    rice_noodles: {
      title: "Rice & Noodles",
      icon: "🍜",
      items: [
        { name: "Fried Rice", price: { veg: 160, paneer: 190, non_veg: 180 } },
        { name: "Egg Fried Rice", veg: false, isEgg: true, price: 180 },
        {
          name: "Garlic Fried Rice",
          price: { veg: 170, paneer: 200, non_veg: 190 },
        },
        {
          name: "Schezwan Rice",
          price: { veg: 170, paneer: 210, non_veg: 210 },
        },
        {
          name: "Hong Kong Rice",
          price: { veg: 170, paneer: 210, non_veg: 210 },
        },
        {
          name: "Shanghai Rice",
          price: { veg: 170, paneer: 210, non_veg: 210 },
        },
        {
          name: "Hakka Noodles",
          price: { veg: 170, non_veg: 190 },
        },
        { name: "Egg Hakka Noodles", veg: false, isEgg: true, price: 190 },
        {
          name: "Malaysian Noodles",
          price: { veg: 170, non_veg: 200 },
        },
        {
          name: "Schezwan Noodles",
          price: { veg: 180, non_veg: 210 },
        },
        {
          name: "Hong Kong Noodles",
          price: { veg: 170, non_veg: 210 },
        },
        {
          name: "American Chopsuey",
          price: { veg: 200, non_veg: 210 },
        },
        { name: "Burnt Chilly Fried Rice", price: { veg: 200, non_veg: 220 } },
      ],
    },
    combination: {
      title: "Combination",
      icon: "🍱",
      items: [
        {
          name: "Triple Schezwan F. Rice",
          price: { veg: 250, paneer: 300, non_veg: 300 },
        },
        {
          name: "TAZZA Special Rice",
          price: { veg: 250, non_veg: 300 },
        },
        {
          name: "Chilly Fried Rice",
          price: { veg: 250, paneer: 300, non_veg: 300 },
        },
        {
          name: "Manchurian Fried Rice",
          price: { veg: 250, paneer: 300, non_veg: 300 },
        },
        {
          name: "Combination Noodles",
          price: { veg: 250, non_veg: 300 },
        },
        { name: "Chicken Crispy Packing Rice", veg: false, price: 300 },
      ],
    },
    chaat: {
      title: "Chaat (3:30 PM - 10:30 PM)",
      icon: "🥣",
      items: [
        { name: "Pani Puri", veg: true, price: 60 },
        { name: "Bhel Puri", veg: true, price: 70 },
        { name: "Sev Puri", veg: true, price: 70 },
        { name: "Dahi Puri", veg: true, price: 90 },
        { name: "Dahi Wada", veg: true, price: 90 },
        { name: "Ragda Pattice", veg: true, price: 70 },
        { name: "Kachori Chaat", veg: true, price: 90 },
        { name: "Dahi Pakoda Chaat", veg: true, price: 90 },
        { name: "Papdi Chaat", veg: true, price: 90 },
        { name: "Ragda Puri", veg: true, price: 70 },
      ],
    },
    pizza: {
      title: "Pizza",
      icon: "🍕",
      items: [
        {
          name: "Paneer Tikka",
          veg: true,
          description: "Tandoor Paneer, Coriander, G. Chilly, Cheese",
          price: 300,
        },
        {
          name: "Spicy Schezwan",
          veg: true,
          description:
            "Chopped Onion, Capsicum, Baby Corn, Hot Schezwan Sauce, Cheese",
          price: 250,
        },
        {
          name: "Classic Veg Pizza",
          veg: true,
          description: "Onion, Capsicum, Tomato, American Corn, Olives, Cheese",
          price: 260,
        },
        {
          name: "Corn Pizza",
          veg: true,
          description: "American Corn, Cheese",
          price: 220,
        },
        {
          name: "Cheese Pizza",
          veg: true,
          description: "Only Cheese",
          price: 200,
        },
        {
          name: "TAZZA's Pizza",
          veg: false,
          description:
            "Mushroom, Smoked Chicken, Baby Corn, Black Olives, Roasted Capsicum, Cheese",
          price: 330,
        },
        {
          name: "Chicken Chilly Pizza",
          veg: false,
          description: "Chicken, Capsicum, Chilly, Cheese",
          price: 300,
        },
        {
          name: "Chicken Manchurian Pizza",
          veg: false,
          description: "Chicken, Garlic, Ginger, Soya Sauce, Cheese",
          price: 300,
        },
        {
          name: "Barbeque Chicken Pizza",
          veg: false,
          description: "BBQ Chicken, Onion, Mushroom, Capsicum, Cheese",
          price: 300,
        },
        {
          name: "Mexican Pizza",
          veg: false,
          description: "Hot Chicken, American Corn, Capsicum, Mushroom, Cheese",
          price: 300,
        },
        {
          name: "Chicken Tikka Pizza",
          veg: false,
          description: "Chicken Tikka, Coriander, G. Chilly, Cheese",
          price: 300,
        },
        { name: "Chicken Double Cheese Pizza", veg: false, price: 330 },
      ],
    },
    burger: {
      title: "Burgers",
      icon: "🍔",
      items: [
        { name: "Chi. Burger with Cheese", veg: false, price: 150 },
        { name: "Chi. Steak Burger with Cheese", veg: false, price: 150 },
        { name: "Chi. Burger", veg: false, price: 130 },
        { name: "Chi. Steak Burger", veg: false, price: 130 },
        { name: "Veg. Burger with Cheese", veg: true, price: 120 },
        { name: "Veg. Burger", veg: true, price: 110 },
      ],
    },
    sandwich: {
      title: "Sandwiches",
      icon: "🥪",
      items: [
        { name: "Veg. Club Sandwich", veg: true, price: 130 },
        { name: "Paneer Tikka Sandwich", veg: true, price: 120 },
        { name: "Veg. Cheese Sandwich", veg: true, price: 110 },
        { name: "Cheese Toast Sandwich", veg: true, price: 100 },
        { name: "Veg. Sandwich", veg: true, price: 90 },
        { name: "TAZZA Special Sandwich", veg: false, price: 160 },
        { name: "Chicken Tikka Sandwich", veg: false, price: 130 },
        { name: "Chicken Chilli Sandwich", veg: false, price: 130 },
        { name: "Chicken Manchurian Sandwich", veg: false, price: 130 },
        { name: "Chicken Club Sandwich", veg: false, price: 150 },
        { name: "Chicken Cheese Sandwich", veg: false, price: 120 },
        { name: "Chicken Sandwich", veg: false, price: 110 },
        { name: "Eggo Macho Sandwich", veg: false, price: 100 },
        { name: "Omelet Cheese Sandwich", veg: false, price: 110 },
        { name: "Omelet Sandwich", veg: false, price: 100 },
        { name: "Double Melting TAZZA Sandwich", veg: false, price: 130 },
      ],
    },
    wraps: {
      title: "Wraps & Paranthas",
      icon: "🌯",
      items: [
        { name: "Chi. Reshmi Roll", veg: false, price: 130 },
        { name: "Chi. Tandoori Roll", veg: false, price: 130 },
        { name: "Butter Parantha", veg: true, price: 30 },
        { name: "Aloo Parantha", veg: true, price: 70 },
        { name: "Methi Parantha", veg: true, price: 50 },
        { name: "Paneer Parantha", veg: true, price: 80 },
      ],
    },
    sub_roll: {
      title: "Sub Rolls",
      icon: "🥖",
      items: [
        { name: "Paneer Tikka Roll", veg: true, price: 130 },
        { name: "Chi. Mayonnaise Roll", veg: false, price: 130 },
        { name: "Chi. Tikka Roll", veg: false, price: 130 },
        { name: "Chi. BBQ Roll", veg: false, price: 130 },
        { name: "Chi. Chilly Roll", veg: false, price: 130 },
        { name: "Chi. Manchurian Roll", veg: false, price: 130 },
        { name: "Veg. Roll with Cheese", veg: false, price: 100 },
        { name: "Veg. Roll", veg: false, price: 80 },
      ],
    },
    snacks: {
      title: "Snacks",
      icon: "🍟",
      items: [
        { name: "Chinese Bhel", veg: true, price: 100 },
        { name: "French Fries", veg: true, price: 100 },
        { name: "Garlic Bread (4 sticks)", veg: true, price: 60 },
        { name: "Cheese Garlic Bread (4 pcs)", veg: true, price: 80 },
        { name: "Tomato Cheese Bruschetta (4 pcs)", veg: true, price: 90 },
        { name: "Cory Cheese Garlic Bread (4 pcs)", veg: true, price: 90 },
        { name: "Peri Peri French Fries", veg: true, price: 120 },
      ],
    },
    kababs_biryani: {
      title: "Kababs & Pulao",
      icon: "🍚",
      items: [
        { name: "Chicken Tikka (6 pcs)", veg: false, price: 200 },
        { name: "Reshmi Kabab (6 pcs)", veg: false, price: 200 },
        { name: "Chicken Leg/Breast", veg: false, price: 140 },
        {
          name: "Chicken Tandoori",
          veg: false,
          price: { half: 240, full: 400 },
        },
        {
          name: "Chicken Shez. Tandoori",
          veg: false,
          price: { half: 260, full: 450 },
        },
        { name: "Chicken Shez. Leg/Breast", veg: false, price: 170 },
        { name: "Chicken Shez. Tikka", veg: false, price: 240 },
        { name: "Chicken Pulao", veg: false, price: 180 },
        { name: "Veg Pulao", veg: true, price: 160 },
        { name: "Paneer Pulao", veg: true, price: 200 },
      ],
    },
    fresh_fruit_juices: {
      title: "Fresh Fruit Juices",
      icon: "🧃",
      items: [
        { name: "Mosambi / Orange", veg: true, price: 100 },
        { name: "Ganga Jamuna", veg: true, price: 100 },
        { name: "Watermelon", veg: true, price: 100 },
        { name: "Pineapple", veg: true, price: 100 },
        { name: "Grapes", veg: true, price: 100 },
        { name: "Apple / Cocktail", veg: true, price: 120 },
        { name: "Pomegranate", veg: true, price: 140 },
        { name: "Fresh Lime", veg: true, price: 60 },
      ],
    },
    milk_shakes: {
      title: "Milk Shakes & Falooda",
      icon: "🥤",
      items: [
        { name: "Banana / Chickoo", veg: true, price: 120 },
        { name: "Chickoo", veg: true, price: 120 },
        { name: "Apple", veg: true, price: 130 },
        { name: "Vanilla / Strawberry / Rose", veg: true, price: 120 },
        { name: "Chocolate / Butter Scotch", veg: true, price: 120 },
        { name: "Cold Coffee", veg: true, price: 120 },
        { name: "Cold Coffee with Ice Cream", veg: true, price: 140 },
        { name: "Mango / Kesar Pista", veg: true, price: 140 },
        { name: "Dry Fruit", veg: true, price: 150 },
        { name: "Butter Milk", veg: true, price: 60 },
        { name: "Lassi Sweet/Salted", veg: true, price: 80 },
        { name: "Fruit Salad with Ice Cream", veg: true, price: 120 },
        { name: "Malai Kulfi Milkshake", veg: true, price: 150 },
        { name: "Kesar Kulfi Milkshake", veg: true, price: 170 },
        { name: "Royal Falooda", veg: true, price: 130 },
        { name: "Kesar Falooda", veg: true, price: 140 },
        { name: "TAZZA Special Falooda", veg: true, price: 160 },
        { name: "Malai Kulfi Falooda", veg: true, price: 160 },
        { name: "TAZZA Special Kulfi Falooda", veg: true, price: 180 },
      ],
    },
    ice_cream: {
      title: "Ice Cream",
      icon: "🍦",
      items: [
        { name: "Vanilla / Strawberry", veg: true, price: 50 },
        { name: "Chocolate / Butter Scotch", veg: true, price: 60 },
        { name: "Kesar Pista", veg: true, price: 60 },
      ],
    },
  };

  const categories = [
    { id: "all", name: "All Items", icon: "🍽️" },
    { id: "soups", name: "Soups", icon: "🍲" },
    { id: "chinese_starter_veg", name: "Starters (Veg)", icon: "🥦" },
    { id: "chinese_starter_non_veg", name: "Starters (Non-Veg)", icon: "🍗" },
    { id: "main_course", name: "Main Course", icon: "🍛" },
    { id: "rice_noodles", name: "Rice & Noodles", icon: "🍜" },
    { id: "combination", name: "Combination", icon: "🍱" },
    { id: "chaat", name: "Chaat", icon: "🥣" },
    { id: "pizza", name: "Pizza", icon: "🍕" },
    { id: "burger", name: "Burgers", icon: "🍔" },
    { id: "sandwich", name: "Sandwiches", icon: "🥪" },
    { id: "wraps", name: "Wraps/Paranthas", icon: "🌯" },
    { id: "sub_roll", name: "Sub Rolls", icon: "🥖" },
    { id: "kababs_biryani", name: "Kababs & Biryani", icon: "🍚" },
    { id: "snacks", name: "Snacks", icon: "🍟" },
    { id: "fresh_fruit_juices", name: "Juices", icon: "🧃" },
    { id: "milk_shakes", name: "Shakes & Falooda", icon: "🥤" },
    { id: "ice_cream", name: "Ice Cream", icon: "🍦" },
  ];

  const filteredMenu = () => {
    const items: FilteredItem[] = [];

    Object.keys(menuData).forEach((categoryKey) => {
      if (selectedCategory === "all" || selectedCategory === categoryKey) {
        const category = menuData[categoryKey];
        category.items.forEach((item) => {
          items.push({ ...item, category: category.title, categoryKey });
        });
      }
    });

    return items;
  };

  const renderPrice = (price: Price) => {
    if (typeof price === "number") {
      return `₹${price}`;
    } else if (typeof price === "object") {
      // Half / Full logic
      if ("half" in price && "full" in price) {
        return (
          <div className="flex flex-col gap-1 text-sm">
            <span className="text-amber-700 font-bold">
              Half: ₹{price.half}
            </span>
            <span className="text-amber-900 font-bold">
              Full: ₹{price.full}
            </span>
          </div>
        );
      }

      // Veg / Paneer / Non-Veg logic
      if ("veg" in price || "non_veg" in price || "paneer" in price) {
        return (
          <div className="flex flex-col gap-1 text-sm mt-1">
            {price.veg && (
              <div className="flex justify-between items-center w-full max-w-[140px]">
                <span className="text-green-700 font-medium">Veg</span>
                <span className="font-bold">₹{price.veg}</span>
              </div>
            )}
            {price.paneer && (
              <div className="flex justify-between items-center w-full max-w-[140px]">
                <span className="text-orange-600 font-medium">Paneer</span>
                <span className="font-bold">₹{price.paneer}</span>
              </div>
            )}
            {price.non_veg && (
              <div className="flex justify-between items-center w-full max-w-[140px]">
                <span className="text-red-700 font-medium">N.Veg</span>
                <span className="font-bold">₹{price.non_veg}</span>
              </div>
            )}
          </div>
        );
      }
    }
    return `₹${price}`;
  };

  // Helper to render Veg/Non-Veg icons
  const renderIcon = (item: MenuItem) => {
    if (
      typeof item.price === "object" &&
      "veg" in item.price &&
      "non_veg" in item.price
    ) {
      return (
        <div className="flex gap-1">
          <span className="w-5 h-5 border-2 border-green-600 flex items-center justify-center bg-white">
            <span className="w-2.5 h-2.5 bg-green-600 rounded-full"></span>
          </span>
          <span className="w-5 h-5 border-2 border-red-600 flex items-center justify-center bg-white">
            <span className="w-2.5 h-2.5 bg-red-600 rounded-full"></span>
          </span>
        </div>
      );
    }

    if (item.veg === true) {
      return (
        <span className="w-5 h-5 border-2 border-green-600 flex items-center justify-center bg-white">
          <span className="w-2.5 h-2.5 bg-green-600 rounded-full"></span>
        </span>
      );
    }

    if (item.veg === false) {
      return (
        <span className="w-5 h-5 border-2 border-red-600 flex items-center justify-center bg-white">
          <span className="w-2.5 h-2.5 bg-red-600 rounded-full"></span>
        </span>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* HEADER Section (Relative, not Fixed) */}
      <div className="relative bg-gradient-to-r from-amber-800 via-orange-700 to-red-800 text-white shadow-2xl overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4 relative z-10">
          <div className="text-center mb-4">
            <h1 className="text-5xl font-extrabold mb-1 tracking-wide font-serif text-yellow-100 drop-shadow-lg">
              TAZZA
            </h1>
            <p className="text-xl italic opacity-90 font-light tracking-wider">
              Fast Food & means Fresh
            </p>
            <div className="flex justify-center gap-4 mt-2 text-sm font-bold tracking-widest uppercase">
              <span className="bg-green-700 px-2 py-0.5 rounded text-white">
                Veg
              </span>
              <span className="text-white opacity-60">&</span>
              <span className="bg-red-700 px-2 py-0.5 rounded text-white">
                Non Veg
              </span>
            </div>
          </div>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm bg-black/20 p-3 rounded-xl backdrop-blur-sm border border-white/10">
            <div className="flex flex-col items-center md:items-start gap-1">
              <div className="flex items-center gap-2 font-bold text-yellow-200 uppercase tracking-wider mb-1">
                <Phone className="w-3 h-3 md:w-4 md:h-4" /> Order Now
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                <div>022 2447 2222</div>
                <div>022 2445 2333</div>
                <div>9892 31 83 15</div>
                <div>9167 77 04 61</div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center text-center hidden md:flex">
              <div className="bg-white/90 text-red-800 font-bold px-4 py-1 rounded-full shadow-lg transform -rotate-1">
                HOME DELIVERY
              </div>
              <p className="text-[10px] mt-1 opacity-90">
                12:00 PM to 11:00 PM (Above ₹150)
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-1 text-right">
              <div className="flex items-center gap-2 font-bold text-yellow-200 uppercase tracking-wider mb-1">
                <Clock className="w-3 h-3 md:w-4 md:h-4" /> Timings
              </div>
              <div>11:00 AM - 11:30 PM</div>
              <div className="text-[10px] text-yellow-100 bg-red-900/50 px-2 py-0.5 rounded">
                Closed Fri 12:45 PM - 2:00 PM
              </div>
            </div>
          </div>

          <div className="mt-2 flex justify-center text-[10px] md:text-xs opacity-80 gap-2">
            <MapPin className="w-3 h-3" />
            <p className="truncate max-w-xs md:max-w-none">
              59, Rehmat Manzil, Lady Jamshedji Road, Mahim, Mumbai - 400 016
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Category Filter */}
        <div className="py-4 -mx-4 px-4 mb-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 font-medium ${
                  selectedCategory === cat.id
                    ? "bg-amber-700 text-white shadow-lg scale-105 ring-2 ring-amber-200 ring-offset-1"
                    : "bg-white text-gray-700 hover:bg-amber-100 border border-amber-200 hover:border-amber-400 shadow-sm"
                }`}
              >
                <span className="text-lg">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {filteredMenu().map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-amber-100 group"
            >
              <div className="p-5 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1 pr-2">
                      <div className="flex items-center gap-2 mb-1">
                        {renderIcon(item)}
                        <h3 className="font-bold text-gray-800 text-lg leading-tight group-hover:text-amber-800 transition-colors">
                          {item.name}
                        </h3>
                      </div>
                      <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide">
                        {item.category}
                      </p>
                    </div>
                  </div>
                  {item.description && (
                    <p className="text-xs text-gray-500 mb-4 italic leading-relaxed border-l-2 border-amber-200 pl-2">
                      {item.description}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-dashed border-gray-200 mt-2 font-bold">
                  {renderPrice(item.price)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredMenu().length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl shadow-inner border border-amber-100">
            <div className="text-6xl mb-4">🍽️</div>
            <p className="text-gray-500 text-xl font-medium">
              No items found in this category.
            </p>
            <button
              onClick={() => setSelectedCategory("all")}
              className="mt-4 text-amber-700 font-bold hover:underline"
            >
              View Full Menu
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white mt-12 py-12 border-t-4 border-amber-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-serif text-yellow-500">
            TAZZA
          </h2>

          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Experience the authentic taste of fresh fast food. Serving Veg &
            Non-Veg delicacies with passion.
          </p>

          <div className="w-16 h-1 bg-amber-600 mx-auto mb-6 rounded-full"></div>

          <p className="text-sm text-gray-500 mb-2">
            © {new Date().getFullYear()} Tazza Fast Food. All rights reserved.
          </p>

          <p className="text-xs text-gray-400">
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

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-4 bg-amber-700 text-white rounded-full shadow-2xl hover:bg-amber-800 transition-all duration-300 z-50 hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default TazzaMenu;