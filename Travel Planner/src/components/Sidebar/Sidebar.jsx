import React, { useState } from "react";
import "./Sidebar.css"; // <-- CSS file import karo
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
} from "react-icons/fa";

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleSidebar = () => setIsVisible(!isVisible);

  const menuItems = [
    { icon: <FaBed />, label: "Hotels & Stays" },
    { icon: <FaPlane />, label: "Flights" },
    { icon: <FaPlane />, label: "Flight + Hotel" },
    { icon: <FaTrain />, label: "Trains" },
    { icon: <FaCar />, label: "Airport Transfers" },
    { icon: <FaStar />, label: "Attractions & Tours" },
    { icon: <FaShip />, label: "Cruises" },
    { icon: <FaMapMarkedAlt />, label: "Travel Inspiration" },
    { icon: <FaTicketAlt />, label: "Trip Planner" },
    { icon: <FaMap />, label: "Interactive Map" },
    { icon: <FaStar />, label: "Rewards & Offers" },
  ];

  return (
    <div>
      {/* Toggle Button */}
      <div
        className="fixed top-3 left-3 z-50 p-3 text-black rounded-full cursor-pointer shadow-lg text-2xl bg-white"
        onClick={toggleSidebar}
      >
        <FaBars />
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isVisible ? "open" : "closed"}`}>
        <ul className="menu-list mt-16">
          {menuItems.map((item, index) => (
            <li key={index} className="menu-item">
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium text-sm">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
