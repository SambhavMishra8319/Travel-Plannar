import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PlaceCardItem({ place }) {
  const [photoUrl, setPhotoUrl] = useState(null);

  useEffect(() => {
    if (place?.placeName) {
      GetPlacePhoto();
    }
  }, [place]);

  const GetPlacePhoto = async () => {
    try {
      // Step 1: Search for Place ID
      const resp = await fetch(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(
          place.placeName
        )}&key=${import.meta.env.VITE_GOOGLE_PLACE_API_KEY}`
      );
      const data = await resp.json();

      if (data?.results?.length > 0) {
        const placeId = data.results[0].place_id;

        // Step 2: Get Place Details with photos
        const detailsResp = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=photos&key=${import.meta.env.VITE_GOOGLE_PLACE_API_KEY}`
        );
        const detailsData = await detailsResp.json();

        const photos = detailsData?.result?.photos;
        if (photos?.length > 0) {
          // Pick a random photo so it’s not always the same
          const randomIndex = Math.floor(Math.random() * photos.length);
          const photoRef = photos[randomIndex].photo_reference;

          setPhotoUrl(
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=${import.meta.env.VITE_GOOGLE_PLACE_API_KEY}`
          );
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
      to={`https://www.google.com/maps/search/?q=${encodeURIComponent(
        place.placeName
      )}`}
      target="_blank"
      className="no-underline text-black"
    >
      <div className="border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer">
        <img
          src={photoUrl || "/placeholder.jpg"}
          alt={place?.placeName || "Place Image"}
          className="w-[130px] h-[130px] rounded-xl object-cover"
          onError={(e) => (e.target.src = "/placeholder.jpg")}
        />
        <div className="text-black">
          <h2 className="font-bold text-lg">{place.placeName}</h2>
          <p className="text-sm text-gray-500">{place.placeDetails}</p>
          <h2 className="mt-2">🕙 {place.travelTime}</h2>
        </div>
      </div>
    </Link>
  );
}

export default PlaceCardItem;
