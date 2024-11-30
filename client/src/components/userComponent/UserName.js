import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { baseURL } from '../../utils/constant';

const UserName = () => {

    const [firstName, setFirstName] = useState('Guest');

    useEffect(() => {
        const userEmail = localStorage.getItem('userEmail');
        axios.post(`${baseURL}/api/getUserDetails`, { email: userEmail })
            .then(response => {
                if (response.status === 200) {
                    setFirstName(response.data.user.firstName);
                } else {
                    setFirstName('Guest');
                }
            })
            .catch(err => {
                console.error('Error fetching user details:', err);
            });
    }, []);

    return (
        <>
            <div className="text-xl mb-8">
                <p className="text-gray-600">
                    HELLO <span className="text-4xl ml-1">{firstName}!</span>
                </p>
                <hr className="mt-4 border-gray-500" />
            </div>
        </>
    )
}

export default UserName