"use client";

import { useState, useEffect } from "react"; // Import useEffect

// ── Social Icon SVGs ─────────────────────────────────────────────────────────
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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

// ── Profile Data ─────────────────────────────────────────────────────────────
const profile = {
  name: "Trend Tree Media",
  title: "Turning clicks into clients",
  tagline: "Not just marketing - we make brand trend",
  avatar:
    "/TTM.png",
  about:
    "At TrendTree Media, we partner with brands to craft impactful campaigns that not only look good but also deliver measurable results. From social media marketing and content creation to branding and growth strategy, our focus is on building digital ecosystems that drive engagement, trust, and long-term success.",
  services: [
    { label: "Social Media Marketing", icon: "✦" },
    { label: "Branding & Design", icon: "◈" },
    { label: "Content Creation", icon: "◉" },
    { label: "Meta Ads & Lead Generation", icon: "▣" },
    { label: "Video Editing", icon: "◫" },
    { label: "Website Development", icon: "◬" },
  ],
  socials: [
    {
      name: "Instagram",
      icon: <InstagramIcon />,
      handle: "@trend_tree_media    ",
      url: "https://www.instagram.com/trend_tree_media?igsh=MXgwZnlqY3p2cHlkaQ==",
    },
    {
      name: "LinkedIn",
      icon: <LinkedInIcon />,
      handle: "Ahad Vora",
      url: "https://www.linkedin.com/in/ahad-vora-b6304a225/",
    },
    {
      name: "WhatsApp",
      icon: <WhatsAppIcon />,
      handle: "+91 83692 94389",
      url: "https://wa.me/+918369294389",
    },
  ],
  contact: {
    phone: "+91 83692 94389",
    email: "voraahad@gmail.com",
    website: "www.trendtreemedia.com",
  },
};

