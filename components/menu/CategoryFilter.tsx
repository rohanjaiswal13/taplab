'use client';

import React from 'react';
import { MenuSection } from '@/lib/types/menu';

interface CategoryFilterProps {
  sections: MenuSection[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
  showIcons?: boolean;
  className?: string;
}

/**
 * CategoryFilter - Horizontal scrollable category chips
 * Allows filtering menu items by category
 */
export function CategoryFilter({
  sections,
  selectedCategory,
  onCategoryChange,
  showIcons = true,
  className = '',
}: CategoryFilterProps) {
  // Sort sections by displayOrder
  const sortedSections = [...sections].sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <div className={`sticky top-0 z-40 bg-white border-b border-gray-200 py-3 ${className}`}>
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide px-4">
        {/* "All" button */}
        <button
          onClick={() => onCategoryChange('all')}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
            selectedCategory === 'all'
              ? 'bg-gradient-to-r from-amber-700 to-orange-700 text-white shadow-md scale-105'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All Items
        </button>

        {/* Category buttons */}
        {sortedSections.map((section) => (
          <button
            key={section.id}
            onClick={() => onCategoryChange(section.id)}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 flex items-center gap-2 flex-shrink-0 ${
              selectedCategory === section.id
                ? 'bg-gradient-to-r from-amber-700 to-orange-700 text-white shadow-md scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {showIcons && section.icon && (
              <span className="text-lg">{section.icon}</span>
            )}
            <span>{section.title}</span>
          </button>
        ))}
      </div>

      {/* Hide scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
