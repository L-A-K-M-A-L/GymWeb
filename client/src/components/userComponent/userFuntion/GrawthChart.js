import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const UserDetails = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState(null);

    // Sample monthly workout data (workouts completed and calories burned)
    const monthlyData = [
        { month: 'Jan', workoutsCompleted: 10, caloriesBurned: 800 },
        { month: 'Feb', workoutsCompleted: 12, caloriesBurned: 950 },
        { month: 'Mar', workoutsCompleted: 15, caloriesBurned: 1200 },
        { month: 'Apr', workoutsCompleted: 18, caloriesBurned: 1500 },
        { month: 'May', workoutsCompleted: 20, caloriesBurned: 1600 },
        { month: 'Jun', workoutsCompleted: 25, caloriesBurned: 1800 },
        { month: 'Jul', workoutsCompleted: 28, caloriesBurned: 2000 },
    ];

    // Chart data setup
    const chartData = {
        labels: monthlyData.map(data => data.month), // months
        datasets: [
            {
                label: 'Workouts Completed',
                data: monthlyData.map(data => data.workoutsCompleted), // workouts count
                borderColor: '#4CAF50',
                backgroundColor: 'rgba(76, 175, 80, 0.2)',
                fill: true,
                tension: 0.3,
            },
            {
                label: 'Calories Burned',
                data: monthlyData.map(data => data.caloriesBurned), // calories burned
                borderColor: '#FF6347',
                backgroundColor: 'rgba(255, 99, 71, 0.2)',
                fill: true,
                tension: 0.3,
            },
        ],
    };

    return (
        <div className="min-h-screen p-8">

            {/* BMI Calculator and other sections */}

            {/* Workout Growth Chart */}
            <section className="bg-gray-200 shadow-md rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Workout Growth</h2>
                <div className="flex justify-center">
                    <div style={{ width: '80%', height: '400px' }}>
                        <Line data={chartData} />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default UserDetails;
