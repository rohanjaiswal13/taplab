"use client";

import { useState, useEffect } from "react";

// ── Icons ─────────────────────────────────────────────────────────────────────
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0 3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);

const LocationIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const DownloadIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const ArrowUpRightIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

// ── Profile Data ──────────────────────────────────────────────────────────────
const profile = {
  name: "Ajmal Idrisi",
  role: "Business Setup Specialist - One Consultant",
  tagline: "One Stop For All Your Business Service",
  location: "26, Ambitious Business Center, Oud Metha, Dubai",
  avatar: "/profile.jpeg",
  about:
    "We specialize in helping entrepreneurs and businesses establish their presence in Dubai and the UAE. From company formation and licensing to PRO services and banking assistance, we guide you through every step of your business journey with expertise and care.",
  services: [
    { label: "Company Formation", icon: "🏢" },
    { label: "Business Licensing", icon: "📋" },
    { label: "PRO Services", icon: "⚡" },
    { label: "Bank Account Opening", icon: "🏦" },
    { label: "Visa Processing", icon: "✈️" },
  ],
  socials: [
    {
      name: "Facebook",
      icon: <FacebookIcon />,
      handle: "One Consultant",
      url: "https://facebook.com/oneconsultant.ae",
    },
    {
      name: "Instagram",
      icon: <InstagramIcon />,
      handle: "@oneconsultant.ae",
      url: "https://instagram.com/oneconsultant.ae",
    },
    {
      name: "LinkedIn",
      icon: <LinkedInIcon />,
      handle: "One Consultant",
      url: "https://www.linkedin.com/company/one-consultant-services/",
    },
    {
      name: "WhatsApp",
      icon: <WhatsAppIcon />,
      handle: "+971 52 123 7386",
      url: "https://wa.me/971521237386",
    },
  ],
  contact: {
    phone: "04 528 4126",
    whatsapp: "+971 52 123 7386",
    email: "info@oneconsultant.ae",
    website: "oneconsultant.ae",
    address: "26, Ambitious Business Center, Oud Metha, Dubai",
  },
};

