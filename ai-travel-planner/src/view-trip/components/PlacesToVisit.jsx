import React, { useState, useEffect } from "react";
import PlaceCardItem from "../components/PlaceCardItem";
import { FaMapMarkerAlt, FaClock, FaChevronDown, FaChevronUp, FaExpand, FaCompress, FaStar, FaUmbrellaBeach } from "react-icons/fa";
import { GiStoneBridge } from "react-icons/gi";

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

  // State to track which days are expanded - start with all expanded
  const [expandedDays, setExpandedDays] = useState({});
  const [allExpanded, setAllExpanded] = useState(true);

  // Initialize all days as expanded
  useEffect(() => {
    const initialExpandedState = {};
    safeItinerary.forEach((_, index) => {
      initialExpandedState[index] = true;
    });
    setExpandedDays(initialExpandedState);
  }, [safeItinerary]);

  // Toggle day expansion
  const toggleDay = (dayIndex) => {
    setExpandedDays(prev => ({
      ...prev,
      [dayIndex]: !prev[dayIndex]
    }));
  };

  // Toggle all days expanded/collapsed
  const toggleAllDays = () => {
    if (allExpanded) {
      // Collapse all
      const collapsedState = {};
      safeItinerary.forEach((_, index) => {
        collapsedState[index] = false;
      });
      setExpandedDays(collapsedState);
    } else {
      // Expand all
      const expandedState = {};
      safeItinerary.forEach((_, index) => {
        expandedState[index] = true;
      });
      setExpandedDays(expandedState);
    }
    setAllExpanded(!allExpanded);
  };

  // Calculate total places count
  const totalPlaces = safeItinerary.reduce((total, day) => {
    return total + (Array.isArray(day.places) ? day.places.length : 0);
  }, 0);

  // Get icon for place type
  const getPlaceIcon = (placeName) => {
    if (placeName?.toLowerCase().includes("beach")) return <FaUmbrellaBeach className="text-amber-500" />;
    if (placeName?.toLowerCase().includes("stone")) return <GiStoneBridge className="text-gray-600" />;
    return <FaMapMarkerAlt className="text-blue-500" />;
  };

  return (
    <section className="relative w-full mt-16 px-4 md:px-8 py-16 overflow-hidden">
      {/* Premium animated background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50/70 via-indigo-50/60 to-teal-50/70 animate-gradient-x"></div>
      
      {/* Premium floating elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-float-slow"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-float-medium"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-teal-200/20 to-cyan-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-fast"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Premium Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center mr-4 shadow-lg">
              <FaMapMarkerAlt className="text-white text-xl" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 relative inline-block">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                Your Journey Itinerary
              </span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-100 opacity-60 -z-10 transform -rotate-1 scale-105"></span>
            </h2>
          </div>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Discover the amazing places you'll visit on your {safeItinerary.length}-day adventure
          </p>
          
          <div className="mt-6 flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-full px-5 py-3 shadow-lg flex items-center border border-gray-100/50">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                <FaMapMarkerAlt className="text-red-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Places</p>
                <p className="text-lg font-semibold text-gray-800">{totalPlaces}</p>
              </div>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-full px-5 py-3 shadow-lg flex items-center border border-gray-100/50">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <FaClock className="text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Trip Duration</p>
                <p className="text-lg font-semibold text-gray-800">{safeItinerary.length} Days</p>
              </div>
            </div>
          </div>

          {/* Expand/Collapse All Button - Premium Style */}
          {safeItinerary.length > 0 && (
            <button
              onClick={toggleAllDays}
              className="mt-6 flex items-center gap-2 mx-auto px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all duration-300 border border-gray-200/60 hover:shadow-xl"
            >
              {allExpanded ? (
                <>
                  <FaCompress className="text-blue-500" />
                  Collapse All Days
                </>
              ) : (
                <>
                  <FaExpand className="text-blue-500" />
                  Expand All Days
                </>
              )}
            </button>
          )}
        </div>

        {safeItinerary.length > 0 ? (
          <div className="space-y-8">
            {safeItinerary.map((item, index) => {
              const isExpanded = expandedDays[index] || false;
              const dayPlaces = Array.isArray(item.places) ? item.places : [];
              
              return (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100/50"
                >
                  {/* Day Header - Premium Style */}
                  <div 
                    className="p-6 cursor-pointer flex justify-between items-center bg-gradient-to-r from-blue-50/80 to-indigo-50/80 hover:from-blue-100/80 hover:to-indigo-100/80 transition-all duration-300 border-b border-gray-100/50"
                    onClick={() => toggleDay(index)}
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mr-4 shadow-md">
                        <span className="font-bold text-white text-lg">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-indigo-700">
                          Day {index + 1}
                        </h3>
                        <p className="text-gray-600 mt-1">
                          {dayPlaces.length} {dayPlaces.length === 1 ? 'place' : 'places'} to explore
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 mr-3 hidden sm:block">
                        {isExpanded ? 'Collapse' : 'Expand'}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                        {isExpanded ? (
                          <FaChevronUp className="text-indigo-600" />
                        ) : (
                          <FaChevronDown className="text-indigo-600" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Day Content - Premium Animated expand/collapse */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-6">
                      {dayPlaces.length > 0 ? (
                        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
                          {dayPlaces.map((place, placeIndex) => (
                            <div
                              key={placeIndex}
                              className="relative group"
                            >
                              {/* Premium Travel Time Badge */}
                              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg z-10 flex items-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                                <FaClock className="mr-1" />
                                <span>{place.travelTime || "Time TBD"}</span>
                              </div>

                              {/* Premium Place Card */}
                              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-1 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group-hover:shadow-2xl border border-gray-100/50">
                                <div className="bg-white rounded-xl p-5 border border-gray-100/50">
                                  <div className="flex items-start mb-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-3 mt-1">
                                      {getPlaceIcon(place.name)}
                                    </div>
                                    <PlaceCardItem place={place} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-12 bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-xl border border-gray-100/50">
                          <div className="text-gray-300 text-6xl mb-4">🌴</div>
                          <p className="text-gray-500 italic">
                            No places planned for this day yet.
                          </p>
                          <p className="text-sm text-gray-400 mt-2">
                            Check back later for updates to your itinerary.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100/50">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-100 to-teal-100 mb-6">
              <div className="text-blue-400 text-5xl">✈️</div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Your itinerary is being prepared
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our AI travel experts are crafting the perfect journey for you. 
              Check back soon to discover amazing places you'll visit!
            </p>
            <button className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Explore Popular Destinations
            </button>
          </div>
        )}
      </div>

      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          33% { transform: translateY(-20px) translateX(10px) rotate(2deg); }
          66% { transform: translateY(10px) translateX(-10px) rotate(-2deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          33% { transform: translateY(-15px) translateX(-15px) rotate(-1deg); }
          66% { transform: translateY(5px) translateX(15px) rotate(1deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          50% { transform: translateY(-10px) translateX(10px) rotate(1deg); }
        }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 8s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

export default PlacesToVisit;