import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MoonIcon, SunIcon, MenuIcon, XIcon } from "@heroicons/react/solid"; 

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="bg-gray-900 dark:bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg relative">
      {/* Logo / Branding */}
      <h1 className="text-2xl font-bold tracking-wide">AI Travel Planner</h1>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6">
        <NavLink to="/" location={location}>Home</NavLink>
        <NavLink to="/itinerary" location={location}>Itinerary</NavLink>
        <NavLink to="/trip-planner" location={location}>Trip Planner</NavLink>
      </div>

      {/* Right Side: Theme Toggle & Mobile Menu */}
      <div className="flex items-center space-x-4">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg bg-gray-700 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-500 transition"
        >
          {darkMode ? <SunIcon className="h-6 w-6 text-yellow-400" /> : <MoonIcon className="h-6 w-6 text-gray-300" />}
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 dark:bg-gray-800 p-5 flex flex-col items-center space-y-4 md:hidden">
          <NavLink to="/" location={location} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/itinerary" location={location} onClick={() => setIsOpen(false)}>Itinerary</NavLink>
          <NavLink to="/trip-planner" location={location} onClick={() => setIsOpen(false)}>Trip Planner</NavLink>
        </div>
      )}
    </nav>
  );
};

// Reusable NavLink Component for Active Highlight
const NavLink = ({ to, location, children, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`text-lg font-medium hover:text-yellow-400 transition ${
        location.pathname === to ? "border-b-2 border-yellow-400" : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;
