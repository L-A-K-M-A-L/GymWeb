import React, { useState } from 'react';
import UserLogin from '../components/userComponent/UserLogin';
import CustomHeader from '../components/CustomHeader';
import AdminLogin from '../components/adminComponent/AdminLogin';
import Footer from '../components/Footer';

const UserDashboard = () => {
  const [view, setView] = useState('');
  const toggleView = () => {
    setView(view === 'user' ? 'admin' : 'user');
  };



  return (
    <>
      <div className='flex flex-col min-h-screen font-mono bg-gray-200'>
        <CustomHeader />
        <main className='flex-grow py-10 md:py-24 px-4 md:px-20'>
          <div className='flex justify-end'>
            <div className='flex justify-end'>
              <button
                className='bg-gray-500 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 md:px-6 md:py-3 transition-all duration-300'
                onClick={toggleView}
              >
                {view === 'user' ? 'Are you a Member?' : 'Are you an Admin?'  }
              </button>
            </div>
          </div>

          {view === 'user' ? (
            <AdminLogin />
          ) : (
            
            <UserLogin />
          )}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default UserDashboard;