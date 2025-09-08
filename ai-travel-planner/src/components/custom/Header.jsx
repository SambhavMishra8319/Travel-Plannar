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
   <header className="sticky top-0 z-50 flex h-16 items-center justify-between px-4 md:px-8 bg-white shadow-lg text-white">

{/* Logo */}
      <a href="/" className="flex items-center gap-3">
        <div className="w-17 h-14  flex items-center">
          {/* <img
            src="/logo-1-.png"
            alt="Logo"
            className="max-h-full object-contain"
          /> */}
        </div>
      </a>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-8 font-medium">
  <a href="/" className="text-black hover:text-gray-600 transition">Home</a>
  <a href="/about" className="text-black hover:text-gray-600 transition">About Us</a>
  <a href="/contact" className="text-black hover:text-gray-600 transition">Contact Us</a>
  <a href="/features" className="text-black hover:text-gray-600 transition">Features</a>



        {user ? (
          <div className="flex items-center gap-4 ml-6">
            <a href="/create-trip">
              <Button className="rounded-full bg-white text-black px-5 py-2 shadow hover:bg-gray-400 transition">
                + Create Trip
              </Button>
            </a>
            <a href="/my-trips">
              <Button className="rounded-full bg-white text-black px-5 py-2 shadow hover:bg-gray-400 transition">
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
                <p className="text-sm font-semibold mb-2">{user?.name}</p>
                <hr className="my-2 border-gray-300" />
                <button
                  className="w-full text-center bg-red-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md 
             hover:bg-red-700 hover:scale-105 hover:shadow-lg transition-all duration-300"
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
            className="rounded-full bg-blue-600 text-white px-6 py-2 shadow hover:bg-blue-700 transition"
          >
            Sign In
          </Button>
        )}
      </nav>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Slide-in Sidebar) */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-black text-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)}>
            <X size={28} />
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col gap-6 text-lg font-medium px-6">
          <a href="/" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="/about" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="/contact" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Contact Us</a>
          <a href="/features" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Features</a>

          {user ? (
            <>
              <a href="/create-trip">
                <Button className="w-full rounded-full bg-black text-white px-5 py-2 shadow hover:bg-gray-800 transition">
                  + Create Trip
                </Button>
              </a>
              <a href="/my-trips">
                <Button className="w-full rounded-full bg-black text-white px-5 py-2 shadow hover:bg-gray-800 transition">
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
              className="w-full rounded-full bg-blue-600 text-white px-6 py-2 shadow hover:bg-blue-700 transition"
            >
              Sign In
            </Button>
          )}
        </div>
      </div>

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
            className="mt-4 w-full flex gap-3 items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition shadow"
          >
            <FcGoogle className="h-6 w-6" /> Sign In With Google
          </Button>
        </DialogContent>
      </Dialog>
    </header>
  );
}

export default Header;
// import React, { useState, useEffect } from "react";
// import { Button } from "../ui/button";
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { Dialog, DialogContent, DialogDescription, DialogHeader } from "@/components/ui/dialog";
// import { googleLogout, useGoogleLogin } from "@react-oauth/google";
// import axios from "axios";
// import { FcGoogle } from "react-icons/fc";
// import { Menu, X } from "lucide-react";

// function Header() {
//   const [openDialog, setOpenDialog] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const user = JSON.parse(localStorage.getItem("user")) || null;

//   const login = useGoogleLogin({
//     onSuccess: (tokenInfo) => getUserProfile(tokenInfo),
//     onError: (error) => console.log("Google Login Error:", error),
//   });

//   const getUserProfile = (tokenInfo) => {
//     axios
//       .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
//         headers: { Authorization: `Bearer ${tokenInfo?.access_token}` },
//       })
//       .then((resp) => {
//         localStorage.setItem("user", JSON.stringify(resp.data));
//         setOpenDialog(false);
//         window.location.reload();
//       })
//       .catch((err) => console.error("Error fetching user profile:", err));
//   };

