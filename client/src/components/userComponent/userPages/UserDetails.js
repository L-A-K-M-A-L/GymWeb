import React, { useState, useEffect } from 'react';

const UserDetails = () => {
  const [firstName, setFirstName] = useState('Guest');
  const [lastName, setLastName] = useState('User');
  const [age, setAge] = useState(0);
  const [mobile, setMobile] = useState('');
  const [monthlyPlan, setMonthlyPlan] = useState('');
  const [planActivateDate, setPlanActivateDate] = useState('');
  const [planExpirationDate, setPlanExpirationDate] = useState('');
  const [membershipStatus, setMembershipStatus] = useState('');
  
  
   

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">User Details</h1>
      <div className="space-y-4">
        <div>
          <p className="text-gray-700">
            <span className="font-semibold">Full Name:</span> {firstName +" " + lastName|| "N/A"}
          </p>
        </div>
        <div>
          <p className="text-gray-700">
            <span className="font-semibold">Age:</span> {age || "N/A"}
          </p>
        </div>
        <div>
          <p className="text-gray-700">
            <span className="font-semibold">Mobile Number:</span> {mobile || "N/A"}
          </p>
        </div>
        <div>
          <p className="text-gray-700">
            <span className="font-semibold">Monthly Plan:</span> {monthlyPlan || "N/A"}
          </p>
        </div>
        <div>
          <p className="text-gray-700">
            <span className="font-semibold">Plan Activate Date:</span> {planActivateDate || "N/A"}
          </p>
        </div>
        <div>
          <p className="text-gray-700">
            <span className="font-semibold">Plan Expiration Date:</span> {planExpirationDate || "N/A"}
          </p>
        </div>
        <div>
          <p className="text-gray-700">
            <span className="font-semibold">Membership Status:</span> {membershipStatus || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
