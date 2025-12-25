import React from 'react';
import { MenuItem } from '@/lib/types/menu';
import { VegIndicator } from './VegIndicator';
import { PriceDisplay } from './PriceDisplay';

interface MenuItemRowProps {
  item: MenuItem;
  showVegIndicator?: boolean;
  className?: string;
}

/**
 * MenuItemRow - Row display for list layouts
 * Shows item name and price in a horizontal layout (Sunset Chinese style)
 */
export function MenuItemRow({
  item,
  showVegIndicator = true,
  className = '',
}: MenuItemRowProps) {
  return (
    <div
      className={`py-3 border-b border-dashed border-gray-300 last:border-b-0 ${className}`}
    >
      {/* Main row with name and price */}
      <div className="flex items-start justify-between gap-4">
        {/* Left side: Name and indicator */}
        <div className="flex items-start gap-2 flex-1">
          {showVegIndicator && (
            <VegIndicator isVeg={item.veg} isEgg={item.isEgg} size="sm" />
          )}
          <div className="flex-1">
            <h3 className="font-medium text-gray-900">
              {item.name}
              {item.isNew && (
                <span className="ml-2 px-1.5 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded">
                  NEW
                </span>
              )}
              {item.isBestseller && (
                <span className="ml-2 px-1.5 py-0.5 bg-amber-100 text-amber-700 text-xs font-semibold rounded">
                  ⭐
                </span>
              )}
            </h3>
            {item.description && (
              <p className="text-gray-600 text-sm mt-0.5 italic">
                {item.description}
              </p>
            )}
            {item.tags && item.tags.length > 0 && (
              <div className="flex gap-1 mt-1">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-1.5 py-0.5 bg-gray-100 text-gray-600 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right side: Price */}
        <div className="flex-shrink-0">
          <PriceDisplay price={item.price} className="text-right" />
        </div>
      </div>
    </div>
  );
}
