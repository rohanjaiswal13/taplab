"use client";

import { useState, useEffect } from "react";

const FontLoader = () => {
  useEffect(() => {
    const l = document.createElement("link");
    l.rel = "stylesheet";
    l.href =
      "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:wght@400;600;700;800&display=swap";
    document.head.appendChild(l);
  }, []);
  return null;
};

/* ── VEG / NON-VEG DOT ICONS ── */
const VegDot = () => (
  <span
    title="Vegetarian"
    style={{
      display: "inline-flex",
      alignItems: "center",
      marginRight: 7,
      flexShrink: 0,
      verticalAlign: "middle",
    }}
  >
    <svg width="15" height="15" viewBox="0 0 15 15">
      <rect
        x="1"
        y="1"
        width="13"
        height="13"
        rx="2"
        fill="none"
        stroke="#2e7d32"
        strokeWidth="1.5"
      />
      <circle cx="7.5" cy="7.5" r="4" fill="#2e7d32" />
    </svg>
  </span>
);

const NonVegDot = () => (
  <span
    title="Non-Vegetarian"
    style={{
      display: "inline-flex",
      alignItems: "center",
      marginRight: 7,
      flexShrink: 0,
      verticalAlign: "middle",
    }}
  >
    <svg width="15" height="15" viewBox="0 0 15 15">
      <rect
        x="1"
        y="1"
        width="13"
        height="13"
        rx="2"
        fill="none"
        stroke="#b71c1c"
        strokeWidth="1.5"
      />
      <polygon points="7.5,3.5 13,12 2,12" fill="#b71c1c" />
    </svg>
  </span>
);

/* ── FLAG STRIPE BAR (saffron · green · green · red) ── */
const FlagStripes = () => (
  <div
    style={{
      display: "flex",
      gap: 4,
      justifyContent: "center",
      margin: "10px 0",
    }}
  >
    {["#FF9933", "#138808", "#138808", "#CC0001"].map((c, i) => (
      <div
        key={i}
        style={{ width: 48, height: 7, background: c, borderRadius: 2 }}
      />
    ))}
  </div>
);

/* ── HORIZONTAL RULE DIVIDER ── */
const Divider = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 10,
      margin: "6px 0 16px",
    }}
  >
    <div style={{ flex: 1, height: 1, background: "#9C6B2A" }} />
    <div
      style={{
        width: 5,
        height: 5,
        background: "#9C6B2A",
        transform: "rotate(45deg)",
      }}
    />
    <div style={{ flex: 1, height: 1, background: "#9C6B2A" }} />
  </div>
);

/* ── SECTION HEADER ── */
const SectionHeader = ({ title }: { title: string }) => (
  <div style={{ textAlign: "center", margin: "0 0 4px" }}>
    <span
      style={{
        display: "inline-block",
        fontFamily: "'Bebas Neue', 'Oswald', sans-serif",
        fontSize: "clamp(1.1rem, 3.5vw, 1.55rem)",
        fontWeight: 400,
        letterSpacing: "0.18em",
        color: "#5C2800",
        textTransform: "uppercase",
        lineHeight: 1,
      }}
    >
      {title}
    </span>
  </div>
);

/* ── SUBSECTION ── */
const SubSection = ({ title }: { title: string }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 8,
      margin: "20px 0 8px",
    }}
  >
    <div
      style={{
        width: 16,
        height: 3,
        background: "#FF9933",
        borderRadius: 1,
        flexShrink: 0,
      }}
    />
    <span
      style={{
        fontFamily: "'Oswald', sans-serif",
        fontSize: "clamp(0.75rem, 2vw, 0.9rem)",
        color: "#7A3800",
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        fontWeight: 600,
      }}
    >
      {title}
    </span>
    <div style={{ flex: 1, height: 1, background: "rgba(156,107,42,0.25)" }} />
  </div>
);

