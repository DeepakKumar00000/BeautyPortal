import React from "react";
import hero from "../Images/hero.jpg";
import Navbar from "./Navbar"; 
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <Navbar /> 

      {/* Animated Tagline and Button */}
      <div className="absolute bottom-16 left-4 sm:bottom-24 sm:left-6 max-w-[90%]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-700 via-pink-500 to-yellow-400 bg-clip-text text-transparent leading-snug sm:leading-tight drop-shadow-lg whitespace-nowrap sm:whitespace-normal"
        >
          "Slay the Day with PearlBeuty."
        </motion.h1>

        <p className="text-lg sm:text-xl text-white mt-2 sm:mt-3 drop-shadow-md pl-5">
          Own your look, radiate confidence, and let your true beauty shine.
          <br />
          Because every day is your runway — make it unforgettable.
        </p>

      
        <button onClick={() => {
       const el = document.getElementById("video-gallery");
       if (el) {
        el.scrollIntoView({ behavior: "smooth" });
     }
    }}
   className="mt-6 ml-5 px-6 py-3 bg-pink-700 text-white font-semibold rounded-full hover:bg-pink-800 transition-colors flex items-center gap-2"
    >
     CHECK OUR PRODUCTS &gt;
     </button>
      </div>
    </div>
  );
};

export default HeroSection;
