import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white w-full px-6 py-8 mt-12">
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
            <li><Link to="/our-story" className="text-white hover:text-white">Our Story</Link></li>
            <li><Link to="/team" className="text-white hover:text-white">Team</Link></li>
            <li><Link to="/careers" className="text-white hover:text-white">Careers</Link></li>
            <li><Link to="/privacy-policy" className="text-white hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-2">Support</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/help-center" className="text-white hover:text-white">Help Center</Link></li>
            <li><Link to="/contact" className="text-white hover:text-white">Contact Us</Link></li>
            <li><Link to="/faqs" className="text-white hover:text-white">FAQs</Link></li>
            <li><Link to="/feedback" className="text-white hover:text-white">Feedback</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-2">Resources</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/travel-guides" className="text-white hover:text-white">Travel Guides</Link></li>
            <li><Link to="/ai-tips" className="text-white hover:text-white">AI Tips</Link></li>
            <li><Link to="/blog" className="text-white hover:text-white">Blog</Link></li>
            <li><Link to="/api-docs" className="text-white hover:text-white">API Docs</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-white">
        &copy; {new Date().getFullYear()} AI Travel Planner, Inc. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
