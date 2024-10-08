'use client';
import Link from 'next/link';
import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex flex-col md:flex-row justify-between sticky  items-center bg-[#806044] backdrop-blur-md border-b border-gray-200 w-full min-h-[50px] p-4'>
            {/* Logo */}
            <div className='text-white text-2xl font-bold'>
               <Link href={"/welcome"}>
               <h1 className='cursor-pointer' >BookShala</h1>
               </Link>
            </div>

            {/* Menu Button for Mobile */}
            <div className='md:hidden'>
                <button onClick={toggleMenu} className='text-white focus:outline-none'>
                    {isOpen ? '✖' : '☰'}
                </button>
            </div>

            {/* Navigation Items and Buttons */}
            <div className='flex items-center space-x-4'>
                <ul className={`flex-col md:flex md:flex-row md:items-center md:space-x-6 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
                   <Link href={"/"}>
                   <li className='text-white hover:text-gray-300 cursor-pointer transform transition-transform duration-200 hover:scale-105 hover:font-bold'>
                        Home
                    </li>
                   </Link>
                   <Link href={"/sellbook"}>
                   <li className='text-white hover:text-gray-300 cursor-pointer transform transition-transform duration-200 hover:scale-105 hover:font-bold'>
                        Sell a book
                    </li>
                   </Link>
                    <li className='text-white hover:text-gray-300 cursor-pointer transform transition-transform duration-200 hover:scale-105 hover:font-bold'>
                        Featured Author
                    </li>
                    <li className='text-white hover:text-gray-300 cursor-pointer transform transition-transform duration-200 hover:scale-105 hover:font-bold'>
                        About us
                    </li>
                </ul>

                <Link href={"/login"}>
                <button className='text-white border-2 border-white rounded-lg px-4 py-2 hover:bg-white hover:text-[#806044] transition duration-200'>
                    Login
                </button>
                </Link>
                <Link href={"/signup"}>
                <button className='text-white border-2 border-white rounded-lg px-4 py-2 hover:bg-white hover:text-[#806044] transition duration-200'>
                    Signup
                </button>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
