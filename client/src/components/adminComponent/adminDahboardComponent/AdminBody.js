import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseURL } from '../../../utils/constant';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';


// Register the components of Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const AdminBody = () => {
  const [users, setUsers] = useState(120);
  const [members, setMembers] = useState(50);

  useEffect(() => {
    
    axios.get(`${baseURL}/api/getAllUser`)
      .then((response) => {
        setUsers(response.data.count);
      
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });

      axios.get(`${baseURL}/api/getAllMember`)
      .then((response) => {
        setMembers(response.data.count);
      
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });

    
    setUsers(120);
    setMembers(50);
  }, []);
  
  

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-900">Admin Dashboard</h1>

        {/* Dashboard Cards or Widgets */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Total Users Card */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-700">TOTAL USERS</h3>
            <p className="mt-2 text-gray-500">{users} Users</p>
          </div>

          {/* Net Growth Card */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-700">TOTAL MEMBERS</h3>
            <p className="mt-2 text-gray-500">{members} Members</p>
          </div>

          {/* Monthly Income Card */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-700">Monthly Income</h3>
            <p className="mt-2 text-gray-500">USD</p>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default AdminBody;
