import React from 'react';

interface VegIndicatorProps {
  isVeg?: boolean;
  isEgg?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * VegIndicator - Shows green/red/egg indicator dot
 * Green = Vegetarian, Red = Non-Vegetarian, Yellow = Egg
 */
export function VegIndicator({ isVeg, isEgg, size = 'md' }: VegIndicatorProps) {
  // If veg status is not specified, don't show indicator
  if (isVeg === undefined && !isEgg) {
    return null;
  }

  // Size mappings
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  const dotSize = sizeClasses[size];

  // Determine color based on type
  let colorClasses = '';
  if (isEgg) {
    colorClasses = 'border-yellow-500 bg-yellow-50';
  } else if (isVeg) {
    colorClasses = 'border-green-600 bg-green-50';
  } else {
    colorClasses = 'border-red-600 bg-red-50';
  }

  return (
    <div className={`${dotSize} rounded-sm border-2 ${colorClasses} flex items-center justify-center flex-shrink-0`}>
      <div
        className={`${size === 'sm' ? 'w-1.5 h-1.5' : size === 'md' ? 'w-2 h-2' : 'w-2.5 h-2.5'} rounded-full ${
          isEgg ? 'bg-yellow-500' : isVeg ? 'bg-green-600' : 'bg-red-600'
        }`}
      />
    </div>
  );
}
