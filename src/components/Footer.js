import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { useTheme } from "../utils/ThemeContext";

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`py-8 px-6 ${isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"}`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 mt-20 md:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-bold">Swaad Express</h2>
          <p className="mt-2 text-[17px]">
            Swaad Express connects local food vendors with hungry customers, bringing authentic, affordable, and freshly prepared meals right to your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div className="ml-10">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-yellow-400">Home</a></li>
            <li><a href="/restaurants/" className="hover:text-yellow-400">Menu</a></li>
            <li><a href="/about" className="hover:text-yellow-400">About Us</a></li>
            <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact + Socials */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p>📍 New Delhi, India</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 amanuniyal315@gmail.com</p>

          <div className="flex space-x-4 mt-4">
            <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-pink-700">
              <FaInstagram size={22} />
            </a>
            <a href="https://www.linkedin.com/in/amanuniyal1012/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FaLinkedin size={22} />
            </a>
            <a href="https://github.com/amanuniyal01" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <FaGithub size={22} />
            </a>
          </div>
        </div>
      </div>

      <div className={`border-t mt-6 pt-4 text-center text-lg font-bold ${isDarkMode ? "border-gray-700" : "border-gray-700"}`}>
        © {new Date().getFullYear()} Made with 💖 by Aman Uniyal.
      </div>
    </footer>
  );
};

export default Footer;
