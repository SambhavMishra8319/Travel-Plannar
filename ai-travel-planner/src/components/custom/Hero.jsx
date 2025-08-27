import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import React from "react";

function Hero() {
  return (
    <div
      className="relative w-full min-h-screen flex flex-col items-center justify-start px-6 gap-8 pt-32 overflow-hidden"
      style={{
        backgroundImage: "url('/Intro-page.png.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/30 -z-10"></div>

      {/* Heading */}
      <h1 className="text-center leading-tight tracking-tight max-w-4xl">
        <span className="block font-extrabold text-[48px] sm:text-[64px] md:text-[80px] text-white drop-shadow-xl">
          AI TRAVEL PLANNER
        </span>
        <span className="mt-2 block text-gray-200 font-medium text-lg md:text-2xl italic drop-shadow-sm">
          Your journey, our intelligent planning
        </span>
      </h1>

      {/* Subtext + CTA */}
      <div className="flex flex-col items-center justify-center text-center mt-10 max-w-3xl">
        <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed">
          Your <span className="font-semibold text-white">personal travel curator</span> — 
          crafting <span className="font-semibold text-white">custom itineraries</span> tailored to your{" "}
          <span className="font-medium text-gray-200">interests</span>,{" "}
          <span className="font-medium text-gray-200">budget</span>, and{" "}
          <span className="font-medium text-gray-200">travel style</span>.  
          Let <span className="font-bold text-white">AI</span> handle the planning — 
          you just enjoy the <span className="italic text-gray-300">journey</span>.
        </p>

        {/* CTA Button */}
        <Link to="/create-trip">
         <Button className="mt-8 bg-black text-white text-lg px-10 py-4 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300">
  Start Planning for Free
</Button>

        </Link>
      </div>
    </div>
  );
}

export default Hero;
