import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import { Branding, ContactInfo } from '@/lib/types/restaurant';
import { getSafeGradient, getSafeTextColor } from '@/lib/utils/theme';

interface MenuHeaderProps {
  branding: Branding;
  contact: ContactInfo;
  className?: string;
}

/**
 * MenuHeader - Sticky header with restaurant branding
 * Displays logo, name, contact info, and badges
 */
export function MenuHeader({ branding, contact, className = '' }: MenuHeaderProps) {
  const headerGradient = getSafeGradient(branding.gradients.header);

  return (
    <header className={`sticky top-0 z-50 ${headerGradient} text-white shadow-lg ${className}`}>
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Logo and Title */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            {branding.logo && (
              <img
                src={branding.logo.url}
                alt={branding.logo.alt}
                className="w-16 h-16 object-contain rounded-lg bg-white/10 p-2"
              />
            )}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold drop-shadow-lg">
                {branding.header.title}
              </h1>
              {branding.header.subtitle && (
                <p className="text-white/90 mt-1">{branding.header.subtitle}</p>
              )}
            </div>
          </div>

          {/* Badges */}
          {branding.header.badges && branding.header.badges.length > 0 && (
            <div className="hidden md:flex items-center gap-2">
              {branding.header.badges.map((badge, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          {/* Phone Numbers */}
          {contact.phones && contact.phones.length > 0 && (
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 flex-shrink-0" />
              <div className="flex flex-wrap gap-2">
                {contact.phones.map((phone, i) => (
                  <a
                    key={i}
                    href={`tel:${phone}`}
                    className="hover:underline"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Address */}
          {contact.address && (
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>{contact.address}</span>
            </div>
          )}

          {/* Timings */}
          {contact.timings && (
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 flex-shrink-0" />
              <span>{contact.timings}</span>
            </div>
          )}
        </div>

        {/* Delivery Info */}
        {contact.deliveryInfo && (
          <div className="mt-3 text-sm bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
            <p>{contact.deliveryInfo}</p>
          </div>
        )}
      </div>
    </header>
  );
}
