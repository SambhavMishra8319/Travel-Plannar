import React from "react";

function About() {
  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-16">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-indigo-700 text-center">
        About Us
      </h2>

      {/* Description */}
      <p className="text-base md:text-lg max-w-3xl text-center text-gray-700 leading-relaxed">
        Welcome to <span className="font-semibold text-indigo-600">AI Travel Planner</span>.  
        We make traveling simple, smart, and stress-free.  
        With the help of <span className="font-semibold text-indigo-600">Artificial Intelligence</span>,  
        our platform creates custom travel plans, finds the right hotels, and
        helps you use your time and budget in the best way.  
      </p>

      {/* Highlights Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        {/* Card 1 */}
        <div className="bg-gray-50 shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-indigo-700 mb-2">Smart Plans</h3>
          <p className="text-gray-600 text-sm">
            Get ready-to-use travel routes designed by AI, so you enjoy more and plan less.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-50 shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-indigo-700 mb-2">Save Money</h3>
          <p className="text-gray-600 text-sm">
            Find hotels and stays that match your budget — from budget-friendly to luxury.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-50 shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-indigo-700 mb-2">Easy Travel</h3>
          <p className="text-gray-600 text-sm">
            Get real-time suggestions for routes, weather, and experiences — all in one place.
          </p>
        </div>
      </div>

      {/* Closing Line */}
      <p className="mt-12 text-base md:text-lg text-gray-700 text-center max-w-2xl">
        With <span className="font-semibold text-indigo-600">AI Travel Planner</span>,  
        every trip becomes easier, smarter, and more enjoyable. 🌍✨
      </p>
    </section>
  );
}

export default About;
