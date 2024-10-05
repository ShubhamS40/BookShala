"use client"
import Image from 'next/image'
import React from 'react'
import Welcome from '@/assets/images/welcome.png'
import { useRouter } from 'next/navigation';

function page() {
  const navigator = useRouter()
  return (
    <div className='flex mx-auto justify-center w-[100%]'>
      <div className='w-[45%]'>
        <Image src={Welcome} width={550} alt='welcome image' />
      </div>
      <div className='text-white p-10 bg-[#806044] w-[55%]'>
        <div className=''>
          <h1 className='font-serif font-bold text-[30px]'  >BookShala</h1>
        </div>
        <div className=' mt-[10%]' >
          <h1 className='text-[68px] text-[#D8CFC8] heading '>Discover Hidden Gems in old Books </h1>
        </div>
        <p className='special-text text-[42px] italic'>Buy Sell and cheris Timeless Stories</p>



        <div className='flex justify-end'>
          <button onClick={() => { navigator.push('/login')}} className='bg-[#d2a985] rounded-xl pt-2 pb-2 px-6 py-6 font-bold'>Start Now</button>
        </div>


      </div>
    </div>
  )
}

export default page