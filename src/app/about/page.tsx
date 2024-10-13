import React from 'react';

function About() {
  return (
    <div className='flex flex-col items-center justify-center p-6 bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen'>
      {/* Header */}
      <h1 className='text-5xl font-extrabold mb-6 text-[#806044] tracking-tight transition-transform transform hover:scale-105'>
        About Us
      </h1>

      {/* Introduction */}
      <section className='w-full text-center'>
        <p className='text-xl lg:text-2xl xl:text-3xl text-gray-700 leading-relaxed mb-8'>
          Welcome to <span className='font-bold' style={{ color: '#806044' }}>Book Haven</span>, your one-stop destination for all your book needs. From timeless classics to modern bestsellers, we bring the best collection of books right to your fingertips. Whether you're a casual reader or a book lover, we have something for everyone.
        </p>
      </section>

      {/* Our Mission with Image on Left */}
      <section className='w-full bg-white p-8 lg:p-10 xl:p-12 rounded-lg shadow-lg text-center mb-8 transition-all duration-300 hover:shadow-2xl'>
        <h2 className='text-3xl lg:text-4xl font-bold mb-4' style={{ color: '#806044' }}>Our Mission</h2>
        <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-6'>
          {/* Image on Left */}
          <img
            src='https://via.placeholder.com/150'
            alt='Mission Image'
            className='rounded-lg shadow-md w-40 h-40 lg:w-48 lg:h-48 object-cover'
          />
          {/* Text on Right */}
          <p className='text-md lg:text-lg xl:text-xl text-gray-600'>
            At <span className='font-semibold' style={{ color: '#806044' }}>Book Haven</span>, our mission is to foster a love for reading by providing access to a vast range of books. We aim to make reading accessible, affordable, and enjoyable for everyone.
          </p>
        </div>
      </section>

      {/* Our Values with Image on Right */}
      <section className='w-full border-2 bg-white p-8 lg:p-10 xl:p-12 rounded-lg shadow-lg text-center mb-8 transition-all duration-300 hover:shadow-2xl'>
        <h2 className='text-3xl lg:text-4xl font-bold mb-4' style={{ color: '#806044' }}>Our Values</h2>
        <div className='flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-start gap-6'>
          {/* Image on Right */}
          <img
            src='https://via.placeholder.com/150'
            alt='Values Image'
            className='rounded-lg shadow-md w-40 h-40 lg:w-48 lg:h-48 object-cover'
          />
          {/* Text on Left */}
          <ul className='text-md lg:text-lg xl:text-xl text-gray-600 leading-relaxed'>
            <li className='mb-4 transition-colors hover:text-[#806044]'>
              <strong className='font-semibold text-gray-800'>Quality:</strong> We curate only the best books to ensure quality and satisfaction.
            </li>
            <li className='mb-4 transition-colors hover:text-[#806044]'>
              <strong className='font-semibold text-gray-800'>Customer Satisfaction:</strong> Our customers are at the heart of everything we do.
            </li>
            <li className='mb-4 transition-colors hover:text-[#806044]'>
              <strong className='font-semibold text-gray-800'>Passion for Books:</strong> We love books, and we want to share that passion with you.
            </li>
            <li className='transition-colors hover:text-[#806044]'>
              <strong className='font-semibold text-gray-800'>Accessibility:</strong> Our platform makes it easy to find and purchase books from anywhere in the world.
            </li>
          </ul>
        </div>
      </section>

      {/* Meet the Team */}
      <section className='w-full bg-white p-8 lg:p-10 xl:p-12 rounded-lg shadow-lg text-center mb-8 transition-all duration-300 hover:shadow-2xl'>
        <h2 className='text-3xl lg:text-4xl font-bold mb-6' style={{ color: '#806044' }}>Meet the Team & Made By</h2>
        <div className='flex justify-center flex-wrap gap-6'>
          {/* Team Member 1 */}
          <div className='flex flex-col items-center cursor-pointer hover:scale-105 transform transition-all'>
            <img
              src='https://via.placeholder.com/100'
              alt='Team Member 1'
              className='rounded-full mb-3 shadow-md transition-shadow hover:shadow-lg'
            />
            <h3 className='text-lg lg:text-xl font-semibold text-gray-700'>Sanaya Gupta</h3>
            <p className='text-sm lg:text-md text-gray-500'>UI UX Developer</p>
          </div>

          {/* Team Member 2 */}
          <div className='flex flex-col items-center cursor-pointer hover:scale-105 transform transition-all'>
            <img
              src='https://via.placeholder.com/100'
              alt='Team Member 2'
              className='rounded-full mb-3 shadow-md transition-shadow hover:shadow-lg'
            />
            <h3 className='text-lg lg:text-xl font-semibold text-gray-700'>Arjit Dutta</h3>
            <p className='text-sm lg:text-md text-gray-500'>Frontend Developer</p>
          </div>

          {/* Team Member 3 */}
          <div className='flex flex-col items-center cursor-pointer hover:scale-105 transform transition-all'>
            <img
              src='https://via.placeholder.com/100'
              alt='Team Member 3'
              className='rounded-full mb-3 shadow-md transition-shadow hover:shadow-lg'
            />
            <h3 className='text-lg lg:text-xl font-semibold text-gray-700'>Shubham Singh</h3>
            <p className='text-sm lg:text-md text-gray-500'>Full Stack Developer</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='w-full md:w-[70%] lg:w-[60%] xl:w-[50%] text-center'>
        <p className='text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed'>
          At <span className='font-semibold' style={{ color: '#806044' }}>Book Haven</span>, we believe in the power of books to educate, entertain, and inspire. Thank you for being a part of our journey!
        </p>
      </section>
    </div>
  );
}

export default About;
