"use client";

import { useState } from "react";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
      />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );
}

const PROFILE = {
  name: "Alex Monroe",
  title: "Creative Director & Brand Strategist",
  about:
    "I craft identities that last. With over a decade shaping brands across fashion, tech, and culture — I turn vision into visual language that speaks before you say a word.",
  services: [
    {
      id: 1,
      label: "Brand Identity",
      desc: "Logos, palettes, and brand systems built to endure.",
    },
    {
      id: 2,
      label: "Creative Direction",
      desc: "Guiding campaigns from concept to final execution.",
    },
    {
      id: 3,
      label: "Content Strategy",
      desc: "Stories that resonate, content that converts.",
    },
    {
      id: 4,
      label: "Visual Design",
      desc: "Print, digital, packaging — every pixel intentional.",
    },
    {
      id: 5,
      label: "Consulting",
      desc: "One-on-one sessions to sharpen your brand's edge.",
    },
  ],
  socials: [
    { label: "Instagram", href: "#", icon: <InstagramIcon /> },
    { label: "WhatsApp", href: "#", icon: <WhatsAppIcon /> },
    { label: "LinkedIn", href: "#", icon: <LinkedInIcon /> },
  ],
};

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div
        className="w-11 h-11 rounded-sm flex items-center justify-center shrink-0"
        style={{
          background:
            "linear-gradient(135deg, #c9a84c 0%, #e8c96a 60%, #a07830 100%)",
        }}
      >
        <span className="text-black font-black text-lg tracking-tighter select-none">
          AM
        </span>
      </div>
      <div className="leading-none">
        <p className="text-white font-semibold text-base tracking-wide">
          Alex Monroe
        </p>
        <p
          className="text-xs tracking-widest uppercase"
          style={{ color: "#a07830" }}
        >
          Creative Studio
        </p>
      </div>
    </div>
  );
}

function ServiceCard({ label, desc }: { label: string; desc: string }) {
  return (
    <div
      className="group flex items-start justify-between gap-4 px-5 py-4 rounded border transition-all duration-300 cursor-default"
      style={{
        borderColor: "rgba(201,168,76,0.15)",
        background: "rgba(255,255,255,0.02)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(201,168,76,0.45)";
        (e.currentTarget as HTMLDivElement).style.background =
          "rgba(201,168,76,0.05)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(201,168,76,0.15)";
        (e.currentTarget as HTMLDivElement).style.background =
          "rgba(255,255,255,0.02)";
      }}
    >
      <div>
        <p className="text-white text-sm font-medium mb-0.5">{label}</p>
        <p className="text-xs leading-relaxed" style={{ color: "#6b6b6b" }}>
          {desc}
        </p>
      </div>
      <span
        style={{ color: "rgba(201,168,76,0.4)" }}
        className="mt-0.5 shrink-0 transition-colors group-hover:text-[#c9a84c]"
      >
        <ArrowUpRight />
      </span>
    </div>
  );
}

