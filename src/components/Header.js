import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setbtnName] = useState("Login")
    const status=useOnlineStatus();
    


    return (
        <div className="header flex fixed top-0 left-0 w-full bg-white items-center justify-between z-[1000] shadow-md transition-all duration-300 ease-in-out px-4 0 4px 10px rgba(0, 0, 0, 0.1); ">
            <div className="logo-container flex items-center justify-center w-[15vw]">
                <img className="logo h-[15vh]"
                    src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul className="flex items-center justify-center list-none">
                   
                    <li><Link to="">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/cart">🛒</Link></li>
                    <button className="login" onClick={() => {
                        btnName === "Login" ? setbtnName("Logout") : setbtnName("Login")
                    }}>
                        {btnName}</button>
                         <li className="online flex items-center content-center text-black font-[700] text-[1.2rem] no-underline">{status?"Online 🟢":"Offline 🛑"}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;