/* ── ITEM ROW ── */
const Item = ({
  name,
  price,
  veg,
}: {
  name: string;
  price: number;
  veg?: boolean;
}) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "9px 6px",
      borderBottom: "1px solid rgba(156,107,42,0.18)",
      gap: 10,
    }}
    onMouseEnter={(e) =>
      ((e.currentTarget as HTMLDivElement).style.background =
        "rgba(156,107,42,0.06)")
    }
    onMouseLeave={(e) =>
      ((e.currentTarget as HTMLDivElement).style.background = "transparent")
    }
  >
    <div
      style={{ display: "flex", alignItems: "center", flex: 1, minWidth: 0 }}
    >
      {veg === true && <VegDot />}
      {veg === false && <NonVegDot />}
      <span
        style={{
          fontFamily: "'Lora', Georgia, serif",
          fontSize: "clamp(0.95rem, 2.6vw, 1.08rem)",
          fontWeight: 700,
          color: "#2C1505",
          lineHeight: 1.35,
        }}
      >
        {name}
      </span>
    </div>
    <span
      style={{
        fontFamily: "'Oswald', sans-serif",
        fontSize: "clamp(0.9rem, 2.3vw, 1rem)",
        color: "#7A3800",
        fontWeight: 600,
        whiteSpace: "nowrap",
        flexShrink: 0,
        letterSpacing: "0.04em",
      }}
    >
      ₹ {price}/-
    </span>
  </div>
);

