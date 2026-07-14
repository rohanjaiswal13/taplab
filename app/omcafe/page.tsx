"use client";

import { useState } from "react";

const owners = [
  { name: "Owner 1", phone: "918169619368", display: "+91 81696 19368" },
  { name: "Owner 2", phone: "918369208719", display: "+91 83692 08719" },
];

const menuData = {
  juices: [
    { name: "Mousambi Juice", emoji: "🍋", price: 70 },
    { name: "Mango Juice", emoji: "🥭", price: 50 },
    { name: "Chiku Juice", emoji: "🟤", price: 50 },
    { name: "Watermelon Juice", emoji: "🍉", price: 40 },
    { name: "Papaya Juice", emoji: "🍈", price: 40 },
    { name: "Muskmelon Juice", emoji: "🍈", price: 40 },
    { name: "Banana Milkshake", emoji: "🍌", price: 50 },
    { name: "Oreo Milkshake", emoji: "🍪", price: 60 },
    { name: "Cold Coffee", emoji: "☕", price: 40 },
  ],
  sandwiches: [
    { name: "Vegetable Sandwich", emoji: "🥗", price: 50 },
    { name: "Vegetable Grilled Sandwich", emoji: "🥪", price: 60 },
    { name: "Vegetable Cheese Sandwich", emoji: "🧀", price: 60 },
    { name: "Vegetable Grilled Cheese Sandwich", emoji: "🥪", price: 70 },
    { name: "Corn Sandwich", emoji: "🌽", price: 80 },
    { name: "Chutney Sandwich", emoji: "🌿", price: 40 },
    { name: "Chilli Cheese Sandwich", emoji: "🌶️", price: 60 },
    { name: "Aloo Cheese Sandwich", emoji: "🥔", price: 50 },
    { name: "Jain Sandwich", emoji: "🌱", price: 50 },
    { name: "Jain Cheese Sandwich", emoji: "🌱", price: 60 },
    { name: "Jain Grilled Cheese Sandwich", emoji: "🌱", price: 70 },
    { name: "Tandoori Paneer Masala Sandwich", emoji: "🥪", price: 70 },
    { name: "Tandoori Aloo Masala Sandwich", emoji: "🥔", price: 60 },
  ],
  franki: [
    { name: "Noodle Franki", emoji: "🍜", price: 50 },
    { name: "Noodle Cheese Franki", emoji: "🍜", price: 60 },
    { name: "Paneer Franki", emoji: "🥙", price: 60 },
    { name: "Paneer Cheese Franki", emoji: "🧀", price: 70 },
    { name: "Mayonaise Franki", emoji: "🥙", price: 60 },
    { name: "Mayonaise Cheese Franki", emoji: "🧀", price: 70 },
    { name: "Cheese Franki", emoji: "🧀", price: 50 },
  ],
  magggi: [
    { name: "Normal Maggi", emoji: "🍜", price: 40 },
    { name: "Normal Cheese Maggi", emoji: "🍜", price: 60 },
    { name: "Cheese Corn Maggi", emoji: "🍜", price: 70 },    
  ],
  pasta: [
    { name: "White Sauce Pasta", emoji: "🍝", price: 100 },
  ],
  fries: [
    { name: "Normal Fries", emoji: "🍟", price: 50 },
    { name: "Peri Peri Fries", emoji: "🍟", price: 60 },
    { name: "Cheese Fries", emoji: "🍟", price: 70 },
  ],
};

