import React, { useState } from "react";

const ItineraryCard = ({ itinerary }) => {
  const [showMore, setShowMore] = useState(false);

  if (!itinerary) return null; // Prevent errors if itinerary is undefined

  return (
    <div className="bg-white p-4 rounded-2xl shadow-lg transition hover:shadow-xl border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800">{itinerary.title}</h2>
      <p className="text-gray-600 mt-2">
        {showMore ? itinerary.details : `${itinerary.details.slice(0, 100)}...`}
      </p>
      <button
        className="mt-3 text-blue-600 hover:underline"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Show Less" : "Read More"}
      </button>
    </div>
  );
};

export default ItineraryCard;
