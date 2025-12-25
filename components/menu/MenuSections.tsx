"use client";

import { useState } from "react";
import { MenuSection } from "@/lib/types/menu";
import { MenuItemCard } from "./MenuItemCard";
import { CategoryFilter } from "./CategoryFilter";

interface MenuSectionsProps {
  sections: MenuSection[];
  showCategoryFilter?: boolean;
  showVegIndicators?: boolean;
  className?: string;
}

/**
 * MenuSections - Sectioned layout with category headers
 * Similar to grid but with more prominent section separation
 */
export function MenuSections({
  sections,
  showCategoryFilter = true,
  showVegIndicators = true,
  className = "",
}: MenuSectionsProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter sections based on selected category
  const filteredSections =
    selectedCategory === "all"
      ? sections
      : sections.filter((section) => section.id === selectedCategory);

  // Sort sections by displayOrder
  const sortedSections = [...filteredSections].sort(
    (a, b) => a.displayOrder - b.displayOrder
  );

  return (
    <div className={className}>
      {/* Category Filter */}
      {showCategoryFilter && sections.length > 1 && (
        <CategoryFilter
          sections={sections}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      )}

      {/* Sections */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {sortedSections.map((section, sectionIndex) => (
          <div
            key={section.id}
            className={`mb-16 ${
              sectionIndex !== sortedSections.length - 1
                ? "border-b-2 border-gray-200 pb-12"
                : ""
            }`}
          >
            {/* Section Header */}
            <div className="mb-8 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-full border border-amber-200">
                {section.icon && (
                  <span className="text-4xl">{section.icon}</span>
                )}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {section.title}
                </h2>
              </div>
              {section.note && (
                <p className="text-gray-600 mt-3 text-sm font-medium">
                  {section.note}
                </p>
              )}
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item, index) => (
                <MenuItemCard
                  key={index}
                  item={item}
                  showVegIndicator={showVegIndicators}
                />
              ))}
            </div>
          </div>
        ))}

        {filteredSections.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p>No items found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