const PhoneIcon = ({ size = "sm" }: { size?: "sm" | "md" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={size === "md" ? "w-5 h-5" : "w-3.5 h-3.5"}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
  </svg>
);

const WAIcon = ({ size = "sm" }: { size?: "sm" | "md" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={size === "md" ? "w-5 h-5" : "w-3.5 h-3.5"}
    viewBox="0 0 32 32"
    fill="currentColor"
  >
    <path d="M16 2C8.27 2 2 8.27 2 16c0 2.44.65 4.73 1.79 6.72L2 30l7.48-1.76A13.93 13.93 0 0016 30c7.73 0 14-6.27 14-14S23.73 2 16 2zm0 25.5a11.47 11.47 0 01-5.84-1.6l-.42-.25-4.44 1.05 1.08-4.33-.28-.45A11.5 11.5 0 1116 27.5zm6.29-8.62c-.34-.17-2.02-1-2.33-1.11-.31-.12-.54-.17-.77.17s-.89 1.11-1.09 1.34c-.2.23-.4.26-.74.09a9.3 9.3 0 01-2.74-1.69 10.3 10.3 0 01-1.9-2.36c-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.85-1.05-2.53-.28-.67-.56-.58-.77-.59H10.2c-.23 0-.6.09-.91.43s-1.2 1.17-1.2 2.86 1.23 3.32 1.4 3.55c.17.23 2.42 3.7 5.87 5.19.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.02-.83 2.31-1.62.29-.8.29-1.48.2-1.62-.08-.15-.31-.23-.65-.4z" />
  </svg>
);

type Category = "all" | "juices" | "sandwiches" | "franki" | "magggi" | "pasta" | "fries";
type ModalType = "call" | "whatsapp" | null;

export default function OmCafeMenu() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [modal, setModal] = useState<ModalType>(null);

  const showJuices = activeCategory === "all" || activeCategory === "juices";
  const showSandwiches = activeCategory === "all" || activeCategory === "sandwiches";
  const showFranki = activeCategory === "all" || activeCategory === "franki";
  const showMagggi = activeCategory === "all" || activeCategory === "magggi";
  const showPasta = activeCategory === "all" || activeCategory === "pasta";
  const showFries = activeCategory === "all" || activeCategory === "fries";

  return (
    <div className="min-h-screen bg-orange-50 font-sans">
      {/* Number picker modal */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-40"
          onClick={() => setModal(null)}
        >
          <div
            className="bg-white w-full max-w-sm rounded-t-2xl px-5 pt-5 pb-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Handle bar */}
            <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>

            <p className="text-center text-sm font-bold text-gray-500 mb-4 uppercase tracking-widest">
              {modal === "call"
                ? "📞 Choose a number to call"
                : "💬 Choose a number to WhatsApp"}
            </p>

            <div className="flex flex-col gap-3">
              {owners.map((owner) => (
                <a
                  key={owner.phone}
                  href={
                    modal === "call"
                      ? `tel:+${owner.phone}`
                      : `https://wa.me/${owner.phone}?text=Hi%2C%20I'd%20like%20to%20place%20an%20order%20from%20Om%20Cafe%20`
                  }
                  target={modal === "whatsapp" ? "_blank" : undefined}
                  rel={modal === "whatsapp" ? "noopener noreferrer" : undefined}
                  onClick={() => setModal(null)}
                  className={`flex items-center gap-4 px-4 py-4 rounded-2xl font-bold text-white shadow active:scale-95 transition-transform duration-150 ${
                    modal === "call" ? "bg-orange-500" : "bg-green-500"
                  }`}
                >
                  <span className="bg-white bg-opacity-20 p-2 rounded-full">
                    {modal === "call" ? (
                      <PhoneIcon size="md" />
                    ) : (
                      <WAIcon size="md" />
                    )}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold opacity-80">
                      {owner.name}
                    </span>
                    <span className="text-base tracking-wide">
                      {owner.display}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <button
              onClick={() => setModal(null)}
              className="mt-4 w-full py-3 rounded-2xl text-sm font-bold text-gray-500 bg-gray-100 active:bg-gray-200"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Banner / Header */}
      <header className="bg-orange-500 text-white pt-4 pb-6 px-4 shadow-lg relative">
        {/* Call — top left */}
        <button
          onClick={() => setModal("call")}
          className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-white text-orange-600 font-bold text-xs px-3 py-2 rounded-full shadow-md active:scale-95 transition-transform duration-150"
        >
          <PhoneIcon />
          Call
        </button>

        {/* WhatsApp — top right */}
        <button
          onClick={() => setModal("whatsapp")}
          className="absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-green-500 text-white font-bold text-xs px-3 py-2 rounded-full shadow-md active:scale-95 transition-transform duration-150"
        >
          <WAIcon />
          WhatsApp
        </button>

        {/* Centered content */}
        <div className="text-center">
          <p className="text-xs tracking-widest font-semibold text-orange-100 mb-2 mt-1">
            || ॐ श्री गणेशाय नम ||
          </p>
          <div className="text-5xl mb-3 leading-none">ॐ</div>

          {/* Cafe name — Hindi & English on one line */}
          <div className="flex items-center justify-center">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
              ओम कॅफे
            </h1>
            <span className="mx-3 text-orange-300 text-2xl select-none font-light">
              ·
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-widest leading-tight">
              OM CAFE
            </h1>
          </div>

          {/* Tagline chips */}
          <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs font-bold tracking-widest text-orange-100 uppercase">
            <span className="bg-orange-600 bg-opacity-50 px-3 py-1 rounded-full">
              ☕ Coffee
            </span>
            <span className="bg-orange-600 bg-opacity-50 px-3 py-1 rounded-full">
              🥪 Sandwiches
            </span>
            <span className="bg-orange-600 bg-opacity-50 px-3 py-1 rounded-full">
              🧃 Juices
            </span>
            <span className="bg-orange-600 bg-opacity-50 px-3 py-1 rounded-full">
              🌯 Franki
            </span>
            <span className="bg-orange-600 bg-opacity-50 px-3 py-1 rounded-full">
              🍜 Maggi
            </span>
            <span className="bg-orange-600 bg-opacity-50 px-3 py-1 rounded-full">
              🍝 Pasta
            </span>
            <span className="bg-orange-600 bg-opacity-50 px-3 py-1 rounded-full">
              🍟 Fries
            </span>
          </div>

          {/* Pure Veg badge */}
          <div className="mt-4 inline-flex items-center gap-2 bg-white text-green-700 text-xs font-bold px-4 py-1.5 rounded-full border-2 border-green-600 shadow">
            <span className="w-3 h-3 rounded-full bg-green-600 inline-block"></span>
            PURE VEG
          </div>

          {/* Delivery info */}
          <div className="mt-3 flex flex-wrap justify-center gap-2 text-xs font-bold text-orange-100">
            <span className="bg-orange-600 bg-opacity-50 px-3 py-1 rounded-full">
              🚴 Free Delivery within 1 km
            </span>
            <span className="bg-orange-600 bg-opacity-50 px-3 py-1 rounded-full">
              📞 Delivery: 9136760597
            </span>
          </div>
        </div>
      </header>

      {/* Category Filter */}
      <nav className="sticky top-0 z-10 bg-orange-500 shadow-md">
        <div className="flex justify-center gap-2 py-2.5 px-3 overflow-x-auto">
          {(["all", "juices", "sandwiches", "franki", "magggi", "pasta", "fries"] as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-200 flex-shrink-0 ${
                activeCategory === cat
                  ? "bg-white text-orange-600 shadow-md"
                  : "bg-orange-400 text-white active:bg-orange-300"
              }`}
            >
              {cat === "all"
                ? "🍽️ All"
                : cat === "juices"
                ? "🧃 Juices"
                : cat === "sandwiches"
                ? "🥪 Sandwiches"
                : cat === "franki"
                ? "🌯 Franki"
                : cat === "magggi"
                ? "🍜 Maggi"
                : cat === "pasta"
                ? "🍝 Pasta"
                : "🍟 Fries"}
            </button>
          ))}
        </div>
      </nav>

      {/* Menu Content */}
      <main className="max-w-2xl mx-auto px-3 py-6 space-y-8">
        {showJuices && (
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 flex-1 bg-orange-200 rounded-full"></div>
              <h2 className="text-lg font-extrabold text-orange-600 tracking-wide whitespace-nowrap">
                🧃 Juices &amp; Milkshakes
              </h2>
              <div className="h-0.5 flex-1 bg-orange-200 rounded-full"></div>
            </div>
            <div className="flex flex-col gap-2.5">
              {menuData.juices.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-3 bg-white border-l-4 border-orange-400 rounded-xl px-4 py-3.5 shadow-sm"
                >
                  <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                  <span className="text-gray-800 font-semibold text-base flex-1 leading-tight">
                    {item.name}
                  </span>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-green-500 border border-green-700 inline-block"></span>
                    <span className="text-orange-600 font-extrabold text-base">
                      ₹{item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {showSandwiches && (
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 flex-1 bg-orange-200 rounded-full"></div>
              <h2 className="text-lg font-extrabold text-orange-600 tracking-wide whitespace-nowrap">
                🥪 Sandwiches
              </h2>
              <div className="h-0.5 flex-1 bg-orange-200 rounded-full"></div>
            </div>
            <div className="flex flex-col gap-2.5">
              {menuData.sandwiches.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-3 bg-white border-l-4 border-orange-400 rounded-xl px-4 py-3.5 shadow-sm"
                >
                  <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                  <span className="text-gray-800 font-semibold text-base flex-1 leading-tight">
                    {item.name}
                  </span>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-green-500 border border-green-700 inline-block"></span>
                    <span className="text-orange-600 font-extrabold text-base">
                      ₹{item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {showFranki && (
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 flex-1 bg-orange-200 rounded-full"></div>
              <h2 className="text-lg font-extrabold text-orange-600 tracking-wide whitespace-nowrap">
                🌯 Franki
              </h2>
              <div className="h-0.5 flex-1 bg-orange-200 rounded-full"></div>
            </div>
            <div className="flex flex-col gap-2.5">
              {menuData.franki.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-3 bg-white border-l-4 border-orange-400 rounded-xl px-4 py-3.5 shadow-sm"
                >
                  <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                  <span className="text-gray-800 font-semibold text-base flex-1 leading-tight">
                    {item.name}
                  </span>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-green-500 border border-green-700 inline-block"></span>
                    <span className="text-orange-600 font-extrabold text-base">
                      ₹{item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {showMagggi && (
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 flex-1 bg-orange-200 rounded-full"></div>
              <h2 className="text-lg font-extrabold text-orange-600 tracking-wide whitespace-nowrap">
                🍜 Maggi
              </h2>
              <div className="h-0.5 flex-1 bg-orange-200 rounded-full"></div>
            </div>
            <div className="flex flex-col gap-2.5">
              {menuData.magggi.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-3 bg-white border-l-4 border-orange-400 rounded-xl px-4 py-3.5 shadow-sm"
                >
                  <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                  <span className="text-gray-800 font-semibold text-base flex-1 leading-tight">
                    {item.name}
                  </span>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-green-500 border border-green-700 inline-block"></span>
                    <span className="text-orange-600 font-extrabold text-base">
                      ₹{item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {showPasta && (
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 flex-1 bg-orange-200 rounded-full"></div>
              <h2 className="text-lg font-extrabold text-orange-600 tracking-wide whitespace-nowrap">
                🍝 Pasta
              </h2>
              <div className="h-0.5 flex-1 bg-orange-200 rounded-full"></div>
            </div>
            <div className="flex flex-col gap-2.5">
              {menuData.pasta.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-3 bg-white border-l-4 border-orange-400 rounded-xl px-4 py-3.5 shadow-sm"
                >
                  <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                  <span className="text-gray-800 font-semibold text-base flex-1 leading-tight">
                    {item.name}
                  </span>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-green-500 border border-green-700 inline-block"></span>
                    <span className="text-orange-600 font-extrabold text-base">
                      ₹{item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {showFries && (
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 flex-1 bg-orange-200 rounded-full"></div>
              <h2 className="text-lg font-extrabold text-orange-600 tracking-wide whitespace-nowrap">
                🍟 French Fries
              </h2>
              <div className="h-0.5 flex-1 bg-orange-200 rounded-full"></div>
            </div>
            <div className="flex flex-col gap-2.5">
              {menuData.fries.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-3 bg-white border-l-4 border-orange-400 rounded-xl px-4 py-3.5 shadow-sm"
                >
                  <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                  <span className="text-gray-800 font-semibold text-base flex-1 leading-tight">
                    {item.name}
                  </span>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-green-500 border border-green-700 inline-block"></span>
                    <span className="text-orange-600 font-extrabold text-base">
                      ₹{item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-orange-600 text-white mt-8 py-8 px-4 text-center">
        <div className="text-2xl mb-1">ॐ</div>
        <h3 className="text-lg font-extrabold tracking-widest mb-1">OM CAFE</h3>
        <p className="text-orange-100 text-xs mb-5 italic">
          Pure Veg · Freshly Made
        </p>

        <div className="max-w-xs mx-auto space-y-2.5 text-sm">
          <div className="flex items-start justify-center gap-2">
            <span className="mt-0.5">📍</span>
            <span className="text-orange-100 text-sm leading-snug text-left">
              Swayam Gala Habitats, Shop No 5,<br />
              Lady Jamshedji Road, Opp. Bhandar Gully,<br />
              Near Yes Bank, Mahim, Mumbai - 400016
            </span>
          </div>
          {owners.map((owner) => (
            <div
              key={owner.phone}
              className="flex items-center justify-center gap-2"
            >
              <span>📞</span>
              <a
                href={`tel:+${owner.phone}`}
                className="font-semibold hover:text-orange-200"
              >
                {owner.display}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-orange-200 tracking-widest uppercase mb-5">
          || ॐ श्री गणेशाय नम ||
        </p>

        <div className="mt-2 text-xs">
          <span className="text-orange-300 opacity-70">Powered by </span>
          <a
            href="https://taplab.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-bold tracking-wide hover:text-orange-100 transition-colors duration-150"
          >
            TapLab
          </a>
        </div>
      </footer>
    </div>
  );
}