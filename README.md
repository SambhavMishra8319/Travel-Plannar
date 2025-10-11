#  Travel Planner

**Travel Planner** is a modern, user-friendly web application designed to make trip planning simple, organized, and enjoyable.  
Whether you’re creating a weekend getaway or a long international vacation, this app helps you plan every detail — from destinations and durations to daily activities and notes.

Built with **React**, **Vite**, and **Tailwind CSS**, this project demonstrates clean architecture, modular design, and responsive user interfaces optimized for all devices.

---

##  Project Overview

Travel Planner empowers users to create and manage personalized travel itineraries with ease.  
The app features a minimal yet elegant UI that focuses on usability, performance, and scalability — making trip planning efficient and stress-free.

---

##  Key Features

- **Effortless Trip Creation** – Add your trip title, destination, and duration in seconds.  
- **Personal Dashboard** – View and manage all your trips in one clean interface.  
- **Detailed Itinerary View** – Explore each trip’s activities, notes, and schedules in a structured view.  
- **Reusable Architecture** – Modular code structure for better scalability and maintainability.  
- **Responsive Design** – Fully optimized for desktops, tablets, and mobile devices.  
- **Fast Development Experience** – Built with Vite for lightning-fast build and reload times.  
- **Deployed Seamlessly** – Hosted on **Vercel** for reliable performance and zero-configuration deployment.

---

##  Tech Stack

### **Frontend**
- **React.js** – Component-based library for dynamic UIs.  
- **Vite** – Modern build tool with blazing fast HMR.  
- **Tailwind CSS** – Utility-first CSS framework for custom, responsive styling.  

### **Development Tools**
- **ESLint** – Ensures consistent coding standards.  
- **PostCSS** – Enhances and processes styles efficiently.  
- **Vercel** – Continuous deployment and hosting.  

### **(Optional) Backend / API**
If you integrate backend services (e.g., Firebase, MongoDB, or REST APIs), mention them here.  
Currently, this project handles data on the frontend.

---

## 🗂️ Folder Structure

```
TRAVEL_PLANNER/
├── node_modules/ # Installed dependencies
├── public/ # Static public assets (favicon, images, etc.)
├── src/ # Core application source code
│ ├── assets/ # Images, icons, and fonts
│ ├── components/ # Reusable React components
│ ├── constants/ # App-wide constants and configurations
│ ├── create-trip/ # Module for creating new trips
│ ├── hooks/ # Custom React hooks
│ ├── my-trips/ # Module for displaying user's saved trips
│ ├── pages/ # Page-level components
│ ├── service/ # API and data-handling logic
│ ├── view-trip/ # View detailed itineraries
│ ├── App.css # Global styles for App component
│ ├── App.jsx # Root component of the app
│ ├── index.css # Global styles
│ └── main.jsx # Entry point of the React app
├── .env.local # Local environment variables
├── .gitignore # Git ignored files
├── components.json # UI library configuration (Shadcn/UI)
├── eslint.config.js # ESLint setup
├── index.html # Root HTML file
├── package.json # Project metadata and dependencies
├── postcss.config.js # PostCSS configuration
├── tailwind.config.js # Tailwind CSS setup
├── vercel.json # Vercel deployment configuration
└── vite.config.js # Vite configuration

```


---

##  Getting Started

Follow these steps to run the project locally on your system.

### **Prerequisites**
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or later)
- npm or yarn package manager

---

### **Installation**

Clone the repository:
```bash
git clone https://github.com/Sundaram-Dev/Travel-Planner.git
cd Travel-Planner
