// WorkoutPlan.js
import React from 'react';

const WorkoutPlan = () => {
  return (
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
      <div className='flex flex-col md:flex-row justify-evenly items-center gap-4'>
        <div className='border p-6 rounded bg-white shadow-md w-full md:w-1/2'>
          <h3 className='text-xl font-bold mb-4 text-center'>Instructor Details</h3>
          <ul className='list-none space-y-2'>
            <li><strong>Name:</strong> John Doe</li>
            <li><strong>Contact Number:</strong> +94 123 456 789</li>
            <li><strong>Email:</strong> john.doe@example.com</li>
          </ul>
        </div>
        <div className='border p-6 rounded bg-white shadow-md w-full md:w-1/2'>
          <h3 className='text-xl font-bold mb-4 text-center'>Your Details</h3>
          <ul className='list-none space-y-2'>
            <li><strong>Name:</strong> John Doe</li>
            <li><strong>Contact Number:</strong> +94 123 456 789</li>
            <li><strong>Email:</strong> john.doe@example.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPlan;