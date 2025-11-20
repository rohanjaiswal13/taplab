import { BrowserRouter, Routes, Route } from "react-router-dom";
import TapLabWebsite from "./taplab_website";
import SunsetMenu from "./sunset_chinese_menu";

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

        {/* IF USER TRIES TO ACCESS ANY OTHER ROUTE ON SUNSET SIDE → STILL BLOCKED */}
        <Route path="*" element={<TapLabWebsite />} />
      </Routes>
    </BrowserRouter>
  );
}
