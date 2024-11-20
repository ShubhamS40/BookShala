"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Welcome from '@/assets/images/welcome.png';
import { motion } from 'framer-motion';

function Page() {
  const navigator = useRouter();

  return (
    <div className="flex flex-col md:flex-row mx-auto justify-center w-full min-h-screen">
      {/* Left Section with Image */}
      <motion.div
        className="md:w-[45%] w-full flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src={Welcome}
          width={610}
          alt="Welcome Image"
          className="w-full h-auto object-cover rounded-xl shadow-lg"
        />
      </motion.div>

      {/* Right Section with Text */}
      <motion.div
        className="text-white p-10 bg-[#806044] md:w-[55%] w-full rounded-xl shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <h1 className="font-serif font-bold text-[30px] text-center md:text-left text-[#D8CFC8]">
          BookShala
        </h1>

        <motion.div
          className="mt-6 md:mt-[10%]"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <h1 className="text-[34px] md:text-[48px] lg:text-[68px] text-[#D8CFC8] heading text-center md:text-left font-semibold">
            Discover Hidden Gems in Old Books
          </h1>
        </motion.div>

        <motion.p
          className="special-text text-[24px] md:text-[32px] lg:text-[42px] italic text-center md:text-left"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Buy, Sell, and Cherish Timeless Stories
        </motion.p>

        <div className="flex justify-center md:justify-end mt-6">
          <motion.button
            onClick={() => { navigator.push('/signup') }}
            className="bg-[#d2a985] rounded-xl pt-2 pb-2 px-6 font-bold text-lg shadow-lg hover:scale-105 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Now
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default Page;
