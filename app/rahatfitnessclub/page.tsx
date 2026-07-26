"use client";

import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------
   Inline SVG icons (no external icon library — avoids bundle
   resolution issues in the TapLab runtime)
------------------------------------------------------------------- */
function PhoneIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function MapPinIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function InstagramIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function SunriseIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M17 18a5 5 0 0 0-10 0" />
      <line x1="12" y1="2" x2="12" y2="9" />
      <line x1="4.22" y1="10.22" x2="5.64" y2="11.64" />
      <line x1="1" y1="18" x2="3" y2="18" />
      <line x1="21" y1="18" x2="23" y2="18" />
      <line x1="18.36" y1="11.64" x2="19.78" y2="10.22" />
      <line x1="23" y1="22" x2="1" y2="22" />
      <polyline points="8 6 12 2 16 6" />
    </svg>
  );
}
function SunsetIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M17 18a5 5 0 0 0-10 0" />
      <line x1="12" y1="9" x2="12" y2="2" />
      <line x1="4.22" y1="10.22" x2="5.64" y2="11.64" />
      <line x1="1" y1="18" x2="3" y2="18" />
      <line x1="21" y1="18" x2="23" y2="18" />
      <line x1="18.36" y1="11.64" x2="19.78" y2="10.22" />
      <line x1="23" y1="22" x2="1" y2="22" />
      <polyline points="16 5 12 9 8 5" />
    </svg>
  );
}
function DumbbellIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M6.5 6.5 17.5 17.5" />
      <path d="M21 21l-1-1M3 3l1 1" />
      <path d="M18 22l-2-2" />
      <path d="M6 4l2 2" />
      <path d="M3.5 8.5 8.5 3.5a1.5 1.5 0 0 1 2.12 0l.88.88a1.5 1.5 0 0 1 0 2.12l-5 5a1.5 1.5 0 0 1-2.12 0l-.88-.88a1.5 1.5 0 0 1 0-2.12z" />
      <path d="M13.5 18.5 18.5 13.5a1.5 1.5 0 0 1 2.12 0l.88.88a1.5 1.5 0 0 1 0 2.12l-5 5a1.5 1.5 0 0 1-2.12 0l-.88-.88a1.5 1.5 0 0 1 0-2.12z" />
    </svg>
  );
}
function RupeeIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M6 3h12M6 8h12M6 13h4a4 4 0 0 0 0-8M6 13l7 8" />
    </svg>
  );
}
function ChevronDownIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
function ChevronLeftIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}
function ChevronRightIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

/* ------------------------------------------------------------------
   Reveal-on-scroll (IntersectionObserver, no external libs)
------------------------------------------------------------------- */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={
        'transition-all duration-700 ease-out ' +
        (visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8') +
        ' ' +
        className
      }
    >
      {children}
    </div>
  );
}

/* Live minutes-since-midnight, refreshed every 60s — powers the "open now" badges */
function useNowMinutes() {
  const [nowMinutes, setNowMinutes] = useState(() => {
    const d = new Date();
    return d.getHours() * 60 + d.getMinutes();
  });
  useEffect(() => {
    const id = setInterval(() => {
      const d = new Date();
      setNowMinutes(d.getHours() * 60 + d.getMinutes());
    }, 60000);
    return () => clearInterval(id);
  }, []);
  return nowMinutes;
}

/* Steel barbell divider between sections */
function BarbellDivider() {
  return (
    <div className="flex items-center justify-center py-10 select-none" aria-hidden="true">
      <div className="h-2 w-16 rounded-sm bg-neutral-500" />
      <div className="h-8 w-4 rounded-sm bg-neutral-400 -ml-1" />
      <div className="flex-1 max-w-xs h-1 bg-neutral-600 mx-1" />
      <div
        className="h-3 w-40 rounded-full border-2 border-red-700"
        style={{ background: 'linear-gradient(90deg, #7a1414 0%, #c81e1e 50%, #7a1414 100%)' }}
      />
      <div className="flex-1 max-w-xs h-1 bg-neutral-600 mx-1" />
      <div className="h-8 w-4 rounded-sm bg-neutral-400 -mr-1" />
      <div className="h-2 w-16 rounded-sm bg-neutral-500" />
    </div>
  );
}

