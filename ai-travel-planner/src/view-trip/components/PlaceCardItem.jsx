import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaClock, FaExternalLinkAlt, FaHeart, FaShare } from "react-icons/fa";

function PlaceCardItem({ place }) {
  const [photoUrl, setPhotoUrl] = useState("/placeholder.jpg");
  const [isLoading, setIsLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (place?.placeName) {
      GetPlacePhoto();
    }
  }, [place]);

  const GetPlacePhoto = async () => {
    try {
      setIsLoading(true);
      setImageLoaded(false);
      
      // Create a more specific search query for better results
      const searchQuery = encodeURIComponent(
        `${place.placeName} tourism destination landmark`
      );
      
      // Use higher quality Unsplash images with better aspect ratio
      const unsplashUrl = `https://source.unsplash.com/featured/600x400/?travel,${searchQuery}`;
      
      // Test if the image loads successfully with timeout
      const img = new Image();
      const timeoutId = setTimeout(() => {
        if (!imageLoaded) {
          setFallbackImage();
        }
      }, 5000); // 5 second timeout

      img.onload = () => {
        clearTimeout(timeoutId);
        setPhotoUrl(unsplashUrl);
        setIsLoading(false);
        setImageLoaded(true);
      };
      
      img.onerror = () => {
        clearTimeout(timeoutId);
        setFallbackImage();
      };
      
      img.src = unsplashUrl;

    } catch (error) {
      console.error("Image loading error:", error);
      setFallbackImage();
    }
  };

  const setFallbackImage = () => {
    // Use a more relevant fallback image based on place type
    const fallbackImages = {
      beach: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop",
      mountain: "https://images.unsplash.com/photo-1464822759849-e0e1000ad46a?w=600&h=400&fit=crop",
      temple: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=400&fit=crop",
      city: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&h=400&fit=crop",
      default: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop"
    };

    // Simple logic to choose appropriate fallback
    const placeName = place.placeName?.toLowerCase() || "";
    let chosenFallback = fallbackImages.default;
    
    if (placeName.includes("beach") || placeName.includes("sea") || placeName.includes("ocean")) {
      chosenFallback = fallbackImages.beach;
    } else if (placeName.includes("mountain") || placeName.includes("hill") || placeName.includes("peak")) {
      chosenFallback = fallbackImages.mountain;
    } else if (placeName.includes("temple") || placeName.includes("church") || placeName.includes("mosque") || placeName.includes("shrine")) {
      chosenFallback = fallbackImages.temple;
    } else if (placeName.includes("city") || placeName.includes("urban") || placeName.includes("downtown")) {
      chosenFallback = fallbackImages.city;
    }

    setPhotoUrl(chosenFallback);
    setIsLoading(false);
  };

  const handleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const handleShare = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // In a real app, this would open a share dialog
    console.log("Share place:", place.placeName);
  };

  return (
    <div className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-1">
      <Link
        to={`https://www.google.com/maps/search/?q=${encodeURIComponent(
          place.placeName
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline text-inherit"
      >
        <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-blue-100">
          {/* Image Container */}
          <div className="relative h-48 overflow-hidden">
            {isLoading ? (
              <div className="w-full h-full bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500 mx-auto"></div>
                  <span className="text-gray-500 text-xs mt-2 block">Loading image...</span>
                </div>
              </div>
            ) : (
              <>
                <img
                  src={photoUrl}
                  alt={place?.placeName || "Travel destination"}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  loading="lazy"
                  onLoad={() => setImageLoaded(true)}
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Action buttons */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    onClick={handleLike}
                    className={`p-2 rounded-full shadow-md ${isLiked ? 'bg-red-500 text-white' : 'bg-white text-gray-700'}`}
                  >
                    <FaHeart className={isLiked ? 'fill-current' : ''} />
                  </button>
                  <button 
                    onClick={handleShare}
                    className="p-2 rounded-full bg-white text-gray-700 shadow-md"
                  >
                    <FaShare />
                  </button>
                </div>
                
                {/* View on Maps badge */}
                <div className="absolute bottom-3 left-3 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaExternalLinkAlt size={10} />
                  <span>View on Maps</span>
                </div>
              </>
            )}
          </div>
          
          {/* Content Container */}
          <div className="p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <h2 className="font-bold text-lg text-gray-800 truncate mb-1">
                  {place.placeName}
                </h2>
                
                {place.placeDetails && (
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {place.placeDetails}
                  </p>
                )}
                
                <div className="flex items-center justify-between mt-4">
                  {place.travelTime && (
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <FaClock className="text-blue-500" />
                      <span>{place.travelTime}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <FaMapMarkerAlt className="text-red-400" />
                    <span>Explore</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Category tags */}
            {place.category && (
              <div className="mt-3 flex flex-wrap gap-2">
                {place.category.split(',').map((cat, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium"
                  >
                    {cat.trim()}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PlaceCardItem;