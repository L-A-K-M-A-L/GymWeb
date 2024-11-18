import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components of Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const AdminBody = () => {
  // Static data for statistics
  const stats = {
    users: 1500, // Example total number of users
    netGrowth: 20, // Example net growth percentage
    monthlyIncome: 10000 // Example monthly income in USD
  };

  // Line chart data
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'], // X-axis labels
    datasets: [
      {
        label: 'Monthly Income (USD)',
        data: [8000, 8500, 9000, stats.monthlyIncome], // Data for line chart
        fill: false,
        borderColor: '#4C51BF', // Line color
        tension: 0.1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-900">Admin Dashboard</h1>

        {/* Dashboard Cards or Widgets */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Total Users Card */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
            <p className="mt-2 text-gray-500">{stats.users} users</p>
          </div>

          {/* Net Growth Card */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-700">Net Growth</h3>
            <p className="mt-2 text-gray-500">{stats.netGrowth}% growth this month</p>
          </div>

          {/* Monthly Income Card */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-700">Monthly Income</h3>
            <p className="mt-2 text-gray-500">${stats.monthlyIncome} USD</p>
          </div>
        </div>

        {/* Line Chart for Monthly Income */}
        <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Income Growth Over the Month</h3>
          <Line data={data} options={options} />
        </div>
      </div>
    </>
  );
};

export default AdminBody;
