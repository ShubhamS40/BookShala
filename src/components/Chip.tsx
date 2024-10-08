import React from 'react'

function Chip({name}) {
  return (
    <div
    className='bg-[#806044] hover:bg-white hover:text-[#806044] hover:border-2 text-white pt-2 pb-2 px-5 py-5 rounded-lg  cursor-pointer'>{name}</div>
  )
}

export default Chip