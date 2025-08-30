// Sidebar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHotel, FaPlane, FaTrain, FaMapMarkedAlt, FaCar } from "react-icons/fa";
import { GiIsland } from "react-icons/gi"; // Example icon for attractions
import { IoAirplane } from "react-icons/io5"; // Example flight + hotel

export default function Sidebar() {
  const [open, setOpen] = useState(false); // For mobile toggle

  const menuItems = [
    { name: "Hotels & Homes", icon: <FaHotel />, path: "/hotels" },
    { name: "Flights", icon: <FaPlane />, path: "/flights" },
    { name: "Flight + Hotel", icon: <IoAirplane />, path: "/flight-hotel" },
    { name: "Trains", icon: <FaTrain />, path: "/trains" },
    { name: "Airport Transfers", icon: <FaCar />, path: "/airport-transfers" },
    { name: "Attractions & Tours", icon: <GiIsland />, path: "/attractions" },
    { name: "Cruises", icon: <FaHotel />, path: "/cruises" }, // Replace icon
    { name: "Travel Inspiration", icon: <FaMapMarkedAlt />, path: "/inspiration" },
    { name: "Trip Planner", icon: <FaMapMarkedAlt />, path: "/trip-planner" },
    { name: "Map", icon: <FaMapMarkedAlt />, path: "/map" },
    { name: "Rewards", icon: <FaHotel />, path: "/rewards" },
    { name: "App", icon: <FaPlane />, path: "/app" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen w-64 p-4 shadow-md">
      <button
        className="md:hidden mb-4 px-3 py-2 bg-blue-500 text-white rounded"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Menu"}
      </button>

      <nav className={`${open ? "block" : "hidden"} md:block`}>
        <ul className="flex flex-col gap-3">
          {menuItems.map((item, index) => (
            <li key={index} className="hover:bg-gray-200 rounded-md transition">
              <Link
                to={item.path}
                className="flex items-center gap-3 p-2 text-gray-800 font-medium"
              >
                {item.icon} {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
} 