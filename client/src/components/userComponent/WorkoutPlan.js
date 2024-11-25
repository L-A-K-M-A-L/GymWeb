// WorkoutPlan.js
import React, { useState, useEffect } from 'react';
import UserHeader from './UserHeader';
import Footer from '../Footer';
import axios from 'axios';
import { baseURL } from '../../utils/constant';
import { useNavigate } from 'react-router-dom';

const WorkoutPlan = () => {

  const [firstName, setFirstName] = useState('Guest');

  const navigate = useNavigate();

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail'); // Get the email from localStorage

    if (!userEmail) {
      navigate('/login');
      return;
    }

    axios
      .post(`${baseURL}/api/getUserDetails`, { email: userEmail })
      .then(response => {
        if (response.status === 200) {
          setFirstName(response.data.user.firstName);
        } else {
          navigate('/login');
        }
      })
      .catch(err => {
        console.error('Error fetching user details:', err);
        navigate('/login');
      });
  }, [navigate]);
  return (
    <>
      <div className='flex flex-col min-h-screen font-mono mt-8'>
        <UserHeader />
        <main className='flex-grow mt-5 p-8 md:p-10 px-4 md:px-20 bg-gradient-to-br from-gray-200 via-indigo-100 to-gray-200 shadow-lg m-4 md:mt-24 rounded'>
          <div className="text-xl mb-8">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-red-100 to-black-500">
              HELLO <span className="text-4xl ml-1">{firstName}!</span>
            </p>
            <hr className="mt-4 border-gray-500" />
          </div>

          <div className='p-6 rounded-lg'>
            <h2 className='text-xl md:text-4xl text-center text-slate-600 font-bold mb-4'>Your Workout Plan</h2>
            <p className='mb-4 text-sm md:text-base'>Here you can see your workout plan provided by your instructor.</p>


            <div className='p-6'>
              <h3 className='text-xl font-bold text-slate-600 mb-2'>Workout Plan Details</h3>
              <ul className='list-disc list-inside text-slate-700 text-sm md:text-base'>
                <li>Monday: Cardio</li>
                <li>Tuesday: Strength Training</li>
                <li>Wednesday: Yoga</li>
                <li>Thursday: HIIT</li>
                <li>Friday: Rest</li>
                <li>Saturday: Full Body Workout</li>
                <li>Sunday: Rest</li>
              </ul>
            </div>
          </div>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default WorkoutPlan;


