import React from 'react'
import { Link } from 'react-router-dom'

const UserDashboard = () => {
  return (
    <>
      <header className="flex flex-col md:flex-row justify-between items-center text-gray-600 body-font bg-gray-200 p-5 shadow-indigo-600 md:fixed top-0 left-0 right-0 z-50">
        <div className="flex flex-row text-3xl">
          <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="/svg/logo.svg" alt="Logo" className="w-10 mr-1" />
            <span className="font-bold text-indigo-500 ml-2">STAMINA</span>
            <span className="text-gray-500 ml-1">FITNESS</span>
          </Link>
        </div>
        <div className="flex flex-row gap-4">
          <Link to='/login'>
            <button className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none  text-white hover:bg-indigo-300 rounded text-base mt-4 md:mt-0">Login
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
          <Link to="/register">
            <button className="inline-flex items-center text-white bg-gray-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Register
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
      </header>
    </>
  )
}

export default UserDashboard