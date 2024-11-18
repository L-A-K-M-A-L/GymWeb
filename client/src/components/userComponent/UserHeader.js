import React from 'react'

import { Link, useNavigate } from 'react-router-dom';


const UserHeader = () => {

    const navigate = useNavigate();


    const handleLogOut = () => {
        if (window.confirm('Are you sure you want to log out?')) {
            localStorage.removeItem('userToken');
            navigate('/login');
        }
    };


    return (
        <>
            <header className="flex flex-col md:flex-row justify-between items-center text-gray-600 body-font bg-gray-200 p-5 shadow-md md:fixed top-0 left-0 right-0 z-50">
                <div className="flex flex-row text-3xl">
                    <div className="flex flex-row text-3xl">
                        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <img src="/svg/logo.svg" alt="Logo" className="w-10 mr-1" />
                            <span className="font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-transparent bg-clip-text ml-2">
                                STAMINA
                            </span>
                            <span className="text-gray-500 ml-1">FITNESS</span>
                        </Link>
                    </div>

                </div>
                <div className="flex flex-row gap-4">
                    <button
                        onClick={handleLogOut}
                        className="inline-flex items-center border-0 py-1 px-3 focus:outline-none text-white  hover:bg-slate-300 rounded mt-4 md:mt-0">
                        <img src="/svg/logout.svg" alt="Logout" className="w-7 ml-1" />
                    </button>
                </div>
            </header>
        </>
    )
}

export default UserHeader
