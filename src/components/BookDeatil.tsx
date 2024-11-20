'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface PageProps {
    params: {
      slug: string;
    };
  }

function BookDetail({ params }: PageProps) {
    const [readMore, setReadMore] = useState(false);
    const [book, setBook] = useState<detail | null>(null); // Type the book state with detail interface or null
  
    const id =  Number(params.slug)
    
    
    

    

    interface detail {
        name: string;
        imageUrl: string;
        description: string;
    }
    console.log(id);
    
   
    useEffect(() => {
        if (id) {
            // Fetch book data when ID is available
            const fetchBookData = async () => {
                try {
                    const response = await fetch(`/api/bookdata/${id}`);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    setBook(data); // Set the book data to state
                } catch (error) {
                    console.error('Failed to fetch book data:', error);
                }
            };

            fetchBookData();
        }
    }, [id]); // Fetch when ID changes

    if (!book) {
        return <div>Loading...</div>; // Show a loading state while fetching data
    }

    return (
        <div className='h-screen mt-5 flex justify-center items-center'>
            <div className='h-[100vh] border-2 w-full md:w-[60%] lg:w-[90%] rounded-lg flex flex-col items-center bg-white shadow-lg'>
                
                {/* Title Section */}
                <div className='w-full p-5 flex justify-between items-center'>
                    <h1 className='text-2xl font-bold'>{book.name}</h1>
                </div>

                {/* Book Image Placeholder */}
                <div className='h-[50vh] w-[80%] mt-4 bg-gray-300 flex items-center justify-center'>
                    <img src={book.imageUrl || `https://via.placeholder.com/300?text=Book+Cover`} alt="Book Cover" className='h-full object-cover' />
                </div>

                {/* Book Description */}
                <div className='w-[90%] mt-4'>
                    <p className={`text-gray-700 text-sm leading-relaxed ${!readMore && 'line-clamp-4'}`}>
                        {book.description || 'No description available.'}
                    </p>
                </div>

                {/* Read More Button */}
                <div className='w-full mt-4 mb-6 flex justify-center'>
                    <button 
                        onClick={() => setReadMore(!readMore)} 
                        className='bg-[#806044] text-white py-2 px-6 rounded-lg transition-all duration-300'
                    >
                        {readMore ? 'Read Less' : 'Read More'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BookDetail;
