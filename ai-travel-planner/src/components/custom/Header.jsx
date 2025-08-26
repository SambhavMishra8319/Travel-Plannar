import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    console.log(user);
  }, []);

  const login = useGoogleLogin({
    onSuccess: (tokenInfo) => {
      console.log("Google Login Success:", tokenInfo);
      GetUserProfile(tokenInfo);
    },
    onError: (error) => console.log("Google Login Error:", error),
  });

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "application/json",
          },
        }
      )
      .then((resp) => {
        console.log("User Profile:", resp.data);
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDialog(false);
        window.location.reload();
      })
      .catch((err) => {
        console.error("Error fetching user profile:", err);
      });
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm flex items-center justify-between px-6 py-3">
      {/* Logo */}
      <a href="/" className="flex items-center gap-2">
        <div className="w-32 h-12 flex items-center">
          <img
            src="/main_logo.png"
            alt="Logo"
            className="max-h-full object-contain"
          />
        </div>
      </a>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-6 text-black font-medium">
        <a href="/about" className="hover:text-gray-600">About Us</a>
        <a href="/contact" className="hover:text-gray-600">Contact Us</a>
        <a href="/features" className="hover:text-gray-600">Features</a>

        {user ? (
          <div className="flex items-center gap-4">
            <a href="/create-trip">
              <Button className="rounded-full bg-black text-white hover:bg-gray-800">
                + Create Trip
              </Button>
            </a>
            <a href="/my-trips">
              <Button className="rounded-full bg-black text-white hover:bg-gray-800">
                My Trips
              </Button>
            </a>
            <Popover>
              <PopoverTrigger>
                <img
                  src={user?.picture}
                  alt="User"
                  className="h-[40px] w-[40px] rounded-full border border-black cursor-pointer"
                />
              </PopoverTrigger>
              <PopoverContent className="w-40 p-3 bg-white border border-black">
                <p className="text-sm text-black mb-2">{user?.name}</p>
                <hr className="my-2 border-black" />
                <button
                  className="text-red-600 font-semibold hover:text-red-800"
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
            className="rounded-full bg-black text-white hover:bg-gray-800"
          >
            Sign In
          </Button>
        )}
      </nav>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} className="text-black" /> : <Menu size={28} className="text-black" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col gap-4 px-6 py-4 md:hidden">
          <a href="/about" className="hover:text-gray-600 text-black">About Us</a>
          <a href="/contact" className="hover:text-gray-600 text-black">Contact Us</a>
          <a href="/features" className="hover:text-gray-600 text-black">Features</a>

          {user ? (
            <>
              <a href="/create-trip">
                <Button className="w-full rounded-full bg-black text-white hover:bg-gray-800">
                  + Create Trip
                </Button>
              </a>
              <a href="/my-trips">
                <Button className="w-full rounded-full bg-black text-white hover:bg-gray-800">
                  My Trips
                </Button>
              </a>
              <button
                className="text-red-600 font-semibold text-left"
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
              className="w-full rounded-full bg-black text-white hover:bg-gray-800"
            >
              Sign In
            </Button>
          )}
        </div>
      )}

      {/* Google Sign-In Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-sm w-full p-6 rounded-lg shadow-lg bg-white flex flex-col items-center text-center border border-black">
          <DialogHeader>
            <h2 className="font-bold text-lg text-black">Sign In With Google</h2>
          </DialogHeader>
          <DialogDescription className="text-gray-600 text-sm mt-2">
            Sign in to the App with Google authentication securely
          </DialogDescription>
          <Button
            onClick={login}
            variant="outline"
            className="mt-4 w-full flex gap-4 items-center bg-black text-white hover:bg-gray-800"
          >
            <FcGoogle className="h-7 w-7" /> Sign In With Google
          </Button>
        </DialogContent>
      </Dialog>
    </header>
  );
}

export default Header;
