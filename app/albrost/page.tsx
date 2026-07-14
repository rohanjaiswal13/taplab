"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/* ---------------------------------- Types --------------------------------- */

interface MenuItem {
  name: string;
  price: string;
  description: string;
  veg: boolean;
}

interface MenuCategory {
  key: string;
  label: string;
  priceNote?: string;
  items: MenuItem[];
}

interface SocialHandle {
  platform: string;
  url: string;
}

type VegFilter = 'all' | 'veg' | 'nonveg';

/* --------------------------------- Colors ---------------------------------- */

const YELLOW = '#F5C518';
const RED = '#E4212B';
const GREEN = '#22C55E';
const SWIGGY = '#FC8019';
const ZOMATO = '#E23744';

const FONT_DISPLAY = "'Anton', sans-serif";
const FONT_BODY = "'Inter', system-ui, sans-serif";
const GOOGLE_FONTS_URL = 'https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700;800;900&display=swap';
const FILTERS_PANEL_HEIGHT = 260; // must match the maxHeight value below

/* --------------------------------- Icons ----------------------------------- */

const FlameIcon = ({ className = '', style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <path d="M12 2c1 3-2 4-2 7a3 3 0 0 0 6 0c1.2 1 2 2.8 2 4.5A6.5 6.5 0 1 1 8 9.4C8.9 8 10 6 12 2Z" fill="currentColor" />
  </svg>
);

const WhatsAppLogo = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="#FFFFFF">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.001 2C6.478 2 2 6.477 2 12c0 1.985.579 3.833 1.593 5.386L2 22l4.679-1.579A9.937 9.937 0 0 0 12.001 22c5.523 0 10-4.477 10-10S17.524 2 12.001 2zm0 18.005a8.383 8.383 0 0 1-4.53-1.316l-.324-.201-3.35 1.13 1.114-3.284-.213-.334A8.415 8.415 0 0 1 3.598 12c0-4.638 3.765-8.403 8.403-8.403 4.638 0 8.403 3.765 8.403 8.403 0 4.638-3.765 8.403-8.403 8.403z" />
  </svg>
);

const InstagramLogo = ({ className = '', gradientId = 'ig-grad' }: { className?: string; gradientId?: string }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <defs>
      <linearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFDD55" />
        <stop offset="40%" stopColor="#FF543E" />
        <stop offset="70%" stopColor="#C837AB" />
        <stop offset="100%" stopColor="#5D51D9" />
      </linearGradient>
    </defs>
    <path
      fill={`url(#${gradientId})`}
      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
    />
  </svg>
);

const PinIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#FFFFFF" strokeWidth="2">
    <path d="M12 21s-7-6.3-7-11a7 7 0 1 1 14 0c0 4.7-7 11-7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const YouTubeLogo = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="#FFFFFF">
    <path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.117C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.391.524A2.994 2.994 0 0 0 .502 6.186 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .502 5.814 2.994 2.994 0 0 0 2.107 2.117c1.886.524 9.391.524 9.391.524s7.505 0 9.391-.524a2.994 2.994 0 0 0 2.107-2.117A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z" />
  </svg>
);

const PhoneIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="#FFFFFF">
    <path d="M6.6 10.8c1.4 2.7 3.6 4.9 6.3 6.3l2.1-2.1c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.6c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z" />
  </svg>
);

const ChevronDownIcon = ({ className = '', style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const SearchIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" />
  </svg>
);

const XIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

const ArrowUpIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19V5M5 12l7-7 7 7" />
  </svg>
);

const StoreIcon = ({ className = '', style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9.5 4.2 4h15.6l1.2 5.5" />
    <path d="M3 9.5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0" />
    <path d="M5 9.5V20h14V9.5" />
    <path d="M10 20v-5.5h4V20" />
  </svg>
);

const ArrowRightIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/* --------------------------------- Helpers --------------------------------- */

const VegDot = ({ veg }: { veg: boolean }) => (
  <span
    className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] border-2 transition-colors duration-200"
    style={{ borderColor: veg ? GREEN : '#EF4444' }}
    aria-label={veg ? 'Veg' : 'Non-veg'}
  >
    <span className="h-1.5 w-1.5 rounded-full transition-colors duration-200" style={{ backgroundColor: veg ? GREEN : '#EF4444' }} />
  </span>
);

/* Price strings may contain multiple size/variant options separated by " / ",
   e.g. "40 (R) / 50 (L) / 65 (C)". Render each as its own chip; a plain
   number renders as a single tag. */
const PriceTag = ({ price }: { price: string }) => {
  const parts = price.split(' / ').map((p) => p.trim());
  if (parts.length === 1 && !/\(/.test(parts[0])) {
    return (
      <div className="flex justify-end">
        <span
          className="rounded-md border px-2.5 py-1 text-lg font-extrabold"
          style={{ color: YELLOW, borderColor: 'rgba(245,197,24,0.3)', backgroundColor: 'rgba(245,197,24,0.06)' }}
        >
          ₹{parts[0]}
        </span>
      </div>
    );
  }
  return (
    <div className="flex flex-wrap justify-end gap-1.5">
      {parts.map((p) => {
        const match = p.match(/^(.+?)\s*\((.+)\)$/);
        const value = match ? match[1] : p;
        const label = match ? match[2] : '';
        return (
          <span
            key={p}
            className="flex flex-col items-center rounded-md border px-2 py-1 leading-tight"
            style={{ borderColor: 'rgba(245,197,24,0.3)', backgroundColor: 'rgba(245,197,24,0.06)' }}
          >
            {label && <span className="text-[9px] font-bold uppercase tracking-wide text-white/50">{label}</span>}
            <span className="text-sm font-extrabold" style={{ color: YELLOW }}>
              ₹{value}
            </span>
          </span>
        );
      })}
    </div>
  );
};

const HighlightText = ({ text, query }: { text: string; query: string }) => {
  if (!query) return <>{text}</>;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="rounded-[2px] bg-transparent px-0" style={{ color: YELLOW, backgroundColor: 'rgba(245,197,24,0.18)' }}>
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </>
  );
};

