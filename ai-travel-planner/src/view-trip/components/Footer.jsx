import React from "react";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-6 mt-10 shadow-lg">
      {/* Inner content container */}
      <div className="w-full px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Brand / Copyright */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-semibold tracking-wide">
            AI Travel Planner ✈️
          </h2>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Created by{" "}
            <span className="font-medium text-white">Sundaram</span>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-green-400 transition-colors duration-300"
          >
            <FaGlobe size={22} />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      {/* <div className="border-t border-gray-700 mt-5 pt-3 text-center text-xs text-gray-500">
        Empowering Smart Journeys with AI 🌍
      </div> */}
    </footer>
  );
}

export default Footer;
