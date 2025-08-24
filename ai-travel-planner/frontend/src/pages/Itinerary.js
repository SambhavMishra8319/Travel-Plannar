import React, { useState } from "react";
import { motion } from "framer-motion";

const Itinerary = ({ items = [] }) => {
  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900 transition-all">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
        Your Itinerary ✈️
      </h2>

      {/* Show Itinerary List if Available */}
      {items.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <ItineraryCard key={index} item={item} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center mt-10">
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            No itinerary items available. Start planning your trip now! 🌍
          </p>
        </div>
      )}
    </div>
  );
};

// Individual Itinerary Card Component
const ItineraryCard = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition duration-300"
      onClick={() => setIsExpanded(!isExpanded)}
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.name || "Untitled Trip"}</h3>
      <p className="text-gray-600 dark:text-gray-300 mt-1">{item.location || "Unknown Location"}</p>

      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4"
        >
          <p className="text-gray-500 dark:text-gray-400">{item.details || "No details provided."}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Itinerary;
