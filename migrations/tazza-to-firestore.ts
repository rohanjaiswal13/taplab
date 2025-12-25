import type { RestaurantDocument } from '../lib/types/restaurant';
import type { MenuItem, PriceConfig } from '../lib/types/menu';

// Raw menu data from tazza-menu.tsx
type RawPrice = number | {
  half?: number;
  full?: number;
  veg?: number;
  paneer?: number;
  non_veg?: number;
  egg?: number;
};

interface RawMenuItem {
  name: string;
  price: RawPrice;
  veg?: boolean;
  description?: string;
  isEgg?: boolean;
}

interface RawCategory {
  title: string;
  icon: string;
  items: RawMenuItem[];
}

// Convert raw price to PriceConfig
function convertPrice(rawPrice: RawPrice): PriceConfig {
  if (typeof rawPrice === 'number') {
    return { type: 'simple', value: rawPrice };
  }

  // Check for half/full pricing
  if ('half' in rawPrice && 'full' in rawPrice) {
    return {
      type: 'variants',
      variants: {
        half: rawPrice.half,
        full: rawPrice.full,
      },
    };
  }

  // Check for veg/paneer/non_veg variants
  if ('veg' in rawPrice || 'paneer' in rawPrice || 'non_veg' in rawPrice || 'egg' in rawPrice) {
    return {
      type: 'variants',
      variants: {
        veg: rawPrice.veg,
        paneer: rawPrice.paneer,
        nonVeg: rawPrice.non_veg,
        egg: rawPrice.egg,
      },
    };
  }

  // Fallback to simple if somehow nothing matches
  return { type: 'simple', value: 0 };
}

