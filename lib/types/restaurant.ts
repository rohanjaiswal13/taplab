import { MenuConfig } from './menu';
import { Subscription } from './subscription';

// Location interface
export interface Location {
  area: string;
  numbers: string[];
}

// Contact information interface
export interface ContactInfo {
  phones: string[];
  address?: string;
  timings?: string;
  deliveryInfo?: string;
  locations?: Location[];
}

// Branding interface
export interface Branding {
  // Colors (Tailwind class names only)
  colors: {
    primary: string; // e.g., "amber-700"
    secondary: string; // e.g., "orange-700"
    accent?: string; // e.g., "red-800"
    text?: string; // e.g., "gray-800"
    background?: string; // e.g., "amber-50"
  };

  // Gradients (predefined Tailwind classes)
  gradients: {
    header: string; // e.g., "from-amber-800 via-orange-700 to-red-800"
    background?: string; // e.g., "from-amber-50 via-orange-50 to-red-50"
  };

  // Typography
  fonts?: {
    heading: string; // e.g., "font-serif"
    body: string; // e.g., "font-sans"
  };

  // Logo
  logo?: {
    url: string; // Image URL
    alt: string;
  };

  // Header
  header: {
    title: string;
    subtitle?: string;
    badges?: string[]; // e.g., ["Veg", "Non Veg"]
  };

  // Footer
  footer: {
    description?: string;
    copyright: string;
  };
}

// Main restaurant document interface
export interface RestaurantDocument {
  // Identity
  slug: string; // e.g., "tazza", "pizzacaprina"
  name: string; // e.g., "Tazza Restaurant"
  isActive: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;

  // Menu Configuration
  menuConfig: MenuConfig;

  // Branding
  branding: Branding;

  // Subscription
  subscription: Subscription;

  // Contact & Info
  contact: ContactInfo;
}
