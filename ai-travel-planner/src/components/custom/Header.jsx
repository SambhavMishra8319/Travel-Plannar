import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { Menu, X } from "lucide-react";

function Header() {
  const [openDialog, setOpenDialog] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user")) || null;

  const login = useGoogleLogin({
    onSuccess: (tokenInfo) => GetUserProfile(tokenInfo),
    onError: (error) => console.log("Google Login Error:", error),
  });

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        { headers: { Authorization: `Bearer ${tokenInfo?.access_token}` } }
      )
      .then((resp) => {
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDialog(false);
        window.location.reload();
      })
      .catch((err) => console.error("Error fetching user profile:", err));
  };

  return (
 <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 md:py-5 
    bg-slate-600 text-white shadow-md">



      {/* Logo */}
      <a href="/" className="flex items-center gap-3">
        <div className="w-32 h-12 flex items-center">
          <img
            src="/logo_2.png"
            alt="Logo"
            className="max-h-full object-contain"
          />
        </div>
      </a>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-8 font-medium">
      <a
  href="/"
  className="text-white hover:text-gray-300 transition-colors"
>
  Home
</a>
<a
  href="/about"
  className="text-white hover:text-gray-300 transition-colors"
>
  About Us
</a>
<a
  href="/contact"
  className="text-white hover:text-gray-300 transition-colors"
>
  Contact Us
</a>
<a
  href="/features"
  className="text-white hover:text-gray-300 transition-colors"
>
  Features
</a>

        {user ? (
          <div className="flex items-center gap-4 ml-6">
            <a href="/create-trip">
              <Button className="rounded-full bg-white text-black px-5 py-2 shadow hover:bg-gray-200 transition">
                + Create Trip
              </Button>
            </a>
            <a href="/my-trips">
              <Button className="rounded-full bg-white text-black px-5 py-2 shadow hover:bg-gray-200 transition">
                My Trips
              </Button>
            </a>
            <Popover>
              <PopoverTrigger>
                <img
                  src={user?.picture}
                  alt="User"
                  className="h-10 w-10 rounded-full border-2 border-white cursor-pointer hover:opacity-80 transition"
                />
              </PopoverTrigger>
              <PopoverContent className="w-44 p-4 bg-white text-black border border-gray-300 rounded-lg shadow-lg">
                <p className="text-sm font-semibold mb-2">
                  {user?.name}
                </p>
                <hr className="my-2 border-gray-400" />
                <button
                  className="text-red-600 font-semibold hover:text-red-800 w-full text-left"
                  onClick={() => {
                    googleLogout();
                    localStorage.removeItem("user");
                    window.location.reload();
                  }}
                >
                  Logout
                </button>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button
            onClick={() => setOpenDialog(true)}
            className="rounded-full bg-white text-black px-6 py-2 shadow hover:bg-gray-200 transition"
          >
            Sign In
          </Button>
        )}
      </nav>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <X size={28} className="text-white" />
          ) : (
            <Menu size={28} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white shadow-md flex flex-col gap-4 px-6 py-5 md:hidden border-t border-gray-800">
          <a href="/about" className="hover:text-gray-300 transition">
            About Us
          </a>
          <a href="/contact" className="hover:text-gray-300 transition">
            Contact Us
          </a>
          <a href="/features" className="hover:text-gray-300 transition">
            Features
          </a>

          {user ? (
            <>
              <a href="/create-trip">
                <Button className="w-full rounded-full bg-white text-black px-5 py-2 shadow hover:bg-gray-200 transition">
                  + Create Trip
                </Button>
              </a>
              <a href="/my-trips">
                <Button className="w-full rounded-full bg-white text-black px-5 py-2 shadow hover:bg-gray-200 transition">
                  My Trips
                </Button>
              </a>
              <button
                className="text-red-600 font-semibold text-left hover:text-red-800"
                onClick={() => {
                  googleLogout();
                  localStorage.removeItem("user");
                  window.location.reload();
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <Button
              onClick={() => {
                setOpenDialog(true);
                setMenuOpen(false);
              }}
              className="w-full rounded-full bg-white text-black px-6 py-2 shadow hover:bg-gray-200 transition"
            >
              Sign In
            </Button>
          )}
        </div>
      )}

      {/* Google Sign-In Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-sm w-full p-6 rounded-lg shadow-lg bg-white flex flex-col items-center text-center border border-gray-300">
          <DialogHeader>
            <h2 className="font-bold text-lg text-black">Sign In With Google</h2>
          </DialogHeader>
          <DialogDescription className="text-gray-600 text-sm mt-2">
            Sign in to the App with Google authentication securely
          </DialogDescription>
          <Button
            onClick={login}
            className="mt-4 w-full flex gap-3 items-center justify-center bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition shadow"
          >
            <FcGoogle className="h-6 w-6" /> Sign In With Google
          </Button>
        </DialogContent>
      </Dialog>
    </header>
  );
}

export default Header;
