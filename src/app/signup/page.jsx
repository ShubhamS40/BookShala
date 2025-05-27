'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import signup from '@/assets/images/signup.png';
import Link from 'next/link';
import { AiFillCloseCircle, AiOutlineExclamationCircle } from 'react-icons/ai'; // Import error icons
import { CgSpinner } from 'react-icons/cg'; // Import spinner icon
import { useRouter } from 'next/navigation';

function Page() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dob, setDob] = useState('');
    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false); 
    const [isError, setIsError] = useState(false); // Track if the message is an error
    const [isLoading, setIsLoading] = useState(false); // Track loading state
    const navigate=useRouter()
    
    const handleSignup = async () => {
      setIsLoading(true); // Start loading
      const body = JSON.stringify({ name, email, password, dob });
      
      try {
        const response = await fetch('/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body,
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Signup failed');
        }
        
        const data = await response.json();
        console.log('User signed up:', data);
        setMessage('Signup successful!');
        setIsError(false); // Set to false since it's successful
        navigate.push("/login")
      } catch (error) {
        console.error('Error during signup:', error);
        setMessage(`Error: ${error.message}`);
        setIsError(true); // Set to true for error styling
      } finally {
        setShowMessage(true); // Show the message
            setTimeout(() => {
                setShowMessage(false); // Hide the message after 3 seconds
                if (!isError) resetForm(); // Reset form only if no error
            }, 3000);
        setIsLoading(false); // End loading regardless of success/failure
        }
    };

    const resetForm = () => {
        setName('');
        setEmail('');
        setPassword('');
        setDob('');
    };

    return (
        <div className='relative bg-[#806044] top-0 w-[100vw] h-[100vh]'>
            <Image
                src={signup}
                layout='fill'
                objectFit='cover'
                alt='signup'
                className='absolute'
            />

            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='absolute z-10 w-[50%] hidden md:block'>
                    <div className='h-[100vh] grid justify-start items-center -space-y-[20%] mx-10 text-white'>
                        <div className='text-3xl font-serif font-bold'>
                            <span>BookShala</span>
                        </div>
                        <div className='text-[36px] md:text-[60px] account'>
                            Create a New Account
                            <div className='font-bold flex space-x-4 text-2xl'>
                                <span>Already registered?</span>
                                <Link href='/login'>
                                    <span className='cursor-pointer text-yellow-300'>Login</span>
                                </Link>
                            </div>
                        </div>
                        <div className='special-text-monda text-[5vh] font-semibold'>
                            Amazing Books on Your Way
                        </div>
                    </div>
                </div>

                <div className='h-[100vh] absolute right-0 w-full md:w-[50%]'>
                    <div className='border-2 bg-white opacity-[0.8] rounded-xl mt-[10%] mx-[15%] my-[15%] space-y-10 p-10 h-auto'>
                        <div className='flex-col flex-wrap text-black space-y-3 opacity-[1] z-50'>
                            <div className='flex font-serif justify-center text-4xl'>
                                <h1>Signup</h1>
                            </div>

                            <div>
                                <label>Name</label>
                                <input 
                                    type="text" 
                                    placeholder='Enter your name' 
                                    className='w-full p-2 border border-gray-400 rounded'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div>
                                <label>Email</label>
                                <input 
                                    type="email" 
                                    placeholder='Enter your email' 
                                    className='w-full p-2 border border-gray-400 rounded'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <label>Password</label>
                                <input 
                                    type="password" 
                                    placeholder='Enter your password' 
                                    className='w-full p-2 border border-gray-400 rounded'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div>
                                <label>DOB</label>
                                <input 
                                    type="date" 
                                    className='w-full p-2 border border-gray-400 rounded'
                                    value={dob}
                                    onChange={(e) => setDob(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Error/Success Message Display with Slide-in Effect */}
                        {showMessage && (
                            <div className={`fixed bottom-0 left-0 w-[300px] p-4 mx-auto flex items-center justify-between 
                                ${isError ? 'bg-red-100 border-t-4 border-red-500 text-red-700' : 'bg-green-100 border-t-4 border-green-500 text-green-700'} 
                                shadow-md rounded transition-transform transform translate-y-0`}
                            >
                                <div className='flex items-center'>
                                    {isError ? (
                                        <AiOutlineExclamationCircle className='mr-2 text-xl' />
                                    ) : null}
                                    <span>{message}</span>
                                </div>
                                <AiFillCloseCircle 
                                    className='cursor-pointer text-2xl' 
                                    onClick={() => setShowMessage(false)}
                                />
                            </div>
                        )}

                        <div className='flex flex-wrap justify-center'>
                            <button 
                                className='pt-2 pb-2 px-4 py-4 rounded-lg font-mono text-white text-xl bg-[#806044] flex items-center justify-center'
                                onClick={handleSignup}
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <CgSpinner className="animate-spin mr-2 h-5 w-5" />
                                        Creating Account...
                                    </>
                                ) : (
                                    'Signup'
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
