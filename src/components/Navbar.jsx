import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = ({ scrollToServices, scrollToTestimonials, scrollToBlog }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Clients", path: "/clients" },
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <div className="bg-[#242423] px-3 sm:px-8 md:px-14 lg:px-20 pt-2">
      <nav className="bg-[#545454] rounded-lg border border-[#FFFFFF]">
        <div className="container mx-auto flex justify-between items-center px-4 md:py-1 sm:py-0 h-[72px]">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/images/logo.svg" alt="Company Logo" className="w-10 h-10" />
            <span className="text-2xl font-bold text-white">
              <span className="text-[#000]">Codetech</span>{" "}
              <span className="text-[#AC964F]">Infosystems</span>
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white z-50" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Navigation Links */}
          <ul
            className={`${isOpen ? "block" : "hidden"
              } lg:flex lg:space-x-6 text-white font-medium items-center space-y-6 lg:space-y-0 bg-[#545454] lg:bg-transparent p-6 lg:p-0 absolute lg:static top-16 left-[5%] z-10 rounded-lg w-[90%] lg:w-auto transition-all duration-300`}
          >
            {navItems.map((item) => (
              <li key={item.name} className="relative font-raleway">
                {item.onClick ? (
                  // <a href="#" onClick={item.onClick} className="px-2 py-2 block hover:text-yellow-400">
                  //   {item.name}
                  // </a>
                  <button onClick={item.onClick} className="px-2 py-2 block hover:text-yellow-400">
                    {item.name}
                  </button>
                ) : (
                  <Link to={item.path} className={`px-2 py-2 block transition-colors ${location.pathname === item.path ? "text-[#AF9854] text-[18px] font-medium leading-[100%] tracking-[0%]" : "hover:text-yellow-400"
                    }`}>
                    {item.name}
                  </Link>
                )}

                {location.pathname === item.path && (
                  <div className="hidden lg:block absolute left-1/2 w-12 h-[4px] bg-[#AF9854] transform -translate-x-1/2 rounded-t-[2px]"></div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
