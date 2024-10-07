import Image from 'next/image';
import React from 'react';
import login from '@/assets/images/login.png';
import Link from 'next/link';

function Page() {
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
              If you don't have an account, <br /> click on <Link href={'/signup'}><span className="font-bold text-yellow-300">Sign Up</span></Link>
            </p>
          </div>
        </div>

        {/* Right side: Sign-in Form */}
        <div className="w-full md:w-[50%] p-6 bg-white bg-opacity-80 rounded-lg shadow-lg mt-6 md:mt-0">
          <div className="text-center mb-6">
            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">Sign In</h1>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-base sm:text-lg font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#806044] focus:border-[#806044] text-gray-900"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-base sm:text-lg font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#806044] focus:border-[#806044] text-gray-900"
                placeholder="Enter your password"
              />
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
        </div>
      </div>
    </div>
  );
}

export default Page;
