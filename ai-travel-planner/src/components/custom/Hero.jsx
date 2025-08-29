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
      { img: "tajmahal.jpg", name: "Taj Mahal (Agra)", desc: "The symbol of eternal love, a UNESCO wonder.", link: "https://en.wikipedia.org/wiki/Taj_Mahal", map: "https://www.google.com/maps/place/agra" },
      { img: "varanasi.jpg", name: "Varanasi", desc: "The spiritual heart of India on the banks of the Ganges.", link: "https://en.wikipedia.org/wiki/Varanasi", map: "https://www.google.com/maps/place/Varanasi" },
      { img: "jaipur.jpg", name: "Jaipur", desc: "The Pink City known for forts, palaces, and vibrant bazaars.", link: "https://en.wikipedia.org/wiki/Jaipur", map: "https://www.google.com/maps/place/Jaipur" },
      { img: "kerala.jpg", name: "Kerala", desc: "Backwaters, beaches, and serene houseboat escapes.", link: "https://en.wikipedia.org/wiki/Kerala", map: "https://www.google.com/maps/place/Kerala" },
      { img: "ladakh.jpg", name: "Ladakh", desc: "Himalayan landscapes, monasteries, and adventure trails.", link: "https://en.wikipedia.org/wiki/Ladakh", map: "https://www.google.com/maps/place/Ladakh" },
      { img: "goa.jpg", name: "Goa", desc: "Golden beaches, nightlife, and Portuguese heritage.", link: "https://en.wikipedia.org/wiki/Goa", map: "https://www.google.com/maps/place/Goa" },
      { img: "paris.jpg", name: "Paris", desc: "The city of lights, romance, and timeless art.", link: "https://en.wikipedia.org/wiki/Paris", map: "https://www.google.com/maps/place/Paris" },
      { img: "bali.jpg", name: "Bali", desc: "A tropical paradise with beaches & temples.", link: "https://en.wikipedia.org/wiki/Bali", map: "https://www.google.com/maps/place/Bali" },
      { img: "newyork.jpg", name: "New York", desc: "The city that never sleeps — skyscrapers & culture.", link: "https://en.wikipedia.org/wiki/New_York_City", map: "https://www.google.com/maps/place/New+York" },
      { img: "tokyo.jpg", name: "Tokyo", desc: "A futuristic city blending tradition & innovation.", link: "https://en.wikipedia.org/wiki/Tokyo", map: "https://www.google.com/maps/place/Tokyo" },
      { img: "rome.jpg", name: "Rome", desc: "Ancient history, stunning architecture, and cuisine.", link: "https://en.wikipedia.org/wiki/Rome", map: "https://www.google.com/maps/place/Rome" },
      { img: "sydney.jpg", name: "Sydney", desc: "Famous Opera House & beautiful coastal vibes.", link: "https://en.wikipedia.org/wiki/Sydney", map: "https://www.google.com/maps/place/Sydney" },
      { img: "london.jpg", name: "London", desc: "A blend of royal heritage and modern living.", link: "https://en.wikipedia.org/wiki/London", map: "https://www.google.com/maps/place/London" },
      { img: "maldives.jpg", name: "Maldives", desc: "Crystal-clear waters & luxury island escapes.", link: "https://en.wikipedia.org/wiki/Maldives", map: "https://www.google.com/maps/place/Maldives" },
      { img: "dubai.jpg", name: "Dubai", desc: "Skyscrapers, shopping, and desert adventures.", link: "https://en.wikipedia.org/wiki/Dubai", map: "https://www.google.com/maps/place/Dubai" },
      { img: "singapore.jpg", name: "Singapore", desc: "A futuristic hub with gardens, food, and culture.", link: "https://en.wikipedia.org/wiki/Singapore", map: "https://www.google.com/maps/place/Singapore" },
    ].map((item, idx) => (
      <div
        key={idx}
        className="relative overflow-hidden rounded-2xl shadow-lg group hover:shadow-2xl hover:scale-[1.03] transition duration-500"
      >
        {/* Map Button - Top Right */}
        <a
          href={item.map}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-2 right-2 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 z-20"
        >
          View on Map
        </a>

        {/* Whole card links to Wikipedia */}
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
          <img
            src={`/${item.img}`}
            alt={item.name}
            className="w-full h-64 object-cover group-hover:brightness-90 transition"
          />

          {/* Overlay (info) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-4 pointer-events-none">
            <h3 className="text-white font-bold text-lg">{item.name}</h3>
            <p className="text-gray-200 text-sm">{item.desc}</p>
          </div>
        </a>
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
      { name: "Barsha bhakta", text: "Agra was magical! The AI itinerary saved us hours of planning.", img: "/barsha.jpg" },
      { name: "Deepak Kumar", text: "Bali trip was perfect. Beaches, temples, everything in one plan.", img: "/Deepak.jpg" },
      { name: "Tejas", text: "Our Dubai adventure was seamless thanks to the AI Travel Planner!", img: "/tejas.jpg" },
      { name: "Bikaram Hawaldar", text: "Tokyo's itinerary was spot-on and super detailed!", img: "/Bikaram.jpg" },
      { name: "Pritesh Kumar Rawat", text: "The planner made our Rome trip stress-free. Highly recommend!", img: "/Pritesh.jpg" },
      { name: "Sagar Prajapati", text: "Exploring London with AI’s help made everything so easy and organized!", img: "/Sagar.jpg" },
      { name: "Sujit Kumar", text: "Maldives vacation was dreamy. Loved the hotel and water activities recommendations!", img: "/Sujit.jpg" },
      { name: "Ananya Sharma", text: "Singapore was so smooth with this planner. Loved the Sentosa Island and Marina Bay recommendations!", img: "/Ananya.jpg" },
      { name: "Sunil", text: "New York trip was amazing! AI suggested hidden gems beyond the usual Times Square.", img: "/sunil.jpg" },
      // 👇 Extra placeholders for more travelers (you can fill these later)
      { name: "Traveler 13", text: "Amazing experience with this AI planner!", img: "/Traveler13.jpg" },
      { name: "Traveler 14", text: "Loved the itinerary suggestions, super easy to follow.", img: "/Traveler14.jpg" },
      { name: "Traveler 15", text: "Perfect trip planning experience!", img: "/Traveler15.jpg" },
      { name: "Traveler 16", text: "Great recommendations for food and stays.", img: "/Traveler16.jpg" },
      { name: "Traveler 17", text: "Superb AI planner, very helpful for my journey.", img: "/Traveler17.jpg" },
      { name: "Traveler 18", text: "Everything was so organized and stress-free.", img: "/Traveler18.jpg" },
      { name: "Traveler 19", text: "Found hidden gems I would have missed otherwise!", img: "/Traveler19.jpg" },
      { name: "Traveler 20", text: "Best travel tool I’ve ever used!", img: "/Traveler20.jpg" },
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
<footer className="bg-gray-900 text-white w-full px-6 py-8">
      {/* Top content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold mb-2">AI Travel Planner</h2>
          <p className="text-sm">
            Plan your trips effortlessly with AI-powered personalized itineraries, hotel recommendations, and travel insights.
          </p>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold mb-2">About</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="text-white hover:text-white transition">Our Story</a></li>
            <li><a href="#" className="text-white hover:text-white transition">Team</a></li>
            <li><a href="#" className="text-white hover:text-white transition">Careers</a></li>
            <li><a href="#" className="text-white hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-2">Support</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="text-white hover:text-white transition">Help Center</a></li>
            <li><a href="#" className="text-white hover:text-white transition">Contact Us</a></li>
            <li><a href="#" className="text-white hover:text-white transition">FAQs</a></li>
            <li><a href="#" className="text-white hover:text-white transition">Feedback</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-2">Resources</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="text-white hover:text-white transition">Travel Guides</a></li>
            <li><a href="#" className="text-white hover:text-white transition">AI Tips</a></li>
            <li><a href="#" className="text-white hover:text-white transition">Blog</a></li>
            <li><a href="#" className="text-white hover:text-white transition">API Docs</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-8 text-center text-sm text-white">
        &copy; {new Date().getFullYear()} AI Travel Planner, Inc. All rights reserved.
      </div>
    </footer>
    </div>
  );
}

export default Hero;
