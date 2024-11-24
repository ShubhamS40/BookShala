'use client';
import React, { useEffect, useState } from 'react';
import BookDeatil from '@/components/BookDeatil';
import AddCart from '@/components/AddCart';
import CustomerReview from '@/components/CustomerReview';

function Page({ params }: { params: { slug: string } }) {
  const [book, setBook] = useState<any>(null); // Set initial state to null
  const id = Number(params.slug); // Ensure ID is a number

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

  // Check if book data is available
  if (!book) {
    return <div>Loading...</div>; // Loading state
  }

  console.log("book",book);
  

  return (
    <div className='flex w-auto h-[100vh]'>
      <div className='w-[50%]'>
        {/* Pass the book data to BookDetail component */}
        <BookDeatil params={params} />
      </div>

      <div className='w-[50%]'>
        {/* Pass the price to AddCart component */}
        <AddCart price={book.Price} image={book.imageUrl} name={book.name} author={book.author} id={book.id} />
      </div>
    </div>
  );
}

export default Page;
