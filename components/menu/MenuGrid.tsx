'use client';

import React, { useState } from 'react';
import { MenuSection } from '@/lib/types/menu';
import { MenuItemCard } from './MenuItemCard';
import { CategoryFilter } from './CategoryFilter';

interface MenuGridProps {
  sections: MenuSection[];
  showCategoryFilter?: boolean;
  showVegIndicators?: boolean;
  className?: string;
}

/**
 * MenuGrid - Grid layout for menu items (Tazza, High on Shakes style)
 * Displays items in responsive grid with optional category filtering
 */
export function MenuGrid({
  sections,
  showCategoryFilter = true,
  showVegIndicators = true,
  className = '',
}: MenuGridProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter sections based on selected category
  const filteredSections =
    selectedCategory === 'all'
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

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {sortedSections.map((section) => (
          <div key={section.id} className="mb-12">
            {/* Section Header */}
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-3">
                {section.icon && <span className="text-3xl">{section.icon}</span>}
                {section.title}
              </h2>
              {section.note && (
                <p className="text-gray-600 mt-1 text-sm">{section.note}</p>
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
