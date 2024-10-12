'use client'
import React, { useState } from 'react';

// TypeScript interface for review data
interface Review {
  name: string;
  reviewText: string;
  rating: number;
}

function CustomerReview() {
  const [rating, setRating] = useState(5);  // Default rating
  const [reviewText, setReviewText] = useState('');
  const [name, setName] = useState('');
  const [reviews, setReviews] = useState<Review[]>([
    {
      name: 'Test',
      reviewText: 'Eeee',
      rating: 5
    }
  ]);

  // Function to handle form submission
  const handleSubmitReview = () => {
    if (reviewText.trim() && name.trim()) {
      const newReview: Review = {
        name,
        reviewText,
        rating
      };

      setReviews([newReview, ...reviews]);  // Add new review to the list
      setReviewText('');  // Clear the input field
      setName('');
    } else {
      alert('Please enter your name and a review.');
    }
  };

  return (
    <div className='flex flex-col w-[85%] rounded-xl items-center p-6 bg-white'>
      {/* Review Form */}
      <h2 className='text-xl font-bold '>Give Your Review</h2>

      {/* Star Rating Display */}
      <div className='flex'>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-2xl cursor-pointer ${star <= rating ? 'text-yellow-500' : 'text-gray-400'}`}
            onClick={() => setRating(star)}  // Update the rating on click
          >
            ★
          </span>
        ))}
      </div>

      {/* Review Input */}
      <input
        type='text'
        placeholder='Write your review...'
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        className='w-full p-2 border  mb-2 rounded'
      />
      <input
        type='text'
        placeholder='Your Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='w-full p-2 border mb-2 rounded'
      />

      {/* Submit Button */}
      <button
        onClick={handleSubmitReview}
        className='bg-[#806044] text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition'
      >
        Submit Review
      </button>

      {/* Latest Reviews */}
      <h3 className='text-xl font-bold '>Latest Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index} className='w-full  bg-white rounded-lg shadow-md'>
          <p className='text-md font-semibold'>{review.reviewText}</p>
          <div className='flex'>
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className={`text-xl ${star <= review.rating ? 'text-yellow-500' : 'text-gray-400'}`}>
                ★
              </span>
            ))}
          </div>
          <p className='text-sm mt-2'>By: {review.name}</p>
        </div>
      ))}
    </div>
  );
}

export default CustomerReview;
