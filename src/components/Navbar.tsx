'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState, useRef } from 'react';
import { MdOutlineShoppingCart, MdMenu, MdClose } from "react-icons/md";
import { FaUser, FaSignOutAlt, FaUserCircle, FaBookOpen, FaBook, FaShoppingBag, FaHeart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  const state = useSelector(((state:any) => state.addCart?.item?.length || 0));
  
  const navigate = useRouter();

  useEffect(() => {
    setCartCount(state);
  }, [state]);

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    };

    const fetchCartCount = () => {
      const count = localStorage.getItem('cartCount') || 0;
      setCartCount(Number(count));
    };

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    checkLoginStatus();
    fetchCartCount();
    
    const interval = setInterval(() => {
      checkLoginStatus();
      fetchCartCount();
    }, 1000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (searchVisible && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchVisible]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate.push("/welcome");
    setIsLoggedIn(false);
    setShowDropdown(false);
  };

  const navbarClasses = `fixedmt-[10%]  top-0 left-0 right-0 z-50 flex flex-col md:flex-row  justify-between items-center w-full p-4 transition-all duration-300 ${
    isScrolled 
      ? 'bg-white shadow-md text-[#806044]' 
      : 'bg-gradient-to-r from-[#806044] to-[#a67c55] text-white'
  }`;

  const linkClasses = `cursor-pointer transform transition-transform duration-200 hover:scale-105 font-medium relative group ${
    isScrolled ? 'text-[#806044] hover:text-[#a67c55]' : 'text-white hover:text-gray-200'
  }`;

  const buttonClasses = `font-medium rounded-lg px-5 py-2.5 transition-all duration-300 ${
    isScrolled
      ? 'bg-[#806044] text-white hover:bg-[#a67c55]'
      : 'bg-white text-[#806044] hover:bg-gray-100'
  }`;

  const mobileMenuClasses = `md:hidden absolute top-full left-0 w-full py-4 px-6 shadow-lg ${
    isScrolled ? 'bg-white text-[#806044]' : 'bg-[#806044] text-white'
  }`;

  const logoText = isScrolled ? 'text-[#806044]' : 'text-white';

  return (
    <nav className={navbarClasses}>
      <div className='w-full flex items-center justify-between'>
        {/* Logo */}
        <Link href={"/"}>
          <div className='flex items-center space-x-2'>
            <FaBookOpen className={`text-3xl ${logoText}`} />
            <h1 className={`text-2xl font-bold cursor-pointer ${logoText}`}>BookShala</h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center space-x-8'>
          <Link href={"/"}>
            <div className={linkClasses}>
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300"></span>
            </div>
          </Link>
          
          <Link href={"/contact"}>
            <div className={linkClasses}>
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300"></span>
            </div>
          </Link>
          
          <Link href={"/about"}>
            <div className={linkClasses}>
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300"></span>
            </div>
          </Link>
          
          {isLoggedIn && (
            <Link href={"/sellbook"}>
              <div className={linkClasses}>
                Sell Books
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300"></span>
              </div>
            </Link>
          )}
        </div>

        {/* Right Section: Search, Cart, User */}
        <div className='flex items-center space-x-4'>
          {/* Search Bar (desktop) */}
          <AnimatePresence>
            {searchVisible && (
              <motion.div 
                initial={{ width: 0, opacity: 0 }} 
                animate={{ width: "200px", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative hidden md:block"
              >
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search books..."
                  className={`w-full px-4 py-2 rounded-full text-sm focus:outline-none ${
                    isScrolled ? 'bg-gray-100 text-gray-800' : 'bg-white/20 text-white placeholder-white/75 backdrop-blur-sm'
                  }`}
                />
                <button 
                  onClick={toggleSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  <MdClose className={isScrolled ? 'text-gray-500' : 'text-white'} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Search Icon */}
          {!searchVisible && (
            <button 
              onClick={toggleSearch}
              className={`hidden md:flex items-center justify-center rounded-full w-9 h-9 ${
                isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
              }`}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-5 w-5 ${isScrolled ? 'text-[#806044]' : 'text-white'}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          )}

          {/* Cart Link */}
          <Link href={"/cart"}>
            <div className={`relative flex items-center justify-center rounded-full w-9 h-9 ${
              isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
            }`}>
              <MdOutlineShoppingCart className={`text-2xl ${isScrolled ? 'text-[#806044]' : 'text-white'}`} />
              {cartCount > 0 && (
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </div>
              )}
            </div>
          </Link>

          {/* Conditionally render Login/Signup or Avatar/Dropdown */}
          {isLoggedIn ? (
            <div
              className='relative'
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              {/* User Avatar */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`rounded-full flex items-center justify-center cursor-pointer p-1 ${
                  isScrolled ? 'bg-[#806044] text-white' : 'bg-white text-[#806044]'
                }`}
              >
                <FaUserCircle className="text-2xl" />
              </motion.div>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {showDropdown && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className='absolute z-50 top-12 right-0 w-56 bg-white shadow-xl rounded-lg py-2 overflow-hidden'
                  >
                    <div className="border-b border-gray-100 pb-2 mb-2 px-4">
                      <p className="text-gray-400 text-xs">Signed in as</p>
                      <p className="text-gray-800 font-medium">user@example.com</p>
                    </div>
                    
                    <Link href="/userprofile">
                      <div className='flex items-center space-x-3 p-3 hover:bg-gray-50 transition-colors duration-200'>
                        <FaUser className="text-[#806044]" />
                        <span>Profile Detail</span>
                      </div>
                    </Link>
                    
                    <Link href="/cart">
                      <div className='flex items-center space-x-3 p-3 hover:bg-gray-50 transition-colors duration-200'>
                        <FaShoppingBag className="text-[#806044]" />
                        <span>My Orders</span>
                      </div>
                    </Link>
                    
                    <Link href="/favorites">
                      <div className='flex items-center space-x-3 p-3 hover:bg-gray-50 transition-colors duration-200'>
                        <FaHeart className="text-[#806044]" />
                        <span>Favorites</span>
                      </div>
                    </Link>
                    
                    <div className="border-t border-gray-100 pt-2 mt-2">
                      <div
                        onClick={handleLogout}
                        className='flex items-center space-x-3 p-3 hover:bg-gray-50 transition-colors duration-200 text-red-500'
                      >
                        <FaSignOutAlt />
                        <span>Logout</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div className='hidden md:flex items-center space-x-3'>
              <Link href={"/login"}>
                <button className={buttonClasses}>Login</button>
              </Link>
              <Link href={"/signup"}>
                <button className={`${buttonClasses} ${isScrolled ? 'bg-transparent border border-[#806044]' : 'bg-transparent border border-white text-white'}`}>
                  Sign Up
                </button>
              </Link>
            </div>
          )}

          {/* Menu Button for Mobile */}
          <button 
            onClick={toggleMenu} 
            className='md:hidden flex items-center justify-center'
          >
            {isOpen ? (
              <MdClose className={`text-2xl ${isScrolled ? 'text-[#806044]' : 'text-white'}`} />
            ) : (
              <MdMenu className={`text-2xl ${isScrolled ? 'text-[#806044]' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={mobileMenuClasses}
          >
            <div className="flex flex-col space-y-4">
              {/* Search Bar (mobile) */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search books..."
                  className={`w-full px-4 py-3 rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 ${isScrolled ? 'focus:ring-[#806044]' : 'focus:ring-white'}`}
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              
              <Link href={"/"}>
                <div className="py-2 flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span>Home</span>
                </div>
              </Link>
              
              <Link href={"/contact"}>
                <div className="py-2 flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Contact</span>
                </div>
              </Link>
              
              <Link href={"/about"}>
                <div className="py-2 flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>About Us</span>
                </div>
              </Link>
              
              {isLoggedIn && (
                <Link href={"/sellbook"}>
                  <div className="py-2 flex items-center space-x-3">
                    <FaBook className="h-5 w-5" />
                    <span>Sell Books</span>
                  </div>
                </Link>
              )}
              
              {isLoggedIn ? (
                <>
                  <Link href={"/userprofile"}>
                    <div className="py-2 flex items-center space-x-3">
                      <FaUser className="h-5 w-5" />
                      <span>Profile</span>
                    </div>
                  </Link>
                  
                  <Link href={"/cart"}>
                    <div className="py-2 flex items-center space-x-3">
                      <MdOutlineShoppingCart className="h-5 w-5" />
                      <span>My Cart</span>
                    </div>
                  </Link>
                  
                  <div onClick={handleLogout} className="py-2 flex items-center space-x-3 text-red-500">
                    <FaSignOutAlt className="h-5 w-5" />
                    <span>Logout</span>
                  </div>
                </>
              ) : (
                <div className="flex flex-col space-y-2 pt-2 border-t border-white/10">
                  <Link href={"/login"}>
                    <button className={`w-full py-2.5 px-4 rounded-lg ${isScrolled ? 'bg-[#806044] text-white' : 'bg-white text-[#806044]'}`}>
                      Login
                    </button>
                  </Link>
                  <Link href={"/signup"}>
                    <button className={`w-full py-2.5 px-4 rounded-lg border ${isScrolled ? 'border-[#806044] text-[#806044]' : 'border-white text-white'}`}>
                      Sign Up
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
