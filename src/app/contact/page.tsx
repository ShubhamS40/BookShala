'use client';
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
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
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-[#806044] focus:border-[#806044]"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-[#806044] focus:border-[#806044]"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                <textarea
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
                <span className="text-gray-700">+91 98765 43210</span>
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

     
    </div>
  );
};

export default ContactPage;
