import React, { useState } from 'react'
import AdminHeader from '../adminDahboardComponent/AdminHeader'
import AdminFooter from '../adminDahboardComponent/AdminFooter'
import axios from 'axios'
import { baseURL } from '../../../utils/constant'

const AddAdmin = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [stateMessage, setStateMessage] = useState('')

    const handleRegister = async (e) => {
        e.preventDefault()
        if (password !== rePassword) {
            setStateMessage("Passwords don't match")
            setPassword('')
            setRePassword('')
        } else {
            try {
                const response = await axios.post(`${baseURL}/api/registerAdmin`, {
                    firstName,
                    lastName,
                    email,
                    password,
                })

                const data = response.data

                if (data.status === 'success') {
                    alert('Registration Successful!')
                    setFirstName('')
                    setLastName('')
                    setEmail('')
                    setPassword('')
                    setRePassword('')
                } else {
                    setStateMessage(data.message || 'ADMIN Registration failed!')
                }
            } catch (err) {
                console.error(
                    'Registration Failed:',
                    err.response?.data?.message || err.message
                )
                setStateMessage(
                    'Registration Failed: ' +
                    (err.response?.data?.message || err.message)
                )
            }
        }
    }

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <header className="shadow-lg font-mono mb-20">
                    <AdminHeader />
                </header>

                <main className="flex-grow sm:px-6 py-6 dark:bg-slate-300">
                    <div className="h-full font-mono dark:bg-gray-900">
                        <div className="mx-auto">
                            <div className="flex justify-center bg-gray-100 rounded shadow py-12">
                                <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                                    <div
                                        className="w-full h-auto bg-gray-00 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-r-md"
                                    >
                                        <img
                                            src="/images/logo.png"
                                            alt="LOGO"
                                            className="w-full h-full rounded-l"
                                        />
                                    </div>
                                    <div className="w-full lg:w-7/12 rounded shadow bg-white dark:bg-gray-700 p-5 lg:rounded-l-none">
                                        <h3 className="py-4 text-2xl md:text-6xl text-center text-slate-600 dark:text-white">
                                            Add A New Admin!
                                        </h3>
                                        <form
                                            onSubmit={handleRegister}
                                            className="px-8 pt-6 pb-8 mb-4 dark:bg-gray-800 rounded space-y-4"
                                        >
                                            {/* First Name */}
                                            <div>
                                                <label
                                                    className="block mb-2 text-md font-bold text-slate-500 dark:text-white"
                                                    htmlFor="firstName"
                                                >
                                                    First Name
                                                </label>
                                                <input
                                                    className="w-full px-3 py-2 text-md leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    type="text"
                                                    placeholder="First Name"
                                                    required
                                                    value={firstName}
                                                    onChange={(e) => setFirstName(e.target.value)}
                                                />
                                            </div>

                                            {/* Last Name */}
                                            <div>
                                                <label
                                                    className="block mb-2 text-md font-bold text-slate-500 dark:text-white"
                                                    htmlFor="lastName"
                                                >
                                                    Last Name
                                                </label>
                                                <input
                                                    className="w-full px-3 py-2 text-md leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    type="text"
                                                    placeholder="Last Name"
                                                    required
                                                    value={lastName}
                                                    onChange={(e) => setLastName(e.target.value)}
                                                />
                                            </div>

                                            {/* Email */}
                                            <div>
                                                <label
                                                    className="block mb-2 text-md font-bold text-slate-500 dark:text-white"
                                                    htmlFor="email"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    className="w-full px-3 py-2 text-md leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    type="email"
                                                    placeholder="Email"
                                                    required
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>

                                            {/* Password */}
                                            <div>
                                                <label
                                                    className="block mb-2 text-md font-bold text-slate-500 dark:text-white"
                                                    htmlFor="password"
                                                >
                                                    Password
                                                </label>
                                                <input
                                                    className="w-full px-3 py-2 text-md leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    type="password"
                                                    placeholder="******************"
                                                    required
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </div>

                                            {/* Confirm Password */}
                                            <div>
                                                <label
                                                    className="block mb-2 text-md font-bold text-slate-500 dark:text-white"
                                                    htmlFor="c_password"
                                                >
                                                    Confirm Password
                                                </label>
                                                <input
                                                    className="w-full mb-5 px-3 py-2 text-md leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    type="password"
                                                    placeholder="******************"
                                                    required
                                                    value={rePassword}
                                                    onChange={(e) => setRePassword(e.target.value)}
                                                />
                                            </div>

                                            {/* State Message */}
                                            <div className="mb-4 text-center">
                                                <p className="text-xs italic text-red-500">
                                                    {stateMessage}
                                                </p>
                                            </div>

                                            <div className="mt-4 text-center">
                                                <input
                                                    className="w-full px-4 py-2 text-black bg-gradient-to-r from-blue-200 to-gray-400 rounded-full shadow-md hover:from-blue-300 hover:to-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 transition-all duration-300 ease-in-out"
                                                    type="submit"
                                                    value="Add Admin"
                                                />
                                            </div>


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
