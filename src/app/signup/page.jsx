import Image from 'next/image';
import React from 'react';
import signup from '@/assets/images/signup.png';
import Link from 'next/link';

function Page() {
  return (
    <div className='relative bg-[#806044] top-0 w-[100vw] h-[100vh]'>
      {/* Background image */}
      <Image
        src={signup}
        layout='fill'  // This makes the image fill the parent container
        objectFit='cover' // Ensures the image covers the container without distortion
        alt='login'
        className='absolute'
      />

      {/* Text and Form positioned above the image */}
      <div className='grid grid-cols-1 md:grid-cols-2'>
        {/* First Card: Only visible on desktop (md: block) */}
        <div className='absolute z-10 w-[50%] hidden md:block'>
          {/* Card content */}
          <div className='h-[100vh] grid justify-start items-center -space-y-[20%] mx-10 text-white'>
            <div className='text-3xl font-serif font-bold'>
              <span>BookShala</span>
            </div>

            <div className='text-[36px] md:text-[60px] account'>
              Create a New Account

              <div className='font-bold flex space-x-4 text-2xl'>
                <span>Already registered?</span>
                <Link href={'login'}>
                  <span className='cursor-pointer text-yellow-300'>
                    Login
                  </span>
                </Link>
              </div>
            </div>

            <div className='special-text-monda text-[5vh] font-semibold'>
              Amazing Books on Your Way
            </div>
          </div>
        </div>

        {/* Second Signup Form card (visible on both mobile and desktop) */}
        <div className='h-[100vh] absolute right-0 w-full md:w-[50%]'>
          {/* Signup form card */}
          <div className='border-2 bg-white opacity-[0.8] rounded-xl mt-[10%] mx-[15%] my-[15%] space-y-10 p-10 h-auto'>
            <div className='flex-col flex-wrap text-black space-y-3 opacity-[1] z-50'>
              <div className='flex font-serif justify-center text-4xl'>
                <h1>Signup</h1>
              </div>

              <div>
                <label htmlFor="">Name</label>
              </div>
              <div className=''>
                <input type="text" placeholder='Enter your name' className='w-full p-2 border border-gray-400 rounded' />
              </div>

              <div>
                <label htmlFor="">Email</label>
              </div>
              <div className=''>
                <input type="text" placeholder='Enter your email;' className='w-full p-2 border border-gray-400 rounded' />
              </div>

              <div>
                <label htmlFor="">Password</label>
              </div>
              <div className=''>
                <input type="password" placeholder='Enter your password' className='w-full p-2 border border-gray-400 rounded' />
              </div>

              <div>
                <label htmlFor="">DOB</label>
              </div>
              <div className=''>
                <input type="date" className='w-full p-2 border border-gray-400 rounded' />
              </div>
            </div>

            <div className='flex flex-wrap justify-center'>
              <button className='pt-2 pb-2 px-4 py-4 rounded-lg font-mono text-white text-xl bg-[#806044]'>
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