/* Official WhatsApp glyph (inline SVG) */
function WhatsAppIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.04 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.44 1.73 6.36L3.2 28.8l6.62-1.74a12.75 12.75 0 0 0 6.22 1.6h.01c7.06 0 12.8-5.74 12.8-12.8s-5.75-12.66-12.81-12.66zm0 23.4h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.93 1.03 1.05-3.83-.25-.4a10.55 10.55 0 0 1-1.62-5.66c0-5.86 4.77-10.62 10.63-10.62 2.84 0 5.5 1.1 7.51 3.12a10.55 10.55 0 0 1 3.11 7.51c0 5.86-4.77 10.56-10.7 10.56zm5.83-7.94c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.51-.16-.72.16-.21.32-.83 1.04-1.02 1.25-.19.21-.38.24-.7.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.87-1.76-2.19-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.56.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.53-.54-.72-.55-.19-.01-.4-.01-.62-.01-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.67 0 1.57 1.15 3.09 1.31 3.3.16.21 2.26 3.45 5.48 4.84.77.33 1.36.53 1.83.68.77.24 1.46.21 2.02.13.62-.09 1.89-.77 2.16-1.51.27-.75.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37z" />
    </svg>
  );
}

/* ------------------------------------------------------------------
   Photo carousel — smooth sliding transition, arrows + dots, autoplay
------------------------------------------------------------------- */
function Carousel({ images, altBase }: { images: string[]; altBase: string }) {
  const [index, setIndex] = useState(0);
  const count = images.length;

  useEffect(() => {
    if (count <= 1) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % count);
    }, 5000);
    return () => clearInterval(id);
  }, [count]);

  if (count === 0) return null;

  const goTo = (i: number) => setIndex(((i % count) + count) % count);

  return (
    <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 h-64 md:h-96">
      <div
        className="flex h-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img key={i} src={src} alt={`${altBase} photo ${i + 1}`} className="w-full h-full object-cover shrink-0" />
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            onClick={() => goTo(index - 1)}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-red-700 text-white flex items-center justify-center transition-colors duration-300"
          >
            <ChevronLeftIcon size={20} />
          </button>
          <button
            onClick={() => goTo(index + 1)}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-red-700 text-white flex items-center justify-center transition-colors duration-300"
          >
            <ChevronRightIcon size={20} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to photo ${i + 1}`}
                className={'h-2 rounded-full transition-all duration-300 ' + (i === index ? 'w-6 bg-red-600' : 'w-2 bg-white/40 hover:bg-white/70')}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

type SocialHandle = { platform: string; url: string };

/* Brand-colour background per platform */
const BRAND_BG: Record<string, string> = {
  whatsapp: '#25D366',
  instagram: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
  google_maps: '#EA4335',
  facebook: '#1877F2',
  youtube: '#FF0000',
  twitter: '#000000',
  linkedin: '#0A66C2',
  zomato: '#E23744',
  swiggy: '#FC8019',
  website: '#c81e1e',
};

function SocialIcon({ platform }: { platform: string }) {
  if (platform === 'whatsapp') return <WhatsAppIcon className="w-6 h-6" />;
  if (platform === 'instagram') return <InstagramIcon size={22} />;
  if (platform === 'google_maps') return <MapPinIcon size={22} />;
  return <MapPinIcon size={22} />;
}

/* ------------------------------------------------------------------
   Static page content — hard-coded, no API/analytics
------------------------------------------------------------------- */
const content = {
  brand_name: 'Rahat Fitness Club',
  eyebrow: "Nalasopara's Iron House",
  tagline: 'Train Hard. Stay Strong. Live Better.',
  logo_image: '/rahatfitnessclub.png',
  phone: '+91 98901 23103',
  admission_price: '1300',
  admission_note: 'One-time fee, required when joining any plan of 1 month or longer.',
};

const timings = [
  { label: 'Morning', hours: '5:30 AM – 10:00 AM', start: 330, end: 600, Icon: SunriseIcon },
  { label: 'Evening', hours: '5:00 PM – 11:00 PM', start: 1020, end: 1380, Icon: SunsetIcon },
];

const plansData = [
  { label: 'Monthly', months: 1, price: 1000, tag: '' },
  { label: '3 Months', months: 3, price: 2500, tag: '' },
  { label: '6 Months', months: 6, price: 4500, tag: 'Popular' },
  { label: '12 Months', months: 12, price: 7500, tag: 'Best Value' },
];

const trainersData = [
  { name: 'Bilal Khan', role: 'Head Trainer' },
  { name: 'Aaryal', role: 'Fitness Trainer' },
];

const noticesData = [
  'Gym will remain closed on national holidays. Regular timings resume the next day.',
  'New batch slots opening soon — ask at the front desk for availability.',
];

const carouselImages = ['/gym1.jpeg', '/gym2.jpeg'];

const socialData: { style: 'brand'; handles: SocialHandle[] } = {
  style: 'brand',
  handles: [
    { platform: 'whatsapp', url: 'https://wa.me/919890123103' },
    { platform: 'instagram', url: 'https://www.instagram.com/rahat_fitness_squad?igsh=MWF5M2dyNzY5Z25m' },
    { platform: 'google_maps', url: 'https://maps.app.goo.gl/upAqrVxr8WGKiDjn8?g_st=awb' },
  ],
};

export default function RahatFitnessClubPage() {
  const nowMinutes = useNowMinutes();
  const [logoFailed, setLogoFailed] = useState(false);

  const phoneTel = `tel:${content.phone.replace(/\s+/g, '')}`;
  const whatsappHandle = socialData.handles.find((h) => h.platform === 'whatsapp');
  const whatsappUrl = whatsappHandle?.url ?? '';

  const baseMonthlyPrice = plansData.length > 0 ? plansData[0].price : 0;

  const displayHeading = { fontFamily: "'Arial Black', Impact, sans-serif" };

  return (
    <div className="min-h-screen bg-black text-neutral-100">
      {/* ---------------- HERO ---------------- */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-5 pt-8 pb-24 overflow-hidden"
        style={{
          minHeight: '80vh',
          background: 'radial-gradient(ellipse at 50% 20%, #2a0808 0%, #0a0a0a 55%, #000000 100%)',
        }}
      >
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 rounded-full opacity-30 blur-3xl"
          style={{ width: '36rem', height: '36rem', background: 'radial-gradient(circle, #c81e1e 0%, transparent 70%)' }}
          aria-hidden="true"
        />

        <Reveal className="relative mb-4">
          {content.logo_image && !logoFailed ? (
            <img
              src={content.logo_image}
              alt={content.brand_name}
              className="h-32 md:h-40 w-auto object-contain mx-auto"
              style={{ filter: 'drop-shadow(0 0 25px rgba(200,30,30,0.35))' }}
              onError={() => setLogoFailed(true)}
            />
          ) : (
            <div className="flex flex-col items-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center border-2 border-red-600"
                style={{ background: 'radial-gradient(circle, #1a0505 0%, #000000 100%)' }}
              >
                <DumbbellIcon className="text-red-600" size={28} />
              </div>
            </div>
          )}
        </Reveal>

        <Reveal>
          <p className="text-red-600 font-bold tracking-widest text-xs md:text-sm uppercase mb-4">{content.eyebrow}</p>
        </Reveal>

        <Reveal>
          <h1
            className="text-white leading-none mb-5 font-black uppercase"
            style={{ ...displayHeading, fontSize: 'clamp(2.8rem, 9vw, 6.5rem)', textShadow: '0 0 40px rgba(200,30,30,0.45)' }}
          >
            {content.brand_name}
          </h1>
        </Reveal>

        <Reveal>
          <p className="text-neutral-300 text-base md:text-xl font-medium max-w-xl mb-10">{content.tagline}</p>
        </Reveal>

        <Reveal>
          <div className="flex flex-col sm:flex-row gap-4">
            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="animate-pulse inline-flex items-center justify-center gap-2 bg-red-700 hover:bg-red-600 text-white font-bold px-8 py-3 rounded-md transition-colors duration-300"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Join on WhatsApp
              </a>
            )}
            <a
              href={phoneTel}
              className="inline-flex items-center justify-center gap-2 border-2 border-neutral-500 hover:border-red-500 text-neutral-100 font-bold px-8 py-3 rounded-md transition-colors duration-300"
            >
              <PhoneIcon size={18} />
              Call Us
            </a>
          </div>
        </Reveal>

        <a href="#timings" className="absolute bottom-8 text-neutral-500 hover:text-red-500 transition-colors duration-300" aria-label="Scroll down">
          <ChevronDownIcon className="animate-bounce" size={28} />
        </a>
      </section>

      {/* ---------------- GALLERY ---------------- */}
      {carouselImages.length > 0 && (
        <section id="gallery" className="max-w-5xl mx-auto px-5 pt-16 pb-4">
          <Reveal>
            <Carousel images={carouselImages} altBase={content.brand_name} />
          </Reveal>
        </section>
      )}

      {/* ---------------- TIMINGS ---------------- */}
      <section id="timings" className="max-w-5xl mx-auto px-5 py-20">
        <Reveal>
          <h2 className="text-center text-white mb-2 font-black uppercase" style={{ ...displayHeading, fontSize: 'clamp(1.8rem, 5vw, 2.75rem)' }}>
            Gym Timings
          </h2>
          <p className="text-center text-neutral-500 mb-12">Two sessions a day, every day.</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {timings.map((t) => {
            const isOpen = nowMinutes >= t.start && nowMinutes < t.end;
            const Icon = t.Icon;
            return (
              <Reveal key={t.label}>
                <div
                  className="relative h-full rounded-2xl p-8 text-center border border-neutral-800 hover:border-red-600 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  style={{ background: 'linear-gradient(160deg, #150707 0%, #0a0a0a 100%)' }}
                >
                  <div
                    className="absolute -right-10 -top-10 w-40 h-40 rounded-full opacity-20 blur-2xl"
                    style={{ background: 'radial-gradient(circle, #c81e1e 0%, transparent 70%)' }}
                    aria-hidden="true"
                  />
                  <div className="relative">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Icon className="text-red-500" size={30} />
                      {isOpen && (
                        <span className="inline-flex items-center gap-1.5 bg-green-900 border border-green-600 text-green-400 text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                          Open now
                        </span>
                      )}
                    </div>
                    <h3 className="text-white font-bold uppercase tracking-wide mb-3">{t.label}</h3>
                    <p className="text-3xl font-extrabold text-neutral-100">{t.hours}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <BarbellDivider />

      {/* ---------------- PLANS ---------------- */}
      <section id="plans" className="max-w-6xl mx-auto px-5 py-10">
        <Reveal>
          <h2 className="text-center text-white mb-2 font-black uppercase" style={{ ...displayHeading, fontSize: 'clamp(1.8rem, 5vw, 2.75rem)' }}>
            Membership Plans
          </h2>
          <p className="text-center text-neutral-500 mb-10">The longer you commit, the more you save.</p>
        </Reveal>

        <Reveal>
          <div className="flex items-center justify-center gap-3 text-center bg-neutral-950 border border-neutral-800 rounded-xl px-6 py-4 mb-10 max-w-xl mx-auto">
            <RupeeIcon className="text-red-600 shrink-0" size={20} />
            <p className="text-sm text-neutral-300">
              <span className="text-white font-bold">₹{content.admission_price} one-time admission fee</span> — {content.admission_note}
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plansData.map((p) => {
            const effectiveMonthly = Math.round(p.price / p.months);
            const savingsPct = p.months > 1 && baseMonthlyPrice > 0 ? Math.round((1 - effectiveMonthly / baseMonthlyPrice) * 100) : 0;
            const isHighlighted = Boolean(p.tag);
            const waMessage = encodeURIComponent(`Hi! I'd like to join the ${p.label} plan at ${content.brand_name}.`);
            return (
              <Reveal key={p.label}>
                <div
                  className={
                    'relative h-full flex flex-col items-center text-center rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-2 ' +
                    (isHighlighted ? 'border-red-600' : 'border-neutral-800 hover:border-red-700')
                  }
                  style={{
                    background: isHighlighted
                      ? 'linear-gradient(160deg, #2a0808 0%, #0a0a0a 100%)'
                      : 'linear-gradient(160deg, #141414 0%, #0a0a0a 100%)',
                    boxShadow: isHighlighted ? '0 0 30px rgba(200,30,30,0.25)' : 'none',
                  }}
                >
                  {p.tag && (
                    <span className="absolute -top-3 bg-red-700 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">
                      {p.tag}
                    </span>
                  )}

                  <p className="text-neutral-400 font-semibold uppercase text-sm mb-5 mt-1">{p.label}</p>

                  <div className="flex items-start justify-center text-white mb-1">
                    <RupeeIcon size={20} className="mt-1.5 mr-0.5" />
                    <span className="font-extrabold" style={{ fontSize: '2.5rem', lineHeight: 1 }}>
                      {p.price}
                    </span>
                  </div>
                  <p className="text-neutral-500 text-xs mb-4">total for {p.months === 1 ? '1 month' : `${p.months} months`}</p>

                  <div className="w-full h-px bg-neutral-800 mb-4" />

                  <p className="text-neutral-300 text-sm mb-1">
                    ≈ <span className="font-bold text-white">₹{effectiveMonthly}</span> / month
                  </p>
                  {savingsPct > 0 ? (
                    <p className="text-green-400 text-xs font-semibold mb-5">Save {savingsPct}% vs monthly</p>
                  ) : (
                    <p className="text-neutral-600 text-xs mb-5">Pay as you go</p>
                  )}

                  {whatsappUrl && (
                    <a
                      href={`${whatsappUrl}?text=${waMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        'mt-auto w-full inline-flex items-center justify-center gap-2 font-bold text-sm px-4 py-2.5 rounded-md transition-colors duration-300 ' +
                        (isHighlighted
                          ? 'bg-red-700 hover:bg-red-600 text-white'
                          : 'bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-100')
                      }
                    >
                      Choose Plan
                    </a>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <BarbellDivider />

      {/* ---------------- TRAINERS ---------------- */}
      <section id="trainers" className="max-w-4xl mx-auto px-5 py-10">
        <Reveal>
          <h2 className="text-center text-white mb-2 font-black uppercase" style={{ ...displayHeading, fontSize: 'clamp(1.8rem, 5vw, 2.75rem)' }}>
            Your Trainers
          </h2>
          <p className="text-center text-neutral-500 mb-12">Guidance from people who lift too.</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {trainersData.map((t) => {
            const initials = t.name
              .split(' ')
              .map((w) => w[0])
              .join('')
              .toUpperCase();
            return (
              <Reveal key={t.name}>
                <div className="flex items-center gap-5 bg-neutral-950 border border-neutral-800 hover:border-red-700 rounded-xl p-6 transition-colors duration-300">
                  <div
                    className="w-16 h-16 shrink-0 rounded-full flex items-center justify-center border-2 border-red-600 text-red-500 font-extrabold text-lg"
                    style={{ background: 'linear-gradient(135deg, #1a0505 0%, #0a0a0a 100%)' }}
                  >
                    {initials}
                  </div>
                  <div className="text-left">
                    <h3 className="text-white font-bold text-lg">{t.name}</h3>
                    <p className="text-red-500 text-sm font-semibold uppercase tracking-wide">{t.role}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <BarbellDivider />

      {/* ---------------- NOTICE BOARD ---------------- */}
      <section id="notices" className="max-w-3xl mx-auto px-5 py-10">
        <Reveal>
          <h2 className="text-center text-white mb-2 font-black uppercase" style={{ ...displayHeading, fontSize: 'clamp(1.8rem, 5vw, 2.75rem)' }}>
            Notice Board
          </h2>
          <p className="text-center text-neutral-500 mb-12">Announcements from the gym.</p>
        </Reveal>

        <Reveal>
          <div className="rounded-xl border border-neutral-800 bg-neutral-950 overflow-hidden">
            {noticesData.length > 0 ? (
              noticesData.map((note, i) => (
                <div
                  key={i}
                  className={'flex items-start gap-4 px-6 py-5 ' + (i !== noticesData.length - 1 ? 'border-b border-neutral-800' : '')}
                >
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-red-600 shrink-0" aria-hidden="true" />
                  <p className="text-neutral-200 text-sm leading-relaxed text-left">{note}</p>
                </div>
              ))
            ) : (
              <p className="px-6 py-8 text-center text-neutral-500 text-sm italic">No notices right now — check back soon.</p>
            )}
          </div>
        </Reveal>
      </section>

      <BarbellDivider />

      {/* ---------------- CONTACT / SOCIAL ---------------- */}
      <section id="contact" className="max-w-4xl mx-auto px-5 py-10 text-center">
        <Reveal>
          <h2 className="text-white mb-2 font-black uppercase" style={{ ...displayHeading, fontSize: 'clamp(1.8rem, 5vw, 2.75rem)' }}>
            Get In Touch
          </h2>
          <p className="text-neutral-500 mb-12">{content.phone}</p>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href={phoneTel}
              aria-label="Call"
              className="w-16 h-16 rounded-full flex items-center justify-center bg-neutral-900 border-2 border-neutral-700 text-neutral-100 hover:border-red-600 hover:text-red-500 hover:scale-110 transition-all duration-300"
            >
              <PhoneIcon size={26} />
            </a>

            {socialData.handles.map((h) => {
              const isBrand = socialData.style === 'brand';
              const bg = BRAND_BG[h.platform] ?? '#c81e1e';
              return (
                <a
                  key={h.platform}
                  href={h.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={h.platform}
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                  style={isBrand ? { background: bg } : { background: '#EFF4F1', color: '#c81e1e' }}
                >
                  <SocialIcon platform={h.platform} />
                </a>
              );
            })}
          </div>
        </Reveal>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="border-t border-neutral-900 py-8 text-center">
        <p className="text-neutral-600 text-xs">
          &copy; {new Date().getFullYear()} {content.brand_name}. All rights reserved.
        </p>
        <p className="text-neutral-700 text-xs mt-2">
          Powered by{' '}
          <a href="https://taplab.in" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:text-red-500 transition-colors duration-300">
            TapLab
          </a>
        </p>
      </footer>
    </div>
  );
}
