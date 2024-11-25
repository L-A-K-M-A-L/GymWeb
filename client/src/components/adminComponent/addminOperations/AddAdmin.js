import React, { useState } from 'react'
import AdminHeader from '../adminDahboardComponent/AdminHeader'
import AdminFooter from '../adminDahboardComponent/AdminFooter'
import axios from 'axios'
import { baseURL } from '../../../utils/constant'
import { Link, useNavigate } from 'react-router-dom'

const AddAdmin = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [stateMessage, setStateMessage] = useState('');

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== rePassword) {
            setStateMessage("Passwords don't match");
            setPassword('');
            setRePassword('');
        } else {
            try {
                const response = await axios.post(`${baseURL}/api/registerAdmin`, {
                    firstName,
                    lastName,
                    email,
                    password
                });

                // Access the response data directly
                const data = response.data;

                if (data.status === 'success') {
                    alert('Registration Successful!');
                    localStorage.setItem('adminToken', data.token);
                    console.log(data.token);
                    setStateMessage(data.message || 'Registration failed');
                } else {
                    setStateMessage(data.message || 'Registration failed');
                }
            } catch (err) {
                console.error('Registration Failed:', err.response?.data?.message || err.message);
                setStateMessage('Registration Failed: ' + (err.response?.data?.message || err.message));
            }
        }
    };


    return (
        <>
            <div className="flex flex-col min-h-screen">

                <header className="shadow-lg font-mono">
                    <AdminHeader />
                </header>


                <main className="flex-grow sm:px-6 py-6 dark:bg-slate-300">
                    <div className="h-full bg-gray-300 font-mono rounded-lg shadow-md dark:bg-gray-900 py-16">
                        <div className="mx-auto">
                            <div className="flex justify-center py-12">
                                <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                                    <div
                                        className="w-full h-auto bg-gray-00 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-r-md">
                                        <img src='/images/logo.png' alt='LOGO' className='w-full h-full rounded-l' />
                                    </div>
                                    <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                                        <h3 className="py-4 text-4xl text-center text-slate-400 dark:text-white">Add a New Admin!</h3>
                                        <form
                                            onSubmit={handleRegister}
                                            className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
                                            <div className="mb-4 md:flex md:justify-between">
                                                <div className="mb-4 md:mr-2 md:mb-0">
                                                    <label className="block mb-2 text-md font-bold text-slate-500 dark:text-white" htmlFor="firstName">
                                                        First Name
                                                    </label>
                                                    <input
                                                        className="w-full px-3 py-2 text-md leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                        type="text"
                                                        placeholder="First Name"
                                                        required
                                                        value={firstName}
                                                        onChange={e => setFirstName(e.target.value)}
                                                    />
                                                </div>
                                                <div className="md:ml-2">
                                                    <label className="block mb-2 text-md font-bold text-slate-500 dark:text-white" htmlFor="lastName">
                                                        Last Name
                                                    </label>
                                                    <input
                                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                        type="text"
                                                        placeholder="Last Name"
                                                        required
                                                        value={lastName}
                                                        onChange={e => setLastName(e.target.value)}
                                                    />
                                                </div>
                                            </div>
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
                                                    onChange={e => setEmail(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-4 md:flex md:justify-between">
                                                <div className="mb-4 md:mr-2 md:mb-0">
                                                    <label className="block mb-2 text-md font-bold text-slate-500 dark:text-white" htmlFor="password">
                                                        Password
                                                    </label>
                                                    <input
                                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                        type="password"
                                                        required
                                                        placeholder="******************"
                                                        value={password}
                                                        onChange={e => setPassword(e.target.value)}

                                                    />

                                                </div>
                                                <div className="md:ml-2">
                                                    <label className="block mb-2 text-md font-bold text-slate-500 dark:text-white" htmlFor="c_password">
                                                        Confirm Password
                                                    </label>
                                                    <input
                                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                        type="password"
                                                        placeholder="******************"
                                                        required
                                                        value={rePassword}
                                                        onChange={e => setRePassword(e.target.value)}
                                                    />
                                                </div>

                                            </div>
                                            <div className='mb-4 text-center'>
                                                <p className="text-xs italic text-red-500">{stateMessage}</p>
                                            </div>
                                            <div className="mb-6 text-center">
                                                <input
                                                    className="w-full px-4 py-2 text-white bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full shadow-md hover:from-indigo-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 transition-all duration-300 ease-in-out"
                                                    type="submit"
                                                    value="Add Admin"
                                                />
                                            </div>

                                            <hr className="mb-6 border-t" />



                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <footer>
                    <AdminFooter />
                </footer>
            </div>
        </>
    )
}

export default AddAdmin