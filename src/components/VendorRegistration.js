import React, { useState } from "react";
import { useTheme } from "../utils/ThemeContext";


function VendorRegistration() {
    const [vendor, setVendor] = useState({
        name: "",
        owner: "",
        phone: "",
        email: "",
        address: "",
        cuisine: "",
        openingTime: "",
        closingTime: "",
        image: "",
    });

   const{isDarkMode}=useTheme()

    const handleChange = (e) => {
        setVendor({ ...vendor, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Your Vendor Application has been submitted!");

        setVendor({
            name: "",
            owner: "",
            phone: "",
            email: "",
            address: "",
            cuisine: "",
            openingTime: "",
            closingTime: "",
            image: "",
        });
    };

    return (
        <div
            className={` vendor p-6 md:p-10 mt-15 flex justify-center transition-colors duration-300
            ${isDarkMode ? "bg-gray-900" : "opacity-65 bg-gray-100"}`}
        >
            <form
                onSubmit={handleSubmit}
                className={`flex flex-col gap-4 p-6 rounded-xl w-full max-w-2xl border shadow-lg transition-colors duration-300
                ${isDarkMode
                    ? "bg-gray-900/80 border-gray-700 text-white"
                    : "bg-white border-gray-200 text-black"
                }`}
            >
                <h2 className="text-xl font-bold text-center mb-2">
                    Vendor Registration Form
                </h2>

                {/* INPUT FIELD STYLE */}
                {/* reuse this pattern */}

                <input
                    name="name"
                    value={vendor.name}
                    onChange={handleChange}
                    required
                    placeholder="Shop / Restaurant Name"
                    className={`p-2 rounded border transition
                    ${isDarkMode
                        ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                        : "bg-white border-gray-300 text-black"
                    }`}
                />

                <input
                    name="owner"
                    value={vendor.owner}
                    onChange={handleChange}
                    required
                    placeholder="Owner Name"
                    className={`p-2 rounded border transition
                    ${isDarkMode
                        ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                        : "bg-white border-gray-300 text-black"
                    }`}
                />

                <input
                    name="phone"
                    value={vendor.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone Number"
                    className={`p-2 rounded border transition
                    ${isDarkMode
                        ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                        : "bg-white border-gray-300 text-black"
                    }`}
                />

                <input
                    type="email"
                    name="email"
                    value={vendor.email}
                    onChange={handleChange}
                    placeholder="Email (optional)"
                    className={`p-2 rounded border transition
                    ${isDarkMode
                        ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                        : "bg-white border-gray-300 text-black"
                    }`}
                />

                <textarea
                    name="address"
                    value={vendor.address}
                    onChange={handleChange}
                    required
                    placeholder="Shop Address"
                    className={`p-2 rounded border h-20 transition
                    ${isDarkMode
                        ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                        : "bg-white border-gray-300 text-black"
                    }`}
                />

                <input
                    name="cuisine"
                    value={vendor.cuisine}
                    onChange={handleChange}
                    required
                    placeholder="Cuisine Type (Fast Food, Chinese, etc.)"
                    className={`p-2 rounded border transition
                    ${isDarkMode
                        ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                        : "bg-white border-gray-300 text-black"
                    }`}
                />

                <div className="flex gap-4">
                    <input
                        type="time"
                        name="openingTime"
                        value={vendor.openingTime}
                        onChange={handleChange}
                        required
                        className={`p-2 rounded border w-full transition
                        ${isDarkMode
                            ? "bg-gray-800 border-gray-600 text-white"
                            : "bg-white border-gray-300 text-black"
                        }`}
                    />
                    <input
                        type="time"
                        name="closingTime"
                        value={vendor.closingTime}
                        onChange={handleChange}
                        required
                        className={`p-2 rounded border w-full transition
                        ${isDarkMode
                            ? "bg-gray-800 border-gray-600 text-white"
                            : "bg-white border-gray-300 text-black"
                        }`}
                    />
                </div>

                <input
                    name="image"
                    value={vendor.image}
                    onChange={handleChange}
                    placeholder="Shop Image URL (optional)"
                    className={`p-2 rounded border transition
                    ${isDarkMode
                        ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                        : "bg-white border-gray-300 text-black"
                    }`}
                />

                <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg transition active:scale-95"
                >
                    Submit Application
                </button>
            </form>
        </div>
    );
}

export default VendorRegistration;