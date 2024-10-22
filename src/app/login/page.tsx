'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import login from '@/assets/images/login.png';
import Link from 'next/link';
import { useRouter } from 'next/navigation';



function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const navigate=useRouter()

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();
      const token = data.token; // Assuming your API returns a token
      localStorage.setItem('token', token); // Store token in localStorage

      setMessage('Login successful!');
      setShowMessage(true); // Show success message

      // Hide message and reset form after 3 seconds
      setTimeout(() => {
        resetForm();
        navigate.push('/')
        setShowMessage(false);
      }, 3000);
    } catch (error:any) {
      setMessage(`Error: ${error.message}`);
      setShowMessage(true); // Show error message

      // Hide message after 3 seconds
      setTimeout(() => setShowMessage(false), 3000);
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div className="relative bg-[#806044] w-full h-screen flex items-center justify-center">
      {/* Background Image */}
      <Image
        src={login}
        layout="fill"
        objectFit="cover"
        alt="login"
        className="absolute z-0"
      />

      {/* Main content */}
      <div className="relative z-10 w-[90%] max-w-[1200px] p-6 sm:p-10 md:p-16 lg:p-20 bg-opacity-90 rounded-xl flex flex-col md:flex-row">
        {/* Left side: Branding and Information */}
        <div className="w-full md:w-[50%] text-white p-6 md:p-10 flex flex-col items-start justify-around">
          <div className="text-3xl sm:text-4xl font-serif font-bold mb-4">
            <h1>BookShala</h1>
          </div>
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4">Login</h1>
            <p className="text-base sm:text-lg md:text-xl font-light">
              If you don't have an account, <br /> click on{' '}
              <Link href={'/signup'}>
                <span className="font-bold text-yellow-300">Sign Up</span>
              </Link>
            </p>
          </div>
        </div>

        {/* Right side: Sign-in Form */}
        <div className="w-full md:w-[50%] p-6 bg-white bg-opacity-80 rounded-lg shadow-lg mt-6 md:mt-0">
          <div className="text-center mb-6">
            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">Sign In</h1>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
            <div>
              <label
                htmlFor="email"
                className="block text-base sm:text-lg font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#806044] focus:border-[#806044] text-gray-900"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-base sm:text-lg font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#806044] focus:border-[#806044] text-gray-900"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Forgot Password Link */}
            <div className="flex justify-end">
              <Link href="/forgot-password">
                <span className="text-sm text-[#806044] font-semibold hover:underline">Forgot Password?</span>
              </Link>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full px-4 py-2 sm:px-6 sm:py-3 bg-[#806044] text-white font-bold rounded-lg hover:bg-[#6e5036] focus:outline-none focus:ring-2 focus:ring-[#6e5036] transition duration-300 ease-in-out"
              >
                Sign In
              </button>
            </div>
          </form>

          {/* Notification Message */}
          {showMessage && (
            <div className={`fixed bottom-0 left-0 w-[300px] p-4 mx-auto flex items-center justify-between 
              ${message.includes('Error') ? 'bg-red-100 border-t-4 border-red-500 text-red-700' : 'bg-green-100 border-t-4 border-green-500 text-green-700'} 
              shadow-md rounded transition-transform transform translate-y-0`}
            >
              <div className="flex items-center">
                <span>{message}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
