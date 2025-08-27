import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaMapMarkerAlt, FaTag } from "react-icons/fa";

function HotelCardItem({ hotel }) {
  const [photoUrl, setPhotoUrl] = useState(null);

  useEffect(() => {
    if (hotel?.hotelName) {
      GetPlacePhoto();
    }
  }, [hotel]);

  const GetPlacePhoto = async () => {
    try {
      // Step 1: Find hotel by name/address
      const resp = await fetch(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(
          hotel.hotelName + " " + hotel.hotelAddress
        )}&key=${import.meta.env.VITE_GOOGLE_PLACE_API_KEY}`
      );
      const data = await resp.json();

      if (data?.results?.length > 0) {
        const place = data.results[0];
        const photoRef = place?.photos?.[0]?.photo_reference;

        if (photoRef) {
          // Step 2: Build photo URL
          const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${photoRef}&key=${import.meta.env.VITE_GOOGLE_PLACE_API_KEY}`;
          setPhotoUrl(url);
        } else {
          setPhotoUrl("/placeholder.jpg");
        }
      } else {
        setPhotoUrl("/placeholder.jpg");
      }
    } catch (error) {
      console.error("API Error:", error);
      setPhotoUrl("/placeholder.jpg");
    }
  };

  return (
    <Link
      to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        hotel.hotelName + ", " + hotel.hotelAddress
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="no-underline"
    >
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
        {/* Hotel Image */}
        <div className="relative h-[200px] w-full">
          <img
            src={photoUrl || "/placeholder.jpg"}
            alt={hotel.hotelName}
            className="h-full w-full object-cover"
            onError={(e) => (e.target.src = "/placeholder.jpg")}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          {/* Rating Badge */}
          <div className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
            <FaStar className="text-sm" />
            {hotel.rating || "N/A"}
          </div>
        </div>

        {/* Hotel Details */}
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-900 truncate">
            {hotel.hotelName}
          </h2>
          <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
            <FaMapMarkerAlt className="text-red-500" /> {hotel.hotelAddress}
          </p>

          {/* Price & Button */}
          <div className="flex justify-between items-center mt-3">
            <p className="flex items-center gap-1 text-sm font-medium text-green-600">
              <FaTag /> {hotel.price?.range || "Price not available"}
            </p>
            <button className="px-3 py-1 text-xs rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
              View on Maps
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default HotelCardItem;
