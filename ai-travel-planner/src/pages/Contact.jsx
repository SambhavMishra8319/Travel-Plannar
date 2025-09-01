// Contact.jsx
import React from "react";
import { Mail, Users } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
          Contact Us
        </h2>
        <p className="text-gray-600 mb-10">
          Got any queries or feedback? Reach out to us via email or connect with
          our team members directly.
        </p>

        {/* Common Email */}
        <div className="bg-white shadow-lg rounded-2xl p-6 mb-12">
          <div className="flex items-center justify-center gap-3 text-lg font-semibold text-gray-800">
            <Mail className="w-6 h-6 text-blue-600" />
            <span>Project Email: </span>
            <a
              href="mailto:aitravelplanner.team@gmail.com"
              className="text-blue-600 hover:underline"
            >
              aitravelplanner.team@gmail.com
            </a>
          </div>
        </div>

        {/* Team Members */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Users className="w-6 h-6 text-green-600" />
            <h3 className="text-2xl font-bold text-gray-800">
              Our Team Members
            </h3>
          </div>

          <ul className="space-y-4 text-gray-700">
            <li>
              <span className="font-semibold">Aggimalla Abhishek</span> —{" "}
              <a
                href="mailto:23bds004@iiitdwd.ac.in"
                className="text-blue-600 hover:underline"
              >
                23bds004@iiitdwd.ac.in
              </a>
            </li>
            <li>
              <span className="font-semibold">Nenavath Likhith</span> —{" "}
              <a
                href="mailto:23bds037@iiitdwd.ac.in"
                className="text-blue-600 hover:underline"
              >
                23bds037@iiitdwd.ac.in
              </a>
            </li>
            <li>
              <span className="font-semibold">Sambhav Mishra</span> —{" "}
              <a
                href="mailto:23bds050@iiitdwd.ac.in"
                className="text-blue-600 hover:underline"
              >
                23bds050@iiitdwd.ac.in
              </a>
            </li>
            <li>
              <span className="font-semibold">Sundaram</span> —{" "}
              <a
                href="mailto:23bds060@iiitdwd.ac.in"
                className="text-blue-600 hover:underline"
              >
                23bds060@iiitdwd.ac.in
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
