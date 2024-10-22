'use client';
import React from 'react';
import Button from './Button'; // Import Button component
import Chip from './Chip';
import { IoIosSearch } from "react-icons/io";
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation for navigation

const BookStore = () => {
  const router = useRouter(); // Initialize router for navigation

  // Function to handle the Buy Now button click
  const handleBuyNow = () => {
    const token = localStorage.getItem('token'); // Check if token exists in localStorage

    if (token) {
      router.push('/product'); // Navigate to /product if token exists
    } else {
      alert('Please login to continue'); // Show alert if no token is present
    }
  };

  return (
    <div className="p-4  min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        {/* Logo and Account */}
        <Link href={"/userprofile"}>
          <div className="flex items-center space-x-4">
            <div className="bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center">
              <span className="text-lg font-bold text-gray-600">SS</span>
            </div>
            <span className="text-xl font-semibold text-gray-500">My Account</span>
          </div>
        </Link>

        {/* Search Bar */}
        <div className="flex items-center cursor-pointer">
          <input
            type="text"
            placeholder="Search a Book"
            className="w-80 p-2 border border-gray-300   focus:ring focus:border-blue-300"
          />
          <span className="flex items-center searchbar">
            <IoIosSearch className="text-gray-500  search w-6 h-6" />
          </span>
        </div>

        {/* Dropdown Menus */}
        <div className="flex space-x-4">
          <div>
            <Button handleClick={'shubh'} name="Categories" />
            {/* Dropdown Content */}
            <ul className="hidden bg-white shadow-lg mt-2 rounded-lg py-2">
              <li className="text-white border-2 border-white rounded-lg px-4 py-2 hover:bg-white hover:text-[#806044] transition duration-200 cursor-pointer">Novels</li>
              <li className="text-white border-2 border-white rounded-lg px-4 py-2 hover:bg-white hover:text-[#806044] transition duration-200 cursor-pointer">Romance</li>
              <li className="text-white border-2 border-white rounded-lg px-4 py-2 hover:bg-white hover:text-[#806044] transition duration-200 cursor-pointer">Poetry</li>
              <li className="text-white border-2 border-white rounded-lg px-4 py-2 hover:bg-white hover:text-[#806044] transition duration-200 cursor-pointer">Self Help</li>
              <li className="text-white border-2 border-white rounded-lg px-4 py-2 hover:bg-white hover:text-[#806044] transition duration-200 cursor-pointer">Coding</li>
            </ul>
          </div>
          <div>
            <Button handleClick={'/'} name="Type" />
            {/* Dropdown Content */}
            <ul className="hidden bg-white shadow-lg mt-2 rounded-lg py-2">
              <li className="text-white border-2 border-white rounded-lg px-4 py-2 hover:bg-white hover:text-[#806044] transition duration-200 cursor-pointer">Selling</li>
              <li className="text-white border-2 border-white rounded-lg px-4 py-2 hover:bg-white hover:text-[#806044] transition duration-200 cursor-pointer">Bidding</li>
              <li className="text-white border-2 border-white rounded-lg px-4 py-2 hover:bg-white hover:text-[#806044] transition duration-200 cursor-pointer">Exchange</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Category Buttons */}
      <div className="flex justify-around mb-6">
        {['Novels', 'Romance', 'Poetry', 'Self Help', 'Coding'].map((category) => (
          <Chip key={category} name={category} />
        ))}
      </div>

      {/* Book List with Horizontal Cards */}
      <div className="justify-center gap-5 flex flex-wrap">
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="flex flex-wrap w-[30%] border p-4 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-200">
              {/* Book Image */}
              <img
                src={`https://via.placeholder.com/150?text=Book+Cover+${index + 1}`}
                alt="Book"
                className="w-40 h-auto object-cover rounded-lg"
              />

              {/* Book Details */}
              <div className="ml-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold">Book name</h3>
                  <p className="text-gray-500">Author name</p>
                  <p className="text-gray-500">Price: Rs. 500</p>
                  {/* Rating */}
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="ml-2 text-gray-500">(5.0)</span>
                  </div>
                </div>

                {/* Buy Now Button */}
              
                  <Button  handleClick={handleBuyNow} name="Buy Now" />
           
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BookStore;
