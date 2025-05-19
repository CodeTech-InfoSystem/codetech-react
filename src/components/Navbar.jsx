import { useState, useMemo, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { auth } from '../util/firebaseConfig';
import useAuthRequired from '../hooks/useAuthRequired';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const user = useAuthRequired(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const isAdminPage = useMemo(() => {
    return location.pathname.startsWith('/admin') || location.pathname === '/login';
  }, [location.pathname]);

  const onLogout = () => {
    auth.signOut();
    setShowDropdown(false);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }

      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = useMemo(() => {
    return [
      { name: "Home", path: "/" },
      { name: "Clients", path: "/clients", if: !isAdminPage },
      { name: "About Us", path: "/about-us", if: !isAdminPage },
      { name: "Services", path: "/services", if: !isAdminPage },
      { name: "Blog", path: "/blog", if: !isAdminPage },
      { name: "Careers", path: "/careers" },
      { name: "Contact Us", path: "/contact-us", if: !isAdminPage }
    ]
  }, [isAdminPage]);

  return (
    <div className="bg-[#242423] px-3 sm:px-6 md:px-10 lg:px-12 xl:px-16 pt-4">
      <nav className="bg-[#545454] rounded-lg border border-[#FFFFFF]">
        <div className="container mx-auto flex justify-between items-center px-4 md:py-1 sm:py-0 h-[72px]">
          {/* Logo - remains consistent */}
          <div className="flex items-center space-x-2">
            <img src="/images/logo.svg" alt="Company Logo" className="w-10 h-10" />
            <span className="text-xl md:text-2xl font-bold text-white">

              <span className="text-[#000]">Codetech</span>{" "}
              <span className="text-[#AC964F]">Infosystems</span>
            </span>
          </div>

          {/* Mobile Menu Button - remains the same for toggling */}
          <button
            className="lg:hidden text-white z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Navigation Links */}
          <ul
            className={`${isOpen ? "block" : "hidden"
              } lg:flex lg:space-x-4 text-white font-raleway font-medium items-center space-y-6 lg:space-y-0 bg-[#545454] lg:bg-transparent p-6 lg:p-0 absolute lg:static top-16 left-[5%] z-10 rounded-lg w-[90%] lg:w-auto transition-all duration-300`}
            ref={menuRef}
          >
            {navItems.filter((item) => item.if === undefined || item.if === true).map((item) => (
              <li key={item.name} className="relative">
                <Link
                  to={item.path}
                  className={`px-2 py-2 block transition-colors text-base md:text-lg ${location.pathname === item.path
                    ? "text-[#AF9854] font-raleway font-medium leading-[100%] tracking-[0%]"
                    : "hover:text-yellow-400"
                    }`}
                >
                  {item.name}
                </Link>

                {location.pathname === item.path && (
                  <div className="hidden lg:block absolute left-1/2 w-8 md:w-12 h-[4px] bg-[#AF9854] transform -translate-x-1/2 transform translate-y-[21px] rounded-t-[2px] mt-[-12px]"></div>
                )}
              </li>
            ))}

            {/* Admin user dropdown */}
            {user && (
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="text-white flex items-center gap-2 bg-[#3a3a3a] px-4 py-2 rounded-md hover:bg-[#4a4a4a]"
                >
                  {user.photoURL ? (
                    <img
                      className="h-8 w-8 hidden object-cover rounded-full sm:block"
                      src={user.photoURL}
                      alt=""
                    />
                  ) : (
                    <FaUserCircle size={24} />
                  )}
                  {user.displayName}
                  <ChevronDown size={16} />
                </button>
                {showDropdown && (
                  <div className="absolute mt-2 w-40 bg-white shadow-md rounded-md text-black z-50" ref={dropdownRef}>
                    {!isAdminPage && (
                      <>
                        <button
                          onClick={() => {navigate('/admin'); setShowDropdown(false);}}
                          className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md"
                        >
                          Go To Admin
                        </button>
                        <hr/>
                      </>
                    )}
                    <button
                      onClick={onLogout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;