import React from 'react';

const UserDetails = () => {
    return (
        <>
            <div className="flex flex-col gap-6 p-6 bg-gray-100">
                 {/* User Details Box */}
                 <div className="border p-6 rounded-lg bg-white shadow-lg w-full">
                    <h3 className="text-2xl font-bold mb-4 text-center text-indigo-600">
                        Your Details
                    </h3>
                    <ul className="list-none space-y-3 text-gray-700">
                        <li><strong className="font-medium">Name:</strong> John Doe</li>
                        <li><strong className="font-medium">Contact Number:</strong> +94 123 456 789</li>
                        <li><strong className="font-medium">Email:</strong> john.doe@example.com</li>
                        <li><strong className="font-medium">Membership:</strong> Monthly</li>
                    </ul>
                </div>
                {/* Instructor Details Box */}
                <div className="border p-6 rounded-lg bg-white shadow-lg w-full">
                    <h3 className="text-2xl font-bold mb-4 text-center text-indigo-600">
                        Instructor Details
                    </h3>
                    <ul className="list-none space-y-3 text-gray-700">
                        <li><strong className="font-medium">Name:</strong> John Doe</li>
                        <li><strong className="font-medium">Contact Number:</strong> +94 123 456 789</li>
                        <li><strong className="font-medium">Email:</strong> john.doe@example.com</li>
                    </ul>
                </div>

               
            </div>
        </>
    );
};

export default UserDetails;
