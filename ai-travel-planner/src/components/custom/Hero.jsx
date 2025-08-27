import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { FaSearchLocation, FaCalendarAlt, FaRobot, FaMapMarkedAlt, FaUsers, FaRegStar } from "react-icons/fa";
import React from "react";

function Hero() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start overflow-hidden">
      {/* Hero Section */}
      <div
        className="relative w-full min-h-screen flex flex-col items-center justify-start px-6 gap-8 pt-32"
        style={{
          backgroundImage: "url('/Intro-page.png.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
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

        {/* CTA */}
        <Link to="/create-trip">
          <Button className="mt-8 bg-black text-white text-lg px-10 py-4 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300">
            Start Planning for Free
          </Button>
        </Link>
      </div>

      {/* How it Works Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-16 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: <FaSearchLocation className="text-3xl text-white" />,
              title: "Choose Destination",
              desc: "Pick where you want to go, anywhere in the world.",
              gradient: "from-blue-500 to-indigo-500",
            },
            {
              icon: <FaCalendarAlt className="text-3xl text-white" />,
              title: "Set Preferences",
              desc: "Select budget, days, and who you’re traveling with.",
              gradient: "from-green-500 to-emerald-500",
            },
            {
              icon: <FaRobot className="text-3xl text-white" />,
              title: "AI Generates Plan",
              desc: "Get a customized day-by-day itinerary instantly.",
              gradient: "from-purple-500 to-pink-500",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl shadow-lg bg-white/80 backdrop-blur-lg border border-gray-100 hover:shadow-2xl transform hover:-translate-y-2 transition duration-500"
            >
              <div
                className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r ${item.gradient} shadow-md mb-6`}
              >
                {item.icon}
              </div>
              <h3 className="font-bold text-2xl mb-3 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-50 via-green-50 to-blue-100">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-gray-800">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {[
            {
              icon: <FaMapMarkedAlt className="text-3xl text-white" />,
              title: "Personalized Itineraries",
              desc: "AI crafts trips just for you based on your budget, time, and style.",
              gradient: "from-blue-500 to-indigo-500",
            },
            {
              icon: <FaUsers className="text-3xl text-white" />,
              title: "Travel with Friends",
              desc: "Plan solo or group adventures with ease — everyone’s included.",
              gradient: "from-green-500 to-emerald-500",
            },
            {
              icon: <FaRegStar className="text-3xl text-white" />,
              title: "Trusted & Loved",
              desc: "Thousands of happy travelers use our planner for stress-free trips.",
              gradient: "from-yellow-400 to-orange-500",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500 text-center"
            >
              <div
                className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r ${item.gradient} shadow-md mb-6`}
              >
                {item.icon}
              </div>
              <h3 className="font-semibold text-2xl text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 px-6">
        <h2 className="text-4xl font-extrabold text-center mb-6 text-gray-800">Explore Destinations</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Discover breathtaking places across the globe. From city skylines to tropical escapes — let AI curate your next adventure.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { img: "tajmahal.jpg", name: "Taj Mahal (Agra)", desc: "The symbol of eternal love, a UNESCO wonder." },
            { img: "varanasi.jpg", name: "Varanasi", desc: "The spiritual heart of India on the banks of the Ganges." },
            { img: "jaipur.jpg", name: "Jaipur", desc: "The Pink City known for forts, palaces, and vibrant bazaars." },
            { img: "kerala.jpg", name: "Kerala", desc: "Backwaters, beaches, and serene houseboat escapes." },
            { img: "ladakh.jpg", name: "Ladakh", desc: "Himalayan landscapes, monasteries, and adventure trails." },
            { img: "goa.jpg", name: "Goa", desc: "Golden beaches, nightlife, and Portuguese heritage." },
            { img: "paris.jpg", name: "Paris", desc: "The city of lights, romance, and timeless art." },
            { img: "bali.jpg", name: "Bali", desc: "A tropical paradise with beaches & temples." },
            { img: "newyork.jpg", name: "New York", desc: "The city that never sleeps — skyscrapers & culture." },
            { img: "tokyo.jpg", name: "Tokyo", desc: "A futuristic city blending tradition & innovation." },
            { img: "rome.jpg", name: "Rome", desc: "Ancient history, stunning architecture, and cuisine." },
            { img: "sydney.jpg", name: "Sydney", desc: "Famous Opera House & beautiful coastal vibes." },
            { img: "london.jpg", name: "London", desc: "A blend of royal heritage and modern living." },
            { img: "maldives.jpg", name: "Maldives", desc: "Crystal-clear waters & luxury island escapes." },
            { img: "dubai.jpg", name: "Dubai", desc: "Skyscrapers, shopping, and desert adventures." },
            { img: "singapore.jpg", name: "Singapore", desc: "A futuristic hub with gardens, food, and culture." },
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl shadow-lg group hover:shadow-2xl hover:scale-[1.03] transition duration-500"
            >
              <img
                src={`/${item.img}`}
                alt={item.name}
                className="w-full h-64 object-cover group-hover:brightness-90 transition"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-lg">{item.name}</h3>
                <p className="text-gray-200 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
     <section className="py-16 bg-gradient-to-br from-indigo-50 via-blue-50 to-indigo-100 px-6 relative overflow-hidden">
  <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800 drop-shadow-sm">
    What Our Travelers Say
  </h2>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
    {[
      { name: "Jitesh Keshari", text: "The AI Travel Planner made my trip to Jaipur so easy! It covered forts, palaces, and local food perfectly.", img: "/Jitesh_kumar.jpg" },
      { name: "Himanshu Kumar", text: "I went to Manali with friends — the itinerary suggested the best adventure spots. Unforgettable trip!", img: "/Himanshu_Kumar.jpg" },
      { name: "Shreedhar K B", text: "Planned a family vacation to Kerala. The houseboat stay and backwater tour were right on budget!", img: "/Shreedhar.jpg" },
      { name: "Anjali Sharma", text: "Paris was magical! The AI itinerary saved us hours of planning.", img: "/Anjali.jpg" },
      { name: "Rohit Verma", text: "Bali trip was perfect. Beaches, temples, everything in one plan.", img: "/Rohit.jpg" },
      { name: "Sneha Gupta", text: "Our Dubai adventure was seamless thanks to the AI Travel Planner!", img: "/Sneha.jpg" },
      { name: "Aditya Singh", text: "Tokyo's itinerary was spot-on and super detailed!", img: "/Aditya.jpg" },
      { name: "Priya Reddy", text: "The planner made our Rome trip stress-free. Highly recommend!", img: "/Priya.jpg" },
      { name: "Karan Mehta", text: "Exploring London with AI’s help made everything so easy and organized!", img: "/Karan.jpg" },
      { name: "Sanya Kapoor", text: "Maldives vacation was dreamy. Loved the hotel and water activities recommendations!", img: "/Sanya.jpg" },
    ].map((review, idx) => (
      <div
        key={idx}
        className="p-4 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 text-center border border-gray-100"
      >
        <img
          src={review.img}
          alt={review.name}
          className="w-14 h-14 rounded-full mx-auto mb-2 object-cover border-2 border-indigo-100 shadow-sm"
        />
        <p className="text-gray-600 italic text-sm leading-snug">“{review.text}”</p>
        <h3 className="mt-3 font-semibold text-gray-900 text-sm">- {review.name}</h3>
      </div>
    ))}
  </div>
</section>



      {/* Newsletter */}
      <section className="w-full mx-auto py-20 bg-gradient-to-r from-blue-600 to-green-500 text-white text-center relative overflow-hidden rounded-2xl shadow-lg">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-extrabold mb-6 drop-shadow-lg">Join Our Travel Community 🌍</h2>
          <p className="mb-10 text-xl opacity-90">Get exclusive travel tips, destination guides, and AI-powered offers.</p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-5">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-5 rounded-xl text-gray-800 w-full sm:w-2/3 shadow-md focus:ring-4 focus:ring-green-300 outline-none"
            />
            <button className="bg-black hover:bg-gray-900 px-10 py-5 rounded-xl font-semibold shadow-lg hover:scale-105 transform transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full min-h-screen py-32 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-extrabold text-center mb-24 text-gray-800 leading-tight">Frequently Asked Questions ❓</h2>
          <div className="space-y-12">
            {[
              { q: "Is the AI Travel Planner free to use?", a: "Yes! You can start planning trips for free. We also offer premium features for advanced travelers." },
              { q: "Can I use it for international trips?", a: "Absolutely! It supports both domestic and international destinations worldwide." },
              { q: "Can I share trips with friends?", a: "Yes! You can invite friends and plan together seamlessly." },
            ].map((faq, idx) => (
              <div key={idx} className="p-12 bg-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-400">
                <h3 className="font-semibold text-3xl mb-5 text-indigo-700 flex items-center gap-4">
                  <span className="text-green-500 text-3xl">✔</span> {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed text-xl">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative w-full py-24 md:py-32 bg-gradient-to-r from-blue-50 to-indigo-100 text-gray-900 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/travel-pattern.png')] opacity-5"></div>
        <div className="relative z-10 px-6 max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-snug">
            Ready to Plan Your <span className="text-indigo-600">Dream Trip?</span>
          </h2>
          <p className="mb-10 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Start your journey today with our <span className="font-semibold text-indigo-600">AI-powered travel planner</span> 
            and explore the world stress-free. Whether it’s a weekend getaway or an international adventure, 
            we’ve got you covered.
          </p>
          <Link to="/create-trip">
            <Button className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-lg md:text-xl px-10 py-4 rounded-full shadow-lg hover:scale-105 transition duration-300">
              Start Planning Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-4 bg-black text-gray-300 text-center">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} AI Travel Planner. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Hero;
