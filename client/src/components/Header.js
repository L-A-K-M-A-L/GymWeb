import React from 'react'
import { Link } from 'react-router-dom'


const UserHeader = () => {
    return (
        <>
            <header className="flex flex-col md:flex-row font-mono justify-between items-center text-gray-600 body-font bg-gray-200 p-5 shadow-indigo-600 md:fixed top-0 left-0 right-0 z-50">
                <div className="flex flex-row text-3xl">
                    <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src="/svg/logo.svg" alt="Logo" className="w-10 mr-1" />
                        <span className="font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-transparent bg-clip-text ml-2">
                            STAMINA
                        </span>
                        <span className="text-gray-500 ml-1">FITNESS</span>
                    </Link>
                </div>

                <div className="flex flex-row gap-4">
                    <div className="flex flex-row gap-4">
                        <Link to='/login'>
                            <button className="inline-flex items-center bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:from-indigo-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 transition-all duration-300">
                                Login
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 ml-1"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </Link>
                        <Link to="/register">
                            <button className="inline-flex items-center bg-gradient-to-r from-gray-500 to-gray-700 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:from-gray-600 hover:to-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-all duration-300">
                                Register
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 ml-1"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </Link>
                    </div>

                </div>
            </header>
        </>
    )
}

export default UserHeader
