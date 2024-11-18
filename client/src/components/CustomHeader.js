import React from 'react'
import { Link } from 'react-router-dom';

const CustomHeader = () => {



    return (
        <>
            <header className="flex flex-col md:flex-row justify-between items-center text-gray-600 body-font bg-gray-200 p-5 shadow-md md:fixed top-0 left-0 right-0 z-50">
                <div className="flex flex-row text-3xl">
                    <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src="/svg/logo.svg" alt="Logo" className="w-10 mr-1" />
                        <span className="font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-transparent bg-clip-text ml-2">
                            STAMINA
                        </span>
                        <span className="text-gray-500 ml-1">FITNESS</span>
                    </Link>
                </div>

            </header>
        </>
    )
}

export default CustomHeader
