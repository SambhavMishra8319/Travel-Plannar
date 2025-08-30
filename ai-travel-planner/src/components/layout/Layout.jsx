import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../custom/Header.jsx";
import Footer from "../custom/Footer.jsx";
import { Toaster } from "../ui/toaster.jsx";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />           {/* Top navigation */}
      <Toaster />          {/* Notification toaster */}
      <main className="flex-1">
        <Outlet />         {/* Render child pages here */}
      </main>
      <Footer />           {/* Footer */}
    </div>
  );
}
