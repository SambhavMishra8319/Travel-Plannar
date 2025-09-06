import axios from "axios";

const BASE_URL = 'https://places.googleapis.com/v1/places:searchText';

const config = {
    headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': import.meta.env.VITE_GOOGLE_PLACE_API_KEY,
        'X-Goog-FieldMask': 'places.photos,places.displayName,places.id'
    }
};

export const GetPlaceDetails = async (data) => {
    try {
        const response = await axios.post(BASE_URL, data, config);
        return response; // ← Return the FULL response, not just response.data
    } catch (error) {
        console.error("Google Places API Error:", error.response?.data || error.message);
        throw error;
    }
};

export const PHOTO_REF_URL = (name) =>
    `https://places.googleapis.com/v1/${name}/media?maxHeightPx=400&maxWidthPx=400&key=${import.meta.env.VITE_GOOGLE_PLACE_API_KEY}`;