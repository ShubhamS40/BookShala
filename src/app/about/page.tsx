"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Shuham from '@/assets/team-member-image/shubham.png';
import Sanaya from '@/assets/team-member-image/sanya.jpeg';
import Arijit from '@/assets/team-member-image/arijit.png';
import Tannu from '@/assets/team-member-image/TANNU.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBookOpen, FaUsers, FaShippingFast, FaStar } from 'react-icons/fa';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { BsArrowRight } from 'react-icons/bs';

function About() {
  // State for statistics counter
  const [counts, setCounts] = useState({ books: 0, customers: 0, deliveries: 0, satisfaction: 0 });
  const statTargets = { books: 10000, customers: 5000, deliveries: 15000, satisfaction: 98 };
  
  // State for FAQ accordions
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  // State for testimonial carousel
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = [
    {
      name: "Ravi Kumar",
      role: "Book Enthusiast",
      text: "Book Haven has transformed my reading experience completely. Their collection is outstanding and the service is prompt!",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Priya Sharma",
      role: "Literature Professor",
      text: "As an academic, I rely on Book Haven for rare and academic books. They've never disappointed me with their collection and timely deliveries.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Ajay Patel",
      role: "Parent",
      text: "Finding educational and entertaining books for my children has never been easier. Book Haven offers a wonderful selection at great prices!",
      avatar: "https://randomuser.me/api/portraits/men/62.jpg"
    }
  ];
  
  // FAQ items
  const faqs = [
    {
      question: "How do I place an order?",
      answer: "You can place an order by browsing our collection, adding items to your cart, and proceeding to checkout. We accept various payment methods for your convenience."
    },
    {
      question: "What are your shipping times?",
      answer: "We typically process orders within 24 hours. Standard shipping takes 3-5 business days, while express shipping delivers within 1-2 business days."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes! We ship to most countries worldwide. International shipping typically takes 7-14 business days depending on the destination."
    },
    {
      question: "Can I return a book?",
      answer: "We accept returns within 30 days of purchase. Books must be in original condition with no damage or markings."
    }
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  // Counter effect for statistics
  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => ({
        books: prev.books < statTargets.books ? Math.min(prev.books + 100, statTargets.books) : prev.books,
        customers: prev.customers < statTargets.customers ? Math.min(prev.customers + 50, statTargets.customers) : prev.customers,
        deliveries: prev.deliveries < statTargets.deliveries ? Math.min(prev.deliveries + 150, statTargets.deliveries) : prev.deliveries,
        satisfaction: prev.satisfaction < statTargets.satisfaction ? Math.min(prev.satisfaction + 1, statTargets.satisfaction) : prev.satisfaction
      }));
    }, 50);

    const testimonialInterval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(testimonialInterval);
    };
  }, []);
  
  // Toggle FAQ accordion
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-amber-50 to-yellow-100 min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <motion.div 
        className="relative w-full mb-16 overflow-hidden rounded-xl shadow-2xl" 
        style={{ height: '400px' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#806044]/80 to-amber-900/70 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80')",
            backgroundAttachment: "fixed" 
          }}
        ></div>
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4">
          <motion.h1 
            className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About BookShala
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-center max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Discover our passion for books and our journey to bring affordable literature to everyone
          </motion.p>
        </div>
      </motion.div>

      {/* Introduction with animated text reveal */}
      <motion.section
        className="w-full max-w-5xl text-center mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      >
        <motion.p 
          className="text-xl lg:text-2xl text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Welcome to <span className="font-bold" style={{ color: '#806044' }}>BookShala</span>, your one-stop destination for all your book needs. From timeless classics to modern bestsellers, we bring the best collection of books right to your fingertips. Whether you're a casual reader or a book lover, we have something for everyone.
        </motion.p>
      </motion.section>
      
      {/* Animated Stats Section */}
      <motion.section 
        className="w-full max-w-5xl mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10" style={{ color: '#806044' }}>Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform hover:scale-105"
            variants={itemVariants}
          >
            <div className="text-5xl text-[#806044] mb-3 flex justify-center">
              <FaBookOpen />
            </div>
            <h3 className="text-4xl font-bold mb-2 text-gray-800">{counts.books.toLocaleString()}+</h3>
            <p className="text-gray-600">Books Available</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform hover:scale-105"
            variants={itemVariants}
          >
            <div className="text-5xl text-[#806044] mb-3 flex justify-center">
              <FaUsers />
            </div>
            <h3 className="text-4xl font-bold mb-2 text-gray-800">{counts.customers.toLocaleString()}+</h3>
            <p className="text-gray-600">Happy Customers</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform hover:scale-105"
            variants={itemVariants}
          >
            <div className="text-5xl text-[#806044] mb-3 flex justify-center">
              <FaShippingFast />
            </div>
            <h3 className="text-4xl font-bold mb-2 text-gray-800">{counts.deliveries.toLocaleString()}+</h3>
            <p className="text-gray-600">Books Delivered</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform hover:scale-105"
            variants={itemVariants}
          >
            <div className="text-5xl text-[#806044] mb-3 flex justify-center">
              <FaStar />
            </div>
            <h3 className="text-4xl font-bold mb-2 text-gray-800">{counts.satisfaction}%</h3>
            <p className="text-gray-600">Customer Satisfaction</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Mission with Interactive Elements */}
      <motion.section
        className="w-full max-w-5xl bg-white p-8 lg:p-10 xl:p-12 rounded-lg shadow-lg text-center mb-16 overflow-hidden relative group"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Background pattern */}
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#806044]/10 rounded-full transition-transform group-hover:scale-150 duration-700 ease-in-out"></div>
        <div className="absolute -left-20 -top-20 w-64 h-64 bg-amber-100 rounded-full transition-transform group-hover:scale-150 duration-700 ease-in-out"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8" style={{ color: '#806044' }}>Our Mission</h2>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Image with hover effect */}
            <motion.div
              className="w-full lg:w-1/2 overflow-hidden rounded-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80"
                alt="Mission Image"
                className="rounded-lg shadow-md w-full object-cover transition-transform duration-500 hover:scale-105"
                width={800}
                height={500}
              />
            </motion.div>
            
            {/* Text with bullet points */}
            <motion.div
              className="w-full lg:w-1/2 text-left"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At <span className="font-semibold" style={{ color: '#806044' }}>BookShala</span>, our mission is to foster a love for reading by making books accessible, affordable, and enjoyable for everyone.
              </p>
              
              <ul className="space-y-4">
                <motion.li 
                  className="flex items-start gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="bg-[#806044] p-1 rounded-full mt-1">
                    <BsArrowRight className="text-white" />
                  </div>
                  <p className="text-gray-700">Curate and provide a diverse collection of books that cater to all ages, interests, and preferences.</p>
                </motion.li>
                
                <motion.li 
                  className="flex items-start gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="bg-[#806044] p-1 rounded-full mt-1">
                    <BsArrowRight className="text-white" />
                  </div>
                  <p className="text-gray-700">Make quality literature accessible to everyone through competitive pricing and special discounts.</p>
                </motion.li>
                
                <motion.li 
                  className="flex items-start gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="bg-[#806044] p-1 rounded-full mt-1">
                    <BsArrowRight className="text-white" />
                  </div>
                  <p className="text-gray-700">Create a community of book lovers who can share their passion for reading and literature.</p>
                </motion.li>
              </ul>
              
              <motion.button 
                className="mt-6 px-6 py-3 bg-[#806044] text-white rounded-lg flex items-center gap-2 hover:bg-[#6e5036] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More <BsArrowRight />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Values with Interactive Card Grid */}
      <motion.section
        className="w-full max-w-5xl bg-white p-8 lg:p-10 xl:p-12 rounded-lg shadow-lg mb-16 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#806044]/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center" style={{ color: '#806044' }}>Our Core Values</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Value Card 1 */}
            <motion.div 
              className="bg-gradient-to-br from-[#806044]/5 to-[#806044]/10 p-6 rounded-lg border border-[#806044]/20 transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-[#806044] rounded-full flex items-center justify-center mb-4">
                <FaBookOpen className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Quality Literature</h3>
              <p className="text-gray-700">
                We curate only the best books to ensure quality and satisfaction. Every book we offer has been selected to enrich the reader's experience and provide meaningful value.
              </p>
            </motion.div>
            
            {/* Value Card 2 */}
            <motion.div 
              className="bg-gradient-to-br from-[#806044]/5 to-[#806044]/10 p-6 rounded-lg border border-[#806044]/20 transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-[#806044] rounded-full flex items-center justify-center mb-4">
                <FaUsers className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Customer Satisfaction</h3>
              <p className="text-gray-700">
                Our customers are at the heart of everything we do. We continuously strive to exceed their expectations with excellent service and a broad selection of books.
              </p>
            </motion.div>
            
            {/* Value Card 3 */}
            <motion.div 
              className="bg-gradient-to-br from-[#806044]/5 to-[#806044]/10 p-6 rounded-lg border border-[#806044]/20 transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-[#806044] rounded-full flex items-center justify-center mb-4">
                <FaStar className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Passion for Books</h3>
              <p className="text-gray-700">
                We love books, and we want to share that passion with you. Our team consists of book lovers who are always excited to recommend the next great read.
              </p>
            </motion.div>
            
            {/* Value Card 4 */}
            <motion.div 
              className="bg-gradient-to-br from-[#806044]/5 to-[#806044]/10 p-6 rounded-lg border border-[#806044]/20 transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-[#806044] rounded-full flex items-center justify-center mb-4">
                <FaShippingFast className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Accessibility</h3>
              <p className="text-gray-700">
                Our platform makes it easy to find and purchase books from anywhere in the world. Whether through our website or mobile app, we ensure the best user experience possible.
              </p>
            </motion.div>
          </div>
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
              src={Tannu}
              alt="Team Member 2"
              className="rounded-full mb-3 shadow-md transition-shadow hover:shadow-lg"
              width={120}  // Maintain original size or adjust as needed
              height={120} // Maintain original size or adjust as needed
            />
            <h3 className="text-lg lg:text-xl font-semibold text-gray-700">Tammana Bharadwaj</h3>
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
          
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default About;
