import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../../utils/constant';
import axios from 'axios';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [stateMessage, setStateMessage] = useState('');

    const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();

        await axios.post(`${baseURL}/api/login`, { email, password })
            .then(response => {
                if (response.status === 200) {
                    localStorage.setItem('userEmail', email);   
                    localStorage.setItem('userToken', response.data.token);
                    navigate('/UserDashboard')

                } else {
                    setStateMessage("Check your Credentials");
                }
            })
            .catch(err => {
                console.error('Axios error:', err); // Log the full error object for more details
                const message = err.response?.data?.message || "Something went wrong. Please try again.";
                setStateMessage(message);
            });


    }

    return (

        <>
            <div className="h-full">
                <div className="mx-auto">
                    <div className="flex justify-center px-6 py-10">
                        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                            <div
                                className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-r-md">
                                <img src='/images/logo.png' alt='LOGO' className='w-full h-full rounded-l' />
                            </div>
                            <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                                <h3 className="py-4 text-4xl text-center text-slate-400 dark:text-white">Welcome Back!</h3>
                                <form
                                    onSubmit={handleLogin}
                                    className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
                                    <div className="mb-4">
                                        <label className="block mb-2 text-md font-bold text-slate-500 dark:text-white" htmlFor="email">
                                            Email
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            type="email"
                                            placeholder="Email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block mb-2 text-md font-bold text-slate-500 dark:text-white" htmlFor="email">
                                            Password
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            required
                                            type="password"
                                            placeholder="*********"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className='mb-4 text-center'>
                                        <p className="text-xs italic text-red-500">{stateMessage}</p>
                                    </div>
                                    <div className="mb-6 text-center">
                                        <input
                                            className="w-full px-4 py-2 text-white bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full shadow-md hover:from-indigo-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 transition-all duration-300 ease-in-out"
                                            type="submit"
                                            value="Sign In"
                                        />

                                    </div>
                                    <hr className="mb-6 border-t" />
                                    <div className="text-center">
                                        <Link
                                            to="/Register"
                                            className="inline-block text-sm text-slate-500 dark:text-white align-baseline">
                                            Don't have an account ?
                                            <span className='text-indigo-500 font-bold underline transition duration-100 hover:text-indigo-300 ml-2'>
                                                Register Today!
                                            </span>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Login