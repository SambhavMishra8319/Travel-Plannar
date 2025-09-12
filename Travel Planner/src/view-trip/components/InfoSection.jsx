import React, { useState, useEffect } from 'react';
import { IoIosSend, IoMdInformationCircleOutline } from "react-icons/io";
import { FaMapMarkerAlt, FaCalendarAlt, FaMoneyBillWave, FaUsers, FaShare } from "react-icons/fa";
import { GetPlaceDetails } from '../../service/GlobalApi';

function InfoSection({ trip }) {
    const [photoUrl, setPhotoUrl] = useState('/placeholder.jpg');
    const [imageLoaded, setImageLoaded] = useState(false);
    const [showShareOptions, setShowShareOptions] = useState(false);

    useEffect(() => {
        if (trip?.userSelection?.location?.label) {
            GetPlacePhoto();
        }
    }, [trip]);

    const GetPlacePhoto = async () => {
        const data = {
            textQuery: trip.userSelection.location.label
        };

        try {
            const resp = await GetPlaceDetails(data);
            console.log("API Response:", resp);

            // Check if we have places in the response data
            if (resp?.data?.places?.length > 0) {
                const place = resp.data.places[0];
                
                // Check if photos exist and get the first one (not index 3)
                if (place?.photos?.length > 0) {
                    const photoName = place.photos[0].name;
                    
                    // For now, use Unsplash as Google Places API won't work from frontend
                    const searchQuery = encodeURIComponent(trip.userSelection.location.label);
                    const unsplashUrl = `https://source.unsplash.com/featured/1000x600/?${searchQuery},tourism`;
                    
                    setPhotoUrl(unsplashUrl);
                } else {
                    console.warn("No photos found for this place");
                    setFallbackImage();
                }
            } else {
                console.warn("No places found in API response");
                setFallbackImage();
            }
        } catch (error) {
            console.error("API Error:", error);
            setFallbackImage();
        }
    };

    const setFallbackImage = () => {
        const location = trip?.userSelection?.location?.label;
        if (location) {
            const searchQuery = encodeURIComponent(location);
            setPhotoUrl(`https://source.unsplash.com/featured/1000x600/?${searchQuery},travel`);
        }
    };

    const handleShareClick = () => {
        setShowShareOptions(!showShareOptions);
    };

    const copyTripLink = () => {
        // In a real app, this would copy the trip URL to clipboard
        navigator.clipboard.writeText(window.location.href);
        setShowShareOptions(false);
        // Show a success message
        alert('Trip link copied to clipboard!');
    };

    return (
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
            {/* Image with overlay */}
            <div className="relative h-80 w-full overflow-hidden">
                <img 
                    src={photoUrl} 
                    className={`w-full h-full object-cover transition-all duration-700 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                    alt={trip?.userSelection?.location?.label || "Travel destination"}
                    onLoad={() => setImageLoaded(true)}
                    onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1000&h=600&fit=crop';
                    }}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Location badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-md">
                    <FaMapMarkerAlt className="text-red-500" />
                    <span className="font-medium text-gray-800">
                        {trip?.userSelection?.location?.label || "Unknown Location"}
                    </span>
                </div>
                
                {/* Loading placeholder */}
                {!imageLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse flex items-center justify-center">
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
                            <span className="text-gray-500 text-sm mt-2 block">Loading destination image...</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Content section */}
            <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="flex-1">
                        <h2 className="font-bold text-3xl text-gray-800 mb-4">
                            {trip?.userSelection?.location?.label || "Unknown Location"}
                        </h2>
                        
                        {/* Trip details chips */}
                        <div className="flex flex-wrap gap-3">
                            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                                <FaCalendarAlt className="text-blue-600" />
                                <span className="text-sm font-medium">
                                    {trip?.userSelection?.noOfDays || 1} Day{trip?.userSelection?.noOfDays > 1 ? 's' : ''}
                                </span>
                            </div>
                            
                            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                                <FaMoneyBillWave className="text-green-600" />
                                <span className="text-sm font-medium">
                                    ₹{trip?.userSelection?.budget || "N/A"} Budget
                                </span>
                            </div>
                            
                            <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                                <FaUsers className="text-purple-600" />
                                <span className="text-sm font-medium">
                                    {trip?.userSelection?.traveler || 1} Traveler{trip?.userSelection?.traveler > 1 ? 's' : ''}
                                </span>
                            </div>
                        </div>
                        
                        {/* Additional info if available */}
                        {trip?.userSelection?.tripType && (
                            <div className="mt-4 flex items-center gap-2 text-gray-600">
                                <IoMdInformationCircleOutline className="text-blue-500" />
                                <span className="text-sm">{trip.userSelection.tripType} trip</span>
                            </div>
                        )}
                    </div>
                    
                    {/* Action buttons */}
                    <div className="flex gap-3 relative">
                        <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-blue-800">
                            <IoIosSend />
                            <span>Send</span>
                        </button>
                        
                        <button 
                            onClick={handleShareClick}
                            className="bg-gray-100 text-gray-700 p-3 rounded-xl flex items-center gap-2 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-gray-200 relative"
                        >
                            <FaShare />
                            
                            {/* Share options dropdown */}
                            {showShareOptions && (
                                <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-lg p-3 z-10 min-w-[180px] border border-gray-100">
                                    <div className="text-sm font-medium text-gray-700 mb-2">Share this trip</div>
                                    <button 
                                        onClick={copyTripLink}
                                        className="w-full text-left py-2 px-3 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors"
                                    >
                                        Copy link
                                    </button>
                                    <button className="w-full text-left py-2 px-3 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors">
                                        Share via Email
                                    </button>
                                    <button className="w-full text-left py-2 px-3 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors">
                                        Share on WhatsApp
                                    </button>
                                </div>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoSection;