import Image from 'next/image';
import React from 'react';

function Advertisement() {
  return (
    <div className='h-[40vh] w-full bg-red-400 flex justify-center'>
      <div className='relative h-full w-[80%] bg-gray-500'>
        <Image
          src="https://img.freepik.com/free-photo/portrait-happy-woman-holding-placard-with-world-book-day-message_482257-84819.jpg"
          layout="fill" // Make the image cover the container
          className='object-cover ' // Align the image to the top to prevent cropping of the face
          alt='ok'
        />
      </div>
    </div>
  );
}

export default Advertisement;
