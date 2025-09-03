import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

  {/* How It Works Section */}
<section className="py-12 px-4 max-w-5xl mx-auto text-center">
  <h2 className="text-2xl sm:text-3xl font-extrabold mb-10 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
    How It Works
  </h2>
  <div className="grid md:grid-cols-3 gap-4">
    {[
      {
        icon: <FaSearchLocation className="text-xl text-white" />,
        title: "Choose Destination",
        desc: "Pick where you want to go, anywhere in the world.",
        gradient: "from-blue-500 to-indigo-500",
      },
      {
        icon: <FaCalendarAlt className="text-xl text-white" />,
        title: "Set Preferences",
        desc: "Select budget, days, and who you’re traveling with.",
        gradient: "from-green-500 to-emerald-500",
      },
      {
        icon: <FaRobot className="text-xl text-white" />,
        title: "AI Generates Plan",
        desc: "Get a customized day-by-day itinerary instantly.",
        gradient: "from-purple-500 to-pink-500",
      },
    ].map((item, idx) => (
      <div
        key={idx}
        className="p-4 rounded-lg shadow-md bg-white/90 backdrop-blur-sm border border-gray-100 hover:shadow-lg transform hover:-translate-y-1 transition duration-300"
      >
        <div className={`w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r ${item.gradient} shadow-md mb-3`}>
          {item.icon}
        </div>
        <h3 className="font-semibold text-lg mb-1 text-gray-800">{item.title}</h3>
        <p className="text-gray-600 text-sm">{item.desc}</p>
      </div>
    ))}
  </div>
</section>

{/* Why Choose Us Section */}
<section className="py-12 px-4">
  <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-10 text-gray-800">
    Why Choose Us?
  </h2>
  <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
    {[
      {
        icon: <FaMapMarkedAlt className="text-xl text-white" />,
        title: "Personalized Itineraries",
        desc: "AI crafts trips just for you based on your budget, time, and style.",
        gradient: "from-blue-500 to-indigo-500",
      },
      {
        icon: <FaUsers className="text-xl text-white" />,
        title: "Travel with Friends",
        desc: "Plan solo or group adventures with ease — everyone’s included.",
        gradient: "from-green-500 to-emerald-500",
      },
      {
        icon: <FaRegStar className="text-xl text-white" />,
        title: "Trusted & Loved",
        desc: "Thousands of happy travelers use our planner for stress-free trips.",
        gradient: "from-yellow-400 to-orange-500",
      },
    ].map((item, idx) => (
      <div
        key={idx}
        className="p-4 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 text-center"
      >
        <div className={`w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r ${item.gradient} shadow-md mb-3`}>
          {item.icon}
        </div>
        <h3 className="font-semibold text-lg text-gray-800 mb-1">{item.title}</h3>
        <p className="text-gray-600 text-sm">{item.desc}</p>
      </div>
    ))}
  </div>
</section>



{/* Explore Section */}
<section className="py-8 px-3">
  <h2 className="text-xl sm:text-2xl font-extrabold text-center mb-4 text-gray-800">
    Explore Destinations
  </h2>
  <p className="text-xs sm:text-sm text-gray-600 text-center mb-6 max-w-3xl mx-auto">
    Discover breathtaking places across the globe. From city skylines to tropical escapes — let AI curate your next adventure.
  </p>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
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
        className="relative overflow-hidden rounded-lg shadow-md group hover:shadow-lg hover:scale-[1.01] transition duration-300"
      >
        {/* Map Button - Top Right */}
        <a
          href={item.map}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-1 right-1 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white text-[9px] font-semibold px-2 py-0.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 z-20"
        >
          View on Map
        </a>

        {/* Wikipedia Link */}
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
          <img
            src={`/${item.img}`}
            alt={item.name}
            className="w-full h-36 sm:h-40 object-cover group-hover:brightness-90 transition"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent flex flex-col justify-end p-2 pointer-events-none">
            <h3 className="text-white font-semibold text-xs">{item.name}</h3>
            <p className="text-gray-200 text-[8px] sm:text-[9px]">{item.desc}</p>
          </div>
        </a>
      </div>
    ))}
  </div>
</section>




