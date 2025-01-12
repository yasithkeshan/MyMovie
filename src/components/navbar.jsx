import React from "react";
import WebStoriesIcon from "@mui/icons-material/WebStories";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center text-2xl font-bold text-white tracking-widest font-poppins cursor-pointer">
          <WebStoriesIcon className="inline-block h-6 w-6 mr-4" />
          CINEAPP
        </div>

        {/* Login Button */}
        <button
          className="text-white text-sm sm:text-center bg-white bg-opacity-20 px-4 py-2 rounded-2xl transition-all duration-300 hover:bg-opacity-40 font-poppins"
          onClick={() => alert("Redirect to Login Page")}
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
