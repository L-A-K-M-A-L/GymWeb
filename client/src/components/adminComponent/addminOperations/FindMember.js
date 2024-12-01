import axios from 'axios';
import React, { useState } from 'react';
import { baseURL } from '../../../utils/constant';

const FindMember = () => {
  const [email, setEmail] = useState('');
  const [memberData, setMemberData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = () => {
    if (!email.trim()) {
      setError('Please enter a valid email');
      return;
    }

    axios
      .get(`${baseURL}/api/getMember/${email}`)
      .then((response) => {
        if (response.data.status === 'success') {
          setMemberData(response.data.member);
          setError(''); 
        }
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setError(
          error.response?.data?.message || 
          'An error occurred while fetching the member data'
        );
        setMemberData(null);
      });
  };

  return (
    <div className="p-5">

      <div className="flex flex-row gap-2">
        <input
          type="text"
          placeholder="Search Member by Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <button
          className="bg-gray-300 hover:bg-slate-500 text-white p-2 rounded-md"
          onClick={handleSearch}
        >
          <img
            src="https://img.icons8.com/material-outlined/24/000000/search--v1.png"
            alt="search"
          />
        </button>
      </div>

    
      {error && (
        <div className="text-red-500 mt-3">{error}</div>
      )}


      {memberData && (
        <div className="mt-5 p-4 border rounded-lg bg-gray-100">
          <h2 className="text-lg font-bold mb-3">Member Details</h2>
          <p>
            <strong>Email:</strong> {memberData.email || 'N/A'}
          </p>
          <p>
            <strong>Phone:</strong> {memberData.phone || 'N/A'}
          </p>
          <p>
            <strong>Membership:</strong> {memberData.membership || 'N/A'}
          </p>
          <p>
            <strong>Activation Date:</strong> {memberData.planActivateDate || 'N/A'}
          </p>
        </div>
      )}
    </div>
  );
};

export default FindMember;
