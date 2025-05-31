
import React from "react";
import logo from "../Images/logo.png";
import { User, Search } from "lucide-react";
import { useNavigate } from "react-router-dom"; // <-- ADD

const Navbar = () => {
  const navigate = useNavigate(); // <-- ADD

  return (
    <div className="absolute top-4 left-0 w-full flex justify-between items-center px-4 sm:px-8 z-20">
      <img src={logo} alt="PearlBeauty" className="h-14 w-auto md:h-20" />

      <div className="flex items-center gap-3 backdrop-blur-sm rounded-full px-3 py-1">
        <div className="flex items-center border-2 border-yellow-300 rounded-full px-2">
          <Search className="h-8 w-4 text-yellow-300" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm text-yellow-300 placeholder-yellow-300 px-2 w-28 md:w-40"
          />
        </div>

        {/* 👇 User icon navigates to login */}
        <User
          className="h-9 w-8 rounded-full text-yellow-300 cursor-pointer"
          onClick={() => navigate("/login")}
        />
      </div>
    </div>
  );
};

export default Navbar;
