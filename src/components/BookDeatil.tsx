
'use client'
import React, { useState } from 'react';

function BookDetail() {
    const [readMore, setReadMore] = useState(false);

    return (
        <div className='  h-screen m-5 flex justify-center items-center'>
            <div className='h-[100vh] border-2 w-full md:w-[60%] lg:w-[90%] rounded-lg flex flex-col items-center bg-white shadow-lg'>
                
                {/* Title Section */}
                <div className='w-full p-5 flex justify-between items-center  '>
                    <h1 className=' text-2xl font-bold'>To Kill a Mockingbird</h1>
                </div>

                {/* Book Image Placeholder */}
                <div className='h-[50vh] w-[80%] mt-4 bg-gray-300 flex items-center justify-center'>
                    <p className='text-gray-500 text-lg'>Book Image Placeholder</p>
                </div>

                {/* Book Description */}
                <div className='w-[90%] mt-4'>
                    <p className={`text-gray-700 text-sm leading-relaxed ${!readMore && 'line-clamp-4'}`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos consectetur molestias fuga nisi iste amet aut natus ratione, ducimus nihil neque ad temporibus nesciunt odio veritatis maxime repellendus deserunt tempore illum dignissimos, optio reprehenderit dolore quibusdam! Similique amet explicabo et cumque, error deserunt ex molestiae necessitatibus porro sint corporis reprehenderit consectetur odit mollitia? Officia, distinctio.
                    </p>
                </div>

                {/* Read More Button */}
                <div className='w-full mt-4 mb-6 flex justify-center'>
                    <button 
                        onClick={() => setReadMore(!readMore)} 
                        className='bg-[#806044]  text-white py-2 px-6 rounded-lg transition-all duration-300'
                    >
                        {readMore ? 'Read Less' : 'Read More'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BookDetail;

