import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { Branding, ContactInfo, Location } from '@/lib/types/restaurant';

interface MenuFooterProps {
  branding: Branding;
  contact: ContactInfo;
  className?: string;
}

/**
 * MenuFooter - Footer with contact info and branding
 */
export function MenuFooter({ branding, contact, className = '' }: MenuFooterProps) {
  return (
    <footer className={`bg-gray-900 text-white py-8 mt-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Restaurant Name */}
        <h2 className="text-2xl font-bold mb-4">{branding.header.title}</h2>

        {/* Description */}
        {branding.footer.description && (
          <p className="text-gray-300 mb-6 max-w-2xl">
            {branding.footer.description}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>

            {/* Phone Numbers */}
            {contact.phones && contact.phones.length > 0 && (
              <div className="mb-3">
                <div className="flex items-start gap-2 text-gray-300">
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div className="flex flex-col gap-1">
                    {contact.phones.map((phone, i) => (
                      <a
                        key={i}
                        href={`tel:${phone}`}
                        className="hover:text-white transition-colors"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Address */}
            {contact.address && (
              <div className="mb-3">
                <div className="flex items-start gap-2 text-gray-300">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p>{contact.address}</p>
                </div>
              </div>
            )}

            {/* Timings */}
            {contact.timings && (
              <div className="text-gray-300">
                <p className="font-semibold">Hours:</p>
                <p>{contact.timings}</p>
              </div>
            )}
          </div>

          {/* Additional Locations */}
          {contact.locations && contact.locations.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Other Locations</h3>
              <div className="space-y-3">
                {contact.locations.map((location: Location, i) => (
                  <div key={i} className="text-gray-300">
                    <p className="font-semibold">{location.area}</p>
                    <div className="flex flex-col gap-1 mt-1">
                      {location.numbers.map((number, j) => (
                        <a
                          key={j}
                          href={`tel:${number}`}
                          className="text-sm hover:text-white transition-colors"
                        >
                          {number}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Copyright and TapLab Attribution */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>{branding.footer.copyright}</p>
          <p className="mt-2">
            Powered by{' '}
            <a
              href="https://taplab.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500 hover:text-amber-400 transition-colors font-semibold"
            >
              TapLab
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
