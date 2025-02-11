import React from "react";
import Logo from "../assets/logo.svg";

const Navbar = () => {
    return (
        <nav className="p-3">
            <div className="container mx-auto flex justify-between items-center px-3 py-2">

                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <span className="text-3xl font-baloo font-bold text-black">
                        <img src={Logo} alt="Company Logo" className="w-10 h-10 inline-block" />
                    </span>
                    <span className="text-lg font-bold text-[#FFFFFF] font-baloo">Codetech Infosystems</span>
                </div>

                {/* Navigation Links */}
                <ul className="flex space-x-6 text-[#FFFFFF] font-medium">
                    <li className="hover:text-[#AF9854] cursor-pointer">Home</li>
                    <li className="hover:text-[#AF9854] cursor-pointer">Clients</li>
                    <li className="hover:text-[#AF9854] cursor-pointer">About Us</li>
                    <li className="hover:text-[#AF9854] cursor-pointer">Services</li>
                    <li className="hover:text-[#AF9854] cursor-pointer">Blog</li>
                    <li className="hover:text-[#AF9854] cursor-pointer">Contact Us</li>
                </ul>

            </div>
        </nav>
    );
};

export default Navbar;
