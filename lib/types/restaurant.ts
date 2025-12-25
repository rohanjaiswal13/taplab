// restaurant.ts
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
  closedTiming?: string; // FIXED: Added this property
}

// Branding interface
export interface Branding {
  // Colors (Tailwind class names only)
  colors: {
    primary: string; 
    secondary: string; 
    accent?: string; 
    text?: string; 
    background?: string;
    muted?: string; // FIXED: Added this property
  };

  // Gradients (predefined Tailwind classes)
  gradients: {
    header: string; 
    background?: string; 
  };

  // Typography
  fonts?: {
    heading: string; 
    body: string;
    accent?: string; // FIXED: Added this property
  };

  // Logo
  logo?: {
    url: string; 
    alt: string;
  };

  // Header
  header: {
    title: string;
    subtitle?: string;
    badges?: string[]; 
  };

  // Footer
  footer: {
    title?: string;       // FIXED: Added this property
    description?: string;
    copyright: string;
    poweredBy?: string;    // ADDED: Noticed this in your script too
    poweredByUrl?: string; // ADDED: Noticed this in your script too
  };
}

// Main restaurant document interface
export interface RestaurantDocument {
  slug: string; 
  name: string; 
  isActive: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
  menuConfig: MenuConfig;
  branding: Branding;
  subscription: Subscription;
  contact: ContactInfo;
}