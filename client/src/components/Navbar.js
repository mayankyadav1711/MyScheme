import React, { useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../App";
import { Menu, X, ChevronDown, User, LogOut, Home, Info, Phone, BarChart2 } from "lucide-react";

export default function Navbar() {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    dispatch({ type: "CLEAR" });
    toast.success("Logout Successfully!!");
    navigate("/login");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "Schemes", path: "/scheme", icon: <BarChart2 size={18} /> },
    { name: "About Us", path: "/about", icon: <Info size={18} /> },
    { name: "Contact", path: "/contact", icon: <Phone size={18} /> },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white/80 backdrop-blur-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img
                className="h-10 w-auto transition-transform duration-300 hover:rotate-3"
                src="https://cdn-icons-png.flaticon.com/512/1582/1582292.png"
                alt="Logo"
              />
              <span className="text-xl font-bold text-green-700">
                MyScheme
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive(link.path)
                    ? "text-white bg-green-600"
                    : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            {state ? (
              <button
                onClick={handleLogout}
                className="inline-flex items-center justify-center space-x-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            ) : (
              <Link
                to="/login"
                className="inline-flex items-center justify-center space-x-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                <User size={16} />
                <span>Login</span>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-green-50 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? "text-white bg-green-600"
                    : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
            {state ? (
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="flex w-full items-center space-x-3 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-green-50 hover:text-green-600"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-green-50 hover:text-green-600"
              >
                <User size={18} />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}