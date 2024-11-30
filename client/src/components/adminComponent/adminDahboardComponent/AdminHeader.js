import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../../utils/constant";

const AdminHeader = () => {
  const [admin, setAdmin] = useState("Admin");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogOut = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("adminToken");
      localStorage.removeItem("adminEmail");
      navigate("/login");
    }
  };

  useEffect(() => {
    const adminEmail = localStorage.getItem("adminEmail");
    const token = localStorage.getItem("adminToken");

    if (!adminEmail || !token) {
      navigate("/login");
      return;
    }

    axios
      .post(`${baseURL}/api/getAdminDetails`, { email: adminEmail })
      .then((response) => {
        if (response.status === 200) {
          setAdmin(response.data.admin.firstName);
          if (window.location.pathname === "/login") {
            navigate("/AdminDashboard");
          }
        } else {
          navigate("/login");
        }
      })
      .catch(() => {
        navigate("/login");
      });
  }, [navigate]);

  return (
    <header className="flex flex-col md:flex-row font-mono justify-between items-center text-gray-600 bg-gray-200 p-5 shadow-md md:fixed top-0 left-0 right-0 z-50">
      {/* Logo Section */}
      <div className="flex items-center text-3xl">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900">
          <img src="/svg/logo.svg" alt="Logo" className="w-10 h-10 mr-2" />
          <div className="flex flex-row gap-2">
            <span className="font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-transparent bg-clip-text leading-none">
              STAMINA
            </span>
            <span className="text-gray-600 leading-none">FITNESS</span>
          </div>
        </Link>
      </div>

      {/* Hamburger Menu */}
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

      {/* Navigation Links */}
      <nav
        className={`${
          isNavOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row md:space-x-6 text-lg font-medium flex-grow justify-center items-center md:items-center space-y-4 md:space-y-0`}
      >
        <Link
          to="/AdminDashboard"
          className={`px-4 py-2 rounded-lg ${
            window.location.pathname === "/AdminDashboard"
              ? "bg-gray-400 text-black"
              : "text-gray-700 hover:bg-gray-200"
          }`}
        >
          Dashboard
        </Link>
        <Link
          to="/AddAdmin"
          className={`px-4 py-2 rounded-lg ${
            window.location.pathname === "/AddAdmin"
              ? "bg-gray-400 text-black"
              : "text-gray-700 hover:bg-gray-200"
          }`}
        >
          Add Admin
        </Link>
        <Link
          to="/AddUser"
          className={`px-4 py-2 rounded-lg ${
            window.location.pathname === "/AddUser"
              ? "bg-gray-400 text-black"
              : "text-gray-700 hover:bg-gray-200"
          }`}
        >
          Add User
        </Link>
        <Link
          to="/Payments"
          className={`px-4 py-2 rounded-lg ${
            window.location.pathname === "/Payments"
              ? "bg-gray-400 text-black"
              : "text-gray-700 hover:bg-gray-200"
          }`}
        >
          Payments
        </Link>
      </nav>

      {/* Logout Section */}
      <div className="flex items-center gap-4 mt-4 md:mt-0">
        <div className="text-lg font-medium text-gray-700 bg-gray-200 py-1 px-3 rounded-lg">
          {admin}
        </div>
        <button
          onClick={handleLogOut}
          className="inline-flex items-center bg-gradient-to-r from-blue-200 to-gray-400 text-black font-mono py-2 px-4 rounded-lg shadow-md hover:from-blue-400 hover:to-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 transition-all duration-300"
        >
          <img src="/svg/logout.svg" alt="Logout" className="w-6 mr-2" />
          Logout
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
