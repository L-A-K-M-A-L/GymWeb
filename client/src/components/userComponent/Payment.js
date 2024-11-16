import React from 'react';

const PaymentForm = ({ selectedPlan, handlePlanChange, handlePayment }) => {
    return (
        <>
            <div className='bg-gray-300 p-6 font-mono  rounded-lg shadow-md'>
            <h2 className='md:text-4xl text-2xl font-mono md:text-center font-bold mb-4'>Select Your Gym Plan</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div
                    className={`p-4 border rounded-lg cursor-pointer hover:shadow-lg hover:bg-slate-400 transition duration-300 ${selectedPlan === '1-month' ? 'border-gray-700' : ''}`}
                    onClick={() => handlePlanChange('1-month')}
                >
                    <img src="/images/1month.png" alt="1 Month Plan" className='w-full h-32 object-contain mb-2 rounded' />
                    <h3 className='text-xl font-bold'>1 Month Plan</h3>
                    <p className='text-gray-700'>LKR: 3,000</p>
                </div>
                <div
                    className={`p-4 border rounded-lg cursor-pointer hover:shadow-lg hover:bg-slate-400 transition duration-300 ${selectedPlan === '3-months' ? 'border-gray-700' : ''}`}
                    onClick={() => handlePlanChange('3-months')}
                >
                    <img src="/images/3months.png" alt="3 Months Plan" className='w-full h-32 object-contain mb-2 rounded' />
                    <h3 className='text-xl font-bold'>3 Months Plan</h3>
                    <p className='text-gray-700'>LKR: 8,000</p>
                </div>
                <div
                    className={`p-4 border rounded-lg cursor-pointer hover:bg-slate-400 hover:shadow-lg transition duration-300 ${selectedPlan === '6-months' ? 'border-boder-700' : ''}`}
                    onClick={() => handlePlanChange('6-months')}
                >
                    <img src="/images/6.png" alt="6 Months Plan" className='w-full h-32 object-contain mb-2 rounded' />
                    <h3 className='text-xl font-bold'>6 Months Plan</h3>
                    <p className='text-gray-700'>LKR: 15,000</p>
                </div>
                <div
                    className={`p-4 border rounded-lg cursor-pointer hover:shadow-lg hover:bg-slate-400 transition duration-300 ${selectedPlan === 'annual' ? 'border-gray-700' : ''}`}
                    onClick={() => handlePlanChange('annual')}
                >
                    <img src="/images/bg.png" alt="Annual Plan" className='w-full h-32 object-contain mb-2 rounded' />
                    <h3 className='text-xl font-bold'>Annual Plan</h3>
                    <p className='text-gray-700'>LKR: 25,000</p>
                </div>
            </div>
            <h2 className='text-2xl font-bold mb-4 mt-8 md:text-center md:text-4xl p-1 rounded'>Payment Details</h2>
            <form className='space-y-4'>
                <div>
                    <label className='block text-gray-700'>Card Number</label>
                    <input type='text' className='w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500' placeholder='1234 5678 9012 3456' />
                </div>
                <div className='flex space-x-4'>
                    <div className='flex-1'>
                        <label className='block text-gray-700'>Expiry Date</label>
                        <input type='text' className='w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500' placeholder='MM/YY' />
                    </div>
                    <div className='flex-1'>
                        <label className='block text-gray-700'>CVV</label>
                        <input type='text' className='w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500' placeholder='123' />
                    </div>
                </div>
                <div>
                    <label className='block text-gray-700'>Cardholder Name</label>
                    <input type='text' className='w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500' placeholder='John Doe' />
                </div>
                <button
                    type='button'
                    className='w-full bg-gray-500 text-white p-2 rounded hover:bg-gray-600 transition duration-300'
                    onClick={handlePayment}
                >
                    Pay Now
                </button>
            </form>
        </div> 
        </>
    );
};

export default PaymentForm;