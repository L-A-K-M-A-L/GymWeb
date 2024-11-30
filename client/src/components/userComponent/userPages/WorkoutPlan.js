// WorkoutPlan.js
import React, { useState, useEffect } from 'react';
import UserHeader from '../UserHeader';
import Footer from '../../Footer';
import axios from 'axios';
import { baseURL } from '../../../utils/constant';
import { useNavigate } from 'react-router-dom';
import UserName from '../UserName';

const WorkoutPlan = () => {

  const [firstName, setFirstName] = useState('Guest');

  const navigate = useNavigate();

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail'); // Get the email from localStorage

    if (!userEmail) {
      navigate('/login');
      return;
    }
  }, []);


  return (
    <>
      <div className='flex flex-col min-h-screen font-mono mt-8'>
        <UserHeader />
        <main className='flex-grow mt-5 p-8 md:p-10 px-4 md:px-20 hadow-lg m-4 md:mt-24 rounded'>
          <UserName />

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


