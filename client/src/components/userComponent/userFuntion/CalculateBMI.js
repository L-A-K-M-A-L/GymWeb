import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CalculateBMI = () => {
    const [height, setHeight] = useState(''); 
    const [weight, setWeight] = useState(''); 
    const [bmi, setBmi] = useState(0); 
    const [bmiPercentage, setBmiPercentage] = useState(0); 
    const [bmiRange, setBmiRange] = useState(''); 

    
    const calculateBMI = () => {
        if (height && weight) {
            const heightInMeters = height / 100; 
            const calculatedBmi = (weight / (heightInMeters ** 2)).toFixed(2);
            setBmi(calculatedBmi);

        
            const bmiVal = parseFloat(calculatedBmi);
            let percentage = 0;

            if (bmiVal < 18.5) {
                percentage = (bmiVal / 18.5) * 50;
                setBmiRange("Underweight: You should aim to gain weight through a balanced diet and exercise.");
            } else if (bmiVal >= 18.5 && bmiVal < 25) {
                percentage = ((bmiVal - 18.5) / 6.5) * 50 + 50; 
                setBmiRange("Normal: Great! Maintain your healthy lifestyle to stay in this range.");
            } else if (bmiVal >= 25 && bmiVal < 30) {
                percentage = ((bmiVal - 25) / 5) * 50 + 100;
                setBmiRange("Overweight: Consider exercising more and following a healthier diet.");
            } else {
                percentage = 150; 
                setBmiRange("Obese: You should consult a healthcare provider for a tailored weight loss plan.");
            }

            setBmiPercentage(percentage);
        }
    };

    useEffect(() => {
       
        if (!bmi) {
            setBmiPercentage(0);
            setBmiRange("Please enter your height and weight to calculate your BMI.");
        }
    }, [bmi]);

    return (
        <div className="min-h-screen p-8">

            
            <section className="bg-gray-200 shadow-md rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">BMI Calculator</h2>
                <div className="flex flex-col space-y-4">
                    <div>
                        <label className="block text-gray-700">Height (in cm):</label>
                        <input
                            type="number"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Weight (in kg):</label>
                        <input
                            type="number"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <button
                        onClick={calculateBMI}
                        className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4"
                    >
                        Calculate BMI
                    </button>

                    {bmi === 0 ? "" : bmi && (
                        <div className="mt-6 text-center">
                            <p className="text-lg font-bold">Current BMI: {bmi}</p>
                        </div>
                    )}
                </div>
            </section>

           
            <section className="bg-gray-200 shadow-md rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">BMI Progress</h2>
                <div className="flex justify-center">
                    <div style={{ width: 200, height: 200 }}>
                        <CircularProgressbar
                            value={bmiPercentage}
                            text={`${bmi}%`}
                            styles={buildStyles({
                                pathColor: 
                                    bmiPercentage < 50 ? '#FFA500' : 
                                    bmiPercentage < 100 ? '#4CAF50' : 
                                    bmiPercentage < 150 ? '#FF6347' : '#8B0000', 
                                textColor: '#333',
                                trailColor: '#e0e0e0',
                                strokeLinecap: 'round',
                            })}
                            initialAnimation={true}
                            animationDuration={1500} 
                        />
                    </div>
                </div>


                <div className="mt-4 text-center">
                    <p className="text-lg font-semibold">{bmiRange}</p>
                </div>
            </section>
        </div>
    );
};

export default CalculateBMI;
