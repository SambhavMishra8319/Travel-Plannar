import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import React from "react";

function Hero() {
  return (
    <div
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 gap-10 py-20 overflow-hidden"
      style={{
        backgroundImage: "url('/Intro-page.png.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 -z-10"></div>

      {/* Heading */}
      <h1 className="text-center leading-tight tracking-tight">
        <span className="block font-extrabold text-[44px] sm:text-[58px] md:text-[72px] text-white drop-shadow-md">
          AI TRAVEL PLANNER
        </span>
        <span className="mt-3 block text-gray-100 font-medium text-xl md:text-2xl italic">
          {/* AI-Crafted Itineraries, Made Just for You */}
        </span>
      </h1>

      {/* Subtext + CTA */}
      <div className="flex flex-col items-center justify-center text-center mt-8 sm:mt-12 md:mt-16">
        <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
          Your <span className="font-semibold">personal travel curator</span> — 
          creating <span className="font-semibold">custom itineraries</span> tailored to your{" "}
          <span className="font-medium">interests</span>,{" "}
          <span className="font-medium">budget</span>, and{" "}
          <span className="font-medium">travel style</span>.  
          Let <span className="font-semibold text-yellow-300">AI</span> handle the planning — 
          you just enjoy the <span className="italic text-green-300">journey </span>.
        </p>

        {/* CTA Button */}
        <Link to="/create-trip">
          <Button className="mt-6 bg-gradient-to-r from-[#2563eb] via-[#06b6d4] to-[#22c55e] text-white text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            Start Planning for Free
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
