// WorkoutPlan.js
import React,{ useState } from 'react';
import UserHeader from './UserHeader';
import Footer from '../Footer';

const WorkoutPlan = () => {
  
  const [firstName, setFirstName] = useState('Guest');
  
  return (
    <>
      <div className='flex flex-col min-h-screen font-mono bg-slate-400'>
        <UserHeader />
        <main className='flex-grow py-32 px-4 md:px-20'>
          <div className='text-xl text-white mb-8'>
            HELLO <span className='text-3xl text-white ml-1'>{firstName}!</span>
            <hr className='mt-2' />
          </div>
          <div className='bg-slate-300 p-6 rounded-lg shadow-md'>
            <h2 className='text-xl md:text-4xl text-center font-bold mb-4'>Your Workout Plan</h2>
            <p className='mb-4'>Here you can see your workout plan provided by your instructor.</p>
            <div className='border p-4 rounded mb-4 bg-white shadow'>
              <h3 className='text-xl font-bold mb-2'>Workout Plan Details</h3>
              <ul className='list-disc list-inside'>
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


