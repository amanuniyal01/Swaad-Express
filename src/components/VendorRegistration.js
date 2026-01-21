import React, { useState } from "react";

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
        <div className="mt-40 flex justify-center">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 p-6 shadow-lg border rounded-lg w-[350px] bg-white"
            >
                <h2 className="text-xl font-bold text-center mb-2">
                    Vendor Registration Form
                </h2>

                <input
                    name="name"
                    value={vendor.name}
                    onChange={handleChange}
                    required
                    placeholder="Shop / Restaurant Name"
                    className="border p-2 rounded"
                />

                <input
                    name="owner"
                    value={vendor.owner}
                    onChange={handleChange}
                    required
                    placeholder="Owner Name"
                    className="border p-2 rounded"
                />

                <input
                    name="phone"
                    value={vendor.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone Number"
                    className="border p-2 rounded"
                />

                <input
                    type="email"
                    name="email"
                    value={vendor.email}
                    onChange={handleChange}
                    placeholder="Email (optional)"
                    className="border p-2 rounded"
                />

                <textarea
                    name="address"
                    value={vendor.address}
                    onChange={handleChange}
                    required
                    placeholder="Shop Address"
                    className="border p-2 rounded h-20"
                />

                <input
                    name="cuisine"
                    value={vendor.cuisine}
                    onChange={handleChange}
                    required
                    placeholder="Cuisine Type (Fast Food, Chinese, etc.)"
                    className="border p-2 rounded"
                />

                <div className="flex gap-4">
                    <input
                        type="time"
                        name="openingTime"
                        value={vendor.openingTime}
                        onChange={handleChange}
                        required
                        className="border p-2 rounded w-full"
                        placeholder="Opening Time"
                    />
                    <input
                        type="time"
                        name="closingTime"
                        value={vendor.closingTime}
                        onChange={handleChange}
                        required
                        className="border p-2 rounded w-full"
                        placeholder="Closing Time"
                    />
                </div>

                <input
                    name="image"
                    value={vendor.image}
                    onChange={handleChange}
                    placeholder="Shop Image URL (optional)"
                    className="border p-2 rounded"
                />

                <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg"
                >
                    Submit Application
                </button>
            </form>
        </div>
    );
}

export default VendorRegistration;
