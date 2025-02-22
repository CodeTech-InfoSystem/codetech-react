import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "Clients", "About Us", "Services", "Blog", "Contact Us"];

  return (
    <nav className="bg-[#545454] rounded-lg border border-[#FFFFFF]">
      <div className="container mx-auto flex justify-between items-center px-4 md:py-1 sm:py-0">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/images/logo.svg" alt="Company Logo" className="w-10 h-10" />
          <span className="text-lg font-bold text-white">
            <span className="text-[#000]">Codetech</span> <span className="text-[#AC964F]">Infosystems</span>
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? "block" : "lg:flex hidden"
          } lg:flex lg:space-x-6 text-white font-medium items-center space-y-6 lg:space-y-0 bg-[#545454] lg:bg-transparent p-6 lg:p-0 absolute lg:static top-16 left-[5%] z-10 rounded-lg w-[90%] lg:w-auto transition-all duration-300`}
        >
          {navItems.map((item) => (
            <li
              key={item}
              className={`relative cursor-pointer px-2 lg:py-0 transition-colors hover:text-[#AF9854] ${
                active === item ? "text-[#AF9854]" : ""
              } ${
                isOpen ? "py-0" : " py-3"
              }`}
              onClick={() => {
                setActive(item);
                setIsOpen(false); // Close the menu after selecting an item
              }}
            >
              {item}
              {active === item && (
                <div className="hidden lg:block absolute left-1/2 bottom-[-0.83rem] w-12 h-[5px] bg-[#AF9854] transform -translate-x-1/2 rounded-t-[2px]"></div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