/* ── 2-col grid on desktop ── */
const ItemGrid = ({
  items,
}: {
  items: { name: string; price: number; veg?: boolean }[];
}) => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  if (mobile)
    return (
      <>
        {items.map((it, i) => (
          <Item key={i} {...it} />
        ))}
      </>
    );
  const mid = Math.ceil(items.length / 2);
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 32px" }}
    >
      <div>
        {items.slice(0, mid).map((it, i) => (
          <Item key={i} {...it} />
        ))}
      </div>
      <div>
        {items.slice(mid).map((it, i) => (
          <Item key={i} {...it} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <section
    id={id}
    style={{
      background: "#FAF3E0",
      border: "1.5px solid #C8922A",
      borderRadius: 2,
      padding: "clamp(16px,3vw,24px) clamp(14px,3vw,22px)",
      boxShadow: "0 2px 0 #C8922A, 0 4px 18px rgba(100,50,0,0.08)",
      scrollMarginTop: 80,
    }}
  >
    {children}
  </section>
);

/* ══ DATA ══ */
type MI = { name: string; price: number; veg?: boolean };

const BUN: MI[] = [
  { name: "Bun Maska", price: 100, veg: true },
  { name: "Bun Maska Honey", price: 120, veg: true },
  { name: "Bun Maska Jam", price: 110, veg: true },
  { name: "Brun Maska", price: 100, veg: true },
  { name: "Brun Maska Honey", price: 120, veg: true },
  { name: "Brun Maska Jam", price: 110, veg: true },
  { name: "Pav Maska", price: 70, veg: true },
  { name: "Pav Maska Honey", price: 90, veg: true },
  { name: "Pav Maska Jam", price: 80, veg: true },
  { name: "Slice Maska", price: 110, veg: true },
  { name: "Slice Maska Jam", price: 120, veg: true },
  { name: "Slice Maska Honey", price: 130, veg: true },
  { name: "Toast Bun Maska", price: 130, veg: true },
  { name: "Toast Bun Maska Honey", price: 150, veg: true },
  { name: "Toast Bun Maska Jam", price: 140, veg: true },
  { name: "Toast Bun Maska Jam Cheese", price: 190, veg: true },
  { name: "Toast Maska", price: 150, veg: true },
  { name: "Toast Cheese", price: 200, veg: true },
  { name: "Toast Maska Jam", price: 160, veg: true },
  { name: "Toast Maska Honey", price: 170, veg: true },
  { name: "Pav Maska Grill", price: 70, veg: true },
  { name: "Pav", price: 10, veg: true },
  { name: "Slice Bread", price: 15, veg: true },
];

const TEA: MI[] = [
  { name: "Irani Chai", price: 50, veg: true },
  { name: "Green Tea", price: 70, veg: true },
  { name: "Irani Black Tea", price: 50, veg: true },
  { name: "Hot Milk Honey", price: 110, veg: true },
  { name: "Golden Milk Honey", price: 120, veg: true },
  { name: "Bournvita Milk", price: 140, veg: true },
];

const COLD: MI[] = [
  { name: "Ice-Cream Soda", price: 50, veg: true },
  { name: "Raspberry", price: 50, veg: true },
  { name: "Jeera Masala", price: 50, veg: true },
  { name: "Ginger", price: 50, veg: true },
  { name: "Sosyo", price: 50, veg: true },
  { name: "Lemonade", price: 50, veg: true },
  { name: "Pineapple", price: 50, veg: true },
  { name: "Nimbu", price: 50, veg: true },
];

const BURGERS: MI[] = [
  { name: "Iran Classic Chicken Cheese Burger", price: 260, veg: false },
  { name: "Iran Deluxe Chicken Cheese Burger", price: 260, veg: false },
  { name: "Iran Classic Mutton Cheese Burger", price: 310, veg: false },
  { name: "Iran Deluxe Mutton Cheese Burger", price: 330, veg: false },
  { name: "Veg Cheese Burger", price: 240, veg: true },
];

const ROLLS: MI[] = [
  { name: "Irani Chicken Cheese Roll", price: 240, veg: false },
  { name: "Irani Mutton Cheese Roll", price: 300, veg: false },
  { name: "Chicken Kathi Roll", price: 250, veg: false },
  { name: "Paneer Roll", price: 240, veg: true },
  { name: "Paneer Masala Roll", price: 260, veg: true },
  { name: "Chicken Kheema Roll", price: 240, veg: false },
  { name: "Mutton Kheema Roll", price: 280, veg: false },
  { name: "Chicken Butter Liver Roll", price: 240, veg: false },
];

const SANDWICHES: MI[] = [
  { name: "Bombay Veg Sandwich", price: 240, veg: true },
  { name: "Aloo Chutney Sandwich", price: 200, veg: true },
  { name: "Aloo Cheese Chutney Sandwich", price: 240, veg: true },
];

const GRILLED: MI[] = [
  { name: "Chicken Egg Cheese Grill", price: 280, veg: false },
  { name: "Chicken Cheese Grill", price: 260, veg: false },
  { name: "Cheese Grill", price: 230, veg: true },
  { name: "Paneer Cheese Grill", price: 250, veg: true },
  { name: "Bombay Veg Grill", price: 270, veg: true },
  { name: "Aloo Chutney Grill", price: 230, veg: true },
  { name: "Aloo Cheese Chutney Grill", price: 270, veg: true },
];

const CUTLETS: MI[] = [
  { name: "Chicken Cutlet (2 pcs)", price: 120, veg: false },
  { name: "Chicken Russian Kebab (2 pcs)", price: 140, veg: false },
  { name: "Chicken Farcha", price: 220, veg: false },
  { name: "Chicken Kathi (2 pcs)", price: 230, veg: false },
  { name: "Mutton Galouti Kebab (5 pcs)", price: 260, veg: false },
  { name: "Chicken Samosa (2 pcs)", price: 90, veg: false },
  { name: "Mutton Samosa (2 pcs)", price: 100, veg: false },
  { name: "Veg Samosa (2 pcs)", price: 80, veg: true },
  { name: "Paneer Samosa", price: 100, veg: true },
];

const EGGS: MI[] = [
  { name: "Akuri", price: 210, veg: false },
  { name: "Bhurji", price: 180, veg: false },
  { name: "Masala Fry Cheese Bhurji", price: 300, veg: false },
  { name: "Masala Fry Chicken Cheese Bhurji", price: 350, veg: false },
  { name: "Cheese Omelette", price: 210, veg: false },
  { name: "Cheese Masala Omelette", price: 280, veg: false },
  { name: "Chicken Cheese Masala Omelette", price: 330, veg: false },
  { name: "Chicken Cheese Omelette", price: 320, veg: false },
  { name: "Double Fry", price: 110, veg: false },
  { name: "Masala Double Fry", price: 180, veg: false },
  { name: "Masala Chicken Cheese Double Fry", price: 330, veg: false },
  { name: "Masala Cheese Double Fry", price: 270, veg: false },
  { name: "Scrambled", price: 120, veg: false },
  { name: "Cheese Scrambled", price: 250, veg: false },
  { name: "Chicken Cheese Scrambled", price: 320, veg: false },
  { name: "Sunny Side Up", price: 110, veg: false },
  { name: "Omelette", price: 140, veg: false },
  { name: "Masala Omelette", price: 170, veg: false },
  { name: "Masala Fry Omelette", price: 200, veg: false },
  { name: "Masala Fry Cheese Omelette", price: 300, veg: false },
  { name: "Masala Fry Chicken Cheese Omelette", price: 350, veg: false },
  { name: "Poro – Parsi Omelette", price: 250, veg: false },
  { name: "Cheese Poro", price: 300, veg: false },
  { name: "Chicken Cheese Poro", price: 350, veg: false },
];

const KHEEMA: MI[] = [
  { name: "Mutton Kheema", price: 250, veg: false },
  { name: "Mutton Kheema Fry", price: 270, veg: false },
  { name: "Mutton Kheema Ghotala", price: 290, veg: false },
  { name: "Chicken Kheema", price: 230, veg: false },
  { name: "Chicken Kheema Fry", price: 250, veg: false },
  { name: "Chicken Kheema Ghotala", price: 270, veg: false },
  { name: "Mutton Paya", price: 350, veg: false },
  { name: "Chicken Liver Butter Fry", price: 290, veg: false },
  { name: "Irani Chicken", price: 350, veg: false },
];

const VEG: MI[] = [
  { name: "Paneer Bhurji", price: 210, veg: true },
  { name: "Paneer Cheese Bhurji", price: 250, veg: true },
  { name: "Paneer Akuri", price: 230, veg: true },
  { name: "Veg Dhansak Rice", price: 380, veg: true },
];

const RICE: MI[] = [
  { name: "Mutton Kheema Egg Rice", price: 400, veg: false },
  { name: "Chicken Kheema Egg Rice", price: 390, veg: false },
  { name: "Chicken Black Pepper Rice", price: 400, veg: false },
  { name: "Chicken Dhansak Rice", price: 420, veg: false },
  { name: "Chicken Dum Biryani", price: 420, veg: false },
  { name: "Jeera Rice", price: 150, veg: true },
];

const NAV = [
  { id: "bun", label: "Bun Butter & Bread" },
  { id: "tea", label: "Tea & Milk" },
  { id: "cold", label: "Cold Drinks" },
  { id: "iranian", label: "Iranian Snacks" },
  { id: "cutlets", label: "Cutlets, Kebabs & Samosas" },
  { id: "eggs", label: "Eggs" },
  { id: "kheema", label: "Kheema, Paya & More" },
  { id: "veg", label: "Veg Specials" },
  { id: "rice", label: "Rice" },
];

export default function CafeIraniChaiMenu() {
  const go = (id: string) => {
    if (!id) return;
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <FontLoader />
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #EDE0C4; }
        #cic { min-height: 100vh; background: #EDE0C4; }

        .cat-select {
          width: 100%;
          appearance: none; -webkit-appearance: none;
          background: #FAF3E0;
          border: 2px solid #C8922A;
          border-radius: 3px;
          padding: 12px 48px 12px 18px;
          font-family: 'Oswald', sans-serif;
          font-size: clamp(0.9rem, 2.5vw, 1rem);
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #5C2800;
          cursor: pointer;
          outline: none;
        }
        .cat-select:focus { border-color: #7A3800; }

        .pair { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        @media (max-width: 600px) { .pair { grid-template-columns: 1fr; } }
      `}</style>

      <div id="cic">
        {/* TOP STRIP */}
        <div
          style={{
            background: "#7A3800",
            textAlign: "center",
            padding: "7px 12px",
            fontSize: "clamp(0.55rem,1.6vw,0.65rem)",
            letterSpacing: "0.28em",
            color: "rgba(255,255,255,0.9)",
            fontFamily: "'Oswald',sans-serif",
            textTransform: "uppercase",
            fontWeight: 500,
            borderBottom: "3px solid #FF9933",
          }}
        >
          Open All Days &nbsp;·&nbsp; 8 AM – 11 PM &nbsp;·&nbsp; Breakfast ·
          Lunch · Dinner
        </div>

        {/* HERO */}
        <header
          style={{
            background: "#FAF3E0",
            padding:
              "clamp(35px, 6vw, 60px) clamp(16px, 6vw, 60px) clamp(24px, 4vw, 40px)",
            textAlign: "center",
            borderBottom: "4px solid #C8922A",
            position: "relative",
          }}
        >
          {/* Logo Container */}
          <div
            style={{
              maxWidth: "clamp(290px, 38vw, 350px)",
              margin: "0 auto 18px",
              display: "flex",
              justifyContent: "center",
              transform: "translateX(5%)",
            }}
          >
            <img
              src="/cafeirani.png"
              alt="Cafe Irani Chai Logo"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>

          {/* Thin Decorative Divider Line */}
          <hr
            style={{
              border: "none",
              borderTop: "1px solid #C8922A",
              width: "60px",
              margin: "0 auto 18px",
              opacity: 0.6,
            }}
          />

          {/* Address */}
          <p
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: "clamp(0.88rem, 2.2vw, 1.05rem)",
              color: "#4A2800",
              lineHeight: 1.7,
              margin: "0 0 10px",
              opacity: 0.9,
              letterSpacing: "0.01em",
            }}
          >
            9, Rosary Chawl, Mangreesh C.H.S. Ltd., M.M.C. Road
            <br />
            Mahim (W), Mumbai – 400 016
          </p>

          {/* Phone */}
          <p
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(0.9rem, 2.4vw, 1.1rem)",
              color: "#7A3800",
              fontWeight: 600,
              margin: 0,
              letterSpacing: "0.06em",
            }}
          >
            2445 5577 / 2445 5579 &nbsp;·&nbsp; 98202 85577
          </p>
        </header>

        {/* STICKY DROPDOWN */}
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 200,
            background: "rgba(237,224,196,0.97)",
            borderBottom: "2px solid #C8922A",
            backdropFilter: "blur(6px)",
            padding: "10px 14px",
          }}
        >
          <div
            style={{ maxWidth: 960, margin: "0 auto", position: "relative" }}
          >
            <select
              className="cat-select"
              defaultValue=""
              onChange={(e) => {
                go(e.target.value);
                e.target.value = "";
              }}
            >
              <option value="" disabled>
                JUMP TO CATEGORY ▾
              </option>
              {NAV.map((n) => (
                <option key={n.id} value={n.id}>
                  {n.label.toUpperCase()}
                </option>
              ))}
            </select>
            <span
              style={{
                position: "absolute",
                right: 18,
                top: "50%",
                transform: "translateY(-50%)",
                color: "#C8922A",
                fontSize: 18,
                fontWeight: 900,
                pointerEvents: "none",
              }}
            >
              ▾
            </span>
          </div>
        </div>

        {/* MENU BODY */}
        <main
          style={{
            maxWidth: 960,
            margin: "0 auto",
            padding: "20px clamp(10px,3vw,24px) 60px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <Card id="bun">
            <SectionHeader title="Bun Butter & Bread" />
            <Divider />
            <ItemGrid items={BUN} />
          </Card>

          <div className="pair">
            <Card id="tea">
              <SectionHeader title="Tea & Milk" />
              <Divider />
              {TEA.map((it, i) => (
                <Item key={i} {...it} />
              ))}
            </Card>
            <Card id="cold">
              <SectionHeader title="Cold Drinks" />
              <Divider />
              {COLD.map((it, i) => (
                <Item key={i} {...it} />
              ))}
            </Card>
          </div>

          <Card id="iranian">
            <SectionHeader title="Iranian Snacks" />
            <Divider />
            <SubSection title="Burgers" />
            <ItemGrid items={BURGERS} />
            <SubSection title="Rolls" />
            <ItemGrid items={ROLLS} />
            <SubSection title="Sandwiches" />
            <ItemGrid items={SANDWICHES} />
            <SubSection title="Grilled Sandwiches" />
            <ItemGrid items={GRILLED} />
          </Card>

          <div className="pair">
            <Card id="cutlets">
              <SectionHeader title="Cutlets, Kebabs & Samosas" />
              <Divider />
              {CUTLETS.map((it, i) => (
                <Item key={i} {...it} />
              ))}
            </Card>
            <Card id="veg">
              <SectionHeader title="Veg Specials" />
              <Divider />
              {VEG.map((it, i) => (
                <Item key={i} {...it} />
              ))}
            </Card>
          </div>

          <Card id="eggs">
            <SectionHeader title="Eggs" />
            <Divider />
            <ItemGrid items={EGGS} />
          </Card>

          <div className="pair">
            <Card id="kheema">
              <SectionHeader title="Kheema, Paya & More" />
              <Divider />
              {KHEEMA.map((it, i) => (
                <Item key={i} {...it} />
              ))}
            </Card>
            <Card id="rice">
              <SectionHeader title="Rice" />
              <Divider />
              {RICE.map((it, i) => (
                <Item key={i} {...it} />
              ))}
            </Card>
          </div>

          {/* NOTICES */}
          <div
            style={{
              background: "#FAF3E0",
              border: "1.5px solid #C8922A",
              borderRadius: 2,
              padding: "clamp(14px,3vw,22px)",
              boxShadow: "0 2px 0 #C8922A",
            }}
          >
            <p
              style={{
                fontFamily: "'Oswald', sans-serif",
                color: "#7A3800",
                fontSize: "clamp(0.9rem,2.2vw,1rem)",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Information
            </p>
            <div
              style={{
                borderLeft: "3px solid #FF9933",
                paddingLeft: 14,
                marginBottom: 14,
              }}
            >
              {[
                "Home Delivery – Accepted orders cannot be cancelled. Give us some time to serve you better.",
                "No best served – Halal. Atithi Devo Bhava. 10% discount to all foreigners.",
                "26% discount on Republic Day, 26th January.",
                "22% discount on 22nd Bahman (Anniversary of the Islamic Revolution).",
                "Independence Day – 15th August: 10% discount for all. 10% discount for cyclists.",
              ].map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "'Lora', serif",
                    fontSize: "clamp(0.88rem,2.1vw,0.97rem)",
                    color: "rgba(44,21,5,0.72)",
                    lineHeight: 1.85,
                    marginBottom: 4,
                  }}
                >
                  · {p}
                </p>
              ))}
            </div>
            <p
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "clamp(0.82rem,2vw,0.92rem)",
                color: "#7A3800",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                lineHeight: 1.6,
                margin: 0,
                borderTop: "1px solid rgba(156,107,42,0.3)",
                paddingTop: 10,
              }}
            >
              ⚠ Right of Admission Reserved · Entry prohibited to customers
              under influence of alcohol or drugs · Sold to eaters only
            </p>
          </div>
        </main>

        {/* FOOTER */}
        <footer
          style={{
            background: "#7A3800",
            borderTop: "4px solid #FF9933",
            padding: "clamp(18px,4vw,30px) clamp(16px,5vw,40px)",
            textAlign: "center",
          }}
        >
          <FlagStripes />
          <p
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(1.2rem,4vw,1.8rem)",
              color: "#FAF3E0",
              letterSpacing: "0.14em",
              margin: "8px 0 4px",
            }}
          >
            CAFE IRANI CHAII
          </p>
          <p
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(0.72rem,1.8vw,0.82rem)",
              letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.65)",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            INDIA IRAN BHAI BHAI — FRIENDSHIP AND BROTHERHOOD
          </p>
          <p
            style={{
              fontFamily: "'Lora', serif",
              fontStyle: "italic",
              fontSize: "clamp(0.75rem,1.7vw,0.85rem)",
              color: "rgba(255,255,255,0.45)",
              marginBottom: 12,
            }}
          >
            © Cafe Irani Chai · 9, Rosary Chawl, Mahim, Mumbai – 400 016
          </p>
          <p
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(0.6rem,1.5vw,0.7rem)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.35)" }}>Powered by </span>
            <a
              href="https://taplab.in"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#FAF3E0",
                fontWeight: 700,
                textDecoration: "underline",
                textUnderlineOffset: 3,
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "0.65")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "1")
              }
            >
              TapLab
            </a>
          </p>
          <p
            style={{
              fontFamily: "'Lora', serif",
              fontStyle: "italic",
              fontSize: "clamp(0.65rem,1.4vw,0.75rem)",
              color: "rgba(255,255,255,0.28)",
              marginTop: 8,
            }}
          >
            All prices inclusive of taxes · Subject to change without notice
          </p>
        </footer>
      </div>
    </>
  );
}