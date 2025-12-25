'use client';

import React, { useState } from 'react';
import { MenuSection } from '@/lib/types/menu';
import { MenuItemRow } from './MenuItemRow';
import { CategoryFilter } from './CategoryFilter';

interface MenuListProps {
  sections: MenuSection[];
  showCategoryFilter?: boolean;
  showVegIndicators?: boolean;
  className?: string;
}

/**
 * MenuList - List layout for menu items (Sunset Chinese style)
 * Displays items in vertical list with dashed separators
 */
export function MenuList({
  sections,
  showCategoryFilter = true,
  showVegIndicators = true,
  className = '',
}: MenuListProps) {
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

      {/* List */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {sortedSections.map((section) => (
          <div key={section.id} className="mb-10">
            {/* Section Header */}
            <div className="mb-4 pb-2 border-b-2 border-gray-300">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 uppercase tracking-wide">
                {section.title}
              </h2>
              {section.note && (
                <p className="text-gray-600 mt-1 text-sm">{section.note}</p>
              )}
            </div>

            {/* Items List */}
            <div className="bg-white rounded-lg border border-gray-200 px-4">
              {section.items.map((item, index) => (
                <MenuItemRow
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
