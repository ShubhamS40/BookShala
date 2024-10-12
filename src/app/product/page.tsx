import React from 'react'
import BookDeatil from '@/components/BookDeatil'
import AddCart from '@/components/AddCart'
import CustomerReview from '@/components/CustomerReview'

function page() {
  return (
    <div className='flex w-auto h-[100vh]'>

    <div className='w-[50%] '>
    <BookDeatil />
    </div>

     <div className='w-[50%]  '>
        <AddCart/>
       
     </div>
     
    </div>
    
  )
}

export default page