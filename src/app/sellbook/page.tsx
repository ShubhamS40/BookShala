import Button from '@/components/Button';
import Chip from '@/components/Chip';
import Image from 'next/image';
import React from 'react';
import sellBook from '@/assets/images/booksell.png';

function Page() {
  return (
    <div className="w-full h-screen flex bg-gray-100">
      <div className="relative w-2/3 h-full">
        {/* Background Image */}
        <Image
          className="absolute object-cover w-full h-full"
          src={sellBook}
          alt="Sell your book"
          layout="fill"
        />
        
        {/* Form Container */}
        <div className="bg-white opacity-80 z-50 shadow-lg rounded-lg w-[80%] p-5 m-16 flex flex-col absolute">
          <h1 className="text-2xl font-semibold mb-4">Upload Book Detail</h1>

          {/* File Upload */}
          <div className="mb-4">
            <input type="file" className="border rounded-lg p-2 w-full bg-gray-200 cursor-pointer hover:bg-gray-300 transition" />
          </div>

          {/* Title Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter title"
            />
          </div>

          {/* Author Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Author Name</label>
            <input
              type="text"
              className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter author name"
            />
          </div>

          {/* Category Selector */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Category</label>
            <select className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-gray-200">
              <option value="" disabled selected>
                Select a category
              </option>
              <option value="fiction">Novels</option>
              <option value="non-fiction">Romance</option>
              <option value="science">Poetry</option>
              <option value="history">Self Help</option>
              <option value="biography">Coding</option>
              <option value="fantasy">Other</option>
            </select>
          </div>

          {/* Price Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Price</label>
            <input
              type="text"
              className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter price"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-evenly mt-5">
            <Chip name={"Upload File"} />
            <Chip name={"Submit"} />
          </div>
        </div>
      </div>

      {/* Advertisement Section */}
      <div className="w-1/3 flex flex-col items-center justify-start bg-red-400 right-0 absolute h-full p-5">
        {/* Advertisement Space */}
        <div className="w-full h-1/3 bg-green-400 mb-5 rounded-lg flex items-center justify-center">
          <p className="text-white">Advertisement Space</p>
        </div>
        <div className="w-full h-1/6 bg-gray-400 mb-5 rounded-lg flex items-center justify-center">
          <p className="text-white">Advertisement Space</p>
        </div>
      </div>
    </div>
  );
}

export default Page;
