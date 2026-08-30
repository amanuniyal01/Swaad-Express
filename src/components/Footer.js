import { Link } from "react-router-dom";
import { ContactInfo, QUICK_LINKS, SocialLinks } from "../utils/constants";
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
            Swaad Express Brings Indian specific Restaurants , bringing authentic, affordable, and freshly prepared meals right to your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div className="ml-10">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="hover:text-yellow-400 transition-colors"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Socials */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          {ContactInfo.map(({ icon: Icon, text }) => (
            <p key={text} className="flex items-center gap-2">
              <Icon size={18} />
              {text}
            </p>
          ))}

          <div className="flex space-x-4 mt-4">
            {SocialLinks.map(({ icon: Icon, href, hoverColor }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={hoverColor}
              >
                <Icon size={22} />
              </a>
            ))}
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
