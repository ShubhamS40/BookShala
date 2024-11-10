'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Button from '@/components/Button'; // Use a button for submit functionality
import Chip from '@/components/Chip';
import Image from 'next/image';
import sellBook from '@/assets/images/booksell.png';

type FormData = {
  bookName: string;
  description: string;
  authorName: string;
  price: string;
  rating: string;
  categoryName: string;
  file: File | null;
};

const Page: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    bookName: '',
    description: '',
    authorName: '',
    price: '',
    rating: '',
    categoryName: '',
    file: null,
  });

  const [loading, setLoading] = useState(false);  // Loading state for form submission

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData((prevState) => ({
      ...prevState,
      file,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Check if all fields are filled
    if (
      !formData.bookName ||
      !formData.description ||
      !formData.authorName ||
      !formData.price ||
      !formData.rating ||
      !formData.categoryName ||
      !formData.file
    ) {
      alert('Please fill in all fields and upload an image.');
      return;
    }

    setLoading(true);  // Start the loader

    const form = new FormData();
    form.append('bookName', formData.bookName);
    form.append('description', formData.description);
    form.append('authorName', formData.authorName);
    form.append('price', formData.price);
    form.append('rating', formData.rating);
    form.append('categoryName', formData.categoryName);
    form.append('icon', formData.file);

    try {
      const response = await fetch('/api/bookdata', {
        method: 'POST',
        body: form,
      });

      const data = await response.json();
      console.log('Response Data:', data);  // Log the response data

      if (response.ok) {
        alert('Book uploaded successfully!');
        // Clear form after successful submission
        setFormData({
          bookName: '',
          description: '',
          authorName: '',
          price: '',
          rating: '',
          categoryName: '',
          file: null,
        });
      } else {
        alert(data.error || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false);  // Stop the loader after request completes
    }
  };

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

        <form onSubmit={handleSubmit} className="w-full">
          {/* File Upload */}
          <div className="mb-6 w-full">
            <input
              type="file"
              className="border rounded-lg p-2 w-full bg-gray-200 cursor-pointer hover:bg-gray-300 transition"
              onChange={handleFileChange}
            />
          </div>

          {/* Book Title Input */}
          <div className="mb-6 w-full">
            <label className="block text-sm font-medium mb-1">Book Title</label>
            <input
              type="text"
              name="bookName"
              value={formData.bookName}
              onChange={handleInputChange}
              className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter book title"
            />
          </div>

          {/* Description Input */}
          <div className="mb-6 w-full">
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter book description"
              rows={3}
            />
          </div>

          {/* Author Input */}
          <div className="mb-6 w-full">
            <label className="block text-sm font-medium mb-1">Author Name</label>
            <input
              type="text"
              name="authorName"
              value={formData.authorName}
              onChange={handleInputChange}
              className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter author name"
            />
          </div>

          {/* Category Selector */}
          <div className="mb-6 w-full">
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              name="categoryName"
              value={formData.categoryName}
              onChange={handleInputChange}
              className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-gray-200"
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="coding">Coding</option>
              <option value="novel">Novels</option>
              <option value="romance">Romance</option>
              <option value="poetry">Poetry</option>
            </select>
          </div>

          {/* Price Input */}
          <div className="mb-6 w-full">
            <label className="block text-sm font-medium mb-1">Price</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter price"
            />
          </div>

          {/* Rating Input */}
          <div className="mb-6 w-full">
            <label className="block text-sm font-medium mb-1">Rating</label>
            <input
              type="text"
              name="rating"
              value={formData.rating}
              onChange={handleInputChange}
              className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter rating (e.g., 4.5)"
            />
          </div>

          {/* Submit Button */}
          <div className="w-full flex justify-center mt-6">
            <button
              type="submit" // Use the button for the submit
        className="w-full px-4 py-2 sm:px-6 sm:py-3 bg-[#806044] text-white font-bold rounded-lg hover:bg-[#6e5036] focus:outline-none focus:ring-2 focus:ring-[#6e5036] transition duration-300 ease-in-out"
              disabled={loading} // Disable while loading
            >
              {loading ? 'Uploading...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
