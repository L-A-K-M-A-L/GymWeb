import React, { useState } from 'react';
import AdminHeader from '../adminDahboardComponent/AdminHeader';
import AdminFooter from '../adminDahboardComponent/AdminFooter';
import axios from 'axios';
import { baseURL } from '../../../utils/constant';

const AddUser = () => {
    const [email, setEmail] = useState('');
    const [membership, setMembership] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
    const [planActivateDate, setPlanActivateDate] = useState('');
    const [stateMessage, setStateMessage] = useState('');

    const handleMemberRegistration = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${baseURL}/api/memberRegistration`, {
                email,
                membership,
                phone,
                age,
                planActivateDate,
            });

            const data = response.data;
            if (data.status === 'success') {
                setStateMessage('Member Registration Successful');
            }
        } catch (err) {
            setStateMessage('Member Registration failed. Please try again.');
        }
    };

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <header className="shadow-lg font-mono mb-20">
                    <AdminHeader />
                </header>

                <main className="flex-grow sm:px-6 py-6">
                    <div className="h-full rounded-lg shadow-md dark:bg-gray-900 pb-20 font-mono bg-gray-100">
                        <div className="mx-auto">
                            <div className="flex justify-center py-12">
                                <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                                    <div className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-r-md">
                                        <img src='/images/logo.png' alt='LOGO' className='w-full h-full rounded-l' />
                                    </div>

                                    {/* Form Section */}
                                    <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                                        <h3 className="py-4 text-2xl md:text-6xl text-center text-slate-600 md:mb-5 dark:text-white">Register Member!</h3>
                                        <form onSubmit={handleMemberRegistration} className="space-y-6">
                                            {/* Email */}
                                            <div>
                                                <label htmlFor="email" className="block  font-bold text-slate-500 dark:text-white">
                                                    Email
                                                </label>
                                                <input
                                                    id="email"
                                                    type="email"
                                                    placeholder="Email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className="w-full px-4 py-2 text-gray-700 dark:text-black border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
                                                    required
                                                />
                                            </div>

                                            {/* Membership */}
                                            <div>
                                                <label htmlFor="membership" className="block font-bold text-slate-500 dark:text-white">
                                                    Membership
                                                </label>
                                                <input
                                                    id="membership"
                                                    type="text"
                                                    placeholder="Membership"
                                                    value={membership}
                                                    onChange={(e) => setMembership(e.target.value)}
                                                    className="w-full px-4 py-2 text-gray-700 dark:text-black border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
                                                    required
                                                />
                                            </div>

                                            {/* Phone */}
                                            <div>
                                                <label htmlFor="phone" className="block  font-bold text-slate-500 dark:text-white">
                                                    Mobile No
                                                </label>
                                                <input
                                                    id="phone"
                                                    type="text"
                                                    placeholder="Mobile No"
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    className="w-full px-4 py-2 text-gray-700 dark:text-black border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
                                                    required
                                                />
                                            </div>

                                            {/* Age */}
                                            <div>
                                                <label htmlFor="age" className="block  font-bold text-slate-500 dark:text-white">
                                                    Age
                                                </label>
                                                <input
                                                    id="age"
                                                    type="number"
                                                    placeholder="Age"
                                                    value={age}
                                                    onChange={(e) => setAge(e.target.value)}
                                                    className="w-full px-4 py-2 text-gray-700 dark:text-black border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
                                                    required
                                                />
                                            </div>

                                            {/* Plan Activation Date */}
                                            <div>
                                                <label htmlFor="planActivateDate" className="block font-bold text-slate-500 dark:text-white">
                                                    Plan Activation Date
                                                </label>
                                                <input
                                                    id="planActivateDate"
                                                    type="date"
                                                    value={planActivateDate}
                                                    onChange={(e) => setPlanActivateDate(e.target.value)}
                                                    className="w-full px-4 py-2 text-gray-700 dark:text-black border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
                                                    required
                                                />
                                            </div>

                                            {/* State Message */}
                                            {stateMessage && (
                                                <p className="text-red-500 text-sm text-center">{stateMessage}</p>
                                            )}

                                            {/* Submit Button */}
                                            <div className="text-center">
                                                <button
                                                    type="submit"
                                                    className="w-full px-4 py-2 text-black bg-gradient-to-r from-blue-200 to-gray-400 rounded-full shadow-md hover:from-blue-300 hover:to-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 transition-all duration-300"
                                                >
                                                    Add A New Member
                                                </button>
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
    );
};

export default AddUser;
