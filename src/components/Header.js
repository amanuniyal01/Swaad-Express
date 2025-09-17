import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/usercontext";
import { useSelector } from "react-redux";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const status = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-[1000] shadow-md px-6">
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
                className="hover:text-blue-700 font-[500] text-gray-700 text-[20px] transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-700 font-[500] text-gray-700 text-[20px] transition-all duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-700 text-gray-700 text-[20px] font-[500] transition-all duration-300"
              >
                Contact
              </Link>
            </li>
            <Link
              to="/cart"
              className="hover:text-blue-700 font-[500] text-gray-700 text-[20px] transition-all duration-300"
            >
              🛒({cartItems.length})
            </Link>
          </ul>
        </nav>


        <div className="ml-auto flex items-center space-x-4">

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
          <span className="font-[500]">{status ? "Online 🟢" : "Offline 🛑"}</span>
          <span className="font-[500]">{loggedInUser}</span>
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden ml-auto text-gray-800 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile nav toggle */}
      {isOpen && (
        <nav className="md:hidden bg-gray-100 py-4 rounded-lg shadow-lg">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link className="hover:text-blue-800" to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </li>
            <li>
              <Link to="/cart" onClick={() => setIsOpen(false)}>
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
          </ul>
        </nav>
      )}
    </header>

  );
};

export default Header;
