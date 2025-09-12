🌐 Travel Plannar

Welcome to the repository for Travel Plannar, an intelligent web app that helps users generate personalized trip itineraries using real-time data.

🚀 Live Demo: https://travel-plannar.vercel.app/

---

📖 About the Project

This project was built as part of our Software Engineering coursework to showcase the integration of web technologies. It helps users plan trips by analyzing user preferences like destination, budget, and travel type, then generates routes, hotel suggestions, weather info, and more using real-time APIs.

---

🧠 Key Features

✅ Personalized itineraries

✅ Google Maps API integration for real-time route display

✅ OpenWeather API for live weather updates

✅ Firebase-based authentication & storage

✅ Beautiful UI with TailwindCSS and ShadCN

✅ Mobile responsive and optimized design

📌 Prerequisites

Node.js v16 or higher

Firebase project (Auth + Firestore)

Google Maps API key

OpenWeatherMap API key


📥 Setup
1-Clone the repository
git clone https://github.com/SambhavMishra8319/Travel-Plannar.git
cd Travel-Plannar

2-Install dependencies
npm install

3-Create a .env file
VITE_FIREBASE_API_KEY=your_firebase_key
VITE_GOOGLE_MAPS_API_KEY=your_maps_key
VITE_OPENWEATHER_API_KEY=your_weather_key

#####Start the local dev server
npm run dev


👥 Team Members
Name	Roll No	Email
Sambhav Mishra	23BDS050	23bds050@iiitdwd.ac.in
Sundaram 	23BDS060	23bds060@iiitdwd.ac.in 
Aggimalla Abhishek	23BDS004	23bds004@iiitdwd.ac.in
Nenavath Likhith	23BDS037	23bds037@iiitdwd.ac.in


🛠️ Built With

Frontend: React.js, Vite

Styling: Tailwind CSS, ShadCN

APIs: Google Maps API, OpenWeather API

Authentication & DB: Firebase

Deployment: Vercel

📎 Useful Links

🔴 Live Site: travel-plannar.vercel.app

📦 GitHub Repository: github.com/SambhavMishra8319/Travel-Plannar

📝 Project Report: Google Drive Link
📄 License
This project is created for educational use at IIIT Dharwad. All rights reserved to the respective authors for academic presentation purposes only.

🙌 Contributions
This project was designed, developed, and deployed by our team as part of academic coursework. Contributions, suggestions, and feedback are welcome.


---

## 📁 Folder Structure

```plaintext
ai-trip-planner-web/
├── public/                 # Static files and assets
├── src/                    # Source code for the app
│   └── components/         # React UI components
├── .gitignore              # Files to be ignored by Git
├── components.json         # ShadCN component config
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML entry point
├── jsconfig.json           # JS project settings
├── package.json            # Project metadata and scripts
├── package-lock.json       # Dependency lock file
├── postcss.config.js       # PostCSS (Tailwind) config
├── tailwind.config.js      # Tailwind CSS settings
├── vite.config.js          # Vite bundler configuration
└── README.md               # You're here!
