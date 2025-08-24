import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 md:px-12 min-h-screen bg-gray-50 dark:bg-gray-900 transition-all">
      {/* Animated Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Welcome to <span className="text-blue-600">AI Travel Planner</span>
      </motion.h1>

      {/* Subtitle with Fade-in Effect */}
      <motion.p
        className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Plan your trip effortlessly with AI-powered recommendations and insights.
      </motion.p>

      {/* Animated Get Started Button */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Link
          to="/itinerary"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-full shadow-lg transition duration-300 transform hover:scale-105"
        >
          Get Started 🚀
        </Link>
      </motion.div>

      {/* Animated Image */}
      <motion.img
        src="https://source.unsplash.com/600x400/?travel,adventure"
        alt="Travel Inspiration"
        className="mt-8 rounded-lg shadow-lg w-full max-w-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
      />

      {/* Additional Features Section */}
      <motion.div
        className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <FeatureCard
          title="AI-Powered Routes"
          description="Get optimized travel routes using AI."
          icon="🗺️"
        />
        <FeatureCard
          title="Weather Insights"
          description="Stay updated with real-time weather forecasts."
          icon="⛅"
        />
        <FeatureCard
          title="Smart Itineraries"
          description="Personalized plans tailored to your interests."
          icon="📅"
        />
      </motion.div>
    </div>
  );
};

// FeatureCard Component
const FeatureCard = ({ title, description, icon }) => {
  return (
    <motion.div
      className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-4xl">{icon}</div>
      <h3 className="text-xl font-semibold mt-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mt-1">{description}</p>
    </motion.div>
  );
};

export default Home;
