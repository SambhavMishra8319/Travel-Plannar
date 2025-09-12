import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#F8FAFD] text-gray-800 w-full px-6 py-8 mt-12">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold mb-2"> Travel Planner</h2>
          <p className="text-sm text-gray-600">
            Plan your trips effortlessly with personalized itineraries, hotel recommendations, and travel insights.
          </p>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold mb-2">About</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/our-story" className="text-gray-600 hover:text-gray-900">Our Story</Link></li>
            <li><Link to="/team" className="text-gray-600 hover:text-gray-900">Team</Link></li>
            <li><Link to="/careers" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
            <li><Link to="/privacy-policy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-2">Support</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/help-center" className="text-gray-600 hover:text-gray-900">Help Center</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link></li>
            <li><Link to="/faqs" className="text-gray-600 hover:text-gray-900">FAQs</Link></li>
            <li><Link to="/feedback" className="text-gray-600 hover:text-gray-900">Feedback</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-2">Resources</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/travel-guides" className="text-gray-600 hover:text-gray-900">Travel Guides</Link></li>
            <li><Link to="/ai-tips" className="text-gray-600 hover:text-gray-900">AI Tips</Link></li>
            <li><Link to="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link></li>
            <li><Link to="/api-docs" className="text-gray-600 hover:text-gray-900">API Docs</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()}  Travel Planner, Inc. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
