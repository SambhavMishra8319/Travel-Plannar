import React from "react";
import { FaMapMarkedAlt, FaHotel, FaCloudSun, FaWallet, FaRobot, FaUserFriends } from "react-icons/fa";

function Features() {
  const features = [
    { icon: <FaMapMarkedAlt size={30} />, title: "AI Itinerary", desc: "Get a perfectly optimized trip plan based on your preferences." },
    { icon: <FaWallet size={30} />, title: "Smart Budgeting", desc: "Plan your journey within your budget with cost-effective options." },
    { icon: <FaUserFriends size={30} />, title: "Personalized Trips", desc: "Travel plans tailored for solo, family, or group adventures." },
    { icon: <FaHotel size={30} />, title: "Hotel Finder", desc: "Find the best hotels with ratings, pricing, and reviews." },
    { icon: <FaCloudSun size={30} />, title: "Weather Updates", desc: "Stay updated with live weather reports for your destination." },
    { icon: <FaRobot size={30} />, title: "AI Voice Assistant", desc: "Use voice commands to plan trips instantly (coming soon)." },
  ];

  return (
    <section className="bg-gradient-to-r from-indigo-50 to-indigo-100 py-16 px-6">
      <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">Our Features</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((f, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="text-indigo-600 mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
