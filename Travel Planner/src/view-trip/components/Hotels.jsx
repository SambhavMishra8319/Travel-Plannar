import React, { useState } from "react";
import HotelCardItem from "./../components/HotelCardItem";
import { Link } from "react-router-dom";
import { FaHotel, FaSearch, FaPlusCircle, FaRegSadTear } from "react-icons/fa";

function Hotels({ trip }) {
  const hotels = trip?.tripData?.hotels || [];
  const [showHotelSearch, setShowHotelSearch] = useState(false);

  const handleFindHotels = () => {
    setShowHotelSearch(true);
    setTimeout(() => {
      console.log("Searching for hotels...");
    }, 2000);
  };

  return (
    <section className="relative w-full mt-16 px-4 md:px-8 py-16 bg-white">
      <div className="relative max-w-7xl mx-auto border border-gray-200 rounded-2xl shadow-lg p-8">
        {/* Section Header */}
        <div className="text-center mb-12">
         <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4 text-center">
  Hotel Recommendations
</h2>

          <p className="text-md text-gray-600 max-w-2xl mx-auto">
            Discover perfect accommodations for your {trip?.userSelection?.location?.label || 'trip'}
          </p>
        </div>

        {/* Hotels Grid or Empty State */}
        {hotels.length > 0 ? (
          <>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {hotels.slice(0, 3).map((hotel, index) => (
                <HotelCardItem key={index} hotel={hotel} />
              ))}
            </div>

            {hotels.length > 3 && (
              <div className="flex justify-center mt-12">
                <Link
                  to="/hotels"
                  className="inline-flex items-center bg-blue-500 text-white font-medium px-6 py-3 rounded-full shadow hover:bg-blue-600 transition-all duration-300"
                >
                  View All {hotels.length} Hotels
                </Link>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl shadow border border-gray-200 mt-8">
            {showHotelSearch ? (
              <div className="max-w-md mx-auto">
                <div className="mb-6">
                  <FaSearch className="text-4xl text-blue-500 mx-auto" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Finding the best hotels for you...
                </h3>
                <p className="text-gray-600 mb-8">
                  We're searching through thousands of options to find the perfect accommodations for your trip to {trip?.userSelection?.location?.label || 'your destination'}.
                </p>
                <div className="h-2 w-48 bg-gray-200 rounded-full mx-auto overflow-hidden">
                  <div className="h-full bg-blue-500 animate-pulse"></div>
                </div>
              </div>
            ) : (
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto flex items-center justify-center mb-6">
                  <FaRegSadTear className="text-3xl text-gray-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">No hotels found yet</h3>
                <p className="text-gray-600 mb-8">
                  We couldn't find hotel recommendations for your trip to {trip?.userSelection?.location?.label || 'this destination'} yet.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleFindHotels}
                    className="flex items-center justify-center gap-2 bg-blue-500 text-white font-medium px-6 py-3 rounded-full shadow hover:bg-blue-600 transition-all duration-300"
                  >
                    <FaSearch />
                    Find Hotels Now
                  </button>
                  <button className="flex items-center justify-center gap-2 border border-blue-500 text-blue-500 font-medium px-6 py-3 rounded-full shadow-sm hover:bg-blue-50 transition-colors duration-300">
                    <FaPlusCircle />
                    Add Manually
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Hotels;
