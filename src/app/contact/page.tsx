'use client';
import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { AiFillCloseCircle, AiOutlineExclamationCircle } from 'react-icons/ai'; // Import error icons

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Notification states
  const [notification, setNotification] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleContact = async (e:any) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const result = await response.json();
      console.log("Message sent successfully:", result);
      setNotification('Message sent successfully!');
      setIsError(false);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error:", error);
      setNotification('Failed to send message. Please try again.');
      setIsError(true);
    } finally {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false); // Hide the notification after 3 seconds
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* Header */}
      <header className="bg-[#806044] text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-2">We’d love to hear from you! Feel free to reach out with any questions or feedback.</p>
        </div>
      </header>

      {/* Main Contact Section */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
            <form onSubmit={handleContact}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-[#806044] focus:border-[#806044]"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-[#806044] focus:border-[#806044]"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  id="message"
                  placeholder="Type your message here"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-[#806044] focus:border-[#806044]"
                  rows={5}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#806044] text-white py-3 px-6 rounded-lg shadow-md hover:bg-[#5e4c33] transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-4">
              Whether you have a question about our books, services, or anything else, we’re here to help.
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <FaPhoneAlt className="text-[#806044] w-6 h-6 mr-4" />
                <span className="text-gray-700">+91 73032 98030</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-[#806044] w-6 h-6 mr-4" />
                <span className="text-gray-700">support@bookshala.com</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-[#806044] w-6 h-6 mr-4" />
                <span className="text-gray-700">123, Book Street, New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-200 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0193826933545!2d144.95605431575658!3d-37.81720997975178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce840!2sVictoria%2C+Australia!5e0!3m2!1sen!2sin!4v1613012342345!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>

      {/* Notification Display */}
      {showNotification && (
        <div className={`fixed top-4 right-4 w-96 p-4 flex items-center justify-between rounded shadow-md 
          ${isError ? 'bg-red-100 border-l-4 border-red-500 text-red-700' : 'bg-green-100 border-l-4 border-green-500 text-green-700'}`}
        >
          <div className='flex items-center'>
            {isError ? (
              <AiOutlineExclamationCircle className='mr-2 text-xl' />
            ) : null}
            <span>{notification}</span>
          </div>
          <AiFillCloseCircle 
            className='cursor-pointer text-2xl' 
            onClick={() => setShowNotification(false)}
          />
        </div>
      )}
    </div>
  );
};

export default ContactPage;