const socialIcon = (platform: string, style: 'mono' | 'brand') => {
  const brandBg: Record<string, string> = {
    whatsapp: 'linear-gradient(135deg, #25D366, #128C7E)',
    instagram: '#FFFFFF',
    google_maps: RED,
    youtube: '#FF0000',
  };
  const bg = style === 'brand' ? brandBg[platform] ?? '#1A1A1A' : '#EFF4F1';
  return bg;
};

const SOCIAL_LABELS: Record<string, string> = {
  whatsapp: 'WhatsApp',
  instagram: 'Instagram',
  google_maps: 'Directions',
  youtube: 'YouTube',
};

const SocialGlyph = ({ platform }: { platform: string }) => {
  if (platform === 'whatsapp') return <WhatsAppLogo className="h-6 w-6" />;
  if (platform === 'instagram') return <InstagramLogo className="h-6 w-6" gradientId={`ig-${platform}`} />;
  if (platform === 'google_maps') return <PinIcon className="h-5 w-5" />;
  if (platform === 'youtube') return <YouTubeLogo className="h-6 w-6" />;
  return null;
};

/* ----------------------------- Category Dropdown ---------------------------- */

interface CategoryDropdownProps {
  categories: MenuCategory[];
  activeKey: string;
  onSelect: (key: string | null) => void;
  disabled: boolean;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CategoryDropdown = ({ categories, activeKey, onSelect, disabled, open, onOpenChange }: CategoryDropdownProps) => {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) onOpenChange(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [onOpenChange]);

  const activeCat = categories.find((c) => c.key === activeKey);
  const activeEmoji = activeCat?.label.split(' ')[0] ?? '⭐';
  const activeTitle = activeCat?.label.split(' ').slice(1).join(' ') ?? 'All Items';

