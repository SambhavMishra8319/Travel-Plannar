import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaMapMarkerAlt, FaTag } from "react-icons/fa";

function HotelCardItem({ hotel }) {
  const [photoUrl, setPhotoUrl] = useState("/placeholder.jpg");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (hotel?.hotelName) {
      getHotelPhoto();
    }
  }, [hotel]);

  const getHotelPhoto = async () => {
    try {
      setIsLoading(true);
      
      // Use Unsplash API as a reliable fallback (free and works in frontend)
      const searchQuery = encodeURIComponent(
        hotel.hotelName + " hotel " + (hotel.hotelAddress || "")
      );
      
      const unsplashUrl = `https://source.unsplash.com/featured/800x600/?hotel,${searchQuery}`;
      
      // Test if the image loads successfully
      const img = new Image();
      img.onload = () => {
        setPhotoUrl(unsplashUrl);
        setIsLoading(false);
      };
      img.onerror = () => {
        // Fallback to generic hotel image
        setPhotoUrl("https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop");
        setIsLoading(false);
      };
      img.src = unsplashUrl;

    } catch (error) {
      console.error("Image loading error:", error);
      setPhotoUrl("https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop");
      setIsLoading(false);
    }
  };

  return (
    <Link
      to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        hotel.hotelName + ", " + (hotel.hotelAddress || "")
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="no-underline block"
    >
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
        {/* Hotel Image */}
        <div className="relative h-[200px] w-full">
          {isLoading ? (
            <div className="h-full w-full bg-gray-200 animate-pulse flex items-center justify-center">
              <div className="text-gray-500">Loading image...</div>
            </div>
          ) : (
            <img
              src={photoUrl}
              alt={hotel.hotelName || "Hotel"}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop";
              }}
            />
          )}
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          
          {/* Rating Badge */}
          {hotel.rating && (
            <div className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
              <FaStar className="text-sm" />
              {hotel.rating}
            </div>
          )}
        </div>

        {/* Hotel Details */}
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-900 truncate">
            {hotel.hotelName || "Unknown Hotel"}
          </h2>
          
          {hotel.hotelAddress && (
            <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
              <FaMapMarkerAlt className="text-red-500" /> 
              {hotel.hotelAddress.length > 40 
                ? `${hotel.hotelAddress.substring(0, 40)}...` 
                : hotel.hotelAddress
              }
            </p>
          )}

          {/* Price & Button */}
          <div className="flex justify-between items-center mt-3">
            {hotel.price?.range && (
              <p className="flex items-center gap-1 text-sm font-medium text-green-600">
                <FaTag /> {hotel.price.range}
              </p>
            )}
            
            <button 
              onClick={(e) => e.preventDefault()} // Prevent Link navigation
              className="px-3 py-1 text-xs rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              View on Maps
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default HotelCardItem;