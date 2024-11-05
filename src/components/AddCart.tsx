import React from 'react'
import CustomerReview from './CustomerReview'

function AddCart({price}:any) {
  return (
    <div className='flex flex-col  justify-around p-2 items-center h-[120vh] '>
    <div className='w-[500px]  bg-white rounded-lg border-2 shadow-md p-6'>
      {/* Price */}
      <div className='text-gray-800 text-lg font-semibold'>
        Price: <span className='font-bold'>Rs {price}</span>
      </div>
      
      <hr className='my-4' />

      {/* Quantity Selector */}
      <div className='text-gray-700 text-md mb-4'>
        <label htmlFor="quantity" className='block mb-2 font-semibold'>
          Select Quantity
        </label>
        <select
          id="quantity"
         
        
          className='border rounded p-2 focus:outline-none'
        >
          {[1, 2, 3, 4, 5].map(num => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      <hr className='my-4' />

      {/* Add to Cart Button */}
      <div className='flex justify-center'>
        <button
          
          className='bg-[#806044] text-white w-full py-2 rounded-lg font-bold hover:bg-gray-800 transition-all'
        >
          ADD TO CART
        </button>
      </div>
    </div>
   <div className='border-2 w-[85%] rounded-xl'>
   <CustomerReview/>
   </div>
  </div>
  )
}

export default AddCart