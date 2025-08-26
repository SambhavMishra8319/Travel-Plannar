import React, { useState, useEffect } from "react";
import axios from "axios";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Button } from "@/components/ui/button";
import { AI_PROMPT, SelectBudgetOptions, SelectTravelsList } from "../constants/options";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { chatSession } from "../service/AIModel";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { motion } from "framer-motion";

import { db } from "@/service/firebaseConfig";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function CreateTrip() {
  const [place, setPlace] = useState(null);
  const [formData, setFormData] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const login = useGoogleLogin({
    onSuccess: (tokenInfo) => GetUserProfile(tokenInfo),
    onError: (error) => console.log("Google Login Error:", error),
  });

  const OnGenerateTrip = async () => {
    const user = localStorage.getItem("user");
    if (!user) {
      setOpenDialog(true);
      return;
    }

    if (!formData.noOfDays || !formData.location?.label || !formData.budget || !formData.travelWith) {
      toast.error("⚠️ Please fill all the required details!");
      return;
    }

    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT
      .replace("{location}", formData?.location?.label)
      .replace("{totalDays}", formData?.noOfDays)
      .replace("{traveler}", formData?.travelWith)
      .replace("{budget}", formData?.budget);

    try {
      const result = await chatSession.sendMessage(FINAL_PROMPT);
      SaveAiTrip(result?.response?.text());
      setLoading(false);
    } catch (error) {
      console.error("Error in AI response:", error);
      toast.error("Something went wrong. Try again.");
      setLoading(false);
    }
  };

  const SaveAiTrip = async (TripData) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const docId = Date.now().toString();
    await setDoc(doc(db, "AITrips", docId), {
      userSelection: formData,
      tripData: JSON.parse(TripData),
      userEmail: user?.email,
      id: docId,
    });
    navigate("/view-trip/" + docId);
  };

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "application/json",
          },
        }
      )
      .then((resp) => {
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDialog(false);
        OnGenerateTrip();
      })
      .catch((err) => console.error("Error fetching user profile:", err));
  };

  return (
    <div className="relative min-h-screen w-full px-6 sm:px-10 md:px-32 lg:px-56 py-10">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-green-50"></div>
      <ToastContainer />

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-extrabold text-4xl sm:text-5xl text-center text-gray-800">
          Tell Us Your Travel Preferences 
        </h2>
        <p className="mt-4 text-gray-600 text-lg text-center max-w-2xl mx-auto">
          Just provide some basic details and our AI-powered planner will create a{" "}
          <span className="font-semibold text-blue-600">custom itinerary</span> 
          tailored just for you.
        </p>
      </motion.div>

      {/* Form */}
      <div className="mt-16 flex flex-col gap-12">
        {/* Destination */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <h2 className="text-xl font-medium mb-3">🌍 Destination</h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              value: place,
              onChange: (v) => {
                setPlace(v);
                handleInputChange("location", v);
              },
              styles: {
                control: (provided) => ({
                  ...provided,
                  borderRadius: "12px",
                  padding: "6px",
                  border: "1px solid #ddd",
                  boxShadow: "none",
                }),
              },
            }}
          />
        </motion.div>

        {/* Days */}
        <div>
          <h2 className="text-xl font-medium mb-3">🗓 Number of Days</h2>
          <input
            placeholder="Ex. 3"
            type="number"
            className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => handleInputChange("noOfDays", e.target.value)}
          />
        </div>

        {/* Budget */}
        <div>
          <h2 className="text-xl font-medium mb-3">💰 Budget</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {SelectBudgetOptions.map((item) => (
              <div
                key={item.id}
                className={`cursor-pointer p-6 rounded-xl border transition-all ${
                  formData?.budget === item.title
                    ? "border-blue-600 shadow-lg scale-105"
                    : "hover:shadow-md"
                }`}
                onClick={() => handleInputChange("budget", item.title)}
              >
                <div className="text-4xl">{item.icon}</div>
                <div className="mt-2 font-semibold text-lg">{item.title}</div>
                <div className="text-sm text-gray-500">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Travel With */}
        <div>
          <h2 className="text-xl font-medium mb-3">👥 Who are you traveling with?</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {SelectTravelsList.map((item) => (
              <div
                key={item.id}
                className={`cursor-pointer p-6 rounded-xl border transition-all ${
                  formData?.travelWith === item.title
                    ? "border-green-600 shadow-lg scale-105"
                    : "hover:shadow-md"
                }`}
                onClick={() => handleInputChange("travelWith", item.title)}
              >
                <div className="text-4xl">{item.icon}</div>
                <div className="mt-2 font-semibold text-lg">{item.title}</div>
                <div className="text-sm text-gray-500">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <div className="flex justify-center my-10">
          <Button
            disabled={loading}
            onClick={OnGenerateTrip}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white text-lg font-semibold rounded-full shadow-md hover:scale-105 transition-transform"
          >
            {loading ? (
              <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin" />
            ) : (
              "Generate My Trip"
            )}
          </Button>
        </div>
      </div>

      {/* Login Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-sm w-full p-6 rounded-lg shadow-lg bg-white flex flex-col items-center text-center">
          <DialogHeader>
            <h2 className="font-bold text-lg">Sign In With Google</h2>
          </DialogHeader>
          <DialogDescription className="text-gray-600 text-sm mt-2">
            Sign in to securely access AI-powered trip planning.
          </DialogDescription>
          <Button onClick={login} variant="outline" className="mt-4 w-full flex gap-4 items-center">
            <FcGoogle className="h-7 w-7" /> Continue with Google
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateTrip;
