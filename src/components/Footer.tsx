import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaHeart, FaBookOpen, FaBook, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer  className="bg-gradient-to-r mt-[5%] from-[#806044] to-[#a67c55]  text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <FaBookOpen className="text-3xl" />
              <h2 className="text-2xl font-bold">BookShala</h2>
            </div>
            <p className="text-white/80 mb-6">
              Your destination for quality pre-loved books at affordable prices. We connect book lovers with literary treasures that deserve a second life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#806044] transition-colors duration-300">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#806044] transition-colors duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#806044] transition-colors duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#806044] transition-colors duration-300">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative inline-block">
              <span className="after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:bg-white after:bottom-[-8px] after:left-0">Quick Links</span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <span className="inline-block hover:translate-x-2 transition-transform duration-300 cursor-pointer">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/product">
                  <span className="inline-block hover:translate-x-2 transition-transform duration-300 cursor-pointer">All Books</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="inline-block hover:translate-x-2 transition-transform duration-300 cursor-pointer">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="inline-block hover:translate-x-2 transition-transform duration-300 cursor-pointer">Contact Us</span>
                </Link>
              </li>
              <li>
                <Link href="/sellbook">
                  <span className="inline-block hover:translate-x-2 transition-transform duration-300 cursor-pointer">Sell Your Books</span>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <span className="inline-block hover:translate-x-2 transition-transform duration-300 cursor-pointer">My Account</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Book Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative inline-block">
              <span className="after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:bg-white after:bottom-[-8px] after:left-0">Book Categories</span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/product?category=Fiction">
                  <span className="inline-block hover:translate-x-2 transition-transform duration-300 cursor-pointer">Fiction</span>
                </Link>
              </li>
              <li>
                <Link href="/product?category=NonFiction">
                  <span className="inline-block hover:translate-x-2 transition-transform duration-300 cursor-pointer">Non-Fiction</span>
                </Link>
              </li>
              <li>
                <Link href="/product?category=Novels">
                  <span className="inline-block hover:translate-x-2 transition-transform duration-300 cursor-pointer">Novels</span>
                </Link>
              </li>
              <li>
                <Link href="/product?category=Coding">
                  <span className="inline-block hover:translate-x-2 transition-transform duration-300 cursor-pointer">Programming & Tech</span>
                </Link>
              </li>
              <li>
                <Link href="/product?category=Romance">
                  <span className="inline-block hover:translate-x-2 transition-transform duration-300 cursor-pointer">Romance</span>
                </Link>
              </li>
              <li>
                <Link href="/product?category=Poetry">
                  <span className="inline-block hover:translate-x-2 transition-transform duration-300 cursor-pointer">Poetry</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative inline-block">
              <span className="after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:bg-white after:bottom-[-8px] after:left-0">Contact Us</span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-xl mt-1 flex-shrink-0" />
                <span>123 Book Lane, Literary District, Bookville - 400001</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-xl flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-xl flex-shrink-0" />
                <span>support@bookshala.com</span>
              </li>
            </ul>
            
            {/* Newsletter Form */}
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2">Subscribe to our Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow p-2 text-gray-800 text-sm rounded-l-md focus:outline-none"
                />
                <button className="bg-white text-[#806044] px-4 py-2 rounded-r-md hover:bg-gray-100 transition-colors duration-300 text-sm font-medium">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-white/20 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-sm font-medium mb-2">We Accept</h4>
              <div className="flex space-x-3">
                <div className="bg-white/10 px-3 py-1 rounded text-xs">Visa</div>
                <div className="bg-white/10 px-3 py-1 rounded text-xs">Mastercard</div>
                <div className="bg-white/10 px-3 py-1 rounded text-xs">PayPal</div>
                <div className="bg-white/10 px-3 py-1 rounded text-xs">UPI</div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Download Our App</h4>
              <div className="flex space-x-3">
                <div className="bg-white/10 px-3 py-1 rounded text-xs flex items-center">
                  <span className="mr-1">App Store</span>
                </div>
                <div className="bg-white/10 px-3 py-1 rounded text-xs flex items-center">
                  <span className="mr-1">Google Play</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 mt-4 text-center">
          <p className="text-sm text-white/70">
            &copy; {currentYear} BookShala. All rights reserved. Made with <FaHeart className="inline text-red-400 mx-1" /> for book lovers
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;