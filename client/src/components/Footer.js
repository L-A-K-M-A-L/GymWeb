import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-gray-300 text-slate-200  mt-1 py-6">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
                
                <div className="flex items-center mb-4 sm:mb-0">
                    <img src="/svg/logo.svg" alt="Logo" className="w-7 mr-2" />
                    <div className="flex flex-col sm:flex-row items-center">
                        <span className="font-bold text-indigo-500">STAMINA</span>
                        <span className="text-gray-600">FITNESS</span>
                    </div>
                </div>

                <p className="text-sm text-gray-600 sm:ml-4 sm:border-l-2 sm:border-gray-400 sm:pl-4 sm:py-2">
                    ©2024: Web by lakmalPrasanna
                </p>

                <div className="flex space-x-4 mt-4 sm:mt-0">
                    <Link to="https://facebook.com" className="text-gray-600 hover:text-indigo-500">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </Link>
                    <Link to="https://twitter.com" className="text-gray-600 hover:text-indigo-500">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                    </Link>
                    <Link to="https://instagram.com" className="text-gray-600 hover:text-indigo-500">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
