import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaMapMarkerAlt, FaTag } from "react-icons/fa";

function HotelCardItem({ hotel }) {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    hotel && GetPlacePhoto();
  }, [hotel]);

  const GetPlacePhoto = async () => {
    if (!hotel?.userSelection?.location?.label) {
      console.warn("Location label is missing.");
      return;
    }

    const data = {
      textQuery: hotel.hotelName,
    };

    try {
      const resp = await GetPlaceDetails(data);
      console.log("API Response:", resp);

      if (resp?.places?.length > 0) {
        const place = resp.places[0];
        const photoName = place?.photos?.[3]?.name;

        if (photoName) {
          const PhotoUrl = PHOTO_REF_URL.replace("{NAME}", photoName);
          setPhotoUrl(PhotoUrl);
        } else {
          console.warn("Photo not found at index [3]");
        }
      } else {
        console.warn("No places found in API response.");
      }
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
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

          {/* Price & Rating */}
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