  return (
    <div ref={wrapRef} className="relative">
      <button
        onClick={() => !disabled && onOpenChange(!open)}
        disabled={disabled}
        className="flex w-full items-center justify-between gap-2 rounded-xl border-2 px-4 py-3.5 text-left transition-colors duration-200 disabled:opacity-40"
        style={{ borderColor: open ? YELLOW : 'rgba(255,255,255,0.15)', backgroundColor: '#141414' }}
      >
        <span className="flex min-w-0 items-center gap-2">
          <span className="text-lg leading-none">{activeEmoji}</span>
          <span className="truncate text-sm font-bold text-white sm:text-base">{activeCat ? activeTitle : 'All Items'}</span>
          {activeCat && (
            <span className="shrink-0 rounded-full px-1.5 py-0.5 text-[10px] font-bold text-white/50">{activeCat.items.length} items</span>
          )}
        </span>
        <ChevronDownIcon
          className="h-5 w-5 shrink-0 transition-transform duration-300 ease-out"
          style={{ color: YELLOW, transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>

      <div
        className="absolute left-0 right-0 top-full z-40 mt-2 origin-top overflow-hidden rounded-xl border shadow-2xl transition-all duration-300 ease-out"
        style={{
          borderColor: 'rgba(255,255,255,0.12)',
          backgroundColor: '#161616',
          maxHeight: open ? 'min(60vh, 480px)' : '0px',
          opacity: open ? 1 : 0,
          transform: open ? 'scaleY(1) translateY(0)' : 'scaleY(0.96) translateY(-4px)',
        }}
      >
        <div className="max-h-[60vh] overflow-y-auto p-1.5">
          <button
            onClick={() => {
              onSelect(null);
              onOpenChange(false);
            }}
            className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-sm font-bold transition-colors duration-150"
            style={{ backgroundColor: !activeKey ? 'rgba(245,197,24,0.12)' : 'transparent', color: !activeKey ? YELLOW : '#FFFFFF' }}
          >
            <span className="text-base">⭐</span> All Items
          </button>
          <div className="my-1 h-px" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />
          {categories.map((cat) => {
            const active = cat.key === activeKey;
            const emoji = cat.label.split(' ')[0];
            const title = cat.label.split(' ').slice(1).join(' ');
            return (
              <button
                key={cat.key}
                onClick={() => {
                  onSelect(cat.key);
                  onOpenChange(false);
                }}
                className="flex w-full items-center justify-between gap-2.5 rounded-lg px-3 py-2.5 text-left text-sm font-bold transition-colors duration-150"
                style={{ backgroundColor: active ? 'rgba(245,197,24,0.12)' : 'transparent', color: active ? YELLOW : '#FFFFFF' }}
              >
                <span className="flex items-center gap-2.5">
                  <span className="text-base">{emoji}</span> {title}
                </span>
                <span className="text-[11px] font-semibold text-white/35">{cat.items.length}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/* ------------------------------- Outlet Dropdown ---------------------------
   Used for Swiggy / Zomato — each has 2 outlets, so instead of 4 separate
   buttons cluttering the order bar, one branded button opens a small panel
   to pick which outlet to order from.
----------------------------------------------------------------------------- */

interface OutletOption {
  label: string;
  url: string;
}

interface OutletDropdownProps {
  brandName: string;
  color: string;
  options: OutletOption[];
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}

const OutletDropdown = ({ brandName, color, options, open, onToggle, onClose }: OutletDropdownProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [onClose]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={onToggle}
        className="flex w-full flex-col items-center justify-center gap-0.5 rounded-xl py-2.5 shadow-md transition-transform duration-150 hover:scale-[1.03] active:scale-95"
        style={{ backgroundColor: color, boxShadow: open ? `0 0 0 2px rgba(255,255,255,0.25)` : undefined }}
      >
        <span className="flex items-center gap-1.5 text-base font-black italic tracking-tight text-white">
          {brandName}
          <ChevronDownIcon className="h-3.5 w-3.5 not-italic transition-transform duration-300 ease-out" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} />
        </span>
        <span className="text-[10px] font-bold uppercase tracking-wider text-white/75">{options.length} outlets nearby</span>
      </button>

      <div
        className="absolute left-0 right-0 top-full z-40 mt-2 origin-top overflow-hidden rounded-2xl border shadow-2xl transition-all duration-250 ease-out"
        style={{
          borderColor: 'rgba(255,255,255,0.12)',
          backgroundColor: '#161616',
          maxHeight: open ? '260px' : '0px',
          opacity: open ? 1 : 0,
          transform: open ? 'scaleY(1) translateY(0)' : 'scaleY(0.94) translateY(-6px)',
        }}
      >
        <div className="flex items-center gap-1.5 px-3.5 pb-1.5 pt-3">
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-white/45">Choose your outlet</span>
        </div>
        <div className="p-1.5 pt-0.5">
          {options.map((opt, i) => (
            <a
              key={opt.label}
              href={opt.url || '#'}
              target="_blank"
              rel="noreferrer"
              onClick={onClose}
              className="group flex items-center gap-3 rounded-xl px-2.5 py-3 text-left transition-colors duration-150 hover:bg-white/[0.06]"
              style={{ borderTop: i > 0 ? '1px solid rgba(255,255,255,0.07)' : undefined }}
            >
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-transform duration-150 group-hover:scale-105"
                style={{ backgroundColor: `${color}26`, color }}
              >
                <StoreIcon className="h-4.5 w-4.5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-bold text-white">{opt.label}</span>
                <span className="block text-[11px] font-medium text-white/40">Order on {brandName}</span>
              </span>
              <ArrowRightIcon className="h-4 w-4 shrink-0 text-white/25 transition-all duration-150 group-hover:translate-x-0.5 group-hover:text-white/70" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------
   Static page content — hard-coded, no API/analytics
------------------------------------------------------------------- */
const content: Record<string, string> = {
  brand_name: "Albrost",
  tagline: "Fast Food",
  badge_text: "Halal · Since 2014",
  subtitle: "Mahim, Mumbai · Take Away & Delivery",
  delivery_banner: "🛵 FREE HOME DELIVERY ON ORDERS ABOVE ₹200 · WITHIN 1 KM IN MAHIM",
  phone: "8976638228",
  phone_secondary: "8369575908",
  whatsapp_number: "918976638228",
  address: "Gr. Flr., Plot No. 74/76, Mohammed Edu Manzil, Behind Gate A1, Shitla Devi Mandir, Lady Jamshedji Road, Mahim, Mumbai - 400016",
  footer_tagline: "FAST FOOD · SINCE 2014",
  swiggy_outlet1_label: "Outlet 1",
  swiggy_outlet1_url: "",
  swiggy_outlet2_label: "Outlet 2",
  swiggy_outlet2_url: "",
  zomato_outlet1_label: "Outlet 1",
  zomato_outlet1_url: "",
  zomato_outlet2_label: "Outlet 2",
  zomato_outlet2_url: "",
  menu_data: "{\"meals\":{\"label\":\"🍽️ Meals\",\"items\":[{\"name\":\"Chi. Burger Meal\",\"price\":\"120\",\"description\":\"Chi. crispy burger + fries + soft drink\",\"veg\":false},{\"name\":\"Chi. Shawarma Meal\",\"price\":\"120\",\"description\":\"Chi. shawarma + fries + soft drink\",\"veg\":false},{\"name\":\"Al Brost Burger Meal\",\"price\":\"140\",\"description\":\"Chi. cheese pattie burger + fries + soft drink\",\"veg\":false},{\"name\":\"Veg. Burger Meal\",\"price\":\"100\",\"description\":\"Veg. burger + fries + soft drink\",\"veg\":true},{\"name\":\"Veg. Shawarma Meal\",\"price\":\"100\",\"description\":\"Veg. shawarma + fries + soft drink\",\"veg\":true},{\"name\":\"Veg. Sandwich Meal\",\"price\":\"160\",\"description\":\"Veg. melting sandwich + fries + soft drink\",\"veg\":true},{\"name\":\"Chi. Sandwich Meal\",\"price\":\"200\",\"description\":\"Chi. melting sandwich + fries + soft drink\",\"veg\":false},{\"name\":\"Veg. Pizza Meal\",\"price\":\"200\",\"description\":\"Veg. melting pizza + fries + soft drink\",\"veg\":true},{\"name\":\"Chi. Pizza Meal\",\"price\":\"250\",\"description\":\"Chi. melting pizza + fries + soft drink\",\"veg\":false}],\"priceNote\":\"Comes with fries + soft drink\"},\"buckets\":{\"label\":\"🪣 Buckets\",\"items\":[{\"name\":\"Mini Bucket\",\"price\":\"130\",\"description\":\"1 drumstick + 1 strip + 1 hot wing\",\"veg\":false},{\"name\":\"Small Bucket\",\"price\":\"430\",\"description\":\"2 drumsticks + 6 strips + 6 hot wings\",\"veg\":false},{\"name\":\"Family Bucket\",\"price\":\"800\",\"description\":\"4 drumsticks + 12 strips + 12 hot wings\",\"veg\":false}]},\"shawarma\":{\"label\":\"🌯 Chi. Shawarma\",\"items\":[{\"name\":\"Chi. Shawarma\",\"price\":\"60\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. No Salad Shawarma\",\"price\":\"60\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. Arabic Shawarma\",\"price\":\"70\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. BBQ Shawarma\",\"price\":\"70\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. Peri Peri Shawarma\",\"price\":\"70\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. Cheese Shawarma\",\"price\":\"80\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. Makhani Shawarma\",\"price\":\"80\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. Tandoori Shawarma\",\"price\":\"90\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. Crispy Fish Shawarma\",\"price\":\"90\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. Nugget Shawarma\",\"price\":\"100\",\"description\":\"\",\"veg\":false}],\"priceNote\":\"Extra filling +₹20\"},\"veg_shawarma_frankie\":{\"label\":\"🥙 Veg. Shawarma & Frankie\",\"items\":[{\"name\":\"Veg. Pattice Shawarma\",\"price\":\"50\",\"description\":\"\",\"veg\":true},{\"name\":\"Mix Paneer Shawarma\",\"price\":\"60\",\"description\":\"\",\"veg\":true},{\"name\":\"Paneer Tikka Shawarma\",\"price\":\"70\",\"description\":\"\",\"veg\":true},{\"name\":\"Veg. Frankie Rumali\",\"price\":\"60\",\"description\":\"\",\"veg\":true},{\"name\":\"Mix Paneer Frankie\",\"price\":\"70\",\"description\":\"\",\"veg\":true}]},\"salad_bowl\":{\"label\":\"🥗 Chicken Salad Bowl\",\"items\":[{\"name\":\"Chi. Salad\",\"price\":\"90\",\"description\":\"200 gms\",\"veg\":false},{\"name\":\"Chi. Tandoori Salad\",\"price\":\"100\",\"description\":\"200 gms\",\"veg\":false},{\"name\":\"Chi. Jeet Salad\",\"price\":\"70\",\"description\":\"200 gms, qty 1\",\"veg\":false},{\"name\":\"Khaboos\",\"price\":\"20\",\"description\":\"add-on, only with salad\",\"veg\":true}]},\"wraps\":{\"label\":\"🌮 Chicken Wraps\",\"items\":[{\"name\":\"Chi. Crispy Mexican Wrap\",\"price\":\"130 (N) / 140 (G)\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. Albrost Spicy & Cheese Wrap\",\"price\":\"110 (N) / 120 (G)\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. Crispy Peri Peri Wrap\",\"price\":\"120 (N) / 130 (G)\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. Crispy BBQ Wrap\",\"price\":\"110 (N) / 120 (G)\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. SP. Tikka Wrap\",\"price\":\"100 (N) / 110 (G)\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. Crispy Garlic Wrap\",\"price\":\"100 (N) / 110 (G)\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. Crispy Tandoori Wrap\",\"price\":\"100 (N) / 110 (G)\",\"description\":\"\",\"veg\":false}],\"priceNote\":\"N = Normal · G = Grill · Extra cheese +₹20\"},\"veg_sandwich\":{\"label\":\"🥪 Veg. Sandwich\",\"items\":[{\"name\":\"Veg. Plain Sandwich\",\"price\":\"40 (R) / 50 (L) / 65 (C)\",\"description\":\"\",\"veg\":true},{\"name\":\"Veg. Cheese Grill Sandwich\",\"price\":\"60 (R) / 70 (L) / 90 (C)\",\"description\":\"\",\"veg\":true},{\"name\":\"Paneer Melting Cheese Sandwich\",\"price\":\"70 (R) / 80 (L) / 100 (C)\",\"description\":\"\",\"veg\":true},{\"name\":\"Veg. Masala Grill Cheese Sandwich\",\"price\":\"100 (R) / 110 (L) / 140 (C)\",\"description\":\"\",\"veg\":true},{\"name\":\"Veg. Cocktail Grill Cheese Sandwich\",\"price\":\"130 (R) / 150 (L) / 180 (C)\",\"description\":\"\",\"veg\":true}],\"priceNote\":\"R = Regular · L = Large · C = Club\"},\"veg_burger\":{\"label\":\"🍔 Veg. Burger\",\"items\":[{\"name\":\"Veg. Pattice Burger\",\"price\":\"50\",\"description\":\"\",\"veg\":true},{\"name\":\"Paneer Tandoori Burger\",\"price\":\"70\",\"description\":\"\",\"veg\":true},{\"name\":\"Veg. BBQ Burger\",\"price\":\"60\",\"description\":\"\",\"veg\":true},{\"name\":\"Veg. Mexican Burger\",\"price\":\"70\",\"description\":\"\",\"veg\":true},{\"name\":\"Veg. Peri Peri Burger\",\"price\":\"90\",\"description\":\"\",\"veg\":true}]},\"chicken_burger\":{\"label\":\"🍔 Chicken Burger\",\"items\":[{\"name\":\"Chi. Crispy Burger\",\"price\":\"150\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. SP. Cheese Burger\",\"price\":\"130\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. Crispy Tandoori Burger\",\"price\":\"100\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. Crispy Peri Peri Burger\",\"price\":\"100\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. Crispy Mexican Burger\",\"price\":\"90\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. Melting Cheese Burger\",\"price\":\"80\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. Zinger Burger\",\"price\":\"70\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. Tikka Melting Burger\",\"price\":\"70\",\"description\":\"\",\"veg\":false},{\"name\":\"Fish Zinger Burger\",\"price\":\"60\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. Double Trouble Burger\",\"price\":\"60\",\"description\":\"\",\"veg\":false}]},\"fried_chicken\":{\"label\":\"🍗 Albrost Fried Chicken\",\"items\":[{\"name\":\"Chi. Popcorn\",\"price\":\"60 (3pc) / 130 (6pc) / 210 (12pc)\",\"description\":\"\",\"veg\":false},{\"name\":\"Fish Popcorn\",\"price\":\"90 (3pc) / 130 (6pc) / 210 (12pc)\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. Strip\",\"price\":\"70 (3pc) / 140 (6pc) / 230 (12pc)\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. Nugget\",\"price\":\"80 (3pc) / 140 (6pc) / 240 (12pc)\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. Tandoori Strip\",\"price\":\"80 (3pc) / 150 (6pc) / 210 (10pc)\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. Drumstick\",\"price\":\"100 (2pc) / 190 (6pc)\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. Hot Wings\",\"price\":\"90 (6pc) / 130 (12pc)\",\"description\":\"\",\"veg\":false},{\"name\":\"Fish Fry Momos\",\"price\":\"130\",\"description\":\"\",\"veg\":false}],\"priceNote\":\"3 pcs · 6 pcs · 12 pcs\"},\"grilled_sandwich\":{\"label\":\"🥪 Chi. Grilled Sandwich\",\"items\":[{\"name\":\"Chi. Grilled Sandwich\",\"price\":\"80 (R) / 100 (L) / 130 (C)\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. Peri Peri Sandwich\",\"price\":\"90 (R) / 110 (L) / 140 (C)\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. Mexican Grilled Sandwich\",\"price\":\"100 (R) / 130 (L) / 160 (C)\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. Tandoori Sandwich\",\"price\":\"100 (R) / 120 (L) / 150 (C)\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. Cocktail Melting Sandwich\",\"price\":\"110 (R) / 150 (L) / 180 (C)\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. Melting Sandwich\",\"price\":\"130 (R) / 150 (L) / 190 (C)\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. BBQ Melting Sandwich\",\"price\":\"140 (R) / 160 (L) / 200 (C)\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. Tikka Melting Sandwich\",\"price\":\"150 (R) / 170 (L) / 210 (C)\",\"description\":\"\",\"veg\":false}],\"priceNote\":\"R = Regular · L = Large · C = Club\"},\"veg_pizza\":{\"label\":\"🍕 Veg. Pizza\",\"items\":[{\"name\":\"Veg. Margherita Cheese Pizza\",\"price\":\"100 (7\\\") / 140 (9\\\")\",\"description\":\"\",\"veg\":true},{\"name\":\"Veg. Corn Cheese Pizza\",\"price\":\"120 (7\\\") / 160 (9\\\")\",\"description\":\"\",\"veg\":true},{\"name\":\"Veg. Cocktail Cheese Pizza\",\"price\":\"100 (7\\\") / 160 (9\\\")\",\"description\":\"\",\"veg\":true},{\"name\":\"Veg. Tandoori Paneer Cheese Pizza\",\"price\":\"140 (7\\\") / 180 (9\\\")\",\"description\":\"\",\"veg\":true},{\"name\":\"Veg. Melting Cheese Pizza\",\"price\":\"140 (7\\\") / 180 (9\\\")\",\"description\":\"\",\"veg\":true},{\"name\":\"Veg. Paneer Melting Cheese Pizza\",\"price\":\"160 (7\\\") / 220 (9\\\")\",\"description\":\"\",\"veg\":true}],\"priceNote\":\"7\\\" · 9\\\"\"},\"chicken_pizza\":{\"label\":\"🍕 Chicken Pizza\",\"items\":[{\"name\":\"Chi. Shawarma Classic Pizza\",\"price\":\"140 (7\\\") / 240 (9\\\")\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. Cheese Classic Pizza\",\"price\":\"140 (7\\\") / 240 (9\\\")\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. Cheese Nawabi Pizza\",\"price\":\"160 (7\\\") / 260 (9\\\")\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. Cheese Popcorn Pizza\",\"price\":\"160 (7\\\") / 260 (9\\\")\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. Cheese BBQ Pizza\",\"price\":\"160 (7\\\") / 260 (9\\\")\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. Tikka Melting Pizza\",\"price\":\"180 (7\\\") / 280 (9\\\")\",\"description\":\"\",\"veg\":false},{\"name\":\"Chi. Cheese Cocktail Loaded Pizza\",\"price\":\"220 (7\\\") / 320 (9\\\")\",\"description\":\"\",\"veg\":false}],\"priceNote\":\"7\\\" · 9\\\"\"},\"starters\":{\"label\":\"🍟 Veg. Starters\",\"items\":[{\"name\":\"French Fries\",\"price\":\"60\",\"description\":\"\",\"veg\":true},{\"name\":\"Peri Peri French Fries\",\"price\":\"80\",\"description\":\"\",\"veg\":true},{\"name\":\"Cheesy French Fries\",\"price\":\"80\",\"description\":\"\",\"veg\":true},{\"name\":\"Mexican French Fries\",\"price\":\"80\",\"description\":\"\",\"veg\":true},{\"name\":\"Tandoori French Fries\",\"price\":\"80\",\"description\":\"\",\"veg\":true},{\"name\":\"Veg. Cheese Garlic Bread\",\"price\":\"70\",\"description\":\"4 pcs\",\"veg\":true}]},\"desserts\":{\"label\":\"🍮 Desserts & Drinks\",\"items\":[{\"name\":\"Dry Fruit Masala Milk\",\"price\":\"70\",\"description\":\"\",\"veg\":true},{\"name\":\"Caramel Custard\",\"price\":\"20\",\"description\":\"\",\"veg\":true},{\"name\":\"Pudding\",\"price\":\"35\",\"description\":\"\",\"veg\":true},{\"name\":\"Soft Drinks\",\"price\":\"20\",\"description\":\"200 ml\",\"veg\":true},{\"name\":\"Mineral Water\",\"price\":\"20\",\"description\":\"1 ltr\",\"veg\":true}]},\"dips\":{\"label\":\"🥫 Dips\",\"items\":[{\"name\":\"Cheese Mayonnaise\",\"price\":\"20\",\"description\":\"\",\"veg\":true},{\"name\":\"Peri Peri\",\"price\":\"20\",\"description\":\"\",\"veg\":true},{\"name\":\"Schezwan\",\"price\":\"20\",\"description\":\"\",\"veg\":true}]}}",
  social_data: "{\"style\":\"brand\",\"handles\":[{\"platform\":\"whatsapp\",\"url\":\"https://wa.me/918976638228\"},{\"platform\":\"instagram\",\"url\":\"https://www.instagram.com/al__brost__fast__fud_?igsh=MTVpcGg4cG5iMnpmOA==\"},{\"platform\":\"google_maps\",\"url\":\"https://maps.app.goo.gl/PnkB8t2JdQqCGL1v9\"},{\"platform\":\"youtube\",\"url\":\"https://youtube.com/@abdulwahidmachailya5331?si=5J3_W-Ufb2c2WGx6\"}]}",
};

/* ---------------------------------- Page ------------------------------------ */

export default function AlbrostPage() {
  const [scrollActiveKey, setScrollActiveKey] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [vegFilter, setVegFilter] = useState<VegFilter>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [filtersHidden, setFiltersHidden] = useState(false);
  const [swiggyOpen, setSwiggyOpen] = useState(false);
  const [zomatoOpen, setZomatoOpen] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const menuTopRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const menuData: Record<string, { label: string; priceNote?: string; items: MenuItem[] }> = useMemo(() => {
    try {
      return JSON.parse(content.menu_data ?? '{}');
    } catch {
      return {};
    }
  }, []);

  const menu: MenuCategory[] = useMemo(
    () => Object.entries(menuData).map(([key, cat]) => ({ key, label: cat.label, priceNote: cat.priceNote, items: cat.items })),
    [menuData]
  );

  const socialData: { style: 'mono' | 'brand'; handles: SocialHandle[] } = useMemo(() => {
    try {
      return JSON.parse(content.social_data ?? '{"style":"mono","handles":[]}');
    } catch {
      return { style: 'mono', handles: [] };
    }
  }, []);

  const whatsappHandle = socialData.handles.find((h) => h.platform === 'whatsapp');

  useEffect(() => {
    if (document.querySelector(`link[href="${GOOGLE_FONTS_URL}"]`)) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = GOOGLE_FONTS_URL;
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    if (menu.length && !scrollActiveKey) setScrollActiveKey(menu[0].key);
  }, [menu, scrollActiveKey]);

  const isSearching = searchQuery.trim().length > 0;
  const activeKey = selectedCategory ?? scrollActiveKey;

  useEffect(() => {
    if (selectedCategory || isSearching) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setScrollActiveKey(entry.target.id);
        });
      },
      { rootMargin: '-230px 0px -70% 0px', threshold: 0 }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [selectedCategory, isSearching, menu]);

  useEffect(() => {
    // Flip filtersHidden only after the scroll moves FLIP_THRESHOLD px in one
    // continuous direction (anchorY resets on every reversal). A per-frame
    // delta check flips on tiny back-and-forth wheel/trackpad jitter, which
    // is what caused the search bar to flicker while scrolling.
    const FLIP_THRESHOLD = 48;
    let lastY = window.scrollY;
    let anchorY = window.scrollY;
    let raf: number | null = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        setShowBackToTop(y > 900);

        if (y < 170) {
          setFiltersHidden(false);
          anchorY = y;
        } else if (!dropdownOpen && !isSearching) {
          const goingDown = y > lastY;
          const goingUp = y < lastY;
          if ((goingDown && y < anchorY) || (goingUp && y > anchorY)) anchorY = y;

          if (goingDown && y - anchorY > FLIP_THRESHOLD) {
            setFiltersHidden(true);
            anchorY = y;
          } else if (goingUp && anchorY - y > FLIP_THRESHOLD) {
            setFiltersHidden(false);
            anchorY = y;
          }
        }
        lastY = y;
        raf = null;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [dropdownOpen, isSearching]);

  useEffect(() => {
    if (filtersHidden) setDropdownOpen(false);
  }, [filtersHidden]);

  const revealFilters = () => {
    setFiltersHidden(false);
    requestAnimationFrame(() => {
      setTimeout(() => searchInputRef.current?.focus(), 320);
    });
  };

  const scrollToMenuTop = () => {
    const el = menuTopRef.current;
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 190;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (key: string | null) => {
    setSelectedCategory(key);
    if (key) requestAnimationFrame(scrollToMenuTop);
  };

  const clearFilter = () => {
    setSelectedCategory(null);
    setSearchQuery('');
  };

  const visibleMenu = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return menu
      .filter((cat) => q || !selectedCategory || cat.key === selectedCategory)
      .map((cat) => ({
        ...cat,
        items: cat.items.filter((item) => {
          if (vegFilter === 'veg' && !item.veg) return false;
          if (vegFilter === 'nonveg' && item.veg) return false;
          if (q) {
            const hay = `${item.name} ${item.description ?? ''}`.toLowerCase();
            if (!hay.includes(q)) return false;
          }
          return true;
        }),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [menu, selectedCategory, vegFilter, searchQuery]);

  const totalResults = useMemo(() => visibleMenu.reduce((sum, c) => sum + c.items.length, 0), [visibleMenu]);
  const animKey = `${selectedCategory ?? 'all'}-${vegFilter}-${searchQuery}`;

  return (
    <div className="min-h-screen scroll-smooth bg-black text-white antialiased" style={{ fontFamily: FONT_BODY }}>
      {/* ---------------------------------------------------------------- HERO */}
      <header className="border-b-4 bg-black px-5 pb-6 pt-9 text-center" style={{ borderColor: RED }}>
        <div className="mx-auto mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-black" style={{ backgroundColor: YELLOW }}>
          {content.badge_text}
        </div>
        <h1
          className="flex items-center justify-center gap-2 text-6xl leading-none tracking-tight sm:text-7xl"
          style={{ color: YELLOW, fontFamily: FONT_DISPLAY }}
        >
          <FlameIcon className="h-9 w-9 sm:h-11 sm:w-11" style={{ color: RED }} />
          {content.brand_name}
        </h1>
        <p className="mt-3 text-base tracking-[0.4em] text-white sm:text-lg" style={{ fontFamily: FONT_DISPLAY }}>
          {content.tagline}
        </p>
        <p className="mt-1 text-xs text-white/60">{content.subtitle}</p>
      </header>

      {/* ------------------------------------------------------- FREE DELIVERY */}
      {content.delivery_banner && (
        <div className="px-4 py-3 text-center" style={{ backgroundColor: RED }}>
          <p className="text-sm tracking-wide text-white sm:text-base" style={{ fontFamily: FONT_DISPLAY }}>
            {content.delivery_banner}
          </p>
        </div>
      )}

      {/* ------------------------------------------------------------ ORDER BAR */}
      <div className="border-b border-white/10 bg-black px-4 py-5">
        <p className="mb-3 text-center text-[11px] font-bold uppercase tracking-widest text-white/50">Order Directly</p>
        <div className="mx-auto grid max-w-2xl grid-cols-2 gap-2.5">
          <a
            href={`tel:${content.phone}`}
            className="flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-extrabold text-white shadow-md transition-transform duration-150 hover:scale-[1.03] active:scale-95"
            style={{ backgroundColor: RED }}
          >
            <PhoneIcon className="h-4 w-4" /> Call Now
          </a>
          {whatsappHandle && (
            <a
              href={whatsappHandle.url || '#'}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-extrabold text-white shadow-md transition-transform duration-150 hover:scale-[1.03] active:scale-95"
              style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
            >
              <WhatsAppLogo className="h-4 w-4" /> WhatsApp
            </a>
          )}
          <OutletDropdown
            brandName="Swiggy"
            color={SWIGGY}
            options={[
              { label: content.swiggy_outlet1_label, url: content.swiggy_outlet1_url },
              { label: content.swiggy_outlet2_label, url: content.swiggy_outlet2_url },
            ]}
            open={swiggyOpen}
            onToggle={() => {
              setSwiggyOpen((o) => !o);
              setZomatoOpen(false);
            }}
            onClose={() => setSwiggyOpen(false)}
          />
          <OutletDropdown
            brandName="Zomato"
            color={ZOMATO}
            options={[
              { label: content.zomato_outlet1_label, url: content.zomato_outlet1_url },
              { label: content.zomato_outlet2_label, url: content.zomato_outlet2_url },
            ]}
            open={zomatoOpen}
            onToggle={() => {
              setZomatoOpen((o) => !o);
              setSwiggyOpen(false);
            }}
            onClose={() => setZomatoOpen(false)}
          />
        </div>
      </div>

      {/* --------------------------------------------------------- STICKY NAV */}
      <div className="sticky top-0 z-30">
        <div className="border-b-2 bg-black/97 backdrop-blur" style={{ borderColor: RED }}>
          <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-2">
            <span className="flex items-center gap-1.5 text-sm tracking-wide" style={{ color: YELLOW, fontFamily: FONT_DISPLAY }}>
              <FlameIcon className="h-4 w-4" style={{ color: RED }} /> {content.brand_name}
            </span>
            <div className="flex items-center gap-2">
              {filtersHidden && (
                <button
                  onClick={revealFilters}
                  aria-label="Show search and categories"
                  className="flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs font-extrabold text-white transition-colors duration-150 active:scale-95"
                  style={{ backgroundColor: '#1A1A1A' }}
                >
                  <SearchIcon className="h-3 w-3" />
                  {selectedCategory && <span>{menu.find((c) => c.key === selectedCategory)?.label.split(' ')[0]}</span>}
                </button>
              )}
              <a
                href={`tel:${content.phone}`}
                className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-extrabold text-white transition-transform duration-150 active:scale-95"
                style={{ backgroundColor: RED }}
              >
                <PhoneIcon className="h-3 w-3" /> Call
              </a>
            </div>
          </div>
        </div>

        {/* Absolutely positioned = removed from flow. Toggling this never
            changes any sibling's layout height, so it can't fight scroll. */}
        <div
          className="absolute left-0 right-0 top-full border-b-2 bg-black/97 shadow-xl backdrop-blur transition-[opacity,transform] duration-200 ease-out"
          style={{
            borderColor: RED,
            opacity: filtersHidden ? 0 : 1,
            transform: filtersHidden ? 'translateY(-6px)' : 'translateY(0)',
            pointerEvents: filtersHidden ? 'none' : 'auto',
          }}
        >
          <div className="mx-auto max-w-2xl px-4 pt-1">
            <div
              className="flex items-center gap-2 rounded-xl border-2 px-3.5 py-2.5 transition-colors duration-200"
              style={{ borderColor: isSearching ? YELLOW : 'rgba(255,255,255,0.15)', backgroundColor: '#141414' }}
            >
              <SearchIcon className="h-4 w-4 shrink-0 text-white/40" />
              <input
                ref={searchInputRef}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search the menu — e.g. shawarma, pizza, fries..."
                className="w-full bg-transparent text-sm font-medium text-white placeholder:text-white/35 focus:outline-none"
              />
              {isSearching && (
                <button onClick={() => setSearchQuery('')} aria-label="Clear search" className="shrink-0 rounded-full bg-white/10 p-1 transition-colors duration-150 hover:bg-white/20">
                  <XIcon className="h-3 w-3 text-white" />
                </button>
              )}
            </div>
          </div>

          <div className="mx-auto flex max-w-2xl items-center justify-center gap-2 px-4 pt-2.5">
            {(
              [
                { key: 'all', label: 'All', color: '#FFFFFF' },
                { key: 'veg', label: 'Veg', color: GREEN },
                { key: 'nonveg', label: 'Non-Veg', color: '#EF4444' },
              ] as { key: VegFilter; label: string; color: string }[]
            ).map((opt) => {
              const active = vegFilter === opt.key;
              return (
                <button
                  key={opt.key}
                  onClick={() => setVegFilter(opt.key)}
                  className="flex items-center gap-1.5 rounded-full border-2 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wide transition-all duration-200"
                  style={active ? { backgroundColor: opt.color, borderColor: opt.color, color: '#000' } : { backgroundColor: 'transparent', borderColor: 'rgba(255,255,255,0.2)', color: '#FFFFFF' }}
                >
                  {opt.key !== 'all' && (
                    <span className="h-2.5 w-2.5 rounded-full border" style={{ backgroundColor: active ? '#000' : opt.color, borderColor: active ? '#000' : opt.color }} />
                  )}
                  {opt.label}
                </button>
              );
            })}
          </div>

          <div className="mx-auto max-w-2xl px-4 py-2.5">
            <CategoryDropdown categories={menu} activeKey={activeKey} onSelect={handleCategorySelect} disabled={isSearching} open={dropdownOpen} onOpenChange={setDropdownOpen} />
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- MENU */}
      <main className="mx-auto max-w-2xl px-4 pb-32 pt-6">
        <div ref={menuTopRef} />

        {(selectedCategory || isSearching) && (
          <div className="mb-4 flex items-center justify-between">
            <button onClick={clearFilter} className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-white/60 transition-colors duration-200 hover:text-white">
              ← Back to full menu
            </button>
            <span className="text-xs font-semibold text-white/40">
              {totalResults} {totalResults === 1 ? 'item' : 'items'}
            </span>
          </div>
        )}

        {visibleMenu.length === 0 && (
          <div className="flex flex-col items-center gap-2 rounded-lg border border-white/10 bg-[#161616] px-4 py-12 text-center">
            <span className="text-3xl">🔍</span>
            <p className="text-sm font-semibold text-white/70">No items match "{searchQuery || 'this filter'}"</p>
            <p className="text-xs text-white/40">Try a different search term or clear the filters.</p>
            <button onClick={clearFilter} className="mt-2 rounded-full px-4 py-1.5 text-xs font-bold text-black transition-transform duration-150 active:scale-95" style={{ backgroundColor: YELLOW }}>
              Clear filters
            </button>
          </div>
        )}

        <div key={animKey}>
          {visibleMenu.map((cat, idx) => {
            const emoji = cat.label.split(' ')[0];
            const title = cat.label.split(' ').slice(1).join(' ');
            return (
              <section
                key={cat.key}
                id={cat.key}
                ref={(el) => {
                  sectionRefs.current[cat.key] = el;
                }}
                className={idx === 0 ? '' : 'mt-9'}
              >
                <div className="mb-4 flex items-center justify-between rounded-lg px-4 py-2.5" style={{ backgroundColor: RED }}>
                  <h2 className="flex items-center gap-2 text-xl tracking-wide text-white sm:text-2xl" style={{ fontFamily: FONT_DISPLAY }}>
                    <span>{emoji}</span>
                    {title}
                  </h2>
                  {cat.priceNote && <span className="text-[10px] font-semibold text-white/80 sm:text-[11px]">{cat.priceNote}</span>}
                </div>

                <div className="space-y-2">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="rounded-lg border border-white/10 bg-[#161616] px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:shadow-lg"
                    >
                      <div className="flex items-start gap-2.5">
                        <span className="mt-1">
                          <VegDot veg={item.veg} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-[15px] font-bold leading-snug text-white sm:text-base">
                            <HighlightText text={item.name} query={searchQuery} />
                          </p>
                          {item.description && (
                            <p className="mt-0.5 text-xs text-white/50">
                              <HighlightText text={item.description} query={searchQuery} />
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="mt-2">
                        <PriceTag price={item.price} />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      {/* ----------------------------------------------------------- SOCIALS */}
      {socialData.handles.length > 0 && (
        <section className="border-t border-white/10 bg-black px-5 py-12 text-center">
          <h2 className="text-3xl tracking-wide" style={{ color: YELLOW, fontFamily: FONT_DISPLAY }}>
            Follow &amp; Connect
          </h2>
          <p className="mt-1 text-xs text-white/50">Find us online and get directions.</p>
          <div className="mx-auto mt-6 flex max-w-md flex-wrap items-center justify-center gap-4">
            {socialData.handles.map((h) => (
              <a
                key={h.platform}
                href={h.url || '#'}
                target="_blank"
                rel="noreferrer"
                aria-label={SOCIAL_LABELS[h.platform] ?? h.platform}
                className="flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform duration-150 hover:scale-110 active:scale-95"
                style={{ background: socialIcon(h.platform, socialData.style) }}
              >
                <SocialGlyph platform={h.platform} />
              </a>
            ))}
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------ FOOTER */}
      <footer className="border-t-4 bg-black px-5 py-9 text-center" style={{ borderColor: RED }}>
        <h3 className="text-3xl" style={{ color: YELLOW, fontFamily: FONT_DISPLAY }}>
          {content.brand_name}
        </h3>
        <p className="mt-1 text-xs font-bold tracking-[0.3em] text-white/70">{content.footer_tagline}</p>
        <p className="mx-auto mt-4 max-w-sm text-xs leading-relaxed text-white/50">{content.address}</p>
        <p className="mt-2 text-xs font-semibold text-white/60">
          Call: {content.phone} {content.phone_secondary && `/ ${content.phone_secondary}`}
        </p>
        <p className="mt-6 text-[10px] font-semibold uppercase tracking-widest text-white/25">Powered by TapLab</p>
      </footer>

      {/* ---------------------------------------------------- BACK TO TOP */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-6 left-5 z-50 flex h-11 w-11 items-center justify-center rounded-full shadow-2xl ring-4 ring-black transition-transform duration-150 hover:scale-105 active:scale-90"
          style={{ backgroundColor: '#2A2A2A' }}
        >
          <ArrowUpIcon className="h-5 w-5 text-white" />
        </button>
      )}
    </div>
  );
}