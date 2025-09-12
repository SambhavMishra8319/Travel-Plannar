import React, { useState, useEffect } from 'react';
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import { Link } from 'react-router-dom';

function UserTripCardItem({ trip }) {
    const [photoUrl, setPhotoUrl] = useState('/placeholder.jpg');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (trip) {
            GetPlacePhoto();
        }
    }, [trip]);

    const GetPlacePhoto = async () => {
        if (!trip?.userSelection?.location?.label) {
            console.warn("No location label found for the trip.");
            setIsLoading(false);
            return;
        }

        const data = { textQuery: trip.userSelection.location.label };

        try {
            setIsLoading(true);
            console.log("Fetching place details for:", data);
            const resp = await GetPlaceDetails(data);

            // Check if response has data
            if (!resp?.data?.places || resp.data.places.length === 0) {
                console.warn("No places found in response", resp?.data);
                setFallbackImage();
                return;
            }

            const place = resp.data.places[0];
            if (!place?.photos || place.photos.length === 0) {
                console.warn("No photos found in place response", place);
                setFallbackImage();
                return;
            }

            // Use the first available photo
            const availablePhoto = place.photos[0]; 
            const photoRef = availablePhoto.name;
            
            // ✅ FIXED: PHOTO_REF_URL is now a FUNCTION, call it with photoRef
            const finalPhotoUrl = PHOTO_REF_URL(photoRef);
            console.log("Generated photo URL:", finalPhotoUrl);
            
            setPhotoUrl(finalPhotoUrl);

        } catch (error) {
            console.error("Error fetching place details:", error);
            setFallbackImage();
        } finally {
            setIsLoading(false);
        }
    };

    const setFallbackImage = () => {
        // Use Unsplash as fallback with location-specific image
        const location = trip?.userSelection?.location?.label;
        if (location) {
            const searchQuery = encodeURIComponent(location + " tourism destination");
            setPhotoUrl(`https://source.unsplash.com/featured/400x300/?${searchQuery}`);
        } else {
            setPhotoUrl('/placeholder.jpg');
        }
    };

    return (
        <Link to={'/view-trip/' + trip?.id} className="block">
            <div className='hover:scale-105 transition-all duration-300'>
                {isLoading ? (
                    <div className="h-[220px] rounded-xl bg-gray-200 animate-pulse flex items-center justify-center">
                        <span className="text-gray-500">Loading...</span>
                    </div>
                ) : (
                    <img
                        src={photoUrl}
                        alt={`${trip?.userSelection?.location?.label || 'Trip'} destination`}
                        className="object-cover rounded-xl h-[220px] w-full"
                        onError={(e) => {
                            // If the photo fails to load, use fallback
                            console.log("Image failed to load, using fallback");
                            e.target.src = '/placeholder.jpg';
                            setFallbackImage();
                        }}
                        onLoad={() => console.log("Image loaded successfully:", photoUrl)}
                    />
                )}
                <div className="mt-3">
                    <h2 className='font-bold text-lg text-black truncate'>
                        {trip?.userSelection?.location?.label || "Unknown Location"}
                    </h2>
                    <h2 className='text-sm text-gray-500'>
                        {trip?.userSelection?.noOfDays || "N/A"} Days • {trip?.userSelection?.budget || "N/A"} Budget
                    </h2>
                    {trip?.createdAt && (
                        <h2 className='text-xs text-gray-400 mt-1'>
                            Created: {new Date(trip.createdAt).toLocaleDateString()}
                        </h2>
                    )}
                </div>
            </div>
        </Link>
    );
}

export default UserTripCardItem;