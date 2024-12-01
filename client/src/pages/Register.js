import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { baseURL } from '../utils/constant';
import axios from 'axios';
import CustomHeaders from '../components/CustomHeader';
import Footer from '../components/Footer';

const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [stateMessage, setStateMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== rePassword) {
      setStateMessage("Passwords don't match");
      setPassword('');
      setRePassword('');
    } else {
      try {
        const response = await axios.post(`${baseURL}/api/register`, {
          firstName,
          lastName,
          email,
          password
        });

        const data = response.data;

        if (data.status === 'success') {
          alert('Registration Successful!');
          navigate('/login');
        } else {
          setStateMessage(data.message || 'Registration failed');
        }
      } catch (err) {
        console.error('Registration Failed:', err.response?.data?.message || err.message);
        setStateMessage('Registration Failed: ' + (err.response?.data?.message || err.message));
      }
    }
  };

  return (
    <>
      <CustomHeaders />

      <div className="flex flex-col h-screen">
        <div className="flex-grow bg-gray-200 dark:bg-gray-900 py-10 flex items-center justify-center">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-r-md">
              <img src='/images/logo.png' alt='LOGO' className='w-full h-full rounded-l' />
            </div>
            <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
              <h3 className="py-4 text-5xl text-center text-slate-600 dark:text-white">Join with Us Today!</h3>
              <form onSubmit={handleRegister} className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
                <div className="mb-4 flex flex-wrap gap-4">
                  <div className="w-full">
                    <label className="block mb-2 text-md font-bold text-slate-500 dark:text-white" htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-md leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="First Name"
                      required
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                    />
                  </div>

                  <div className="w-full">
                    <label className="block mb-2 text-md font-bold text-slate-500 dark:text-white" htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-md leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Last Name"
                      required
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                    />
                  </div>

                  <div className="w-full">
                    <label className="block mb-2 text-md font-bold text-slate-500 dark:text-white" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full px-3 py-2 text-md leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="email"
                      placeholder="Email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="w-full">
                    <label className="block mb-2 text-md font-bold text-slate-500 dark:text-white" htmlFor="password">
                      Password
                    </label>
                    <input
                      className="w-full px-3 py-2 text-md leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="password"
                      required
                      placeholder="******************"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="w-full">
                    <label className="block mb-2 text-md font-bold text-slate-500 dark:text-white" htmlFor="confirmPassword">
                      Confirm Password
                    </label>
                    <input
                      className="w-full px-3 py-2 text-md leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="password"
                      placeholder="******************"
                      required
                      value={rePassword}
                      onChange={e => setRePassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-4 text-center">
                  <p className="text-xs italic text-red-500">{stateMessage}</p>
                </div>

                <div className="mb-6 text-center">
                  <input
                    className="w-full px-4 py-2 hover:cursor-pointer text-black bg-gradient-to-r from-blue-200 to-gray-400 rounded-full shadow-md hover:from-blue-300 hover:to-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 transition-all duration-300 ease-in-out"
                    type="submit"
                    value="Register Account"
                  />
                </div>

                <hr className="mb-4 border-t" />

                <div className="text-center">
                  <Link
                    to="/login"
                    className="inline-block text-sm text-slate-500 dark:text-white align-baseline">
                    Already have an account?
                    <span className="text-indigo-500 font-bold underline transition duration-100 hover:text-indigo-300 ml-2">
                      Login Now!
                    </span>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Register;
