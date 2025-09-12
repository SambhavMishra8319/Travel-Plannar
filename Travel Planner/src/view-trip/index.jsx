import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/service/firebaseConfig';
import { toast } from 'react-toastify';
import InfoSection from "./components/InfoSection";
import Hotels from "./components/Hotels";
import PlacesToVisit from './components/PlacesToVisit';
import Footer from './components/Footer';

function Viewtrip() {
    const { tripId } = useParams();
    const [trip, setTrip] = useState(null);
    const [loading, setLoading] = useState(true); // Added loading state

    useEffect(() => {
        const GetTripData = async () => {
            if (!tripId) {
                setLoading(false);
                return;
            }

            try {
                const docRef = doc(db, 'AITrips', tripId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data());
                    setTrip({ id: docSnap.id, ...docSnap.data() }); // Include document ID
                } else {
                    console.log("No such document found");
                    toast.error('No trip found with that ID!');
                }
            } catch (error) {
                console.error("Error fetching trip:", error);
                toast.error('Failed to load trip data. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        GetTripData();
    }, [tripId]);

    // Debug logs
    console.log("Trip Data:", trip);
    console.log("Hotels Data:", trip?.tripData?.hotels);

    if (loading) {
        return (
            <div className="p-10 md:px-20 lg:px-14 xl:px-56 flex justify-center items-center h-64">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading trip details...</p>
                </div>
            </div>
        );
    }

    if (!trip) {
        return (
            <div className="p-10 md:px-20 lg:px-14 xl:px-56 text-center">
                <h2 className="text-2xl font-bold text-gray-800">Trip Not Found</h2>
                <p className="text-gray-600 mt-2">The requested trip could not be found.</p>
            </div>
        );
    }

    return (
        <div className='p-10 md:px-20 lg:px-14 xl:px-56'>
            {/* Information section */}
            <InfoSection trip={trip} />
            
            {/* Recommended Hotels */}
            <Hotels trip={trip} />
            
            {/* Daily Plan */}
            <PlacesToVisit trip={trip} />
            
            {/* Footer */}
            <Footer trip={trip} />
        </div>
    );
}

export default Viewtrip;