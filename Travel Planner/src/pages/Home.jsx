import React from "react";

function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800 px-6">
      <h1 className="text-5xl font-extrabold mb-6">Welcome to Travel Planner</h1>
      <p className="text-lg max-w-2xl text-center mb-8">
        Plan your trips with  suggestions for itineraries, hotels, 
        routes, and much more. Start exploring today!
      </p>
      <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-700">
        Get Started
      </button>
    </section>
  );
}

export default Home;
