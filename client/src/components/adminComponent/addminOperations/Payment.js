import React, { useState } from 'react';
import axios from 'axios';
import { baseURL } from '../../../utils/constant';

const PaymentForm = () => {
    const [selectedPlan, setSelectedPlan] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [paymentDate, setPaymentDate] = useState('');
    const [paymentTime, setPaymentTime] = useState('');
    const [stateMessage, setStateMessage] = useState('');

    const handlePlanChange = (e) => {
        setSelectedPlan(e.target.value);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'userEmail') {
            setUserEmail(value);
        } else if (name === 'paymentDate') {
            setPaymentDate(value);
        } else if (name === 'paymentTime') {
            setPaymentTime(value);
        }
    };

    const handlePayment = () => {
        if (!selectedPlan) {
            alert('Please select a plan before making payment!');
            return;
        }

        if (!userEmail || !paymentDate || !paymentTime) {
            alert('Please fill in all payment details!');
            return;
        }

        // Simulate API call to send the payment details
        alert(`Payment initiated for the ${selectedPlan} plan.`);

        // Send confirmation email (simulated)
        axios
            .post('https://your-api-endpoint.com/send-email', {
                email: userEmail,
                plan: selectedPlan,
                date: paymentDate,
                time: paymentTime,
            })
            .then(() => {
                setStateMessage('Payment successful! Confirmation email sent to user.');
                console.log('Payment and email details sent:', { userEmail, selectedPlan, paymentDate, paymentTime });
            })
            .catch(() => {
                setStateMessage('Payment successful but failed to send confirmation email.');
            });

        // Update payment details in the database
        axios.put(`${baseURL}/api/updatePaymnet/${userEmail}`, {
            selectedPlan,
            paymentDate,
        }).then((res) => {
            if (res.data.status === 'success') {
                console.log('Payment details updated successfully: ', res.data);
            }
        })
            .catch((err) => {
                console.error('Error updating payment details: ', err);
            });
    };

    return (
        <main className="flex-grow">
            <h2 className="text-2xl font-bold mb-4 md:text-center md:text-4xl p-1 rounded">
                Make a Payment
            </h2>
            <div className="font-mono p-6">


                {/* Dropdown for Plan Selection */}
                <div className="mb-4">

                    <select
                        value={selectedPlan}
                        onChange={handlePlanChange}
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500"
                    >
                        <option value="">Select Plan</option>
                        <option value="1-month">1 Month Plan - LKR 3,000</option>
                        <option value="3-months">3 Months Plan - LKR 8,000</option>
                        <option value="6-months">6 Months Plan - LKR 15,000</option>
                        <option value="annual">Annual Plan - LKR 25,000</option>
                    </select>
                </div>

                <form className="space-y-4">
                    {/* User Email */}
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="userEmail"
                            value={userEmail}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Payment Date and Time */}
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <div className="flex-1">
                            <label className="block text-gray-700">Payment Date</label>
                            <input
                                type="date"
                                name="paymentDate"
                                value={paymentDate}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-gray-700">Payment Time</label>
                            <input
                                type="time"
                                name="paymentTime"
                                value={paymentTime}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                    </div>

                    {/* State Message */}
                    {stateMessage && (
                        <p className="text-green-500 text-sm text-center">{stateMessage}</p>
                    )}

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="button"
                            className="w-full bg-gray-500 text-white p-2 rounded hover:bg-gray-600 transition duration-300"
                            onClick={handlePayment}
                        >
                            Pay Now
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default PaymentForm;
