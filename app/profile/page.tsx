"use client";
import { Mail, Phone, Globe, Instagram, Linkedin } from "lucide-react";
import TL from "../../public/TL.jpeg";

const Profile = () => {
  const handleSaveContact = () => {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:TapLab
TEL:+91 98671 45439
EMAIL:contact@taplab.in
END:VCARD`;

    const blob = new Blob([vCard], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "taplab-contact.vcf";
    a.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-6 space-y-6 border border-blue-100">
        {/* Profile Header */}
        <div className="text-center">
          <img
            src={TL.src}
            alt="profile"
            className="w-28 h-20 object-contain mx-auto mb-4" // rectangular logo
          />
          <h1 className="text-xl font-semibold text-gray-900">TapLab</h1>
          <p className="text-blue-600 text-sm font-medium">
            Tap. Connect. Impress.
          </p>
        </div>

        {/* Save Contact */}
        <button
          onClick={handleSaveContact}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-xl hover:opacity-90 transition font-medium"
        >
          Save Contact
        </button>

        {/* About */}
        <div>
          <h2 className="font-semibold mb-2 text-gray-900">About</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            TapLab helps businesses connect smarter using NFC-powered digital
            solutions — from business cards to contactless experiences.
          </p>
        </div>

        {/* Services */}
        <div>
          <h2 className="font-semibold mb-2 text-gray-900">Services</h2>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>• Digital Business Cards</li>
            <li>• Smart NFC Tags</li>
            <li>• Contactless Menus</li>
            <li>• Lead Capture Systems</li>
          </ul>
        </div>

        {/* Links */}
        <div className="space-y-2">
          <a
            href="https://www.taplab.in/"
            className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition"
          >
            <Globe size={18} /> Website
          </a>
          <a
            href="https://www.instagram.com/taplab.in"
            className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition"
          >
            <Instagram size={18} /> Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/taplabindia"
            className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href="mailto:contact@taplab.in"
            className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition"
          >
            <Mail size={18} /> Email
          </a>
          <a
            href="https://wa.me/9867145439"
            className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition"
          >
            <Phone size={18} /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
