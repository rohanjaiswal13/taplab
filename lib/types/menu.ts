// Price configuration types
export type PriceConfig =
  | { type: 'simple'; value: number }
  | { type: 'multi'; values: string } // e.g., "190 | 330 | 480"
  | {
      type: 'variants';
      variants: {
        veg?: number;
        nonVeg?: number;
        paneer?: number;
        egg?: number;
        half?: number;
        full?: number;
      };
    };

// Menu item interface
export interface MenuItem {
  name: string;
  description?: string;
  price: PriceConfig;
  veg?: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  isEgg?: boolean;
  tags?: string[];
}

// Menu section interface
export interface MenuSection {
  id: string;
  title: string;
  icon?: string; // Emoji or icon name
  note?: string; // e.g., "Reg (7\") | Med (10\") | Lar (12\")"
  items: MenuItem[];
  displayOrder: number;
}

// Menu configuration interface
export interface MenuConfig {
  layout: 'grid' | 'list' | 'sections';
  sections: MenuSection[];
  enableSearch: boolean;
  enableCategoryFilter: boolean;
  showVegIndicators: boolean;
  enableScrollToTop?: boolean;
}
