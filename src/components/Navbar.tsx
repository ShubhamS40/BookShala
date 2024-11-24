'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from 'react-redux';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [cartCount, setCartCount] = useState(0); // State for cart count
  const state=useSelector(((state:any)=>state.addCart.item.length))
  
  const navigate = useRouter();
  // Check for the token in localStorage when the component mounts

  useEffect(()=>{
    setCartCount(state)
  })

  useEffect(() => {
    const checkLoginStatus = () => {

      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token); // Set to true if token exists, false otherwise
    };
    
   

    // Simulate fetching cart count (replace this with actual API call if needed)
    const fetchCartCount = () => {
      const count = localStorage.getItem('cartCount') || 0; // Simulated cart count
      setCartCount(Number(count));
    };

    checkLoginStatus();
    fetchCartCount();
    const interval = setInterval(() => {
      checkLoginStatus();
      fetchCartCount();
    }, 1000); // Check token and cart count continuously

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    navigate.push("/welcome");
    setIsLoggedIn(false); // Update the state to reflect the user is logged out
  };

  return (
    <div className='flex flex-col md:flex-row justify-between items-center bg-[#806044] backdrop-blur-md border-b border-gray-200 w-full min-h-[50px] p-4'>
      {/* Logo */}
      <div className='text-white flex space-x-10 text-2xl font-bold'>
        <Link href={"/"}>
          <h1 className='cursor-pointer'>BookShala</h1>
        </Link>
        <Link href={"/cart"}>
            <li className='relative text-white hover:text-gray-300 cursor-pointer transform transition-transform duration-200 hover:scale-105 hover:font-bold flex items-center'>
              {/* Enlarged Cart Icon */}
              <MdOutlineShoppingCart className="text-3xl" />
              
              {/* Cart Count Badge */}
              {cartCount > 0 && (
                <div className="absolute top-[-12px] right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </div>
              )}
            </li>
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
        
          {isLoggedIn ? (
            <Link href={"/sellbook"}>
              <li className='text-white hover:text-gray-300 cursor-pointer transform transition-transform duration-200 hover:scale-105 hover:font-bold'>
                Sell a book
              </li>
            </Link>
          ) : null}
        <Link href={"/contact"}>  <li className='text-white hover:text-gray-300 cursor-pointer transform transition-transform duration-200 hover:scale-105 hover:font-bold'>
            Contact
          </li></Link>
          <Link href={'/about'}>
            <li className='text-white hover:text-gray-300 cursor-pointer transform transition-transform duration-200 hover:scale-105 hover:font-bold'>
              About us
            </li>
          </Link>
        </ul>

        {/* Conditionally render Login/Signup or Avatar/Dropdown */}
        {isLoggedIn ? (
          <div
            className='relative flex items-center justify-center cursor-pointer'
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            {/* User Avatar */}
            <div className='w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#806044] font-bold'>
              U {/* Placeholder for User Avatar */}
            </div>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className='absolute z-50 top-12 right-0 w-48 bg-white shadow-md rounded-md p-2'>
                <Link href="/userprofile">
                  <div className='p-2 hover:bg-gray-100 cursor-pointer'>Profile Detail</div>
                </Link>
                <Link href="/cart">
                  <div className='p-2 hover:bg-gray-100 cursor-pointer'>Cart Detail</div>
                </Link>
                <div
                  onClick={handleLogout}
                  className='p-2 hover:bg-gray-100 cursor-pointer'
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