{/* Testimonials */}{/* Testimonials */}
{/* Testimonials */}
<section className="py-8 px-3">
  <h2 className="text-xl sm:text-2xl font-extrabold text-center mb-6 text-gray-800 drop-shadow-sm">
    What Our Travelers Say
  </h2>

  <Swiper
    modules={[Navigation, Pagination, Autoplay, A11y]}
    slidesPerView={1}
    spaceBetween={16}
    loop
    autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
    pagination={{ clickable: true, dynamicBullets: true }}
    navigation
    className="max-w-3xl mx-auto"
  >
    {[
      { name: "Jitesh Keshari", text: "The AI Travel Planner made my trip to Jaipur so easy! It covered forts, palaces, and local food perfectly.", img: "/Jitesh_kumar.jpg" },
      { name: "Himanshu Kumar", text: "I went to Manali with friends — the itinerary suggested the best adventure spots. Unforgettable trip!", img: "/Himanshu_Kumar.jpg" },
      { name: "Shreedhar K B", text: "Planned a family vacation to Kerala. The houseboat stay and backwater tour were right on budget!", img: "/Shreedhar.jpg" },
      { name: "Barsha bhakta", text: "Agra was magical! The AI itinerary saved us hours of planning.", img: "/barsha.jpg" },
      { name: "Deepak Kumar", text: "Bali trip was perfect. Beaches, temples, everything in one plan.", img: "/Deepak.jpg" },
      { name: "Tejas", text: "Our Dubai adventure was seamless thanks to the AI Travel Planner!", img: "/tejas.jpg" },
      { name: "Sharmi", text: "Goa's itinerary was spot-on and super detailed!", img: "/sharmi.jpg" },
      { name: "Pritesh Kumar Rawat", text: "The planner made our Rome trip stress-free. Highly recommend!", img: "/Pritesh.jpg" },
      { name: "Bikaram Hawaldar", text: "Exploring London with AI’s help made everything so easy and organized!", img: "/Bikaram.jpg" },
      { name: "Sujit Kumar", text: "Maldives vacation was dreamy. Loved the hotel and water activities recommendations!", img: "/Sujit.jpg" },
      { name: "Ansh Tiwari", text: "Singapore was so smooth with this planner. Loved the Sentosa Island and Marina Bay recommendations!", img: "/anish.jpg" },
      { name: "Sunil", text: "New York trip was amazing! AI suggested hidden gems beyond the usual Times Square.", img: "/sunil.jpg" },
      { name: "Sagar Prajapati", text: "Paris was unforgettable! From the Eiffel Tower to cozy cafés, the AI planned it all.", img: "/Sagar.jpg" },
      { name: "Sadhugun Ram", text: "Reykjavik trip was incredible! From the Northern Lights to hot springs, the AI planner made it effortless.", img: "/sadhgun.jpg" },
      { name: "Rishtha Grandhala", text: "Switzerland felt like a dream — the Alps and lakes were planned perfectly within budget", img: "/vibha.jpg" },
    ].map((review, idx) => (
      <SwiperSlide key={idx}>
        <div className="flex justify-center">
          <div className="p-3 sm:p-4 bg-white rounded-lg shadow-md hover:shadow-lg transform transition duration-300 text-center border border-gray-100 w-[90%] sm:w-2/3 md:w-1/2">
            <img
              src={review.img}
              alt={review.name}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mx-auto mb-2 object-cover border-2 border-indigo-100 shadow-sm"
            />
            <p className="text-gray-600 italic text-xs sm:text-sm leading-snug">“{review.text}”</p>
            <h3 className="mt-2 font-semibold text-gray-900 text-xs sm:text-sm">- {review.name}</h3>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>

{/* Newsletter */}
<section className="mx-auto py-8 bg-white text-gray-900 text-center relative overflow-hidden rounded-2xl shadow-2xl max-w-10xl">
  {/* Content */}
  <div className="relative z-10 mx-auto px-6">
    <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 leading-snug">
      Join Our Travel Community
    </h2>
    <p className="mb-6 text-sm sm:text-base opacity-90">
      Get <span className="font-semibold">AI itineraries</span> & <span className="font-semibold">travel tips</span> delivered first!
    </p>

    {/* Email Subscription */}
    <form className="flex flex-col sm:flex-row justify-center items-center gap-3">
      <input
        type="email"
        placeholder="Enter your email..."
        className="px-4 py-3 rounded-2xl text-gray-900 w-full sm:w-2/3 shadow-md focus:ring-2 focus:ring-indigo-300 outline-none text-sm"
      />
      <button className="bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-blue-600 hover:to-indigo-600 px-6 py-3 rounded-2xl font-bold shadow-lg hover:scale-105 transform transition text-sm text-white">
        Join Now
      </button>
    </form>

    {/* Small Note */}
    <p className="mt-4 text-xs opacity-70">
       No spam. Unsubscribe anytime.
    </p>
  </div>
</section>


{/* Final CTA */}
<section className="relative py-16 bg-white text-gray-900 text-center overflow-hidden">
  {/* Background pattern */}
  <div className="absolute inset-0 bg-[url('/travel-pattern.png')] opacity-5"></div>

  {/* Content */}
  <div className="relative z-10 px-6 max-w-5xl mx-auto flex flex-col items-center">
    <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-snug">
      Ready to Plan Your <span className="text-indigo-600">Dream Trip?</span>
    </h2>
    <p className="mb-8 text-base sm:text-lg text-gray-700 leading-relaxed">
      Start your journey with our <span className="font-semibold text-indigo-600">AI-powered travel planner</span> 
      and explore the world stress-free. Weekend getaways or international adventures, we’ve got you covered.
    </p>
    <Link to="/create-trip">
      <Button className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-base sm:text-lg px-10 py-4 rounded-full shadow-lg hover:scale-105 transition duration-300">
        Start Planning Now
      </Button>
    </Link>
  </div>
</section>


    </div>
  );
}

export default Hero;
