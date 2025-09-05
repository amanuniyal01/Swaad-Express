import { LOGO_URL } from "../utils/constants";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/usercontext";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
    const [btnName, setbtnName] = useState("Login")
    const navigate = useNavigate();
    const status = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);

    // Subscribing to the store using selector.

const cartItems = useSelector((store) => store.cart.items);



    return (
        <div className="header flex fixed top-0 left-0 w-full bg-white items-center justify-between z-[1000] shadow-md transition-all duration-300 ease-in-out px-4 0 4px 10px rgba(0, 0, 0, 0.1); ">
            <div className="logo-container flex items-center justify-center w-[15vw]">
                <img className="logo h-[15vh]"
                    src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul className="flex items-center justify-center list-none">

                    <li className="flex items-center justify-center m-2 h-[60px] w-[100px] transition-all duration-300 ease-in-out border-2 border-transparent rounded-[15px] hover:bg-cyan-200/40 hover:text-teal-600 transition-all duration-300 transform hover:-translate-y-1"><Link to="">Home</Link></li>
                    <li className="flex items-center justify-center m-2 h-[60px] w-[100px] transition-all duration-300 ease-in-out border-2 border-transparent rounded-[15px]  hover:bg-cyan-200/40 hover:text-teal-600 transition-all duration-300 transform hover:-translate-y-1"><Link to="/about">About Us</Link></li>
                    <li className="flex items-center justify-center m-2 h-[60px] w-[100px] transition-all duration-300 ease-in-out border-2 border-transparent rounded-[15px] hover:bg-cyan-200/40 hover:text-teal-600 transition-all duration-300 transform hover:-translate-y-1"><Link to="/contact">Contact</Link></li>
                    <li className="flex items-center justify-center m-2 h-[60px] w-[100px] transition-all duration-300 ease-in-out border-2 border-transparent rounded-[15px] hover:bg-cyan-200/40 hover:text-teal-600 transition-all duration-300 transform hover:-translate-y-1"><Link to="/cart">🛒({cartItems.length})</Link></li>
                    <button className="login" onClick={() => {
                        if (btnName === "Login") {
                            setbtnName("Logout")
                            navigate("/login")
                        }
                        else {
                            setbtnName("Login")
                            navigate("/")
                        }
                    }}>
                        {btnName}</button>
                    <li className="online  font-bold flex items-center justify-center m-5 h-[60px] w-[100px] rounded-[15px] transition-all duration-300 hover:bg-cyan-200/40 ">{status ? "Online 🟢" : "Offline 🛑"}</li>
                    <li className="flex  font-bold items-center justify-center m-2 h-[60px] w-[100px] transition-all duration-300 ease-in-out border-2 border-transparent rounded-[15px]">
                        {loggedInUser}

                    </li>
                </ul>

            </div>
        </div>
    )
}
export default Header;