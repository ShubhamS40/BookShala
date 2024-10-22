import Image from 'next/image';
import React from 'react';
import Bookshell from '@/assets/images/forgotpassword.png';

function Page() {
    return (
        <div className='bg-[#806044] min-h-screen w-full relative'>
            <div className='absolute top-0 left-0 w-full h-full'>
                <Image
                    className='object-cover'
                    src={Bookshell}
                    alt='Bookshell'
                    layout='fill'
                />
            </div>

            {/* <div className=''> */}

            {/* First Card */}
            <div className=' w-[50%] z-10 absolute pt-5- px-10   text-white   h-[100%] flex flex-col items-start justify-evenly '>
                <div className='text-[35px] font-serif font-bold'>
                    <h1>BookShala</h1>
                </div>
                <div className='text-black'>
                    <h1 className='text-[80px] forgotpassword font-mono '>Forgot The Password</h1>
                    <h2 className='text-2xl font-bold font-mono'>New Password</h2>
                </div>

                <div className='text-5xl font-bold font-thin'>
                    <h1>Your gateway to <span className='font-extrabold font-sans'>endlessbook discoveries-</span></h1>

                </div>

            </div>



            {/* Second Card */}
            <div className=' w-[50%] z-10 absolute right-0 pt-5- px-10    h-[100%] flex flex-col items-center justify-evenly '>

                {/* From Frogot password */}
                <div className='h-[60%] flex flex-col font-semibold justify-evenly items-center  rounded-xl opacity-[0.8] bg-white w-[70%]'>
                    <div className='text-4xl font-thin font-serif'>
                        <h1>Create</h1>
                    </div>
                    <div>
                        <h1>OLD PASSWORD</h1>
                        <input type="text" placeholder='Enter the Old Password' />
                    </div>
                    <div>
                        <h1>E-mail</h1>
                        <input type="email" placeholder='Enter the mail' />
                    </div>
                    <div>
                        <h1>NEW PASSWORD</h1>
                        <input type="text" placeholder='Enter the New Password' />
                    </div>

                    <button
                        type="submit"
                        className=" px-4 py-2 sm:px-6 sm:py-3 bg-[#806044] text-white font-bold rounded-lg hover:bg-[#6e5036] focus:outline-none focus:ring-2 focus:ring-[#6e5036] transition duration-300 ease-in-out"
                    >
                        SUBMIT
                    </button>

                </div>

            </div>


            {/* </div> */}


        </div>
    );
}

export default Page;
