import React, { useState } from "react";
import HotelCardItem from "./../components/HotelCardItem";
import { Link } from "react-router-dom";
import { FaHotel, FaSearch, FaPlusCircle, FaRegSadTear } from "react-icons/fa";

function Hotels({ trip }) {
  const hotels = trip?.tripData?.hotels || [];
  const [showHotelSearch, setShowHotelSearch] = useState(false);

  // Function to handle when user wants to find hotels
  const handleFindHotels = () => {
    setShowHotelSearch(true);
    // In a real app, this would trigger a hotel search API call
    setTimeout(() => {
      // Simulate finding hotels after a delay
      // In reality, you would update state with actual hotel data
      console.log("Searching for hotels...");
    }, 2000);
  };

  return (
    <section className="relative w-full mt-16 px-4 md:px-8 py-16 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50 animate-gradient-x"></div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-medium"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float-fast"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative inline-block">
            <span className="relative z-10 flex items-center justify-center gap-3">
              <FaHotel className="text-blue-500" />
              Hotel Recommendations
              <FaHotel className="text-pink-500" />
            </span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-200 opacity-50 -z-10 transform -rotate-2"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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

            {/* CTA Button */}
            {hotels.length > 3 && (
              <div className="flex justify-center mt-12">
                <Link 
                  to="/hotels" 
                  className="group inline-flex items-center bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform"
                >
                  View All {hotels.length} Hotels
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100">
            {showHotelSearch ? (
              /* Searching State */
              <div className="max-w-md mx-auto">
                <div className="animate-pulse mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-200 to-pink-200 rounded-full mx-auto flex items-center justify-center">
                    <FaSearch className="text-3xl text-blue-500" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Finding the best hotels for you...</h3>
                <p className="text-gray-600 mb-8">
                  We're searching through thousands of options to find the perfect accommodations for your trip to {trip?.userSelection?.location?.label || 'your destination'}.
                </p>
                <div className="h-2 w-48 bg-gray-200 rounded-full mx-auto overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-pink-500 to-orange-400 animate-progress"></div>
                </div>
              </div>
            ) : (
              /* Empty State */
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-pink-100 rounded-full mx-auto flex items-center justify-center mb-6">
                  <FaRegSadTear className="text-4xl text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">No hotels found yet</h3>
                <p className="text-gray-600 mb-8">
                  We couldn't find hotel recommendations for your trip to {trip?.userSelection?.location?.label || 'this destination'} yet.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={handleFindHotels}
                    className="group flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-blue-700"
                  >
                    <FaSearch />
                    Find Hotels Now
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
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
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(-15px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(10px); }
        }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 8s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 6s ease-in-out infinite; }
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-progress {
          animation: progress 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default Hotels;