import React from 'react';
import { Link } from 'react-router-dom';

const AdminHeader = () => {
  return (
    <header className="bg-gray-300 text-black p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Branding */}
        <div className="flex flex-row text-3xl">
                    <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src="/svg/logo.svg" alt="Logo" className="w-10 mr-1" />
                        <span className="font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-transparent bg-clip-text ml-2">
                            STAMINA
                        </span>
                        <span className="text-gray-500 ml-1">FITNESS</span>
                    </Link>
                </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/admin/dashboard" className="text-lg hover:text-indigo-300 transition duration-200 ease-in-out">
            Dashboard
          </Link>
          <Link to="/admin/add-admin" className="text-lg hover:text-indigo-300 transition duration-200 ease-in-out">
            Add Admin
          </Link>
          <Link to="/admin/add-user" className="text-lg hover:text-indigo-300 transition duration-200 ease-in-out">
            Add User
          </Link>
          <Link to="/admin/payments" className="text-lg hover:text-indigo-300 transition duration-200 ease-in-out">
            Payments
          </Link>
        </nav>

        {/* Admin Name Section */}
        <div className="hidden md:block text-lg font-medium text-white">
          Admin Name
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
