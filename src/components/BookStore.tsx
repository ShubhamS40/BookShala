'use client';
import React, { useEffect, useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart, FaHeart, FaBook, FaBookReader } from "react-icons/fa";
import { motion } from 'framer-motion';
import Button from './Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Book {
  name: string;
  author: string;
  Price: number;
  imageUrl?: string;
  id: number;
  slug: string;
  description?: string;
}

const generateSlug = (name: string) => {
  return name.toLowerCase().replace(/ /g, '-');
};

const BookStore = () => {
  const router = useRouter();
  const [books, setBooks] = useState<Book[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentCategory, setCurrentCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [featuredBook, setFeaturedBook] = useState<Book | null>(null);

  const handleBuyNow = (slug: string) => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push(`/product/${slug}`);
    } else {
      router.push('/login?redirect=true');
    }
  };

  const bookdetail = async () => {
    setLoading(true);
    try {
      const response = await fetch('api/bookdata');
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      const booksWithSlug = data.data.map((book: Book) => ({
        ...book,
        slug: generateSlug(book.name),
      }));
      setBooks(booksWithSlug);
      
      // Set a random book as featured
      if (booksWithSlug.length > 0) {
        const randomIndex = Math.floor(Math.random() * booksWithSlug.length);
        setFeaturedBook(booksWithSlug[randomIndex]);
      }
    } catch (error) {
      console.error("Failed to fetch book data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    bookdetail();
  }, []);

  const handleCategory = async (event: React.MouseEvent<HTMLButtonElement>, categoryName: string) => {
    setCurrentCategory(categoryName);
    setLoading(true);

    if (categoryName === 'All') {
      await bookdetail();
      return;
    }

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
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredBooks = books.filter(book => 
    book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const testimonials = [
    {
      name: "Priya Sharma",
      text: "I found my favorite childhood books on BookShala at affordable prices. The condition was excellent and delivery was prompt!",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Rahul Mehta",
      text: "As a college student, BookShala has been a lifesaver for finding textbooks within my budget. Highly recommended!",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Ananya Patel",
      text: "The selection of pre-loved books here is amazing. I've built my home library thanks to BookShala's great collection.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <div className="min-h-screen  bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#806044] to-[#a67c55] text-white py-16 px-4 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")', 
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-4 font-serif">Discover Affordable Literary Treasures</h1>
            <p className="text-xl mb-8">Your gateway to pre-loved books at prices that'll make you smile!</p>
            
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search for books, authors, or genres"
                className="w-full p-4 pl-5 pr-12 rounded-full shadow-lg border-2 border-[#a67c55] focus:ring focus:ring-[#a67c55]/50 focus:border-[#a67c55] text-gray-800"
                value={searchTerm}
                onChange={handleSearch}
              />
              <IoIosSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-[#806044] cursor-pointer" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#806044]">Why Book Lovers Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-[#f8f4e9] p-6 rounded-lg shadow-md text-center"
            >
              <div className="bg-[#806044] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaBook className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#806044]">Quality Books</h3>
              <p className="text-gray-600">Carefully selected pre-owned books in excellent condition</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-[#f8f4e9] p-6 rounded-lg shadow-md text-center"
            >
              <div className="bg-[#806044] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#806044]">Affordable Prices</h3>
              <p className="text-gray-600">Books at a fraction of their original retail price</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-[#f8f4e9] p-6 rounded-lg shadow-md text-center"
            >
              <div className="bg-[#806044] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaBookReader className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#806044]">Wide Selection</h3>
              <p className="text-gray-600">From textbooks to novels, we have something for everyone</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-[#f8f4e9] p-6 rounded-lg shadow-md text-center"
            >
              <div className="bg-[#806044] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#806044]">Easy Returns</h3>
              <p className="text-gray-600">Not satisfied? Return within 7 days for a full refund</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Featured Book Section (if available) */}
      {featuredBook && (
        <div className="py-16 bg-[#f8f4e9]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#806044]">Featured Book</h2>
            
            <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:w-2/5 p-6 flex justify-center">
                <img 
                  src={featuredBook.imageUrl || `https://via.placeholder.com/300?text=Book+Cover`} 
                  alt="Featured Book" 
                  className="h-80 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="md:w-3/5 p-8">
                <h3 className="text-2xl font-bold text-[#806044] mb-2">{featuredBook.name}</h3>
                <p className="text-gray-600 text-lg mb-2">by {featuredBook.author}</p>
                <div className="flex items-center mb-4">
                  <span className="text-yellow-400 text-lg">★★★★★</span>
                  <span className="ml-2 text-gray-500">(5.0)</span>
                </div>
                <p className="text-gray-700 mb-6">{featuredBook.description || "This captivating book is one of our most popular titles. It's in excellent condition and available at a great price. Don't miss this literary gem!"}</p>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-semibold text-[#806044]">₹{featuredBook.Price}</p>
                  <Button handleClick={() => handleBuyNow(featuredBook.id)} name="View Details" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Category Buttons with animation */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#806044]">Browse by Category</h2>
          <div className="flex justify-center gap-4 flex-wrap">
            {["All", "Novels", "Coding", "Romance", "Poetry"].map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => handleCategory(e, category)}
                className={`px-6 py-3 rounded-full shadow-md transition duration-300 ${currentCategory === category ? 'bg-[#806044] text-white' : 'bg-white text-[#806044] border-2 border-[#806044]'}`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Book Grid with improved cards */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#806044]">
            {searchTerm ? 'Search Results' : `${currentCategory === 'All' ? 'All Books' : currentCategory} Collection`}
          </h2>
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#806044]"></div>
            </div>
          ) : filteredBooks.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No books found matching your criteria.</p>
              <button 
                onClick={() => {setSearchTerm(''); setCurrentCategory('All'); bookdetail();}}
                className="mt-4 bg-[#806044] text-white px-6 py-2 rounded-lg hover:bg-[#a67c55] transition duration-300"
              >
                View All Books
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBooks.map((book) => (
                <motion.div 
                  key={book.id} 
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden group">
                    <img
                      src={book.imageUrl || `https://via.placeholder.com/400x250?text=Book+Cover+${book.id}`}
                      alt={book.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button 
                        onClick={() => handleBuyNow(book.id)}
                        className="bg-white text-[#806044] px-4 py-2 rounded-full font-medium hover:bg-[#806044] hover:text-white transition duration-300 mx-2"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">{book.name}</h3>
                    <p className="text-gray-600 mb-2">by {book.author}</p>
                    
                    <div className="flex items-center mb-4">
                      <span className="text-yellow-400">★★★★★</span>
                      <span className="ml-2 text-gray-500">(5.0)</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <p className="text-[#806044] text-xl font-bold">₹{book.Price}</p>
                      <div className="flex space-x-2">
                        <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#806044] hover:bg-[#806044] hover:text-white transition duration-300">
                          <FaHeart className="text-lg" />
                        </button>
                        <button 
                          onClick={() => handleBuyNow(book.id)}
                          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#806044] hover:bg-[#806044] hover:text-white transition duration-300"
                        >
                          <FaShoppingCart className="text-lg" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-[#f8f4e9]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#806044]">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md relative"
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full border-4 border-white shadow-md"
                  />
                </div>
                <div className="pt-8 text-center">
                  <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                  <h4 className="text-lg font-semibold text-[#806044]">{testimonial.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-16 bg-[#806044]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Join Our Book Lovers Community</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">Subscribe to our newsletter and be the first to know about new arrivals, special offers, and exclusive book recommendations.</p>
          
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow p-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-[#806044] font-bold py-3 px-6 rounded-r-lg hover:bg-gray-100 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookStore;
