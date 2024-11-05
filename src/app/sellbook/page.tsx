import Button from '@/components/Button';
import Chip from '@/components/Chip';
import Image from 'next/image';
import React from 'react';
import sellBook from '@/assets/images/booksell.png';

function Page() {
  return (
    <div className="w-full min-h-screen flex items-start justify-center bg-gray-100 pt-16 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={sellBook}
          alt="Sell your book"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>

      {/* Form Container */}
      <div className="relative bg-white bg-opacity-90 z-10 shadow-lg rounded-lg w-full max-w-5xl p-8 md:p-10 lg:p-12 flex flex-col items-center">
        <h1 className="text-2xl font-semibold mb-6 text-center">Upload Book Details</h1>

        {/* File Upload */}
        <div className="mb-6 w-full">
          <input type="file" className="border rounded-lg p-2 w-full bg-gray-200 cursor-pointer hover:bg-gray-300 transition" />
        </div>

        {/* Book Title Input */}
        <div className="mb-6 w-full">
          <label className="block text-sm font-medium mb-1">Book Title</label>
          <input
            type="text"
            className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Enter book title"
          />
        </div>

        {/* Description Input */}
        <div className="mb-6 w-full">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Enter book description"
            rows="3"
          ></textarea>
        </div>

        {/* Author Input */}
        <div className="mb-6 w-full">
          <label className="block text-sm font-medium mb-1">Author Name</label>
          <input
            type="text"
            className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Enter author name"
          />
        </div>

        {/* Category Selector */}
        <div className="mb-6 w-full">
          <label className="block text-sm font-medium mb-1">Category</label>
          <select className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-gray-200">
            <option value="" disabled selected>
              Select a category
            </option>
            <option value="fiction">Novels</option>
            <option value="non-fiction">Romance</option>
            <option value="science">Poetry</option>
            <option value="biography">Coding</option>
            <option value="fantasy">Other</option>
          </select>
        </div>

        {/* Price Input */}
        <div className="mb-6 w-full">
          <label className="block text-sm font-medium mb-1">Price</label>
          <input
            type="text"
            className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Enter price"
          />
        </div>

        {/* Rating Input */}
        <div className="mb-6 w-full">
          <label className="block text-sm font-medium mb-1">Rating</label>
          <input
            type="text"
            className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Enter rating (e.g., 4.5)"
          />
        </div>

        {/* Submit Button */}
        <div className="w-full flex justify-center mt-6">
          <Chip name="Submit" />
        </div>
      </div>
    </div>
  );
}

export default Page;
