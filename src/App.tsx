import { BrowserRouter, Routes, Route } from "react-router-dom";
import TapLabWebsite from "./taplab_website";
import SunsetMenu from "./sunset_chinese_menu";
import HighOnShakesMenu from "./high-on-shakes-menu";
import CaprinaMenu from "./pizza_menu";
import TazzaMenu from "./tazza-menu";

// ❗ No shared navbar, no shared footer, no shared links.
// ❗ Sunset page becomes isolated completely.

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* MAIN WEBSITE */}
        <Route path="/" element={<TapLabWebsite />} />

        {/* COMPLETELY SEPARATE PAGE */}
        <Route path="/sunsetchinese" element={<SunsetMenu />} />
        <Route path="/highonshakes" element={<HighOnShakesMenu />} />
        <Route path="/pizzacaprina" element={<CaprinaMenu />} />
        <Route path="/tazza" element={<TazzaMenu />} />

        {/* IF USER TRIES TO ACCESS ANY OTHER ROUTE ON SUNSET SIDE → STILL BLOCKED */}
        <Route path="*" element={<TapLabWebsite />} />
      </Routes>
    </BrowserRouter>
  );
}
