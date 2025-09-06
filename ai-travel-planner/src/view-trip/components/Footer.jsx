import React from "react";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-6 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand / Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white tracking-wide">
            AI Travel Planner ✈️
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            © {new Date().getFullYear()} Made with ❤️ by{" "}
            <span className="font-semibold text-blue-400">Sundaram</span>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-transform transform hover:scale-110"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-transform transform hover:scale-110"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-green-400 transition-transform transform hover:scale-110"
          >
            <FaGlobe size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
  