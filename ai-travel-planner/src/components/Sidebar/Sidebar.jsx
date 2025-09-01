import React, { useState } from "react";
import "./Sidebar.css";
import {
  FaBars,
  FaBed,
  FaPlane,
  FaTrain,
  FaCar,
  FaMapMarkedAlt,
  FaStar,
  FaShip,
  FaMap,
  FaTicketAlt,
  FaMobileAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(false); // start hidden

  const toggleSidebar = () => setIsVisible(!isVisible);

  const menuItems = [
    { icon: <FaBed />, label: "Hotels & Homes" },
    { icon: <FaPlane />, label: "Flights" },
    { icon: <FaPlane />, label: "Flight + Hotel" },
    { icon: <FaTrain />, label: "Trains" },
    { icon: <FaCar />, label: "Airport Transfers" },
    { icon: <FaStar />, label: "Attractions & Tours" },
    { icon: <FaShip />, label: "Cruises" },
    { icon: <FaMapMarkedAlt />, label: "Travel Inspiration" },
    { icon: <FaTicketAlt />, label: "Trip.Planner" },
    { icon: <FaMap />, label: "Map" },
    { icon: <FaStar />, label: "Trip.com Rewards" },
    { icon: <FaMobileAlt />, label: "App" },
  ];

  return (
    <div>
      {/* Toggle Button */}
<div
  className="fixed top-1 left-3 z-50 p-4  text-black rounded-full cursor-pointer shadow-lg text-2xl flex items-center justify-center"
  onClick={toggleSidebar}
>
  <FaBars />
</div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-56 bg-white shadow-lg z-40 transition-transform duration-500 ease-in-out
          ${isVisible ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <ul className="mt-16">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-4 p-4 hover:bg-gray-100 cursor-pointer"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
