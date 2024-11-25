import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const UserHeader = () => {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false); // State to toggle navbar

  const handleLogOut = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("userToken");
      localStorage.removeItem("userEmail");
      navigate("/login");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <header className="flex flex-col md:flex-row font-mono justify-between items-center text-gray-600 bg-gray-200 p-5 shadow-md md:fixed top-0 left-0 right-0 z-50">
      {/* Logo and Branding */}
      <div className="flex items-center text-3xl">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900"
        >
          <img src="/svg/logo.svg" alt="Logo" className="w-10 h-10 mr-2" />
          <div className="flex flex-row gap-2">
            <span className="font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-transparent bg-clip-text leading-none">
              STAMINA
            </span>
            <span className="text-gray-600 leading-none">
              FITNESS
            </span>
          </div>
        </Link>
      </div>

      {/* Hamburger menu for small screens */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Navbar */}
      <nav
        className={`${
          isNavOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row md:space-x-6 text-lg font-medium flex-grow justify-center items-center md:items-center space-y-4 md:space-y-0`}
      >
        <Link
          to="/UserDashboard"
          className={`px-4 py-2 rounded-lg ${
            window.location.pathname === "/UserDashboard"
              ? "bg-gray-300"
              : "text-gray-700 hover:bg-gray-200"
          }`}
        >
          Details
        </Link>
        <Link
          to="/WorkoutPlan"
          className={`px-4 py-2 rounded-lg ${
            window.location.pathname === "/WorkoutPlan"
              ? "bg-gray-300"
              : "text-gray-700 hover:bg-gray-200"
          }`}
        >
          Workout Plan
        </Link>
      </nav>

      {/* Logout button */}
      <div className="flex items-center gap-4 mt-4 md:mt-0">
        <button
          onClick={handleLogOut}
          className="inline-flex items-center bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:from-indigo-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 transition-all duration-300"
        >
          <img src="/svg/logout.svg" alt="Logout" className="w-6 mr-2" />
          Logout
        </button>
      </div>
    </header>
  );
};

export default UserHeader;