export default function DigitalProfile() {
  const [copied, setCopied] = useState(false);

  const handleSaveContact = () => {
    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `FN:${PROFILE.name}`,
      `TITLE:${PROFILE.title}`,
      "EMAIL:hello@alexmonroe.co",
      "TEL:+10000000000",
      "URL:https://instagram.com/alexmonroe",
      "X-SOCIALPROFILE;type=instagram:https://instagram.com/alexmonroe",
      "X-SOCIALPROFILE;type=linkedin:https://linkedin.com/in/alexmonroe",
      "END:VCARD",
    ].join("\n");
    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${PROFILE.name.replace(" ", "_")}.vcf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@alexmonroe.co");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        background: "#0a0a0a",
        fontFamily: "'DM Sans', sans-serif",
        minHeight: "100vh",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Playfair+Display:wght@600;700&display=swap');

        .gold-divider {
          background: linear-gradient(to right, transparent, rgba(201,168,76,0.5), transparent);
          height: 1px;
          width: 100%;
        }

        .social-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          border-radius: 6px;
          border: 1px solid rgba(201,168,76,0.15);
          background: rgba(255,255,255,0.02);
          color: #999;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.02em;
          transition: all 0.25s ease;
          text-decoration: none;
          cursor: pointer;
          justify-content: center;
        }
        .social-btn:hover {
          border-color: rgba(201,168,76,0.5);
          color: #e8c96a;
          background: rgba(201,168,76,0.06);
        }

        .contact-primary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 28px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.25s ease;
          border: none;
          background: linear-gradient(135deg, #c9a84c 0%, #e8c96a 100%);
          color: #0a0a0a;
          width: 100%;
        }
        .contact-primary:hover { opacity: 0.88; transform: translateY(-1px); }

        .contact-secondary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 28px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.25s ease;
          background: transparent;
          color: #c9a84c;
          border: 1px solid rgba(201,168,76,0.4);
          width: 100%;
          text-decoration: none;
        }
        .contact-secondary:hover {
          border-color: #c9a84c;
          background: rgba(201,168,76,0.07);
          transform: translateY(-1px);
        }

        .contact-save {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 28px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.25s ease;
          background: transparent;
          color: #888;
          border: 1px solid rgba(255,255,255,0.08);
          width: 100%;
        }
        .contact-save:hover {
          border-color: rgba(201,168,76,0.3);
          color: #c9a84c;
          background: rgba(201,168,76,0.04);
          transform: translateY(-1px);
        }

        /* ── Desktop: centered card ── */
        .profile-wrapper {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 48px 16px;
        }
        .profile-card {
          position: relative;
          width: 100%;
          max-width: 448px;
          border-radius: 14px;
          overflow: hidden;
          background: #111111;
          border: 1px solid rgba(201,168,76,0.2);
          box-shadow: 0 0 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,168,76,0.08);
        }
        .card-glow {
          position: absolute;
          top: -1px; left: -1px; right: -1px; bottom: -1px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(201,168,76,0.18) 0%, transparent 50%, rgba(201,168,76,0.06) 100%);
          pointer-events: none;
          z-index: 0;
        }
        .card-inner {
          position: relative;
          z-index: 10;
          padding: 32px 28px 28px;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .card-footer {
          position: relative;
          z-index: 10;
          padding: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-top: 1px solid rgba(201,168,76,0.1);
        }

        /* ── Mobile: full-bleed, no card box ── */
        @media (max-width: 639px) {
          .profile-wrapper {
            padding: 0;
            align-items: stretch;
          }
          .profile-card {
            max-width: 100%;
            border-radius: 0;
            border-left: none;
            border-right: none;
            border-top: none;
            border-bottom: none;
            box-shadow: none;
          }
          .card-glow {
            border-radius: 0;
          }
          .card-inner {
            padding: 28px 20px 24px;
            gap: 24px;
          }
          .social-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <div className="profile-wrapper">
        <div className="profile-card">
          <div className="card-glow" />

          <div className="card-inner">
            {/* Header */}
            <Logo />

            <div className="gold-divider" />

            {/* About */}
            <div>
              <p
                className="text-xs tracking-widest uppercase mb-3"
                style={{ color: "rgba(201,168,76,0.55)" }}
              >
                About
              </p>
              <h1
                className="text-2xl leading-snug mb-3 text-white"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                }}
              >
                {PROFILE.title}
              </h1>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#7a7a7a" }}
              >
                {PROFILE.about}
              </p>
            </div>

            <div className="gold-divider" />

            {/* Services */}
            <div>
              <p
                className="text-xs tracking-widest uppercase mb-3"
                style={{ color: "rgba(201,168,76,0.55)" }}
              >
                Services
              </p>
              <div className="flex flex-col gap-2">
                {PROFILE.services.map((s) => (
                  <ServiceCard key={s.id} label={s.label} desc={s.desc} />
                ))}
              </div>
            </div>

            <div className="gold-divider" />

            {/* Socials */}
            <div>
              <p
                className="text-xs tracking-widest uppercase mb-3"
                style={{ color: "rgba(201,168,76,0.55)" }}
              >
                Find Me On
              </p>
              <div
                className="social-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "8px",
                }}
              >
                {PROFILE.socials.map((s) => (
                  <a key={s.label} href={s.href} className="social-btn">
                    {s.icon}
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="gold-divider" />

            {/* Contact */}
            <div>
              <p
                className="text-xs tracking-widest uppercase mb-3"
                style={{ color: "rgba(201,168,76,0.55)" }}
              >
                Get In Touch
              </p>
              <div className="flex flex-col gap-2.5">
                <button className="contact-save" onClick={handleSaveContact}>
                  <DownloadIcon />
                  Save Contact
                </button>
                <button className="contact-primary" onClick={handleCopyEmail}>
                  <MailIcon />
                  {copied ? "Copied!" : "hello@alexmonroe.co"}
                </button>
                <a href="tel:+10000000000" className="contact-secondary">
                  <PhoneIcon />
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="card-footer">
            <p style={{ fontSize: "11px", letterSpacing: "0.05em" }}>
              <span style={{ color: "#3d3d3d" }}>powered by </span>
              <a
                href="https://taplab.in"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#8a7040",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "#fbbf24";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "#8a7040";
                }}
              >
                TapLab
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
