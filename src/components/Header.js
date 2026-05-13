import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { Menu, X, ShoppingCart, Wifi, WifiOff } from "lucide-react";
import { useTheme } from "../utils/ThemeContext";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
  { to: "/vendor", label: "Vendor Registration" },
];

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const status = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  const { isDarkMode, toggleTheme } = useTheme();

  const handleAuthClick = () => {
    if (btnName === "Login") {
      setBtnName("Logout");
      navigate("/login");
    } else {
      setBtnName("Login");
      navigate("/");
    }
    setIsOpen(false);
  };

  const dark = isDarkMode;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[1000] shadow-md transition-colors duration-300
        ${dark ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={LOGO_URL} alt="Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`text-[15px] font-medium transition-colors duration-200
                  ${dark ? "hover:text-blue-400" : "hover:text-blue-600"}`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/cart"
              className={`flex items-center gap-1 text-[15px] font-medium transition-colors duration-200
                ${dark ? "hover:text-blue-400" : "hover:text-blue-600"}`}
            >
              <ShoppingCart size={18} />
              <span className={`text-xs font-bold px-1.5 py-0.5 rounded-full
                ${dark ? "bg-blue-500 text-white" : "bg-blue-600 text-white"}`}>
                {cartItems.length}
              </span>
            </Link>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <span className={`text-sm font-medium flex items-center gap-1
              ${status ? "text-green-500" : "text-red-500"}`}>
              {status ? <Wifi size={14} /> : <WifiOff size={14} />}
              {status ? "Online" : "Offline"}
            </span>

            {loggedInUser && (
              <span className="text-sm font-semibold truncate max-w-[100px]">
                {loggedInUser}
              </span>
            )}

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors duration-200
                ${dark ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"}`}
              aria-label="Toggle theme"
            >
              {dark ? "🌞" : "🌙"}
            </button>

            <button
              onClick={handleAuthClick}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors duration-200"
            >
              {btnName}
            </button>
          </div>

          {/* Mobile: Cart + Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <Link to="/cart" className="relative">
              <ShoppingCart size={22} />
              {cartItems.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 text-[10px] font-bold bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className={`md:hidden border-t transition-colors duration-300
            ${dark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-100"}`}
        >
          <nav className="flex flex-col px-4 py-4 gap-1">
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-[15px] font-medium transition-colors duration-200
                  ${dark
                    ? "hover:bg-gray-800 hover:text-blue-400"
                    : "hover:bg-gray-100 hover:text-blue-600"}`}
              >
                {label}
              </Link>
            ))}

            <div className={`my-2 border-t ${dark ? "border-gray-700" : "border-gray-100"}`} />

            {/* Status + User */}
            <div className="flex items-center justify-between px-3 py-2 text-sm">
              <span className={`flex items-center gap-1 font-medium
                ${status ? "text-green-500" : "text-red-500"}`}>
                {status ? <Wifi size={14} /> : <WifiOff size={14} />}
                {status ? "Online" : "Offline"}
              </span>
              {loggedInUser && (
                <span className="font-semibold text-sm">{loggedInUser}</span>
              )}
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-3 px-3 py-2">
              <button
                onClick={handleAuthClick}
                className="flex-1 py-2.5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition-colors duration-200"
              >
                {btnName}
              </button>
              <button
                onClick={toggleTheme}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200
                  ${dark ? "bg-gray-700 hover:bg-gray-600 text-white" : "bg-gray-100 hover:bg-gray-200 text-black"}`}
              >
                {dark ? "🌞 Light" : "🌙 Dark"}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;