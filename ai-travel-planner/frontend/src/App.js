// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from './firebase';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Dashboard from './components/Dashboard';
import axios from "axios";

const App = () => {
  const [user, setUser] = useState(null);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [days, setDays] = useState("");
  const [budget, setBudget] = useState("");
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  const generatePlan = async () => {
    if (!country || !city || !days || !budget) {
      alert("Please fill in all fields!");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(`https://api.example.com/travel?city=${city}&days=${days}`);
      setPlan({
        country,
        city,
        days,
        budget,
        recommendations: response.data.recommendations || ["Explore the city, try local food!"],
      });
    } catch (error) {
      console.error("Error fetching travel recommendations:", error);
      setPlan({
        country,
        city,
        days,
        budget,
        recommendations: ["Explore the city, visit famous landmarks, and enjoy your stay!"],
      });
    }
    setLoading(false);
  };

  if (!user) {
    return (
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={
          <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
            <h1 className="text-4xl font-bold mb-6">🌍 AI Travel Planner</h1>

            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg w-80 sm:w-96">
              <input
                type="text"
                placeholder="Enter Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full p-2 border rounded mb-3"
              />
              <input
                type="text"
                placeholder="Enter City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full p-2 border rounded mb-3"
              />
              <input
                type="number"
                placeholder="Number of Days"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                className="w-full p-2 border rounded mb-3"
                min="1"
              />
              <input
                type="number"
                placeholder="Enter Budget ($)"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full p-2 border rounded mb-3"
                min="1"
              />
              <p className="text-sm text-gray-600 mb-4">💰 Estimated Cost Per Day: ${budget && days ? (budget / days).toFixed(2) : 0}</p>

              <button
                onClick={generatePlan}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition-all"
                disabled={loading}
              >
                {loading ? "Generating..." : "Generate Plan"}
              </button>
            </div>

            {plan && (
              <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg mt-6 w-80 sm:w-96">
                <h2 className="text-2xl font-bold mb-2">🗺 Your Travel Plan</h2>
                <p><strong>📍 Country:</strong> {plan.country}</p>
                <p><strong>🏙 City:</strong> {plan.city}</p>
                <p><strong>🕰 Days:</strong> {plan.days}</p>
                <p><strong>💸 Budget:</strong> ${plan.budget}</p>
                <h3 className="text-lg font-semibold mt-3">🎯 Recommendations:</h3>
                <ul className="list-disc ml-4 mt-2">
                  {plan.recommendations.map((rec, index) => (
                    <li key={index} className="text-sm">{rec}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;
