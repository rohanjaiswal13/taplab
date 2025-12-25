import React from 'react';
import { MenuItem } from '@/lib/types/menu';
import { VegIndicator } from './VegIndicator';
import { PriceDisplay } from './PriceDisplay';

interface MenuItemCardProps {
  item: MenuItem;
  showVegIndicator?: boolean;
  className?: string;
}

/**
 * MenuItemCard - Card display for grid layouts
 * Shows item name, description, price, and veg/non-veg indicator
 */
export function MenuItemCard({
  item,
  showVegIndicator = true,
  className = '',
}: MenuItemCardProps) {
  return (
    <div
      className={`bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg transition-shadow duration-300 ${className}`}
    >
      {/* Header with name and indicator */}
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-semibold text-gray-900 text-lg flex-1">
          {item.name}
        </h3>
        {showVegIndicator && (
          <VegIndicator isVeg={item.veg} isEgg={item.isEgg} size="md" />
        )}
      </div>

      {/* Description */}
      {item.description && (
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {item.description}
        </p>
      )}

      {/* Badges */}
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        {item.isNew && (
          <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
            NEW
          </span>
        )}
        {item.isBestseller && (
          <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
            BESTSELLER
          </span>
        )}
        {item.tags &&
          item.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
      </div>

      {/* Price */}
      <div className="mt-auto">
        <PriceDisplay price={item.price} />
      </div>
    </div>
  );
}