//   // Scroll listener
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 w-full z-50 transition-all duration-500 ${
//         scrolled
//           ? "bg-black/30 backdrop-blur-md border-b border-white/10 shadow-lg py-2"
//           : "bg-transparent py-4"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12">
//         {/* Logo */}
//         <a
//           href="/"
//           className="ml-4 text-3xl font-extrabold tracking-tight bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-md hover:scale-110 transition-transform"
//         >
//           ✈️ AI Travel
//         </a>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex items-center gap-8 font-medium text-white">
//           {["Home", "About Us", "Features", "Contact Us"].map((item) => (
//             <a
//               key={item}
//               href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s/g, "")}`}
//               className="hover:text-gray-200 transition"
//             >
//               {item}
//             </a>
//           ))}

//           {user ? (
//             <div className="flex items-center gap-4 ml-6">
//               <a href="/create-trip">
//                 <Button className="rounded-full bg-white text-black px-5 py-2 shadow hover:bg-gray-400 transition">
//                   + Create Trip
//                 </Button>
//               </a>
//               <a href="/my-trips">
//                 <Button className="rounded-full bg-white text-black px-5 py-2 shadow hover:bg-gray-400 transition">
//                   My Trips
//                 </Button>
//               </a>
//               <Popover>
//                 <PopoverTrigger>
//                   <img
//                     src={user?.picture}
//                     alt="User"
//                     className="h-10 w-10 rounded-full border-2 border-white cursor-pointer hover:opacity-80 transition"
//                   />
//                 </PopoverTrigger>
//                 <PopoverContent className="w-44 p-4 bg-white text-black border border-gray-300 rounded-lg shadow-lg">
//                   <p className="text-sm font-semibold mb-2">{user?.name}</p>
//                   <hr className="my-2 border-gray-300" />
//                   <button
//                     className="w-full bg-red-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition"
//                     onClick={() => {
//                       googleLogout();
//                       localStorage.removeItem("user");
//                       window.location.reload();
//                     }}
//                   >
//                     Logout
//                   </button>
//                 </PopoverContent>
//               </Popover>
//             </div>
//           ) : (
//             <Button
//               onClick={() => setOpenDialog(true)}
//               className="rounded-full bg-blue-600 text-white px-6 py-2 shadow hover:bg-blue-700 transition"
//             >
//               Sign In
//             </Button>
//           )}
//         </nav>

//         {/* Mobile Hamburger */}
//         <div className="md:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`fixed top-0 right-0 h-full w-3/4 bg-black text-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
//           menuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex justify-end p-4">
//           <button onClick={() => setMenuOpen(false)}>
//             <X size={28} />
//           </button>
//         </div>
//         <div className="flex flex-col gap-6 text-lg font-medium px-6">
//           {["Home", "About Us", "Features", "Contact Us"].map((item) => (
//             <a
//               key={item}
//               href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s/g, "")}`}
//               className="hover:text-gray-300"
//               onClick={() => setMenuOpen(false)}
//             >
//               {item}
//             </a>
//           ))}

//           {user ? (
//             <>
//               <a href="/create-trip">
//                 <Button className="w-full rounded-full bg-black text-white px-5 py-2 shadow hover:bg-gray-800 transition">
//                   + Create Trip
//                 </Button>
//               </a>
//               <a href="/my-trips">
//                 <Button className="w-full rounded-full bg-black text-white px-5 py-2 shadow hover:bg-gray-800 transition">
//                   My Trips
//                 </Button>
//               </a>
//               <button
//                 className="text-red-600 font-semibold text-left hover:text-red-800"
//                 onClick={() => {
//                   googleLogout();
//                   localStorage.removeItem("user");
//                   window.location.reload();
//                 }}
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <Button
//               onClick={() => {
//                 setOpenDialog(true);
//                 setMenuOpen(false);
//               }}
//               className="w-full rounded-full bg-blue-600 text-white px-6 py-2 shadow hover:bg-blue-700 transition"
//             >
//               Sign In
//             </Button>
//           )}
//         </div>
//       </div>

//       {/* Google Sign-In Dialog */}
//       <Dialog open={openDialog} onOpenChange={setOpenDialog}>
//         <DialogContent className="max-w-sm w-full p-6 rounded-lg shadow-lg bg-white flex flex-col items-center text-center border border-gray-300">
//           <DialogHeader>
//             <h2 className="font-bold text-lg text-black">Sign In With Google</h2>
//           </DialogHeader>
//           <DialogDescription className="text-gray-600 text-sm mt-2">
//             Sign in to the App with Google authentication securely
//           </DialogDescription>
//           <Button
//             onClick={login}
//             className="mt-4 w-full flex gap-3 items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition shadow"
//           >
//             <FcGoogle className="h-6 w-6" /> Sign In With Google
//           </Button>
//         </DialogContent>
//       </Dialog>
//     </header>
//   );
// }

// export default Header;
