import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import CreateTrip from "./create-trip/index.jsx";
import Viewtrip from "./view-trip/index.jsx";
import MyTrips from "./my-trips/index.jsx";
import Header from "./components/custom/Header.jsx"; 
import { Toaster } from './components/ui/toaster';
import { GoogleOAuthProvider } from "@react-oauth/google";

// ✅ Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Feature from "./pages/Features.jsx";  // ✅ Corrected (singular, matches file)

const router = createBrowserRouter([
    {
    path: "/",
    element: <App />,   // 👈 Pehle wala landing page (background image wala)
  },
  {
    path: "/",
    element: <Home />,   // ✅ Home page as default
  },
  {
    path: "/create-trip",
    element: <CreateTrip />,
  },
  {
    path: "/view-trip/:tripId",
    element: <Viewtrip />,
  },
  {
    path: "/my-trips",
    element: <MyTrips />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/features",
    element: <Feature />,  // ✅ Corrected (Feature not Features)
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <Header />
      <Toaster />
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
