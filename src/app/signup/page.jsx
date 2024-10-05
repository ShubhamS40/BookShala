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





            <div className='grid grid-cols-'>
                {/* First Card */}
                <div className='absolute z-10 w-[50%]   '>
                    {/* 1card */}
                    <div className='h-[100vh] grid justify-start items-center -space-y-[20%] mx-10  text-white '>

                        <div className='text-3xl font-serif font-bold  '>
                            <span>BookShala</span>

                        </div>


                        <div className='text-[60px] account '>

                            Create a New  Account

                            <div className=' font-bold flex space-x-4  text-2xl'>
                                <span> Already  registred  ?</span>
                                <span className= ' cursor-pointer text-yellow-300'>
                                    Login
                                </span>
                            </div>

                        </div>



                        <div className='special-text-monda  text-[5vh] font-semibold'>
                            Amazing Books on your Way
                        </div>


                    </div>

                    {/* 2 card  */}
                    <div className='border-2 bg-gray-500 h-[50%]'>

                    </div>

                </div>


                {/* Second Signup Form card */}
                <div className=' h-[100vh] absolute right-0  w-[50%]'>

                    {/* signup form card */}
                    <div className=' border-2 bg-white opacity-[0.7] rounded-xl mt-[10%] mx-[15%] my-[15%] space-y-10 p-10 h-auto '>

                        <div className='flex-col text-black space-y-3 opacity-[1]  z-50 '>

                            <div className='flex font-serif justify-center text-4xl'>
                                <h1>Signup</h1>
                            </div>


                            <div>
                                <label htmlFor="">Name</label>
                            </div>
                            <div className=''>
                                <input type="text" placeholder='Enter your name' />
                            </div>


                            <div>
                                <label htmlFor="">Email</label>
                            </div>
                            <div className=''>
                                <input type="text" placeholder='Enter your email;' />
                            </div>
                            <div>
                                <label htmlFor="">Password</label>
                            </div>
                            <div className=''>
                                <input type="password" placeholder='Enter your password' />
                            </div>

                            <div>
                                <label htmlFor="">DOB</label>
                            </div>
                            <div className=' '>
                                <input  type="date"  />
                            </div>
                        </div>



                       <div className='flex justify-center '>
                        <button className='pt-2 pb-2 px-4 py-4 rounded-lg font-mono text-xl bg-[#806044]'>Signup</button>
                       </div>



                    </div>


                </div>
            </div>




        </div>






    );
}

export default page;





