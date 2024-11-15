import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { baseURL } from '../utils/constant';
import axios from 'axios';


const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [stateMessage, setStateMessage] = useState('');

// below both function are correect but axios are better
  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //   if (password !== rePassword) {
  //     setStateMessage("Passwords don't match");
  //   } else {

  //     try {
  //       const res = await fetch(`${baseURL}/api/register`, {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(
  //           {
  //             firstName,
  //             lastName,
  //             email,
  //             password
  //           })
  //       });

  //       const data = await res.json();

  //       if (data.status === 'success') {
  //         alert('Registration Successful!');
  //         localStorage.setItem('userToken', data.token);
  //         console.log(data.token)

  //         // Add a small delay before redirecting to allow the toast to display
  //         setTimeout(() => {
  //           navigate('/login');
  //         }, 500);
  //       } else {
  //         setStateMessage(data.message || 'Registration failed');
  //       }
  //     } catch (err) {
  //       setStateMessage('An error occurred. Please try again.');
  //     }
  //   }
  // }

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
  
        // Access the response data directly
        const data = response.data;
  
        if (data.status === 'success') {
          alert('Registration Successful!');
          localStorage.setItem('userToken', data.token);
          console.log(data.token);
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
      <div className="h-full bg-gray-400 dark:bg-gray-900">
        <div className="mx-auto">
          <div className="flex justify-center px-6 py-12">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              <div
                className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-r-md">
                <img src='/images/logo.png' alt='LOGO' className='w-full h-full rounded-l' />
              </div>
              <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                <h3 className="py-4 text-4xl text-center text-slate-400 dark:text-white">Join with Us Today!</h3>
                <form
                  onSubmit={handleRegister}
                  className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
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
                    <div className="md:ml-2">
                      <label className="block mb-2 text-md font-bold text-slate-500 dark:text-white" htmlFor="lastName">
                        Last Name
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Last Name"
                        required
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-md font-bold text-slate-500 dark:text-white" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="email"
                      placeholder="Email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label className="block mb-2 text-md font-bold text-slate-500 dark:text-white" htmlFor="password">
                        Password
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        type="password"
                        required
                        placeholder="******************"
                        value={password}
                        onChange={e => setPassword(e.target.value)}

                      />

                    </div>
                    <div className="md:ml-2">
                      <label className="block mb-2 text-md font-bold text-slate-500 dark:text-white" htmlFor="c_password">
                        Confirm Password
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        type="password"
                        placeholder="******************"
                        required
                        value={rePassword}
                        onChange={e => setRePassword(e.target.value)}
                      />
                    </div>

                  </div>
                  <div className='mb-4 text-center'>
                    <p className="text-xs italic text-red-500">{stateMessage}</p>
                  </div>
                  <div className="mb-6 text-center">
                    <input
                      className="w-full px-4 py-2 text-white bg-indigo-500 rounded-full hover:bg-indigo-300 dark:text-white focus:outline-none focus:shadow-outline transition duration-100"
                      type="submit"
                      value='Register Account'
                    />

                  </div>
                  <hr className="mb-6 border-t" />
                  <div className="text-center">
                    <Link
                      to="/login"
                      className="inline-block text-sm text-slate-500 dark:text-white align-baseline">
                      Already have an account ?
                      <span className='text-indigo-500 font-bold underline transition duration-100 hover:text-indigo-300 ml-2'>
                        Login Now!
                      </span>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register