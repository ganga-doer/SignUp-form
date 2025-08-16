import React from "react";
import { useNavigate } from "react-router-dom";

const LandingHeader = () => {
    const navigate =useNavigate()
  return (
    <header className="w-full bg-black/30 shadow-md backdrop-blur-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="">
          <img
            src="src/assets/pine-cedar-conifer-coniferous-evergreen-fir-larch-cypress-hemlock-tress-forest-and-river-lake-creek-and-for-camp-outdoor-adventure-logo-design-vector.jpg"
            alt="log" className="w-12 h-12 rounded-full"
          />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="#features"
            className="text-white hover:text-blue-600 transition-colors"
          >
            Forests
          </a>
          <a
            href="#pricing"
            className="text-white hover:text-blue-600 transition-colors"
          >
            Rehabilation Centers
          </a>
          <a
            href="#about"
            className="text-white hover:text-blue-600 transition-colors"
          >
            Documentation
          </a>
          <a
            href="#contact"
            className="text-white hover:text-blue-600 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-colors" onClick={()=>navigate("/login")}>
            Login
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
