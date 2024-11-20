'use client';
import React, { useEffect, useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import Button from './Button'; // Import Button component
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation for navigation

interface Book {
  name: string;
  author: string;
  Price: number;
  imageUrl?: string;
  id: number;
  slug: string;
}

const generateSlug = (name: string) => {
  return name.toLowerCase().replace(/ /g, '-');
};

const BookStore = () => {
  const router = useRouter();
  const [books, setBooks] = useState<Book[]>([]);

  const handleBuyNow = (slug: string) => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push(`/product/${slug}`);
    } else {
      alert('Please login to continue');
    }
  };

  const bookdetail = async () => {
    try {
      const response = await fetch('api/bookdata');
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      const booksWithSlug = data.data.map((book: Book) => ({
        ...book,
        slug: generateSlug(book.name),
      }));
      setBooks(booksWithSlug);
    } catch (error) {
      console.error("Failed to fetch book data:", error);
    }
  };

  useEffect(() => {
    bookdetail();
  }, []);

  const handleCategory = async (event: any) => {
    const categoryName = event.currentTarget.textContent;
    const categoryMap: { [key: string]: number } = {
      Coding: 1,
      Romance: 2,
      Poetry: 3,
      Novels: 4,
    };
    const categoryId = categoryMap[categoryName];

    try {
      const response = await fetch(`api/categories`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ categoryId }),
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Failed to fetch books by category:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-[#806044] text-white py-12 px-8">
        <h1 className="text-4xl font-bold text-center mb-4">Welcome to BookShala</h1>
        <p className="text-lg text-center">Your one-stop shop for all your book needs!</p>
        <div className="flex justify-center items-center mt-6">
          <input
            type="text"
            placeholder="Search for books, authors, or genres"
            className="w-80 p-3 rounded-lg shadow-md border-2 border-gray-300 focus:ring focus:border-[#806044]"
          />
          <IoIosSearch className="w-8 h-8 ml-2 text-gray-800 cursor-pointer" />
        </div>
      </div>

      {/* Category Buttons */}
      <div className="flex justify-center mt-8 gap-4 flex-wrap">
        {["All", "Novels", "Coding", "Romance", "Poetry"].map((category) => (
          <button
            key={category}
            onClick={category === "All" ? bookdetail : handleCategory}
            className="px-6 py-2 bg-[#806044] text-white rounded-full hover:bg-white hover:text-[#806044] transition duration-200 shadow-lg"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Book Grid */}
     {/* Book List with Horizontal Cards */}
     <div className="justify-center gap-5 flex flex-wrap">
        {books.map((book) => (
          <div key={book.id} className="flex flex-wrap w-[30%] border p-4 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-200">
            {/* Book Image */}
            <img
              src={book.imageUrl || `https://via.placeholder.com/150?text=Book+Cover+${book.id}`}
              alt="Book"
              className="w-40 h-auto object-cover rounded-lg"
            />

            {/* Book Details */}
            <div className="ml-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold">{book.name || 'Book name'}</h3>
                <p className="text-gray-500">{book.author || 'Author name'}</p>
                <p className="text-gray-500">Price: Rs. {book.Price || 500}</p>
                {/* Rating */}
                <div className="flex items-center mt-2">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="ml-2 text-gray-500">(5.0)</span>
                </div>
              </div>

              {/* Buy Now Button */}
              <Button handleClick={() => handleBuyNow(book.id)} name="Buy Now" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookStore;
