import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "../services/api";

const TripPlanner = () => {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState(1);
  const [itinerary, setItinerary] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generatePlan = async () => {
    if (!destination.trim() || days < 1) {
      setError("Please enter a valid destination and number of days.");
      return;
    }

    setLoading(true);
    setError("");
    setItinerary(null);

    try {
      const response = await axios.post("/generate-itinerary", { destination, days });
      setItinerary(response.data);
    } catch (error) {
      setError("Failed to generate itinerary. Try again.");
      console.error("Error generating itinerary:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900 transition-all">
      <motion.h1 
        className="text-3xl font-bold text-center text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        ✈️ AI Trip Planner 🌍
      </motion.h1>

      <div className="max-w-lg mx-auto mt-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <label className="block font-semibold text-gray-700 dark:text-gray-300">Destination:</label>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full p-2 mt-1 border rounded dark:bg-gray-700 dark:text-white"
          placeholder="Enter your destination (e.g., Paris, Tokyo)"
        />

        <label className="block mt-4 font-semibold text-gray-700 dark:text-gray-300">Number of Days:</label>
        <input
          type="number"
          value={days}
          onChange={(e) => setDays(Math.max(1, parseInt(e.target.value, 10) || 1))}
          className="w-full p-2 mt-1 border rounded dark:bg-gray-700 dark:text-white"
          min="1"
        />

        <button
          onClick={generatePlan}
          className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Itinerary"}
        </button>

        {error && <p className="mt-3 text-red-500">{error}</p>}

        {loading && (
          <div className="flex justify-center mt-4">
            <div className="w-6 h-6 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>

      {/* Itinerary Display */}
      {itinerary && (
        <motion.div 
          className="max-w-2xl mx-auto mt-6 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">📍 Your AI-Powered Itinerary</h2>
          <ul className="mt-4 space-y-2">
            {itinerary.days.map((day, index) => (
              <li key={index} className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <p className="font-semibold text-gray-800 dark:text-white">🗓 Day {index + 1}: {day.title}</p>
                <p className="text-gray-600 dark:text-gray-300">{day.details}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default TripPlanner;
