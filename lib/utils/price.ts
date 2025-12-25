import { PriceConfig } from '../types/menu';

/**
 * Format a price value with rupee symbol
 * @param value - Price value
 * @returns Formatted price string (e.g., "₹250")
 */
export function formatPrice(value: number): string {
  return `₹${value}`;
}

/**
 * Parse multi-price string into array
 * @param values - Multi-price string (e.g., "190 | 330 | 480")
 * @returns Array of price values
 */
export function parseMultiPrice(values: string): number[] {
  return values
    .split('|')
    .map((p) => p.trim())
    .map((p) => parseInt(p, 10))
    .filter((p) => !isNaN(p));
}

/**
 * Format multi-price string with rupee symbols
 * @param values - Multi-price string (e.g., "190 | 330 | 480")
 * @returns Formatted string (e.g., "₹190 | ₹330 | ₹480")
 */
export function formatMultiPrice(values: string): string {
  const prices = parseMultiPrice(values);
  return prices.map((p) => formatPrice(p)).join(' | ');
}

/**
 * Get price display string based on price configuration
 * @param price - Price configuration
 * @returns Display string
 */
export function getPriceDisplay(price: PriceConfig): string {
  if (price.type === 'simple') {
    return formatPrice(price.value);
  }

  if (price.type === 'multi') {
    return formatMultiPrice(price.values);
  }

  if (price.type === 'variants') {
    const parts: string[] = [];

    if (price.variants.half !== undefined) {
      parts.push(`Half: ${formatPrice(price.variants.half)}`);
    }
    if (price.variants.full !== undefined) {
      parts.push(`Full: ${formatPrice(price.variants.full)}`);
    }
    if (price.variants.veg !== undefined) {
      parts.push(`Veg: ${formatPrice(price.variants.veg)}`);
    }
    if (price.variants.paneer !== undefined) {
      parts.push(`Paneer: ${formatPrice(price.variants.paneer)}`);
    }
    if (price.variants.nonVeg !== undefined) {
      parts.push(`Non-Veg: ${formatPrice(price.variants.nonVeg)}`);
    }
    if (price.variants.egg !== undefined) {
      parts.push(`Egg: ${formatPrice(price.variants.egg)}`);
    }

    return parts.join(' | ');
  }

  return '₹0';
}

/**
 * Get minimum price from price configuration
 * @param price - Price configuration
 * @returns Minimum price value
 */
export function getMinPrice(price: PriceConfig): number {
  if (price.type === 'simple') {
    return price.value;
  }

  if (price.type === 'multi') {
    const prices = parseMultiPrice(price.values);
    return Math.min(...prices);
  }

  if (price.type === 'variants') {
    const values = Object.values(price.variants).filter(
      (v) => v !== undefined
    ) as number[];
    return values.length > 0 ? Math.min(...values) : 0;
  }

  return 0;
}

/**
 * Get maximum price from price configuration
 * @param price - Price configuration
 * @returns Maximum price value
 */
export function getMaxPrice(price: PriceConfig): number {
  if (price.type === 'simple') {
    return price.value;
  }

  if (price.type === 'multi') {
    const prices = parseMultiPrice(price.values);
    return Math.max(...prices);
  }

  if (price.type === 'variants') {
    const values = Object.values(price.variants).filter(
      (v) => v !== undefined
    ) as number[];
    return values.length > 0 ? Math.max(...values) : 0;
  }

  return 0;
}

/**
 * Check if price has multiple variants
 * @param price - Price configuration
 * @returns True if price has multiple values
 */
export function hasMultiplePrices(price: PriceConfig): boolean {
  if (price.type === 'simple') {
    return false;
  }

  if (price.type === 'multi') {
    return parseMultiPrice(price.values).length > 1;
  }

  if (price.type === 'variants') {
    const values = Object.values(price.variants).filter((v) => v !== undefined);
    return values.length > 1;
  }

  return false;
}