// Raw menu data (copied from tazza-menu.tsx)
const menuData: Record<string, RawCategory> = {
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
      { name: "TAZZA Special Chilly", veg: false, price: 200 },
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
      { name: "Garlic Fried Rice", price: { veg: 170, paneer: 200, non_veg: 190 } },
      { name: "Schezwan Rice", price: { veg: 170, paneer: 210, non_veg: 210 } },
      { name: "Hong Kong Rice", price: { veg: 170, paneer: 210, non_veg: 210 } },
      { name: "Shanghai Rice", price: { veg: 170, paneer: 210, non_veg: 210 } },
      { name: "Hakka Noodles", price: { veg: 170, non_veg: 190 } },
      { name: "Egg Hakka Noodles", veg: false, isEgg: true, price: 190 },
      { name: "Malaysian Noodles", price: { veg: 170, non_veg: 200 } },
      { name: "Schezwan Noodles", price: { veg: 180, non_veg: 210 } },
      { name: "Hong Kong Noodles", price: { veg: 170, non_veg: 210 } },
      { name: "American Chopsuey", price: { veg: 200, non_veg: 210 } },
      { name: "Burnt Chilly Fried Rice", price: { veg: 200, non_veg: 220 } },
    ],
  },
  combination: {
    title: "Combination",
    icon: "🍱",
    items: [
      { name: "Triple Schezwan F. Rice", price: { veg: 250, paneer: 300, non_veg: 300 } },
      { name: "TAZZA Special Rice", price: { veg: 250, non_veg: 300 } },
      { name: "Chilly Fried Rice", price: { veg: 250, paneer: 300, non_veg: 300 } },
      { name: "Manchurian Fried Rice", price: { veg: 250, paneer: 300, non_veg: 300 } },
      { name: "Combination Noodles", price: { veg: 250, non_veg: 300 } },
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
      { name: "Paneer Tikka", veg: true, description: "Tandoor Paneer, Coriander, G. Chilly, Cheese", price: 300 },
      { name: "Spicy Schezwan", veg: true, description: "Chopped Onion, Capsicum, Baby Corn, Hot Schezwan Sauce, Cheese", price: 250 },
      { name: "Classic Veg Pizza", veg: true, description: "Onion, Capsicum, Tomato, American Corn, Olives, Cheese", price: 260 },
      { name: "Corn Pizza", veg: true, description: "American Corn, Cheese", price: 220 },
      { name: "Cheese Pizza", veg: true, description: "Only Cheese", price: 200 },
      { name: "TAZZA's Pizza", veg: false, description: "Mushroom, Smoked Chicken, Baby Corn, Black Olives, Roasted Capsicum, Cheese", price: 330 },
      { name: "Chicken Chilly Pizza", veg: false, description: "Chicken, Capsicum, Chilly, Cheese", price: 300 },
      { name: "Chicken Manchurian Pizza", veg: false, description: "Chicken, Garlic, Ginger, Soya Sauce, Cheese", price: 300 },
      { name: "Barbeque Chicken Pizza", veg: false, description: "BBQ Chicken, Onion, Mushroom, Capsicum, Cheese", price: 300 },
      { name: "Mexican Pizza", veg: false, description: "Hot Chicken, American Corn, Capsicum, Mushroom, Cheese", price: 300 },
      { name: "Chicken Tikka Pizza", veg: false, description: "Chicken Tikka, Coriander, G. Chilly, Cheese", price: 300 },
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
      { name: "Chicken Tandoori", veg: false, price: { half: 240, full: 400 } },
      { name: "Chicken Shez. Tandoori", veg: false, price: { half: 260, full: 450 } },
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

// Convert raw menu items to MenuItem type
function convertMenuItem(rawItem: RawMenuItem): MenuItem {
  return {
    name: rawItem.name,
    price: convertPrice(rawItem.price),
    veg: rawItem.veg,
    description: rawItem.description,
    isEgg: rawItem.isEgg,
  };
}

// Create the Firestore document
const tazzaDocument: Omit<RestaurantDocument, 'createdAt' | 'updatedAt'> = {
  slug: 'tazza',
  name: 'Tazza Fast Food',
  isActive: true,

  menuConfig: {
    layout: 'grid',
    enableSearch: false,
    enableCategoryFilter: true,
    showVegIndicators: true,
    enableScrollToTop: true,
    sections: Object.entries(menuData).map(([key, section], index) => ({
      id: key,
      title: section.title,
      icon: section.icon,
      displayOrder: index,
      items: section.items.map(convertMenuItem),
    })),
  },

  branding: {
    colors: {
      primary: 'amber-700',
      secondary: 'orange-700',
      accent: 'red-700',
      background: 'amber-50',
      text: 'gray-900',
      muted: 'gray-600',
    },
    gradients: {
      header: 'from-amber-800 via-orange-700 to-red-800',
      background: 'from-amber-50 via-orange-50 to-red-50',
    },
    fonts: {
      heading: 'font-serif',
      body: 'font-sans',
      accent: 'font-serif',
    },
    header: {
      title: 'TAZZA',
      subtitle: 'Fast Food & means Fresh',
      badges: ['Veg', 'Non Veg'],
    },
    footer: {
      title: 'TAZZA',
      description: 'Experience the authentic taste of fresh fast food. Serving Veg & Non-Veg delicacies with passion.',
      copyright: `© ${new Date().getFullYear()} Tazza Fast Food. All rights reserved.`,
      poweredBy: 'TapLab',
      poweredByUrl: 'https://taplab.in',
    },
  },

  subscription: {
    plan: 'trial',
    price: 0,
    status: 'trial',
    currentPeriodStart: new Date('2025-01-01').toISOString(),
    currentPeriodEnd: new Date('2025-02-01').toISOString(),
    trialEnd: new Date('2025-12-31').toISOString(),
  },

  contact: {
    phones: ['022 2447 2222', '022 2445 2333', '9892 31 83 15', '9167 77 04 61'],
    address: '59, Rehmat Manzil, Lady Jamshedji Road, Mahim, Mumbai - 400 016',
    timings: '11:00 AM - 11:30 PM',
    deliveryInfo: 'Home Delivery: 12:00 PM to 11:00 PM (Above ₹150)',
    closedTiming: 'Closed Fri 12:45 PM - 2:00 PM',
  },
};

// Output JSON
console.log(JSON.stringify(tazzaDocument, null, 2));