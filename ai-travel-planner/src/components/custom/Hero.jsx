import { Link } from "react-router-dom";
import { Button } from "../ui/button";
<<<<<<< HEAD
import { FaSearchLocation, FaCalendarAlt, FaRobot, FaMapMarkedAlt, FaUsers, FaRegStar, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
=======
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaSearchLocation, FaCalendarAlt, FaRobot, FaMapMarkedAlt, FaUsers, FaRegStar } from "react-icons/fa";
import React from "react";
>>>>>>> 5bb4a52280b789c01c48065c0f4a03548212f084

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Parallax effect for hero background
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        sectionRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start overflow-hidden">
      {/* Enhanced Hero Section with Parallax */}
      <div
        ref={sectionRef}
        className="relative w-full min-h-screen flex flex-col items-center justify-start px-6 gap-8 pt-32 transition-transform duration-300 ease-out"
        style={{
          backgroundImage: "url('/Intro-page.png.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: 'fixed',
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-teal-800/20 -z-10"></div>
        
        {/* Animated floating elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full mix-blend-overlay filter blur-xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/10 rounded-full mix-blend-overlay filter blur-xl animate-float-medium"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-teal-400/10 rounded-full mix-blend-overlay filter blur-xl animate-float-fast"></div>

        {/* Enhanced Heading with animation */}
        <h1 className={`text-center leading-tight tracking-tight max-w-4xl transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="block font-extrabold text-[48px] sm:text-[64px] md:text-[80px] text-white drop-shadow-2xl bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
            AI TRAVEL PLANNER
          </span>
          <span className="mt-4 block text-blue-100 font-medium text-xl md:text-2xl italic drop-shadow-md tracking-wider">
            Your journey, our intelligent planning
          </span>
        </h1>

        {/* Enhanced CTA Button */}
        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Link to="/create-trip">
            <Button className="mt-10 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white text-lg px-10 py-5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group">
              Start Planning for Free
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* Enhanced How It Works Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto text-center relative">
        {/* Background elements */}
        <div className="absolute -top-20 left-1/4 w-40 h-40 bg-blue-200/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-purple-200/10 rounded-full blur-3xl -z-10"></div>
        
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent relative">
          How It Works
          <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {[
            {
              icon: <FaSearchLocation className="text-2xl text-white" />,
              title: "Choose Destination",
              desc: "Pick where you want to go, anywhere in the world.",
              gradient: "from-blue-500 to-indigo-600",
              delay: 0
            },
            {
              icon: <FaCalendarAlt className="text-2xl text-white" />,
              title: "Set Preferences",
              desc: "Select budget, days, and who you're traveling with.",
              gradient: "from-green-500 to-emerald-600",
              delay: 200
            },
            {
              icon: <FaRobot className="text-2xl text-white" />,
              title: "AI Generates Plan",
              desc: "Get a customized day-by-day itinerary instantly.",
              gradient: "from-purple-500 to-pink-600",
              delay: 400
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-100/80 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500`}
              style={{ transitionDelay: `${item.delay}ms` }}
            >
              <div className={`w-16 h-16 mx-auto flex items-center justify-center rounded-2xl bg-gradient-to-r ${item.gradient} shadow-lg mb-5 transform hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Why Choose Us Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-green-400"></div>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-800 relative">
            Why Choose Us?
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaMapMarkedAlt className="text-2xl text-white" />,
                title: "Personalized Itineraries",
                desc: "AI crafts trips just for you based on your budget, time, and style.",
                gradient: "from-blue-500 to-indigo-600",
              },
              {
                icon: <FaUsers className="text-2xl text-white" />,
                title: "Travel with Friends",
                desc: "Plan solo or group adventures with ease — everyone's included.",
                gradient: "from-green-500 to-emerald-600",
              },
              {
                icon: <FaRegStar className="text-2xl text-white" />,
                title: "Trusted & Loved",
                desc: "Thousands of happy travelers use our planner for stress-free trips.",
                gradient: "from-amber-500 to-orange-600",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-100/60 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500"
              >
                <div className={`w-16 h-16 mx-auto flex items-center justify-center rounded-2xl bg-gradient-to-r ${item.gradient} shadow-lg mb-5`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Explore Section */}
      <section className="py-16 px-4 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
              Explore Destinations
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Discover breathtaking places across the globe. From city skylines to tropical escapes — let AI curate your next adventure.
            </p>
          </div>

<<<<<<< HEAD
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { img: "tajmahal.jpg", name: "Taj Mahal (Agra)", desc: "The symbol of eternal love, a UNESCO wonder.", link: "https://en.wikipedia.org/wiki/Taj_Mahal", map: "https://www.google.com/maps/place/agra" },
              { img: "varanasi.jpg", name: "Varanasi", desc: "The spiritual heart of India on the banks of the Ganges.", link: "https://en.wikipedia.org/wiki/Varanasi", map: "https://www.google.com/maps/place/Varanasi" },
              { img: "jaipur.jpg", name: "Jaipur", desc: "The Pink City known for forts, palaces, and vibrant bazaars.", link: "https://en.wikipedia.org/wiki/Jaipur", map: "https://www.google.com/maps/place/Jaipur" },
              { img: "kerala.jpg", name: "Kerala", desc: "Backwaters, beaches, and serene houseboat escapes.", link: "https://en.wikipedia.org/wiki/Kerala", map: "https://www.google.com/maps/place/Kerala" },
              { img: "ladakh.jpg", name: "Ladakh", desc: "Himalayan landscapes, monasteries, and adventure trails.", link: "https://en.wikipedia.org/wiki/Ladakh", map: "https://www.google.com/maps/place/Ladakh" },
              { img: "goa.jpg", name: "Goa", desc: "Golden beaches, nightlife, and Portuguese heritage.", link: "https://en.wikipedia.org/wiki/Goa", map: "https://www.google.com/maps/place/Goa" },
              { img: "paris.jpg", name: "Paris", desc: "The city of lights, romance, and timeless art.", link: "https://en.wikipedia.org/wiki/Paris", map: "https://www.google.com/maps/place/Paris" },
              { img: "bali.jpg", name: "Bali", desc: "A tropical paradise with beaches & temples.", link: "https://en.wikipedia.org/wiki/Bali", map: "https://www.google.com/maps/place/Bali" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-2xl shadow-lg group hover:shadow-2xl transition-all duration-500"
              >
                {/* Map Button */}
                <a
                  href={item.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 bg-white/90 text-blue-600 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300 z-20 backdrop-blur-sm"
                >
                  View Map
                </a>

                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={`/${item.img}`}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
=======
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
>>>>>>> 5bb4a52280b789c01c48065c0f4a03548212f084

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-5">
                    <h3 className="text-white font-bold text-sm mb-1">{item.name}</h3>
                    <p className="text-gray-200 text-xs">{item.desc}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/destinations">
              <Button variant="outline" className="rounded-full px-8 py-3 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white transition-colors">
                View All Destinations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
            What Our Travelers Say
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Jitesh Keshari", text: "The AI Travel Planner made my trip to Jaipur so easy! It covered forts, palaces, and local food perfectly.", img: "/Jitesh_kumar.jpg" },
              { name: "Himanshu Kumar", text: "I went to Manali with friends — the itinerary suggested the best adventure spots. Unforgettable trip!", img: "/Himanshu_Kumar.jpg" },
              { name: "Shreedhar K B", text: "Planned a family vacation to Kerala. The houseboat stay and backwater tour were right on budget!", img: "/Shreedhar.jpg" },
              { name: "Barsha bhakta", text: "Agra was magical! The AI itinerary saved us hours of planning.", img: "/barsha.jpg" },
              { name: "Deepak Kumar", text: "Bali trip was perfect. Beaches, temples, everything in one plan.", img: "/Deepak.jpg" },
              { name: "Tejas", text: "Our Dubai adventure was seamless thanks to the AI Travel Planner!", img: "/tejas.jpg" },
            ].map((review, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100/60"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={review.img}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <h3 className="ml-4 font-semibold text-gray-900">{review.name}</h3>
                </div>
                <p className="text-gray-600 italic">"{review.text}"</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Newsletter */}
      <section className="py-16 px-4 bg-white relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-100/30 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-100/30 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-2xl mx-auto text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-3xl shadow-lg border border-blue-100/60">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Join Our Travel Community
          </h2>
          <p className="mb-6 text-gray-600">
            Get <span className="font-semibold text-blue-600">AI itineraries</span> & <span className="font-semibold text-blue-600">travel tips</span> delivered first!
          </p>

          <form className="flex flex-col sm:flex-row gap-3 justify-center items-stretch">
            <input
              type="email"
              placeholder="Enter your email..."
              className="flex-grow px-5 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none shadow-sm"
            />
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-6 py-3 rounded-2xl font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300">
              Join Now
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-500">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Enhanced Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-blue-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-teal-400"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Plan Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">Dream Trip?</span>
          </h2>
          <p className="mb-10 text-xl text-blue-100 max-w-3xl mx-auto">
            Start your journey with our AI-powered travel planner and explore the world stress-free. Weekend getaways or international adventures, we've got you covered.
          </p>
          <Link to="/create-trip">
            <Button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white text-lg px-10 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group">
              Start Planning Now
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      <style>{`
  @keyframes float-slow {
    0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
    33% { transform: translateY(-20px) translateX(10px) rotate(2deg); }
    66% { transform: translateY(10px) translateX(-10px) rotate(-2deg); }
  }
  @keyframes float-medium {
    0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
    33% { transform: translateY(-15px) translateX(-15px) rotate(-1deg); }
    66% { transform: translateY(5px) translateX(15px) rotate(1deg); }
  }
  @keyframes float-fast {
    0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
    50% { transform: translateY(-10px) translateX(10px) rotate(1deg); }
  }
  .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
  .animate-float-medium { animation: float-medium 8s ease-in-out infinite; }
  .animate-float-fast { animation: float-fast 6s ease-in-out infinite; }
`}</style>

    </div>
  );
}

export default Hero;