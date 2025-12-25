/**
 * Migration Script: Sunset Chinese Menu
 * Converts src/sunset_chinese_menu.tsx data to Firestore document format
 */

import { RestaurantDocument } from '../lib/types/restaurant';

// Menu data extracted from sunset_chinese_menu.tsx
const sunsetMenuData = {
  vegSoup: {
    title: 'VEG SOUP',
    items: [
      { name: 'Veg Sweet Corn Soup', price: '160 | 120' },
      { name: 'Veg Manchow Soup', price: '160 | 120' },
      { name: "Veg Hot 'N' Sour", price: '160 | 120' },
      { name: 'Veg Talumein Soup', price: '160 | 120' },
      { name: 'Veg Tum Yum Soup', price: '160 | 120' },
      { name: 'Veg Noodle Soup', price: '160 | 120' },
      { name: 'Veg Wanton Soup', price: '180 | 130' },
      { name: 'Veg Lemon Coriander', price: '160 | 120' },
    ],
  },
  nonVegSoup: {
    title: 'NON-VEG SOUP',
    items: [
      { name: 'Chicken Sweet Corn Soup', price: '170 | 130' },
      { name: 'Chicken Manchow Soup', price: '170 | 130' },
      { name: "Chicken Hot 'n' Sour", price: '170 | 130' },
      { name: 'Chicken Lemon Coriander Soup', price: '170 | 130' },
      { name: 'Chicken Talumein Soup', price: '170 | 130' },
      { name: 'Chicken Clear Soup', price: '170 | 130' },
      { name: 'Chicken Tum Yum Soup', price: '170 | 130' },
      { name: 'Chicken Noodle Soup', price: '170 | 130' },
      { name: 'Chicken Lung Fung Soup', price: '190' },
      { name: 'Chicken Wanton Soup', price: '190' },
    ],
  },
  vegStarters: {
    title: 'VEG STARTERS',
    items: [
      { name: 'Veg Hunan Dry', price: '220 | 170' },
      { name: 'Veg Manchurian Dry', price: '220 | 170' },
      { name: 'Veg Schezwan Dry', price: '220 | 170' },
      { name: 'Veg Chilly Dry', price: '220 | 170' },
      { name: 'Shanghai Potatoes', price: '240' },
      { name: 'Kung Pao Potatoes', price: '240' },
      { name: 'Crispy Potatoes', price: '240' },
      { name: 'Mushroom Manchurian', price: '240' },
      { name: 'Mushroom Schezwan', price: '240' },
      { name: 'Paneer Chilly Dry', price: '250' },
      { name: 'Paneer Whole Garlic', price: '250' },
      { name: 'Paneer Shanghai', price: '250' },
      { name: 'Paneer Hong Kong Dry', price: '250' },
      { name: 'Paneer Ginger', price: '250' },
      { name: 'Veg Spring Roll', price: '240' },
      { name: 'Veg Fried Wanton', price: '240' },
    ],
  },
  nonVegStarters: {
    title: 'NON-VEG STARTERS',
    items: [
      { name: 'Hunan Chicken Dry', price: '250 | 190' },
      { name: 'Chicken Chilly Dry', price: '250 | 190' },
      { name: 'Chicken Manchurian Dry', price: '250 | 190' },
      { name: 'Schezwan Chicken Dry', price: '250 | 190' },
      { name: 'Shanghai Chicken Dry', price: '250 | 190' },
      { name: 'Lolipop', price: '230 | 170' },
      { name: 'Lolipop Masala', price: '260 | 200' },
      { name: 'Drums of Heaven', price: '280 | 220' },
      { name: 'Mongolian Chicken', price: '290' },
      { name: 'Red Pepper Chicken', price: '290' },
      { name: 'Butter Garlic Chicken', price: '290' },
      { name: 'Thread Chicken', price: '310' },
      { name: 'Spicy Crispy Chicken', price: '290' },
      { name: 'Grilled Barbeque Chicken', price: '340' },
      { name: 'Shredded Chilly Basil Chicken', price: '300' },
      { name: 'Roasted Chilly Chicken', price: '320' },
      { name: 'Dragon Chicken', price: '290' },
      { name: 'Chicken Spring Roll', price: '270' },
      { name: 'Chicken Dragon Roll', price: '270' },
      { name: 'Chicken Fried Wanton', price: '270' },
      { name: 'Chicken Steam Wanton', price: '270' },
    ],
  },
  fishStarters: {
    title: 'FISH STARTERS',
    items: [
      { name: 'Fish Chilly Dry', price: '280' },
      { name: 'Fish Hunan Dry', price: '280' },
      { name: 'Fish Hong Kong Dry', price: '280' },
      { name: 'Fish Oyster Sauce', price: '280' },
      { name: 'Fish Manchurian Dry', price: '280' },
      { name: 'Fish Schezwan Dry', price: '280' },
      { name: 'Fish Garlic Dry', price: '280' },
      { name: 'Fish Shanghai Dry', price: '280' },
    ],
  },
  prawnsStarters: {
    title: 'PRAWNS STARTERS',
    items: [
      { name: 'Prawns Butter Garlic', price: '280' },
      { name: 'Prawns Barbeque', price: '300' },
      { name: 'Prawns Golden Fried', price: '280' },
      { name: 'Prawns Red Pepper', price: '300' },
      { name: 'Prawns Chilly Dry', price: '280' },
      { name: 'Prawns Garlic Dry', price: '280' },
      { name: "Prawns Sweet 'N' Sour Dry", price: '280' },
      { name: 'Prawns Oyster Sauce Dry', price: '300' },
      { name: 'Prawns Schezwan Dry', price: '280' },
    ],
  },
  vegRice: {
    title: 'VEG RICE',
    items: [
      { name: 'Veg Fried Rice', price: '210 | 170' },
      { name: 'Veg Schezwan Rice', price: '220 | 180' },
      { name: 'Veg Hong Kong Rice', price: '220 | 180' },
      { name: 'Veg Singapore Rice', price: '220 | 180' },
      { name: 'Veg Combination Rice', price: '220 | 180' },
      { name: 'Veg Burnt Garlic Rice', price: '240 | 200' },
      { name: 'Veg Stewed Rice', price: '280' },
      { name: 'Veg Triple Rice', price: '280' },
      { name: 'Veg Pot Rice', price: '310' },
      { name: 'Veg Korean Rice', price: '310' },
    ],
  },
  nonVegRice: {
    title: 'NON-VEG RICE',
    items: [
      { name: 'Egg Fried Rice', price: '210 | 150' },
      { name: 'Egg Schezwan Rice', price: '220 | 160' },
      { name: 'Chicken Fried Rice', price: '220 | 180' },
      { name: 'Chicken Schezwan Rice', price: '230 | 190' },
      { name: 'Chicken Hong Kong Rice', price: '230 | 190' },
      { name: 'Chicken Singapore Rice', price: '230 | 190' },
      { name: 'Chicken Burnt Garlic Rice', price: '250' },
      { name: 'Chicken Triple Rice', price: '290' },
      { name: 'Chicken Stewed Rice', price: '290' },
      { name: 'Chicken Pot Rice', price: '320' },
      { name: 'Chicken Chopper Rice', price: '290' },
      { name: 'Chicken Korean Rice', price: '320' },
      { name: 'Chicken Chilly Basil Rice', price: '320' },
      { name: 'Prawns Fried Rice', price: '230 | 190' },
      { name: 'Prawns Schezwan Rice', price: '240 | 200' },
      { name: 'Prawns Singapore Rice', price: '240 | 200' },
      { name: 'Prawns Hong Kong Rice', price: '240 | 200' },
    ],
  },
  vegNoodles: {
    title: 'VEG NOODLES',
    items: [
      { name: 'Veg Hakka Noodles', price: '210 | 170' },
      { name: 'Veg Schezwan Noodles', price: '220 | 180' },
      { name: 'Veg Singapore Noodles', price: '220 | 180' },
      { name: 'Veg Hong Kong Noodles', price: '220 | 180' },
      { name: 'Veg Burnt Garlic Noodles', price: '240' },
      { name: 'Veg Triple Noodles', price: '280' },
      { name: 'Veg Pot Noodles', price: '310' },
      { name: 'Veg Korean Noodles', price: '310' },
    ],
  },
  nonVegNoodles: {
    title: 'NON-VEG NOODLES',
    items: [
      { name: 'Egg Hakka Noodles', price: '210 | 150' },
      { name: 'Egg Schezwan Noodles', price: '220 | 160' },
      { name: 'Chicken Hakka Noodles', price: '220 | 180' },
      { name: 'Chicken Schezwan Noodles', price: '230 | 190' },
      { name: 'Chicken Hong Kong Noodles', price: '230 | 190' },
      { name: 'Chicken Burnt Garlic Noodles', price: '250 | 190' },
      { name: 'Chicken Triple Noodles', price: '290' },
      { name: 'Chicken Stewed Noodles', price: '290' },
      { name: 'Chicken Pot Noodles', price: '320' },
      { name: 'Chicken Chopper Noodles', price: '320' },
      { name: 'Chicken Korean Noodles', price: '320' },
      { name: 'Chicken Chilly Basil Noodles', price: '320' },
      { name: 'Prawns Fried Noodles', price: '230 | 190' },
      { name: 'Prawns Schezwan Noodles', price: '240 | 200' },
      { name: 'Prawns Singapore Noodles', price: '240 | 200' },
      { name: 'Prawns Hong Kong Noodles', price: '240 | 200' },
    ],
  },
  vegGravy: {
    title: 'VEG GRAVY',
    items: [
      { name: 'Veg Chilly Gravy', price: '230 | 180' },
      { name: 'Veg Manchurian Gravy', price: '230 | 180' },
      { name: 'Veg Garlic Gravy', price: '230 | 180' },
      { name: 'Veg Hunan Gravy', price: '230 | 180' },
      { name: 'Veg Hong Kong Gravy', price: '230 | 180' },
      { name: 'Mushroom Chilly Gravy', price: '250' },
      { name: 'Mushroom Manchurian Gravy', price: '250' },
      { name: 'Mushroom Schezwan Gravy', price: '250' },
    ],
  },
  paneerGravy: {
    title: 'PANEER GRAVY',
    items: [
      { name: 'Paneer Hot Garlic Gravy', price: '250' },
      { name: 'Paneer Chilly Gravy', price: '250' },
      { name: 'Paneer Hunan Gravy', price: '250' },
      { name: 'Paneer Garlic Gravy', price: '250' },
      { name: 'Paneer Green Gravy', price: '250' },
      { name: 'Paneer Oyster Gravy', price: '250' },
    ],
  },
  chickenGravy: {
    title: 'CHICKEN GRAVY',
    items: [
      { name: 'Chicken Chilly Gravy', price: '250 | 190' },
      { name: 'Chicken Manchurian Gravy', price: '250 | 190' },
      { name: 'Chicken Hunan Gravy', price: '250 | 190' },
      { name: 'Chicken Garlic Gravy', price: '250 | 190' },
      { name: 'Chicken Hot Garlic Gravy', price: '250 | 190' },
      { name: 'Chicken Green Sauce Gravy', price: '250 | 190' },
      { name: 'Chicken Hong Kong Gravy', price: '250 | 190' },
      { name: "Chicken Sweet 'N' Sour Gravy", price: '250 | 190' },
      { name: 'Chicken Oyster Gravy', price: '250 | 190' },
      { name: 'Chicken Schezwan Gravy', price: '250 | 190' },
    ],
  },
  prawnsGravy: {
    title: 'PRAWNS GRAVY',
    items: [
      { name: 'Prawns Chilly Gravy', price: '280' },
      { name: 'Prawns Manchurian Gravy', price: '280' },
      { name: "Prawns Sweet 'N' Sour Gravy", price: '280' },
      { name: 'Prawns Hot Garlic Gravy', price: '280' },
      { name: 'Prawns Hong Kong Gravy', price: '280' },
    ],
  },
  fishGravy: {
    title: 'FISH GRAVY',
    items: [
      { name: 'Fish Garlic Gravy', price: '280' },
      { name: 'Fish Schezwan Gravy', price: '280' },
      { name: 'Fish Manchurian Gravy', price: '280' },
      { name: "Fish Sweet 'N' Sour Gravy", price: '280' },
      { name: 'Fish Chilly Gravy', price: '280' },
      { name: 'Fish Hong Kong Gravy', price: '280' },
      { name: 'Fish Green Garlic Gravy', price: '280' },
    ],
  },
};

