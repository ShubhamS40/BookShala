import Image from 'next/image';
import React from 'react';
import login from '@/assets/images/login.png';

function page() {
    return (
        <div className='relative bg-[#806044] top-0 w-[100vw] h-[100vh]'>
            {/* Background image */}
            <Image 
                src={login} 
                layout='fill'  // This makes the image fill the parent container
                objectFit='cover' // Ensures the image covers the container without distortion
                alt='login' 
                className='absolute'
            />
            
            {/* Text positioned above the image */}
            <div className='absolute z-10  flex justify-center items-center'>
                <div className=' p-4 text-white text-[100px]'>
                    Appeericiate Sanya For good UI Work
                </div>
            </div>
        </div>
    );
}

export default page;