// ── vCard Generator ───────────────────────────────────────────────────────────
function generateVCard() {
  const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${profile.name}\nTITLE:${profile.title}\nTEL;TYPE=CELL:${profile.contact.phone}\nEMAIL:${profile.contact.email}\nURL:https://${profile.contact.website}\nEND:VCARD`;
  const blob = new Blob([vcard], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${profile.name.replace(" ", "_")}.vcf`;
  a.click();
  URL.revokeObjectURL(url);
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function DigitalProfile() {
  const [copied, setCopied] = useState(false);
  const [savedContact, setSavedContact] = useState(false);

  // This code will now only run on the client side
  useEffect(() => {
    // Check if the link is already added to prevent duplicates on re-renders
    if (!document.querySelector("link[href*='clash-display']")) {
      const clashDisplayLink = document.createElement("link");
      clashDisplayLink.rel = "stylesheet";
      clashDisplayLink.href =
        "https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap";
      document.head.appendChild(clashDisplayLink);
    }
  }, []); // The empty dependency array ensures this runs only once on mount

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
      style={{ fontFamily: "'Clash Display', sans-serif" }}
      className="min-h-screen bg-white text-black"
    >
      {/* ── Top accent strip ── */}
      <div
        className="h-1 w-full"
        style={{
          background: "linear-gradient(90deg, #0C4515 50%, #FF9000 50%)",
        }}
      />

      {/* ── Floating share row ── */}
      <div className="flex justify-end px-6 pt-5 gap-3">
        <button
          onClick={copyLink}
          className="flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full border border-black/10 hover:border-black/30 transition-all duration-200"
          style={{ letterSpacing: "0.05em" }}
        >
          {copied ? "✓ Copied" : "Share Link"}
        </button>
        <button
          onClick={handleSaveContact}
          className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full text-white transition-all duration-200 active:scale-95"
          style={{ background: "#0C4515", letterSpacing: "0.05em" }}
        >
          <DownloadIcon />
          {savedContact ? "Saved!" : "Save Contact"}
        </button>
      </div>

      {/* ── Hero ── */}
      <section className="flex flex-col items-center pt-10 pb-8 px-6 text-center">
        {/* Avatar */}
        <div className="relative mb-6">
          <div className="w-32 h-33 overflow-hidden">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-full h-full object-cover"
              style={{ background: "#ffffff" }}
            />
          </div>
        </div>

        {/* Name & Title */}
        <h1
          className="text-4xl font-bold tracking-tight mb-1"
          style={{ fontFamily: "'Clash Display', sans-serif" }}
        >
          {profile.name}
        </h1>
        <p
          className="text-sm font-semibold uppercase tracking-widest mb-4"
          style={{ color: "#FF9000", letterSpacing: "0.18em" }}
        >
          {profile.title}
        </p>

        {/* Tagline pill */}
        <span
          className="inline-block text-sm font-medium px-5 py-2 rounded-full border"
          style={{ borderColor: "#0C4515", color: "#0C4515" }}
        >
          "{profile.tagline}"
        </span>
      </section>

      {/* ── Divider ── */}
      <div className="mx-6 my-2 h-px bg-black/8" />

      {/* ── About ── */}
      <section className="px-6 py-8 max-w-lg mx-auto">
        <SectionLabel text="About" accent="#0C4515" />
        <p
          className="text-base leading-relaxed text-black/75 mt-4"
          style={{ fontFamily: "'Clash Display', sans-serif" }}
        >
          {profile.about}
        </p>
      </section>

      {/* ── Services ── */}
      <section className="px-6 py-6 max-w-lg mx-auto">
        <SectionLabel text="Services" accent="#FF9000" />
        <div className="grid grid-cols-2 gap-3 mt-4">
          {profile.services.map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-black/8 bg-white hover:border-black/20 transition-all duration-200 group"
              style={{ boxShadow: "0 1px 8px rgba(0,0,0,0.04)" }}
            >
              <span
                className="text-lg leading-none group-hover:scale-110 transition-transform duration-200"
                style={{ color: i % 2 === 0 ? "#FF9000" : "#0C4515" }}
              >
                {s.icon}
              </span>
              <span
                className="text-sm font-semibold text-black"
                style={{ fontFamily: "'Clash Display', sans-serif" }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Socials ── */}
      <section className="px-6 py-6 max-w-lg mx-auto">
        <SectionLabel text="Find Me Online" accent="#0C4515" />
        <div className="flex flex-col gap-3 mt-4">
          {profile.socials.map((s, i) => (
            <a
              key={i}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-4 py-3.5 rounded-2xl border border-black/8 hover:border-black/20 bg-white active:scale-[0.98] transition-all duration-200 group"
              style={{
                boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
                textDecoration: "none",
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="flex items-center justify-center w-9 h-9 rounded-full text-white flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
                  style={{ background: i % 2 === 0 ? "#0C4515" : "#FF9000" }}
                >
                  {s.icon}
                </span>
                <div>
                  <p
                    className="text-xs text-black/40 font-medium leading-none mb-0.5"
                    style={{ letterSpacing: "0.04em" }}
                  >
                    {s.name}
                  </p>
                  <p className="text-sm font-semibold text-black">{s.handle}</p>
                </div>
              </div>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-black/20 group-hover:text-black/50 transition-colors"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          ))}
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="px-6 py-6 max-w-lg mx-auto">
        <SectionLabel text="Get in Touch" accent="#FF9000" />
        <div
          className="mt-4 rounded-3xl overflow-hidden border border-black/8"
          style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
        >
          {[
            {
              icon: <PhoneIcon />,
              label: "Phone",
              value: profile.contact.phone,
              href: `tel:${profile.contact.phone}`,
            },
            {
              icon: <MailIcon />,
              label: "Email",
              value: profile.contact.email,
              href: `mailto:${profile.contact.email}`,
            },
            {
              icon: <GlobeIcon />,
              label: "Website",
              value: profile.contact.website,
              href: `https://${profile.contact.website}`,
            },
          ].map((c, i) => (
            <a
              key={i}
              href={c.href}
              className="flex items-center gap-4 px-5 py-4 bg-white hover:bg-black/[0.02] active:bg-black/[0.04] transition-colors group"
              style={{
                textDecoration: "none",
                borderBottom: i < 2 ? "1px solid rgba(0,0,0,0.06)" : "none",
              }}
            >
              <span
                className="flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0"
                style={{
                  background: i === 1 ? "#FF9000" : "#0C4515",
                  color: "white",
                }}
              >
                {c.icon}
              </span>
              <div className="flex-1 min-w-0">
                <p
                  className="text-xs text-black/40 font-medium mb-0.5"
                  style={{ letterSpacing: "0.05em" }}
                >
                  {c.label}
                </p>
                <p className="text-sm font-semibold text-black truncate">
                  {c.value}
                </p>
              </div>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-black/15 group-hover:text-black/40 flex-shrink-0 transition-colors"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
          ))}
        </div>
      </section>

      {/* ── Save Contact CTA ── */}
      <section className="px-6 py-8 max-w-lg mx-auto">
        <button
          onClick={handleSaveContact}
          className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-bold text-white text-base tracking-wide transition-all duration-200 active:scale-[0.98]"
          style={{
            background: "linear-gradient(135deg, #0C4515 0%, #1a6b25 100%)",
            letterSpacing: "0.04em",
            boxShadow: "0 4px 20px rgba(12,69,21,0.3)",
          }}
        >
          <DownloadIcon />
          {savedContact ? "Contact Saved! ✓" : "Save to Contacts"}
        </button>
        <p
          className="text-center text-xs text-black/35 mt-3"
          style={{ letterSpacing: "0.03em" }}
        >
          Tap to download a .vcf contact card
        </p>
      </section>

      {/* ── Footer ── */}
      <footer className="text-center pb-10 pt-2 px-6 flex flex-col items-center gap-4">
        <div className="flex items-center justify-center gap-3 w-full max-w-xs">
          <div className="h-px flex-1 bg-black/8" />
          <span className="text-xl font-bold" style={{ color: "#FF9000" }}>✦</span>
          <div className="h-px flex-1 bg-black/8" />
        </div>

        {/* Branding & Copyright Stack */}
        <div className="flex flex-col gap-2">
          <p className="text-xs text-black/30" style={{ letterSpacing: "0.06em" }}>
            © 2026 {profile.name.toUpperCase()}
          </p>
          
          <p 
            className="text-[10px] uppercase tracking-[0.15em] text-black/35 font-medium transition-all"
            style={{ fontFamily: "'Clash Display', sans-serif" }}
          >
            Powered by{" "}
            <a 
              href="https://taplab.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-black/70 font-bold hover:text-black transition-colors duration-200 no-underline border-b border-black/10 hover:border-black/40 pb-0.5"
            >
              TapLab
            </a>
          </p>
        </div>
      </footer>

      {/* ── Bottom accent strip ── */}
      <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #FF9000 50%, #0C4515 50%)" }} />
    </div>
  );
}

// ── Section Label ─────────────────────────────────────────────────────────────
function SectionLabel({ text, accent }: { text: string; accent: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: accent, letterSpacing: "0.16em" }}>
        {text}
      </span>
      <div className="flex-1 h-px" style={{ background: `${accent}25` }} />
    </div>
  );
}