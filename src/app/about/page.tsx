"use client";
import React from 'react';
import Image from 'next/image'; // Import Image from next/image
import Shuham from '@/assets/team-member-image/shubham.png';
import Sanaya from '@/assets/team-member-image/sanya.jpeg';
import Arijit from '@/assets/team-member-image/arijit.png';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen">
      {/* Header with Animation */}
      <motion.h1
        className="text-5xl font-extrabold mb-6 text-[#806044] tracking-tight transition-transform transform hover:scale-105"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Us
      </motion.h1>

      {/* Introduction */}
      <motion.section
        className="w-full text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      >
        <p className="text-xl lg:text-2xl xl:text-3xl text-gray-700 leading-relaxed mb-8">
          Welcome to <span className="font-bold" style={{ color: '#806044' }}>Book Haven</span>, your one-stop destination for all your book needs. From timeless classics to modern bestsellers, we bring the best collection of books right to your fingertips. Whether you're a casual reader or a book lover, we have something for everyone.
        </p>
      </motion.section>

      {/* Our Mission with Split Card */}
      <motion.section
        className="w-full bg-white p-8 lg:p-10 xl:p-12 rounded-lg shadow-lg text-center mb-8 transition-all duration-300 hover:shadow-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#806044' }}>Our Mission</h2>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Image on Left */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Image
              src="https://img.freepik.com/free-photo/confident-teen-schoolgirl-with-library-book_23-2148204279.jpg"
              alt="Mission Image"
              className="rounded-lg shadow-md w-full object-cover"
              width={800}  // Use natural size, or adjust based on your requirement
              height={800} // Use natural size, or adjust based on your requirement
            />
          </motion.div>
          
          {/* Text on Right */}
          <motion.p
            className="text-md lg:text-lg xl:text-xl text-gray-600"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            At <span className="font-semibold" style={{ color: '#806044' }}>Book Haven</span>, our mission is to foster a love for reading by providing access to a vast range of books. We aim to make reading accessible, affordable, and enjoyable for everyone. Whether you're seeking education, entertainment, or personal growth, we strive to provide a library that caters to all interests. Our mission goes beyond just selling books; we are committed to fostering a lifelong love of reading and knowledge.
          </motion.p>
        </div>
      </motion.section>

      {/* Our Values with Split Card */}
      <motion.section
        className="w-full border-2 bg-white p-8 lg:p-10 xl:p-12 rounded-lg shadow-lg text-center mb-8 transition-all duration-300 hover:shadow-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      >
        <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#806044' }}>Our Values</h2>
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-6">
          {/* Image on Right */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Image
              src="https://img.freepik.com/premium-photo/portrait-young-smiling-woman-searching-book-bookstore-looking-camera_171337-81176.jpg"
              alt="Values Image"
              className="rounded-lg shadow-md w-full object-cover"
              width={800}  // Use natural size, or adjust based on your requirement
              height={600} // Use natural size, or adjust based on your requirement
            />
          </motion.div>
          
          {/* Text on Left */}
          <motion.ul
            className="text-md lg:text-lg xl:text-xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <li className="mb-4 transition-colors hover:text-[#806044]">
              <strong className="font-semibold text-gray-800">Quality:</strong> We curate only the best books to ensure quality and satisfaction. Every book we offer has been selected to enrich the reader’s experience.
            </li>
            <li className="mb-4 transition-colors hover:text-[#806044]">
              <strong className="font-semibold text-gray-800">Customer Satisfaction:</strong> Our customers are at the heart of everything we do. We continuously strive to exceed their expectations with excellent service and a broad selection of books.
            </li>
            <li className="mb-4 transition-colors hover:text-[#806044]">
              <strong className="font-semibold text-gray-800">Passion for Books:</strong> We love books, and we want to share that passion with you. Our team consists of book lovers who are always excited to recommend the next great read.
            </li>
            <li className="transition-colors hover:text-[#806044]">
              <strong className="font-semibold text-gray-800">Accessibility:</strong> Our platform makes it easy to find and purchase books from anywhere in the world. Whether through our website or mobile app, we ensure the best user experience possible.
            </li>
          </motion.ul>
        </div>
      </motion.section>

      {/* Meet the Team */}
      <motion.section
        className="w-full bg-white p-8 lg:p-10 xl:p-12 rounded-lg shadow-lg text-center mb-8 transition-all duration-300 hover:shadow-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.1 }}
      >
        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#806044' }}>Meet the Team & Made By</h2>
        <div className="flex justify-center flex-wrap gap-6">
          {/* Team Member 1 */}
          <motion.div
            className="flex flex-col items-center cursor-pointer hover:scale-105 transform transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <Image
              src={Sanaya}
              alt="Team Member 1"
              className="rounded-full mb-3 shadow-md transition-shadow hover:shadow-lg"
              width={120}  // Maintain original size or adjust as needed
              height={120} // Maintain original size or adjust as needed
            />
            <h3 className="text-lg lg:text-xl font-semibold text-gray-700">Sanaya Gupta</h3>
            <p className="text-sm lg:text-md text-gray-500">UI UX Developer</p>
          </motion.div>

          {/* Team Member 2 */}
          <motion.div
            className="flex flex-col items-center cursor-pointer hover:scale-105 transform transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <Image
              src={Shuham}
              alt="Team Member 2"
              className="rounded-full mb-3 shadow-md transition-shadow hover:shadow-lg"
              width={120}  // Maintain original size or adjust as needed
              height={120} // Maintain original size or adjust as needed
            />
            <h3 className="text-lg lg:text-xl font-semibold text-gray-700">Shubham Choudhury</h3>
            <p className="text-sm lg:text-md text-gray-500">Lead Developer</p>
          </motion.div>

          {/* Team Member 3 */}
          <motion.div
            className="flex flex-col items-center cursor-pointer hover:scale-105 transform transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <Image
              src={Arijit}
              alt="Team Member 3"
              className="rounded-full mb-3 shadow-md transition-shadow hover:shadow-lg"
              width={120}  // Maintain original size or adjust as needed
              height={120} // Maintain original size or adjust as needed
            />
            <h3 className="text-lg lg:text-xl font-semibold text-gray-700">Arijit Sen</h3>
            <p className="text-sm lg:text-md text-gray-500">Backend Developer</p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default About;
