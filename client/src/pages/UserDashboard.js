import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import UserHeader from '../components/userComponent/UserHeader';
import UserDetails from '../components/userComponent/UserDetails';
import axios from 'axios';
import { baseURL } from '../utils/constant';

const UserDashboard = () => {
    const [firstName, setFirstName] = useState('Guest');

    const navigate = useNavigate();

    useEffect(() => {
        const userEmail = localStorage.getItem('userEmail'); // Get the email from localStorage

        if (!userEmail) {
            navigate('/login');
            return;
        }

        axios
            .post(`${baseURL}/api/getUserDetails`, { email: userEmail })
            .then(response => {
                if (response.status === 200) {
                    setFirstName(response.data.user.firstName);
                } else {
                    navigate('/login');
                }
            })
            .catch(err => {
                console.error('Error fetching user details:', err);
                navigate('/login');
            });
    }, [navigate]);

    return (
        <>
            <div className="flex flex-col min-h-screen font-mono mt-8">
                <UserHeader />
                <main className="flex-grow md:py-10 px-4 m-4 md:px-24 bg-gradient-to-br from-gray-200 via-indigo-100 to-gray-200 shadow-lg rounded md:mt-24">
                    <div className="text-xl mb-8">
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-red-100 to-black-500">
                            HELLO <span className="text-4xl ml-1">{firstName}!</span>
                        </p>
                        <hr className="mt-4 border-gray-500" />
                    </div>

                    <UserDetails />
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>

        </>
    );
};

export default UserDashboard;
