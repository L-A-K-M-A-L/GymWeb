import React from 'react';
import CalculateBMI from '../userFuntion/CalculateBMI';
import GrawthChart from '../userFuntion/GrawthChart';
import UserDetails from './UserDetails';

const UserStat = () => {
  return (
    <div className="min-h-screen p-8">

      <div className="flex flex-col sm:flex-row gap-8">

        
        <div className="sm:w-1/2 w-full bg-gray-200 shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Calculate BMI</h2>
          <CalculateBMI />
        </div>

      
        <div className="sm:w-1/2 w-full bg-gray-200 shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Your Details</h2>
          <UserDetails />  
        </div>

      </div>

    </div>
  );
};

export default UserStat;
