import React from "react";
import PlaceCardItem from "../components/PlaceCardItem"; // ✅ Ensure correct import

function PlacesToVisit({ trip }) {
  // Convert itinerary object into a structured array
  const itineraryList = trip?.tripData?.itinerary;
  const safeItinerary =
    itineraryList && typeof itineraryList === "object"
      ? Object.entries(itineraryList).map(([day, places]) => ({
          day,
          places,
        }))
      : [];

  return (
    <section
      className="w-full mt-12 px-6 md:px-12 py-16 rounded-2xl relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #dbeafe 0%, #f0fdfa 100%)",
      }}
    >
      {/* Decorative overlay shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-20 w-52 h-52 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      {/* Section Title */}
      <h2 className="relative text-3xl md:text-4xl font-extrabold text-gray-800 mb-12 text-center drop-shadow-sm">
        Places To Visit
      </h2>

      <div className="relative max-w-7xl mx-auto">
        {safeItinerary.length > 0 ? (
          safeItinerary.map((item, index) => (
            <div
              key={index}
              className="mb-12 p-8 rounded-2xl bg-white/80 backdrop-blur-md shadow-lg hover:shadow-2xl transition duration-300"
            >
              {/* Day Header */}
              <h3 className="text-2xl font-semibold text-indigo-600 mb-6">
                Day {index + 1}
              </h3>

              {Array.isArray(item.places) && item.places.length > 0 ? (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                  {item.places.map((place, placeIndex) => (
                    <div
                      key={placeIndex}
                      className="flex flex-col gap-3 p-6 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 shadow-sm hover:shadow-md transition"
                    >
                      {/* Travel Time */}
                      <span className="text-sm font-medium text-orange-500">
                        ⏱ {place.travelTime || "Travel time not available"}
                      </span>

                      {/* Place Card */}
                      <PlaceCardItem place={place} />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">
                  No places available for this day.
                </p>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic text-center">
            No itinerary available.
          </p>
        )}
      </div>
    </section>
  );
}

export default PlacesToVisit;