// ── vCard ─────────────────────────────────────────────────────────────────────
function generateVCard() {
  const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${profile.name}\nTITLE:${profile.role}\nTEL;TYPE=WORK:${profile.contact.phone}\nTEL;TYPE=CELL:${profile.contact.whatsapp}\nEMAIL:${profile.contact.email}\nURL:https://${profile.contact.website}\nADR:;;${profile.contact.address};;;;\nEND:VCARD`;
  const blob = new Blob([vcard], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${profile.name.replace(/ /g, "_")}.vcf`;
  a.click();
  URL.revokeObjectURL(url);
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function DigitalProfile() {
  const [copied, setCopied] = useState(false);
  const [savedContact, setSavedContact] = useState(false);

  useEffect(() => {
    if (!document.querySelector("link[href*='Playfair']")) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500;600;700&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveContact = () => {
    generateVCard();
    setSavedContact(true);
    setTimeout(() => setSavedContact(false), 2500);
  };

  return (
    <div
      className="min-h-screen"
      style={{
        background: "#0A1628",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div className="max-w-md mx-auto">
        {/* ── Top Gold Bar ── */}
        <div
          className="h-1 w-full"
          style={{
            background:
              "linear-gradient(90deg, #C5A050 0%, #E8C87A 50%, #C5A050 100%)",
          }}
        />

        {/* ── Action Row ── */}
        <div className="flex justify-between items-center px-5 pt-5 pb-2">
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#C5A050", letterSpacing: "0.2em" }}
          ></span>
          <div className="flex gap-2">
            <button
              onClick={copyLink}
              className="text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200"
              style={{
                borderColor: "rgba(255,255,255,0.25)",
                color: "rgba(255,255,255,0.85)",
                background: "rgba(255,255,255,0.08)",
              }}
            >
              {copied ? "✓ Copied" : "Share"}
            </button>
            <button
              onClick={handleSaveContact}
              className="flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full transition-all duration-200 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #C5A050, #E8C87A)",
                color: "#0A1628",
              }}
            >
              <DownloadIcon />
              {savedContact ? "Saved!" : "Save"}
            </button>
          </div>
        </div>

        {/* ── Hero ── */}
        <section className="flex flex-col items-center px-6 pt-8 pb-10 text-center">
          {/* Avatar with gold ring */}
          <div className="relative mb-6">
            <div
              className="rounded-full p-[3px]"
              style={{
                background:
                  "linear-gradient(135deg, #C5A050, #E8C87A, #C5A050)",
              }}
            >
              <div
                className="w-28 h-28 rounded-full overflow-hidden flex items-center justify-center"
                style={{ background: "#1B2A45" }}
              >
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const t = e.target as HTMLImageElement;
                    t.style.display = "none";
                    const p = t.parentElement;
                    if (p)
                      p.innerHTML = `<span style="font-size:36px;color:#C5A050;font-family:'Playfair Display',serif;font-weight:700">OC</span>`;
                  }}
                />
              </div>
            </div>
            <span
              className="absolute bottom-1 right-1 w-4 h-4 rounded-full border-2"
              style={{ background: "#22C55E", borderColor: "#0A1628" }}
            />
          </div>

          <h1
            className="text-3xl font-bold mb-1 text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {profile.name}
          </h1>

          <p
            className="text-sm font-bold uppercase tracking-widest mb-4"
            style={{ color: "#C5A050", letterSpacing: "0.18em" }}
          >
            {profile.role}
          </p>

          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
            style={{
              background: "rgba(197,160,80,0.12)",
              border: "1px solid rgba(197,160,80,0.4)",
              color: "#E8C87A",
            }}
          >
            {profile.tagline}
          </div>

          <div className="flex items-start gap-2 mt-5 max-w-xs">
            <span className="mt-0.5 flex-shrink-0" style={{ color: "#C5A050" }}>
              <LocationIcon />
            </span>
            <p
              className="text-sm font-medium text-left"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              {profile.location}
            </p>
          </div>
        </section>

        <Divider />

        {/* ── About ── */}
        <section className="px-6 py-8">
          <SectionLabel text="About Us" />
          <p
            className="text-sm font-medium leading-relaxed mt-4"
            style={{ color: "rgba(255,255,255,0.8)", lineHeight: "1.85" }}
          >
            {profile.about}
          </p>
        </section>

        <Divider />

        {/* ── Services ── */}
        <section className="px-6 py-8">
          <SectionLabel text="Our Services" />
          <div className="grid grid-cols-2 gap-3 mt-4">
            {profile.services.map((s, i) => (
              <div
                key={i}
                className="flex flex-col gap-2.5 px-4 py-4 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
              >
                <span className="text-2xl">{s.icon}</span>
                <span className="text-sm font-bold leading-tight text-white">
                  {s.label}
                </span>
              </div>
            ))}

            {/* Explore More Services Card Redirection */}
            <a
              href={`https://oneconsultant.ae/services`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between px-4 py-4 rounded-2xl transition-all duration-200 active:scale-[0.98] group"
              style={{
                background: "rgba(197,160,80,0.08)",
                border: "1px dashed rgba(197,160,80,0.4)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                textDecoration: "none",
              }}
            >
              <div className="flex justify-between items-center w-full">
                <span className="text-2xl">✨</span>
                <span style={{ color: "#E8C87A" }} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRightIcon />
                </span>
              </div>
              <span className="text-sm font-bold leading-tight mt-3" style={{ color: "#E8C87A" }}>
                Explore More Services
              </span>
            </a>
          </div>
        </section>

        <Divider />

        {/* ── Socials ── */}
        <section className="px-6 py-8">
          <SectionLabel text="Find Us Online" />
          <div className="flex flex-col gap-3 mt-4">
            {profile.socials.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-4 rounded-2xl transition-all duration-200 active:scale-[0.98] group"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  textDecoration: "none",
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex items-center justify-center w-10 h-10 rounded-xl text-white flex-shrink-0"
                    style={{
                      background:
                        i % 2 === 0
                          ? "rgba(26,95,180,0.4)"
                          : "rgba(197,160,80,0.25)",
                      border:
                        i % 2 === 0
                          ? "1px solid rgba(26,95,180,0.6)"
                          : "1px solid rgba(197,160,80,0.5)",
                      color: i % 2 === 0 ? "#7EB4FF" : "#E8C87A",
                    }}
                  >
                    {s.icon}
                  </span>
                  <div>
                    <p
                      className="text-xs font-semibold mb-0.5 uppercase tracking-wider"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                    >
                      {s.name}
                    </p>
                    <p className="text-sm font-bold text-white">{s.handle}</p>
                  </div>
                </div>
                <span style={{ color: "rgba(255,255,255,0.5)" }}>
                  <ArrowUpRightIcon />
                </span>
              </a>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── Contact ── */}
        <section className="px-6 py-8">
          <SectionLabel text="Get in Touch" />
          <div
            className="mt-4 rounded-3xl overflow-hidden"
            style={{
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.07)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            {[
              {
                icon: <PhoneIcon />,
                label: "Phone",
                value: profile.contact.phone,
                href: `tel:${profile.contact.phone}`,
                accent: "#7EB4FF",
                bg: "rgba(26,95,180,0.35)",
                border: "rgba(26,95,180,0.55)",
              },
              {
                icon: <WhatsAppIcon />,
                label: "WhatsApp",
                value: profile.contact.whatsapp,
                href: `https://wa.me/${profile.contact.whatsapp.replace(
                  /\s+/g,
                  ""
                )}`,
                accent: "#4ADE80",
                bg: "rgba(74,222,128,0.2)",
                border: "rgba(74,222,128,0.4)",
              },
              {
                icon: <MailIcon />,
                label: "Email",
                value: profile.contact.email,
                href: `mailto:${profile.contact.email}`,
                accent: "#E8C87A",
                bg: "rgba(197,160,80,0.25)",
                border: "rgba(197,160,80,0.45)",
              },
              {
                icon: <GlobeIcon />,
                label: "Website",
                value: profile.contact.website,
                href: `https://${profile.contact.website}`,
                accent: "#C084FC",
                bg: "rgba(167,139,250,0.2)",
                border: "rgba(167,139,250,0.4)",
              },
              {
                icon: <LocationIcon />,
                label: "Address",
                value: profile.contact.address,
                href: `https://maps.google.com/?q=${encodeURIComponent(
                  profile.contact.address
                )}`,
                accent: "#FB923C",
                bg: "rgba(251,146,60,0.2)",
                border: "rgba(251,146,60,0.4)",
              },
            ].map((c, i, arr) => (
              <a
                key={i}
                href={c.href}
                target={i >= 3 ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-5 py-4 transition-all duration-200 group"
                style={{
                  textDecoration: "none",
                  borderBottom:
                    i < arr.length - 1
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "none",
                }}
              >
                <span
                  className="flex items-center justify-center w-11 h-11 rounded-xl flex-shrink-0"
                  style={{
                    background: c.bg,
                    border: `1px solid ${c.border}`,
                    color: c.accent,
                  }}
                >
                  {c.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <p
                    className="text-xs font-bold uppercase tracking-wider mb-0.5"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {c.label}
                  </p>
                  <p className="text-sm font-bold truncate text-white">
                    {c.value}
                  </p>
                </div>
                <span style={{ color: "rgba(255,255,255,0.45)" }}>
                  <ChevronRightIcon />
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* ── Save Contact CTA ── */}
        <section className="px-6 pb-10">
          <button
            onClick={handleSaveContact}
            className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-bold text-sm tracking-wide transition-all duration-200 active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #1a5fb4 0%, #2a73d2 100%)",
              color: "#FFFFFF",
              letterSpacing: "0.06em",
              boxShadow: "0 6px 30px rgba(26,95,180,0.45)",
            }}
          >
            <DownloadIcon />
            {savedContact ? "Contact Saved! ✓" : "Save to Contacts"}
          </button>
          <p
            className="text-center text-xs font-medium mt-3"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Downloads a .vcf contact card to your device
          </p>
        </section>

        {/* ── Footer ── */}
        <footer className="text-center pb-10 pt-2 px-6 flex flex-col items-center gap-3">
          <div className="flex items-center gap-3 w-full max-w-xs">
            <div
              className="h-px flex-1"
              style={{ background: "rgba(255,255,255,0.1)" }}
            />
            <span style={{ color: "#C5A050" }}>◈</span>
            <div
              className="h-px flex-1"
              style={{ background: "rgba(255,255,255,0.1)" }}
            />
          </div>
          <p
            className="text-xs font-semibold"
            style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}
          >
            © 2026 One Consultant
          </p>
          <p
            className="text-xs font-medium"
            style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em" }}
          >
            Powered by{" "}
            <a
              href="https://taplab.in"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "rgba(255,255,255,0.75)",
                fontWeight: 700,
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.3)",
                paddingBottom: 1,
              }}
            >
              TapLab
            </a>
          </p>
        </footer>

        {/* Bottom bar */}
        <div
          className="h-1 w-full"
          style={{
            background:
              "linear-gradient(90deg, #1a5fb4 0%, #C5A050 50%, #1a5fb4 100%)",
          }}
        />
      </div>
    </div>
  );
}

// ── Helpers ────────────────────────────────────────────────────────────────────
function Divider() {
  return (
    <div
      className="mx-6 h-px"
      style={{ background: "rgba(255,255,255,0.1)" }}
    />
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="w-1 h-5 rounded-full"
        style={{ background: "linear-gradient(180deg, #C5A050, #E8C87A)" }}
      />
      <span
        className="text-sm font-bold uppercase tracking-widest"
        style={{ color: "#C5A050", letterSpacing: "0.18em" }}
      >
        {text}
      </span>
      <div
        className="flex-1 h-px"
        style={{ background: "rgba(197,160,80,0.25)" }}
      />
    </div>
  );
}