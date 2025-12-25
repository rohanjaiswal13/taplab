import React from 'react';
import { PriceConfig } from '@/lib/types/menu';
import { formatPrice, parseMultiPrice } from '@/lib/utils/price';

interface PriceDisplayProps {
  price: PriceConfig;
  className?: string;
}

/**
 * PriceDisplay - Renders price in different formats
 * Handles: simple, multi (190 | 330 | 480), variants (veg/non-veg/paneer/etc)
 */
export function PriceDisplay({ price, className = '' }: PriceDisplayProps) {
  // Simple price: ₹250
  if (price.type === 'simple') {
    return (
      <span className={`font-bold text-gray-900 ${className}`}>
        {formatPrice(price.value)}
      </span>
    );
  }

  // Multi price: ₹190 | ₹330 | ₹480
  if (price.type === 'multi') {
    const prices = parseMultiPrice(price.values);
    return (
      <div className={`flex items-center gap-1 flex-wrap ${className}`}>
        {prices.map((p, i) => (
          <React.Fragment key={i}>
            <span className="font-mono font-bold text-gray-900">
              {formatPrice(p)}
            </span>
            {i < prices.length - 1 && (
              <span className="text-gray-400 font-light">|</span>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }

  // Variant prices: Veg/Non-Veg/Paneer/Half/Full
  if (price.type === 'variants') {
    const variants = price.variants;
    const entries: { label: string; value: number; color: string }[] = [];

    // Build entries array
    if (variants.half !== undefined) {
      entries.push({ label: 'Half', value: variants.half, color: 'text-amber-700' });
    }
    if (variants.full !== undefined) {
      entries.push({ label: 'Full', value: variants.full, color: 'text-amber-900' });
    }
    if (variants.veg !== undefined) {
      entries.push({ label: 'Veg', value: variants.veg, color: 'text-green-700' });
    }
    if (variants.paneer !== undefined) {
      entries.push({ label: 'Paneer', value: variants.paneer, color: 'text-amber-700' });
    }
    if (variants.nonVeg !== undefined) {
      entries.push({ label: 'Non-Veg', value: variants.nonVeg, color: 'text-red-700' });
    }
    if (variants.egg !== undefined) {
      entries.push({ label: 'Egg', value: variants.egg, color: 'text-yellow-700' });
    }

    // Single variant - display inline
    if (entries.length === 1) {
      return (
        <span className={`font-bold text-gray-900 ${className}`}>
          {formatPrice(entries[0].value)}
        </span>
      );
    }

    // Multiple variants - display as grid
    return (
      <div className={`flex flex-col gap-0.5 text-sm ${className}`}>
        {entries.map((entry, i) => (
          <div key={i} className="flex justify-between items-center gap-3">
            <span className={`${entry.color} font-medium`}>{entry.label}:</span>
            <span className="font-bold text-gray-900">{formatPrice(entry.value)}</span>
          </div>
        ))}
      </div>
    );
  }

  return <span className="text-gray-400">Price not available</span>;
}
