import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdminDashboard from '../AdminDashboard';
import AddAdmin from '../addminOperations/AddAdmin';
import AddUser from '../addminOperations/AddUser';
import Payments from '../../../services/Payment';
import axios from 'axios';
import { baseURL } from '../../../utils/constant';
import login from '../../../pages/Login';

const AdminHeader = () => {

  const [admin, setAdmin] = useState('Admin');
  const navigate = useNavigate();

  const handleLogOut = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminEmail');
      navigate('/login');
    }
  };

  useEffect(() => {
    const adminEmail = localStorage.getItem('adminEmail');
    const token = localStorage.getItem('adminToken');

    if (!adminEmail || !token) {
      navigate('/login');
      return;
    }

    axios.post(`${baseURL}/api/getAdminDetails`, { email: adminEmail })
      .then(response => {
        if (response.status === 200) {
          setAdmin(response.data.admin.firstName);
          if (window.location.pathname === '/login') {
            navigate('/AdminDashboard');
          }
        } else {
          navigate('/login');
        }
      })

  }, []);

  return (
    <header className="bg-gray-300 text-black p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Branding */}
        <div className="flex text-2xl font-semibold items-center">
          <Link to="/" className="flex items-center text-gray-900">
            <img src="/svg/logo.svg" alt="Logo" className="w-8 h-8 mr-2" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500">
              STAMINA
            </span>
            <span className="text-gray-600 ml-1">FITNESS</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link
            to="/AdminDashboard"
            className={`text-lg px-4 py-2 rounded-lg ${window.location.pathname === '/AdminDashboard'
                ? 'bg-gray-200  underline'
                : 'text-gray-700 hover:bg-gray-200 '
              }`}
          >
            Dashboard
          </Link>
          <Link
            to="/AddAdmin"
            className={`text-lg px-4 py-2 rounded-lg ${window.location.pathname === '/AddAdmin'
                ? 'bg-gray-200  underline'
                : 'text-gray-700 hover:bg-gray-200'
              }`}
          >
            Add Admin
          </Link>
          <Link
            to="/AddUser"
            className={`text-lg px-4 py-2 rounded-lg ${window.location.pathname === '/AddUser'
                ? 'bg-gray-200  underline'
                : 'text-gray-700 hover:bg-gray-200'
              }`}
          >
            Add User
          </Link>
          <Link
            to="/Payments"
            className={`text-lg px-4 py-2 rounded-lg ${window.location.pathname === '/Payments'
                ? 'bg-gray-200  underline'
                : 'text-gray-700 hover:bg-gray-200'
              }`}
          >
            Payments
          </Link>
        </nav>

        {/* Admin Name and Logout Section */}
        <div className="flex items-center gap-4">
          <div className="text-lg font-medium text-gray-700 bg-gray-200 py-1 px-3 rounded-lg">
            {admin}
          </div>
          <button
            onClick={handleLogOut}
            className="inline-flex items-cente text-white py-2 px-4 rounded-lg transition duration-300"
          >
            <img src="/svg/logout.svg" alt="Logout" className="w-5 h-5 mr-2" />
  
          </button>
        </div>
      </div>
    </header>



  );
};

export default AdminHeader;
