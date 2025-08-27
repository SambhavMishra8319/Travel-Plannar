import React from "react";
import HotelCardItem from "./../components/HotelCardItem"; // ✅ Ensure correct path
import { Link } from "react-router-dom";

function Hotels({ trip }) {
  const hotels = trip?.tripData?.hotels || [];

  return (
    <section
      className="w-full mt-12 px-6 py-12 rounded-2xl relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #fdf2f8 0%, #e0f2fe 100%)",
      }}
    >
      {/* Decorative blur shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-16 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-16 w-52 h-52 bg-sky-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      {/* Section Title */}
      <h2 className="relative text-3xl md:text-4xl font-extrabold text-gray-800 mb-10 text-center drop-shadow-sm">
        Hotel Recommendations
      </h2>

      {/* Hotels Grid */}
      {hotels.length > 0 ? (
        <div className="relative grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {hotels.map((hotel, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/90 backdrop-blur-md shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300"
            >
              <HotelCardItem hotel={hotel} />
            </div>
          ))}
        </div>
      ) : (
        <p className="relative text-gray-500 italic text-center">
          No hotel recommendations available.
        </p>
      )}

      {/* CTA Button */}
      {hotels.length > 0 && (
        <div className="flex justify-center mt-10">
          <Link to="/hotels">
            <button className="bg-gradient-to-r from-pink-500 via-red-400 to-orange-400 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
              View More Hotels
            </button>
          </Link>
        </div>
      )}
    </section>
  );
}

export default Hotels;
