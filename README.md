#  Travel Planner: LLMs and Services for Smart Itinerary Generation

**Team Members:**  
Sundaram, Sambhav Mishra, Aggimalla Abhishek, Nenavath Likhith Naik  
**Faculty Guide:** Snehalatha S H, Animesh Chaturvedi  
**Department of Data Science and Artificial Intelligence**  
**Indian Institute of Information Technology, Dharwad**  
Dharwad, Karnataka, India  

---

##  Project Overview

**Travel Planner** is a full-stack web application that revolutionizes the way users plan their trips.  
Traditionally, travelers rely on multiple platforms—flights, hotels, maps, weather forecasts—which makes planning fragmented and time-consuming.  
Our system introduces an **AI-powered solution using Google’s Gemini LLM**, enabling **smart, personalized, and automated itinerary generation**.

Through natural language prompts such as *destination*, *duration*, *budget*, and *preferences*, users can generate a **structured, day-by-day itinerary** that integrates **real-world data** like maps and weather.  

This project was developed as a **college group project** under the Department of Data Science and AI, IIIT Dharwad.

---

##  Key Features

- **AI-Powered Itinerary Generation** – Uses **Google Gemini LLM** to understand user preferences and create contextual, realistic travel plans.  
- **Smart Personalization** – Generates custom recommendations based on user budget, travel type, and interests.  
- **Real-Time Data Integration** – Connects with **Google Maps** and **Weather APIs** for up-to-date route and weather information.  
- **Dynamic Updates** – Automatically adjusts itineraries using live data to ensure practical travel schedules.  
- **User Authentication** – Powered by **Firebase Auth** for secure login and personalized trip storage.  
- **Scalable Architecture** – Modular frontend–backend design ensures flexibility and easy future expansion.  
- **Responsive UI** – Built with **React**, **Vite**, and **Tailwind CSS** for a smooth experience across all devices.  

---

##  System Architecture

The system follows a **three-tier architecture** — *Frontend, Backend, and External Services.*

###  Frontend  
- Developed with **React.js (Vite)** and **Tailwind CSS**.  
- Provides an intuitive interface where users enter trip details and view AI-generated itineraries.  
- Integrated with **Firebase Authentication** for secure access.  
- Deployed seamlessly on **Vercel**.

###  Backend  
- Built using **Node.js** for efficient request handling.  
- Communicates with:
  - **Gemini API** – for itinerary generation and reasoning.  
  - **Firebase Firestore** – for storing user and trip data.  
  - **Weather API** – for fetching live climate details.  
- Implements input validation, caching, and concurrency handling for optimized performance.

###  External Services  
- **Google Gemini LLM** – Core reasoning and content generation engine.  
- **Google Maps API** – Provides location and navigation data.  
- **Weather API** – Supplies real-time forecast integration.  
- **Firebase Auth & Firestore** – Secure user management and cloud storage.

---

##  Tech Stack

| Category | Technologies |
|-----------|---------------|
| **Frontend** | React.js, Vite, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Database** | Firebase Firestore |
| **AI Model** | Google Gemini API |
| **APIs** | Google Maps, Weather API |
| **Auth & Hosting** | Firebase, Vercel |
| **Dev Tools** | ESLint, PostCSS |

---

## 🗂️ Folder Structure

```bash
TRAVEL_PLANNER/
├── node_modules/ # Project dependencies
├── public/ # Static assets (images, icons, HTML)
├── src/
│ ├── assets/ # Icons, fonts, and visuals
│ ├── components/ # Reusable UI components
│ ├── constants/ # Configuration and constants
│ ├── create-trip/ # Module for trip creation
│ ├── hooks/ # Custom React hooks
│ ├── my-trips/ # User’s saved trips
│ ├── pages/ # App pages
│ ├── service/ # API and LLM service handlers
│ ├── view-trip/ # Detailed trip view
│ ├── App.jsx # Root component
│ ├── App.css # Global styles
│ └── main.jsx # Entry point
├── .env.local # Environment variables
├── package.json # Project dependencies and scripts
├── tailwind.config.js # Tailwind configuration
├── vite.config.js # Vite configuration
└── vercel.json # Deployment settings

```
##  Installation and Setup

### **Prerequisites**
- Node.js (v18 or higher)  
- npm or yarn

### **Setup Instructions**
```bash
# Clone the repository
git clone https://github.com/your-username/travel-planner.git
cd travel-planner

# Install dependencies
npm install

# Run the development server
npm run dev
