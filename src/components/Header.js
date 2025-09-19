import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/usercontext";
import { useSelector } from "react-redux";
import { Menu, X } from "lucide-react";
import { useTheme } from "../utils/ThemeContext";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const status = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  // Get dark mode state and toggle function from ThemeProvider
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[1000] shadow-md px-6 transition-colors duration-300 
        ${isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"}`}
    >
      <div className="flex items-center relative h-[60px]">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img src={LOGO_URL} alt="Logo" className="h-[50px] w-auto" />
        </div>

        {/* Center: Nav Links */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex items-center space-x-6">
            <li>
              <Link
                to="/"
                className={`font-[500] text-[20px] transition-all duration-300 
                  ${isDarkMode ? "hover:text-blue-400" : "hover:text-blue-700"}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`font-[500] text-[20px] transition-all duration-300 
                  ${isDarkMode ? "hover:text-blue-400" : "hover:text-blue-700"}`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`font-[500] text-[20px] transition-all duration-300 
                  ${isDarkMode ? "hover:text-blue-400" : "hover:text-blue-700"}`}
              >
                Contact
              </Link>
            </li>
            <Link
              to="/cart"
              className={`font-[500] text-[20px] transition-all duration-300 
                ${isDarkMode ? "hover:text-blue-400" : "hover:text-blue-700"}`}
            >
              🛒({cartItems.length})
            </Link>
          </ul>
        </nav>

        {/* Right Section */}
        <div className="hidden md:ml-auto md:flex md:items-center md:space-x-4">
          <button
            onClick={() => {
              if (btnName === "Login") {
                setbtnName("Logout");
                navigate("/login");
              } else {
                setbtnName("Login");
                navigate("/");
              }
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            {btnName}
          </button>

          {/* Dark mode toggle */}
          <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded-md 
              ${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"}`}
          >
            {isDarkMode ? "🌞" : "🌙"}
          </button>

          <span className="font-[500]">{status ? "Online 🟢" : "Offline 🛑"}</span>
          <span className="font-[500]">{loggedInUser}</span>
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden ml-auto focus:outline-none 
            ${isDarkMode ? "text-gray-100" : "text-gray-800"}`}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile nav toggle */}
      {isOpen && (
        <nav
          className={`md:hidden py-4 rounded-lg shadow-lg transition-colors duration-300 
            ${isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"}`}
        >
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link
                className={`${isDarkMode ? "hover:text-blue-400" : "hover:text-blue-800"}`}
                to="/"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className={`${isDarkMode ? "hover:text-blue-400" : "hover:text-blue-800"}`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={`${isDarkMode ? "hover:text-blue-400" : "hover:text-blue-800"}`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                onClick={() => setIsOpen(false)}
                className={`${isDarkMode ? "hover:text-blue-400" : "hover:text-blue-800"}`}
              >
                🛒({cartItems.length})
              </Link>
            </li>
            <button
              onClick={() => {
                if (btnName === "Login") {
                  setbtnName("Logout");
                  navigate("/login");
                } else {
                  setbtnName("Login");
                  navigate("/");
                }
                setIsOpen(false);
              }}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              {btnName}
            </button>
            <li className="font-bold">{status ? "Online 🟢" : "Offline 🛑"}</li>
            <li className="font-bold">{loggedInUser}</li>

            {/* Mobile Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className={`px-4 py-2 mt-2 rounded-md 
                ${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"}`}
            >
              {isDarkMode ? "Light Mode 🌞" : "Dark Mode 🌙"}
            </button>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
