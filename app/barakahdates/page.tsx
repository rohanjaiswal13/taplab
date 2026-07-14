"use client";

import { Phone, MessageCircle, Instagram } from "lucide-react";

const BarakahDates = () => {
  const dates = [
    {
      id: "ajwa",
      name: "Ajwa",
      arabicName: "عجوة",
      tagline: "The Prophet's Date",
      description:
        "Soft, dark, and deliciously sweet with a prune-like texture. Ajwa dates are known for their distinctive deep black color and smooth, tender flesh.",
      history:
        "Originating from Madinah, Ajwa dates hold a special place in Islamic tradition. The Prophet Muhammad (PBUH) spoke of their healing properties, making them one of the most revered varieties. Cultivated exclusively in the blessed lands of Madinah for over 1,400 years.",
      benefits: [
        "Rich in antioxidants",
        "Supports heart health",
        "Natural energy boost",
      ],
      image: "/ajwa.jpeg",
      color: "from-amber-900 to-amber-950",
    },
    {
      id: "kalmi",
      name: "Kalmi",
      arabicName: "كلمي",
      tagline: "The Royal Delight",
      description:
        "Medium-sized with a beautiful golden-brown hue. Kalmi dates offer a perfect balance of sweetness and chewiness with a rich, caramel-like flavor.",
      history:
        "Kalmi dates have been cultivated in the Arabian Peninsula for centuries, prized by royalty and nobles for their exceptional taste. These dates were traditionally served in royal courts and remain a symbol of Arabian hospitality.",
      benefits: ["High in fiber", "Natural sweetness", "Perfect for gifting"],
      image: "kalmi.jpeg",
      color: "from-amber-700 to-amber-800",
    },
    {
      id: "sukkari",
      name: "Sukkari",
      arabicName: "سكري",
      tagline: "The Golden Jewel",
      description:
        "Light golden in color with an exceptionally sweet taste. Sukkari dates are soft, melt-in-your-mouth treats with a honey-like sweetness that's simply irresistible.",
      history:
        'Named after the Arabic word for "sugar," Sukkari dates from Qassim region are celebrated for their extraordinary sweetness. For generations, they have been considered nature\'s candy, enjoyed throughout the Arabian Gulf.',
      benefits: ["Naturally sweet", "Soft texture", "Energy-rich"],
      image: "/sukkari.jpeg",
      color: "from-amber-500 to-amber-600",
    },
    {
      id: "mejdool",
      name: "Mejdool",
      arabicName: "مجدول",
      tagline: "The King of Dates",
      description:
        'Large, plump, and luxuriously sweet. Mejdool dates are known as the "king of dates" for their impressive size, rich flavor, and succulent, meaty texture.',
      history:
        'Originating from Morocco and later flourishing in the Arabian Peninsula, Mejdool dates were once reserved exclusively for royalty. Their name means "unknown" or "improved," reflecting their extraordinary quality that sets them apart.',
      benefits: ["Largest variety", "Rich, complex flavor", "Premium quality"],
      image: "/mejdool.jpeg",
      color: "from-amber-800 to-brown-900",
    },
    {
      id: "mabroom",
      name: "Mabroom",
      arabicName: "مبروم",
      tagline: "The Elongated Treasure",
      description:
        "Uniquely elongated with a beautiful reddish-bronze skin. Mabroom dates offer a delightful chewy texture with notes of caramel and a subtle hint of cinnamon.",
      history:
        "Cultivated primarily in Madinah, Mabroom dates are distinguished by their elongated shape and reddish tones. These dates have been treasured for centuries as a premium variety, often gifted during special occasions and celebrations.",
      benefits: ["Unique flavor profile", "Chewy texture", "Rich in nutrients"],
      image: "/mabroom.jpeg",
      color: "from-red-900 to-amber-900",
    },
  ];

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/+918976154808?text=Hello, I would like to order at Barakah Dates",
      "_blank"
    );
  };

  const handleCall = () => {
    window.location.href = "tel:+91 8976154808";
  };

  const handleInstagram = () => {
    window.open(
      "https://www.instagram.com/barakahdates_mumbai?igsh=NnB4bnNjYTVrZTI0",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-cream-50 to-amber-100">
      {/* Floating Action Buttons */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        <button
          onClick={handleWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
        <button
          onClick={handleInstagram}
          className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 hover:opacity-90 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Instagram"
        >
          <Instagram className="w-6 h-6" />
        </button>
      </div>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-amber-800/20"></div>

        {/* Decorative Arabic Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid slice"
          >
            <pattern
              id="pattern"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="10"
                cy="10"
                r="2"
                fill="currentColor"
                className="text-amber-900"
              />
              <path
                d="M 5 10 Q 10 5 15 10 Q 10 15 5 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-amber-900"
              />
            </pattern>
            <rect x="0" y="0" width="100" height="100" fill="url(#pattern)" />
          </svg>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1
              className="text-7xl md:text-9xl font-bold text-amber-900 mb-4 tracking-tight"
              style={{ fontFamily: "serif" }}
            >
              Barakah Dates
            </h1>
            <div className="text-2xl md:text-3xl text-amber-700 font-light tracking-widest mb-8">
              بركة التمور
            </div>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-amber-800 italic mb-12">
              Saudi Premium Dates
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-amber-200 mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-amber-600"></div>
              <span className="text-3xl">⚡</span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-amber-600"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-2">
              1 Hour Delivery
            </h2>
            <p className="text-xl text-amber-700">Within Local Areas</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleCall}
              className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </button>
            <button
              onClick={handleWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-800 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-amber-800 rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Premium Varieties Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-5xl md:text-6xl font-bold text-amber-900 mb-4"
              style={{ fontFamily: "serif" }}
            >
              Our Premium Collection
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              Discover the finest selection of authentic Saudi dates, each with
              its own unique heritage and flavor
            </p>
          </div>

          <div className="space-y-16">
            {dates.map((date, index) => (
              <div
                key={date.id}
                className={`group ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                } flex flex-col md:flex-row gap-8 items-center`}
              >
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${date.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                    ></div>
                    <img
                      src={date.image}
                      alt={date.name}
                      className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                      <span className="text-2xl font-bold text-amber-900">
                        {date.arabicName}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 space-y-6">
                  <div>
                    <div className="inline-block bg-gradient-to-r from-amber-100 to-amber-200 px-4 py-1 rounded-full mb-4">
                      <span className="text-sm font-semibold text-amber-900 uppercase tracking-wider">
                        {date.tagline}
                      </span>
                    </div>
                    <h3
                      className="text-4xl md:text-5xl font-bold text-amber-900 mb-4"
                      style={{ fontFamily: "serif" }}
                    >
                      {date.name}
                    </h3>
                    <p className="text-lg text-amber-800 leading-relaxed mb-6">
                      {date.description}
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-6 border border-amber-200 shadow-lg">
                    <h4 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
                      <span className="text-2xl">📜</span>
                      Heritage & History
                    </h4>
                    <p className="text-amber-800 leading-relaxed">
                      {date.history}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {date.benefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="bg-white px-4 py-2 rounded-full shadow-md border border-amber-200"
                      >
                        <span className="text-sm font-medium text-amber-900">
                          ✓ {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={handleWhatsApp}
                    className="bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Order {date.name} Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-900 to-amber-950 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-12"
            style={{ fontFamily: "serif" }}
          >
            Why Choose Barakah Dates?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-3">Premium Quality</h3>
              <p className="text-amber-100">
                Hand-selected dates from the finest farms in Saudi Arabia,
                ensuring exceptional taste and freshness
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3">Fast Delivery</h3>
              <p className="text-amber-100">
                Get your order delivered within 1 hour in local areas -
                freshness guaranteed
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-3">Authentic Heritage</h3>
              <p className="text-amber-100">
                Sourced directly from traditional Saudi farms, preserving
                centuries of cultivation excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-5xl md:text-6xl font-bold text-amber-900 mb-6"
            style={{ fontFamily: "serif" }}
          >
            Experience the Blessing
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-amber-800 mb-12 max-w-2xl mx-auto">
            Order your premium Saudi dates today and taste the tradition of
            Arabian excellence
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={handleCall}
              className="bg-amber-800 hover:bg-amber-900 text-white px-10 py-5 rounded-full text-xl font-semibold shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
            >
              <Phone className="w-6 h-6" />
              Call to Order
            </button>
            <button
              onClick={handleWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-full text-xl font-semibold shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp Order
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-amber-950 to-amber-900 text-amber-100 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3
            className="text-3xl font-bold text-white mb-2"
            style={{ fontFamily: "serif" }}
          >
            Barakah Dates
          </h3>
          <p className="text-xl mb-6">بركة التمور</p>
          <p className="text-amber-200 mb-6">
            Saudi Premium Dates - Delivered with Blessing
          </p>
          <div className="h-px w-64 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-6"></div>
          <p className="text-sm text-amber-300">
            © 2024 Barakah Dates. All rights reserved. | Serving the finest
            Saudi dates with pride.
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default BarakahDates;
