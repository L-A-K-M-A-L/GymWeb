// UserDashboard.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/userComponent/UserHeader';
import WorkoutPlan from "../components/userComponent/WorkoutPlan"
import PaymentForm from '../components/userComponent/Payment';


const UserDashboard = () => {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [view, setView] = useState('workout'); // 'workout' or 'payment'

  const [firstName, setFirstName] = useState('Guest');

  const navigate = useNavigate();

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  const handlePayment = () => {
    // Handle payment logic here
    console.log(`Selected Plan: ${selectedPlan}`);
  };

  const toggleView = () => {
    setView(view === 'workout' ? 'payment' : 'workout');
  };



  return (
    <>
      <div className='flex flex-col min-h-screen font-mono bg-slate-400'>
        <Header />
        <main className='flex-grow py-32 px-4 md:px-20'>
          <div className='text-xl text-white mb-8'>
            HELLO <span className='text-3xl text-white ml-1'>{firstName}!</span>
            <hr className='mt-2' />
          </div>
          <div className='flex justify-end mb-4'>
            <button
              className='bg-gray-500 text-white p-2 rounded hover:bg-gray-600 transition duration-300'
              onClick={toggleView}
            >
              {view === 'workout' ? 'Make a Payment' : 'View Workout Plan'}
            </button>
          </div>
          {view === 'workout' ? (
            <WorkoutPlan />
          ) : (
            <PaymentForm
              selectedPlan={selectedPlan}
              handlePlanChange={handlePlanChange}
              handlePayment={handlePayment}
            />
          )}
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default UserDashboard;