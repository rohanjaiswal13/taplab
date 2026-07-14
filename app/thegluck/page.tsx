"use client";

import { useState } from "react";

const menuData = {
  burritos: {
    label: "BURRITOS",
    items: [
      {
        name: "Veg. Burrito",
        price: 299,
        description:
          "Filled with fragrant herb rice, salsa roja, refried beans, pico de Gallo, guacamole & chipotle mayo wrapped in housemade tortilla.",
        veg: true,
      },
      {
        name: "Paneer Birria Burrito",
        price: 339,
        description:
          "Filled with fragrant herb rice, crispy fried paneer, spicy birria sauce, refried beans, pico de Gallo, guacamole & chipotle mayo wrapped in housemade tortilla.",
        veg: true,
      },
      {
        name: "Chicken Birria Burrito",
        price: 349,
        description:
          "Filled with fragrant herb rice, spicy chicken in birria sauce, refried beans, pico de Gallo, guacamole & chipotle mayo wrapped in housemade tortilla.",
        veg: false,
      },
      {
        name: "Fried Chicken Burrito",
        price: 349,
        description:
          "Filled with fragrant herb rice, crispy fried chicken tossed in cajun spice, salsa roja, refried beans, pico de Gallo, guacamole & chipotle mayo wrapped in housemade tortilla.",
        veg: false,
      },
    ],
  },
  nachos: {
    label: "NACHOS",
    items: [
      {
        name: "Veg. Loaded Nachos",
        price: 299,
        description:
          "Cajun spiced nachos topped with guacamole, salsa roja, refried beans, corn sauce, pico de Gallo & chipotle mayo.",
        veg: true,
      },
      {
        name: "Non-Veg. Loaded Nachos",
        price: 339,
        description:
          "Cajun spiced nachos topped with guacamole, salsa roja, juicy chicken, refried beans, corn sauce, pico de Gallo & chipotle mayo.",
        veg: false,
      },
      {
        name: "Cajun Spiced Nachos",
        price: 329,
        description: "Cajun spiced nachos served with corn sauce.",
        veg: true,
      },
    ],
  },
  quesadillas: {
    label: "QUESADILLAS",
    items: [
      {
        name: "Mushroom & Cheese",
        price: 259,
        description: "Quesadilla stuffed with cheesy mushroom duxelles.",
        veg: true,
      },
      {
        name: "Birria Chicken",
        price: 269,
        description: "Quesadilla stuffed with spicy birria chicken & cheese.",
        veg: false,
      },
      {
        name: "Spicy Cheese",
        price: 249,
        description: "Quesadilla stuffed with spicy schezwan sauce & cheese.",
        veg: true,
      },
    ],
  },
  wings: {
    label: "WINGS",
    items: [
      {
        name: "Cajun Spiced Wings",
        price: "289 / 369",
        priceNote: "4PC / 6PC",
        description: "Cajun spice crispy chicken wings.",
        veg: false,
      },
      {
        name: "BBQ Wings",
        price: "289 / 349",
        priceNote: "4PC / 6PC",
        description: "Crispy wings tossed in housemade BBQ sauce.",
        veg: false,
      },
      {
        name: "Honey Chilli Wings",
        price: "279 / 359",
        priceNote: "4PC / 6PC",
        description: "Crispy wings tossed in sweet & spicy honey chilli sauce.",
        veg: false,
      },
      {
        name: "Jamaican Jerk Wings",
        price: "279 / 359",
        priceNote: "4PC / 6PC",
        description:
          "Crispy wings tossed in authentic housemade Jamaican jerk sauce.",
        veg: false,
      },
    ],
  },
  desserts: {
    label: "DESSERTS",
    items: [
      {
        name: "Churros w Chocolate Sauce",
        price: 239,
        description:
          "Classic churros crisp on the outside & soft in inside served with decadent chocolate sauce.",
        veg: true,
      },
    ],
  },
};

const categories = Object.keys(menuData) as (keyof typeof menuData)[];

