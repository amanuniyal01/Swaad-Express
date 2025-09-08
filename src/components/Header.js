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
      <div className="flex items-center justify-between h-[70px]">
        {/* Logo */}

        <div className="logo-container flex items-center">
          <img src={LOGO_URL} alt="Logo" className="h-[50px] w-auto" />
        </div>

        {/* Hamburger button  */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav */}


        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-4">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/about" className="nav-link">About Us</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
            <li><Link to="/cart" className="nav-link">🛒({cartItems.length})</Link></li>
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
            <li className="font-bold">{status ? "Online 🟢" : "Offline 🛑"}</li>
            <li className="font-bold">{loggedInUser}</li>
          </ul>
        </nav>
      </div>

      {/* Mobile Nav (toggle) */}

      
      {isOpen && (
        <nav className="md:hidden bg-gray-100 py-4 rounded-lg shadow-lg">
          <ul className="flex flex-col items-center space-y-4">
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            <li><Link to="/cart" onClick={() => setIsOpen(false)}>🛒({cartItems.length})</Link></li>
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
