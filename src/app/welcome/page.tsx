"use client"
import Image from 'next/image'
import React from 'react'
import Welcome from '@/assets/images/welcome.png'
import { useRouter } from 'next/navigation';

function Page() {
  const navigator = useRouter();
  return (
    <div className='flex flex-col md:flex-row mx-auto justify-center w-full'>
      <div className='md:w-[45%]  w-full flex justify-center'>
        <Image src={Welcome} width={610} alt='welcome image' className='w-full h-auto object-cover' />
      </div>
      <div className='text-white p-10 bg-[#806044] md:w-[55%] w-full'>
        <div>
          <h1 className='font-serif font-bold text-[30px] text-center md:text-left'>BookShala</h1>
        </div>
        <div className='mt-6 md:mt-[10%]'>
          <h1 className='text-[34px] md:text-[48px] lg:text-[68px] text-[#D8CFC8] heading text-center md:text-left'>
            Discover Hidden Gems in Old Books
          </h1>
        </div>
        <p className='special-text text-[24px] md:text-[32px] lg:text-[42px] italic text-center md:text-left'>
          Buy, Sell, and Cherish Timeless Stories
        </p>
        <div className='flex justify-center md:justify-end mt-6'>
          <button
            onClick={() => { navigator.push('/signup') }}
            className='bg-[#d2a985] rounded-xl pt-2 pb-2 px-6 py-6 font-bold'
          >
            Start Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page;