export default function GluckMenu() {
  const [activeCategory, setActiveCategory] =
    useState<keyof typeof menuData>("burritos");
  const [filter, setFilter] = useState<"all" | "veg" | "nonveg">("all");

  const currentSection = menuData[activeCategory];
  const filtered = currentSection.items.filter((item) => {
    if (filter === "veg") return item.veg;
    if (filter === "nonveg") return !item.veg;
    return true;
  });

  return (
    <div
      style={{ fontFamily: "'Playfair Display', serif" }}
      className="min-h-screen bg-white text-black"
    >
      {/* Google Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Space+Mono:wght@400;700&display=swap');
        
        .mono { font-family: 'Space Mono', monospace; }

        .logo-text {
          font-family: 'Space Mono', monospace;
          letter-spacing: -0.04em;
          line-height: 0.85;
        }

        .menu-item-card {
          border-bottom: 1px solid #e5e5e5;
          transition: background 0.2s ease;
        }
        .menu-item-card:hover {
          background: #f9f9f9;
        }

        .cat-btn {
          transition: all 0.2s ease;
          border-bottom: 2px solid transparent;
        }
        .cat-btn.active {
          border-bottom: 2px solid black;
        }

        .veg-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          display: inline-block;
          flex-shrink: 0;
        }

        .noise-bg {
          position: relative;
          overflow: hidden;
        }
        .noise-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 1;
        }

        .filter-pill {
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .filter-pill.active {
          background: black;
          color: white;
        }

        .price-badge {
          font-family: 'Space Mono', monospace;
          font-size: 0.85rem;
        }
      `}</style>

      {/* HERO HEADER */}
      <header className="noise-bg bg-black text-white py-14 px-6 text-center relative">
        <div className="relative z-10">
          <p className="mono text-xs tracking-[0.35em] text-gray-400 mb-4 uppercase">
            Welcome
          </p>
          <div className="logo-text text-white text-6xl md:text-8xl font-black uppercase mb-2">
            THE GLÜCK
          </div>
          <div
            className="mx-auto mt-5 mb-6"
            style={{
              width: "60px",
              height: "1px",
              background:
                "linear-gradient(to right, transparent, #fff, transparent)",
            }}
          />
          <p className="mono text-xs tracking-[0.2em] text-gray-400 uppercase">
            Mexican · Wings · Quesadillas
          </p>
        </div>
      </header>

      {/* VEG FILTER */}
      <div className="border-b border-gray-100 px-6 py-3 flex items-center justify-center gap-3 bg-white sticky top-0 z-20 shadow-sm">
        {(["all", "veg", "nonveg"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`filter-pill mono text-xs px-4 py-1.5 border border-black rounded-full uppercase tracking-widest ${
              filter === f ? "active" : "text-black"
            }`}
          >
            {f === "all" ? "All" : f === "veg" ? "🟢 Veg" : "🔴 Non-Veg"}
          </button>
        ))}
      </div>

      {/* CATEGORY NAV */}
      <nav className="flex flex-wrap justify-center gap-0 border-b border-gray-200 bg-white sticky top-[53px] z-20 px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`cat-btn mono text-xs tracking-widest uppercase whitespace-nowrap px-5 py-4 font-bold ${
              activeCategory === cat ? "active text-black" : "text-gray-400"
            }`}
          >
            {menuData[cat].label}
          </button>
        ))}
      </nav>

      {/* SECTION CONTENT */}
      <main className="max-w-2xl mx-auto px-4 py-8">
        {/* Section Title */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="mono text-xs tracking-[0.3em] text-gray-400 uppercase mb-1">
              Now Showing
            </p>
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl font-black italic text-black"
            >
              {currentSection.label.charAt(0) +
                currentSection.label.slice(1).toLowerCase()}
            </h2>
          </div>
          <div className="text-right">
            <p className="mono text-xs text-gray-400">
              {filtered.length} items
            </p>
          </div>
        </div>

        {/* Wings size note */}
        {activeCategory === "wings" && (
          <div className="mono text-xs text-gray-500 bg-gray-50 border border-gray-200 rounded px-4 py-2 mb-6 tracking-wider">
            PRICES: 4 PIECE / 6 PIECE
          </div>
        )}

        {/* Menu Items */}
        <div className="space-y-0">
          {filtered.length === 0 ? (
            <p className="mono text-sm text-gray-400 py-12 text-center">
              No items match your filter.
            </p>
          ) : (
            filtered.map((item, i) => (
              <div key={i} className="menu-item-card py-6 px-2">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="veg-dot"
                        style={{
                          background: item.veg ? "#22c55e" : "#ef4444",
                          border: `2px solid ${
                            item.veg ? "#16a34a" : "#dc2626"
                          }`,
                        }}
                      />
                      <h3
                        style={{ fontFamily: "'Playfair Display', serif" }}
                        className="font-bold text-lg leading-snug text-black"
                      >
                        {item.name}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed pl-4">
                      {item.description}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="price-badge font-bold text-black">
                      ₹{item.price}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Extra Sauces note for wings/desserts */}
        {(activeCategory === "wings" || activeCategory === "desserts") && (
          <div className="mt-8 border border-black p-4 text-center">
            <p className="mono text-xs tracking-widest text-black uppercase">
              Extra Sauces — ₹39
            </p>
          </div>
        )}

        {/* No service charge badge */}
        <div className="mt-10 text-center">
          <span className="mono text-xs text-gray-400 tracking-widest uppercase">
            ✦ We do not levy service charge ✦
          </span>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="noise-bg bg-black text-white mt-12 py-10 px-6 text-center relative">
        <div className="relative z-10">
          <div className="logo-text text-white text-2xl font-black uppercase mb-3">
            THE GLÜCK
          </div>
          <div
            className="mx-auto mb-4"
            style={{
              width: "40px",
              height: "1px",
              background:
                "linear-gradient(to right, transparent, #666, transparent)",
            }}
          />
          <p className="text-sm">© 2026 THE GLÜCK. All rights reserved.</p>
          <p className="mono text-xs text-gray-600 tracking-widest uppercase">
            Powered by{" "}
            <a
              href="https://taplab.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 font-bold hover:text-white transition-colors duration-200"
            >
              Taplab
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