// Create Firestore document
const sunsetDocument: Omit<RestaurantDocument, 'createdAt' | 'updatedAt'> = {
  slug: 'sunsetchinese',
  name: 'Sunset Chinese',
  isActive: true,

  menuConfig: {
    layout: 'list',
    enableSearch: true,
    enableCategoryFilter: true,
    showVegIndicators: false, // Sunset menu doesn't show veg indicators
    enableScrollToTop: true,
    sections: Object.entries(sunsetMenuData).map(([key, section], index) => ({
      id: key,
      title: section.title,
      displayOrder: index,
      note: 'Large | Small',
      items: section.items.map((item) => ({
        name: item.name,
        price: { type: 'multi', values: item.price },
      })),
    })),
  },

  branding: {
    colors: {
      primary: 'red-700',
      secondary: 'red-600',
      accent: 'red-800',
      text: 'gray-800',
      background: 'red-50',
    },
    gradients: {
      header: 'red-gradient',
      background: 'red-bg',
    },
    fonts: {
      heading: 'font-sans',
      body: 'font-sans',
    },
    header: {
      title: 'SUNSET',
      subtitle: 'Chinese',
      badges: ['Veg', 'Non Veg'],
    },
    footer: {
      description: 'Authentic Chinese cuisine in Mumbai',
      copyright: '© 2025 Sunset Chinese. All rights reserved.',
    },
  },

  subscription: {
    plan: 'trial',
    price: 999,
    status: 'trial',
    currentPeriodStart: new Date('2025-01-01').toISOString(),
    currentPeriodEnd: new Date('2025-12-31').toISOString(),
    trialEnd: new Date('2025-12-31').toISOString(),
  },

  contact: {
    phones: ['7208662363', '8104707025'],
    address: 'Shop No 1, 222 V.S Marg Mahim, Mumbai-16',
    deliveryInfo: 'Free Home Delivery',
  },
};

// Export for use in migration script
console.log(JSON.stringify(sunsetDocument, null, 2));
