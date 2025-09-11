import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-900 py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 mt-20 md:grid-cols-3 gap-8">

        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-bold text-black">Swaad Express</h2>
          <p className="mt-2 text-sm">
            Taste that travels with you
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-yellow-400">Home</a></li>
            <li><a href="/restaurants/" className="hover:text-yellow-400">Menu</a></li>
            <li><a href="/about" className="hover:text-yellow-400">About Us</a></li>
            <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact + Socials */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-black  mb-3">Contact Us</h3>
          <p className="text-sm">📍 New Delhi, India</p>
          <p className="text-sm">📞 +91 98765 43210</p>
          <p className="text-sm">📧 support@swaadexpress.com</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-yellow-400"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-yellow-400"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-yellow-400"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-yellow-400"><FaYoutube size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 text-center mt-6 pt-4 text-sm">
        © {new Date().getFullYear()} Swaad Express. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
