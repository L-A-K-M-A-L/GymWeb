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
                    setFirstName(response.data.user.firstName); // Set firstName from the response
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
            <div className="flex flex-col min-h-screen font-mono bg-slate-400">
                <UserHeader />
                <main className="flex-grow py-10 md:py-32 px-4 md:px-20">
                    <div className="text-xl text-white mb-8">
                        HELLO <span className="text-3xl text-white ml-1">{firstName}!</span>
                        <hr className="mt-2" />
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
