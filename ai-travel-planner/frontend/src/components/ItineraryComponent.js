import React, { useState } from "react";
import PropTypes from "prop-types";

const ItineraryCard = ({ itinerary }) => {
  const [expanded, setExpanded] = useState(false);

  if (!itinerary) {
    return (
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-gray-800 dark:text-gray-200">
        No itinerary available
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition transform hover:scale-105 hover:shadow-xl">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
        {itinerary.title || "Untitled"}
      </h2>

      <p className="text-gray-600 dark:text-gray-300 mt-2">
        {expanded ? itinerary.details || "No details available." : `${(itinerary.details || "No details available.").slice(0, 100)}...`}
      </p>

      <button
        className="mt-3 text-blue-600 dark:text-blue-400 hover:underline focus:outline-none"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read More"}
      </button>
    </div>
  );
};

// Prop Type Validation
ItineraryCard.propTypes = {
  itinerary: PropTypes.shape({
    title: PropTypes.string,
    details: PropTypes.string,
  }),
};

export default ItineraryCard;
