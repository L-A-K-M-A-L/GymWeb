import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import UserHeader from '../components/userComponent/UserHeader';
import axios from 'axios';
import { baseURL } from '../utils/constant';
import UserName from '../components/userComponent/UserName';
import UserStat from '../components/userComponent/userPages/UserStat';

const UserDashboard = () => {
    const [firstName, setFirstName] = useState('Guest');

    const navigate = useNavigate();

    useEffect(() => {
        const userEmail = localStorage.getItem('userEmail'); 

        if (!userEmail) {
            navigate('/login');
            return;
        }

        axios
            .post(`${baseURL}/api/getUserDetails`, { email: userEmail })
            .then(response => {
                if (response.status === 200) {
                    
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
                <main className="flex-grow md:py-10 px-4 m-4 md:px-24 shadow-lg rounded md:mt-24">
                    <UserName />
                    <UserStat />
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>

        </>
    );
};

export default UserDashboard;
