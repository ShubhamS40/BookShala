import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div className='text-6xl flex-c font-bold '><h1>Book page</h1>
    
    <Link href={"/"}><button className='text-lg'> home button</button></Link>
    </div>

  )
}

export default page