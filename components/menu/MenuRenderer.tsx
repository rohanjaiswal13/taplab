import { RestaurantDocument } from "@/lib/types/restaurant";
import { MenuHeader } from "./MenuHeader";
import { MenuFooter } from "./MenuFooter";
import { MenuGrid } from "./MenuGrid";
import { MenuList } from "./MenuList";
import { MenuSections } from "./MenuSections";
import { ScrollToTop } from "./ScrollToTop";

interface MenuRendererProps {
  restaurant: RestaurantDocument;
  className?: string;
}

/**
 * MenuRenderer - Main component that orchestrates all menu components
 * Switches between different layout types (grid/list/sections)
 * Handles all branding, contact info, and menu configuration
 */
export function MenuRenderer({
  restaurant,
  className = "",
}: MenuRendererProps) {
  const { menuConfig, branding, contact } = restaurant;

  // Determine which layout component to use
  const renderMenuContent = () => {
    switch (menuConfig.layout) {
      case "grid":
        return (
          <MenuGrid
            sections={menuConfig.sections}
            showCategoryFilter={menuConfig.enableCategoryFilter}
            showVegIndicators={menuConfig.showVegIndicators}
          />
        );

      case "list":
        return (
          <MenuList
            sections={menuConfig.sections}
            showCategoryFilter={menuConfig.enableCategoryFilter}
            showVegIndicators={menuConfig.showVegIndicators}
          />
        );

      case "sections":
        return (
          <MenuSections
            sections={menuConfig.sections}
            showCategoryFilter={menuConfig.enableCategoryFilter}
            showVegIndicators={menuConfig.showVegIndicators}
          />
        );

      default:
        // Fallback to grid if unknown layout type
        return (
          <MenuGrid
            sections={menuConfig.sections}
            showCategoryFilter={menuConfig.enableCategoryFilter}
            showVegIndicators={menuConfig.showVegIndicators}
          />
        );
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50 ${className}`}>
      {/* Header */}
      <MenuHeader branding={branding} contact={contact} />

      {/* Main Menu Content */}
      <main className="pb-8">{renderMenuContent()}</main>

      {/* Footer */}
      <MenuFooter branding={branding} contact={contact} />

      {/* Scroll to Top Button */}
      {menuConfig.enableScrollToTop !== false && <ScrollToTop />}
    </div>
  );
}
