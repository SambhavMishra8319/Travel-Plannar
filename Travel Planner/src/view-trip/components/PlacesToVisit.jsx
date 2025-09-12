import React from "react";
import PlaceCardItem from "../components/PlaceCardItem";
import { FaMapMarkerAlt, FaClock, FaUmbrellaBeach } from "react-icons/fa";
import { GiStoneBridge } from "react-icons/gi";

function PlacesToVisit({ trip }) {
  const itineraryList = trip?.tripData?.itinerary;
  const safeItinerary =
    itineraryList && typeof itineraryList === "object"
      ? Object.entries(itineraryList).map(([day, places]) => ({ day, places }))
      : [];

  const totalPlaces = safeItinerary.reduce((total, day) => {
    return total + (Array.isArray(day.places) ? day.places.length : 0);
  }, 0);

  const getPlaceIcon = (placeName) => {
    if (placeName?.toLowerCase().includes("beach"))
      return <FaUmbrellaBeach className="text-amber-500" />;
    if (placeName?.toLowerCase().includes("stone"))
      return <GiStoneBridge className="text-gray-600" />;
    return <FaMapMarkerAlt className="text-blue-500" />;
  };

  return (
    <section className="w-full px-4 md:px-8 py-16 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-3">
            Your Journey Itinerary
          </h2>
          <p className="text-md text-gray-600 max-w-2xl mx-auto">
            Discover the amazing places you'll visit on your {safeItinerary.length}-day adventure
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center">
              <FaMapMarkerAlt className="text-gray-700 mr-2" />
              <div className="text-gray-800 font-medium">
                {totalPlaces} Places
              </div>
            </div>
            <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center">
              <FaClock className="text-gray-700 mr-2" />
              <div className="text-gray-800 font-medium">
                {safeItinerary.length} Days
              </div>
            </div>
          </div>
        </div>

        {/* Itinerary List */}
        {safeItinerary.length > 0 ? (
          <div className="space-y-8">
            {safeItinerary.map((item, index) => {
              const dayPlaces = Array.isArray(item.places) ? item.places : [];
              return (
                <div key={index} className="bg-gray-50 rounded-2xl shadow border border-gray-200 overflow-hidden">
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Day {index + 1} - {dayPlaces.length} {dayPlaces.length === 1 ? "place" : "places"}
                    </h3>
                  </div>

                  <div className="p-6">
                    {dayPlaces.length > 0 ? (
                      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
                        {dayPlaces.map((place, placeIndex) => (
                          <div key={placeIndex} className="bg-white rounded-xl p-5 shadow border border-gray-200 flex items-start">
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-3 mt-1">
                              {getPlaceIcon(place.name)}
                            </div>
                            <PlaceCardItem place={place} />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12 bg-gray-50 rounded-xl border border-gray-200">
                        <p className="text-gray-500 italic">
                          No places planned for this day yet.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-2xl shadow border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Your itinerary is being prepared
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our AI travel experts are crafting the perfect journey for you.
              Check back soon to discover amazing places you'll visit!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default PlacesToVisit;
