import React from 'react'



function Button({name,handleClick}:any) {
  return (
    <button
    onClick={handleClick}
    type="submit"
    className="w-full px-4 py-2 sm:px-6 sm:py-3 bg-[#806044] text-white font-bold rounded-lg hover:bg-[#6e5036] focus:outline-none focus:ring-2 focus:ring-[#6e5036] transition duration-300 ease-in-out"
  >
        {name}
  </button>
  )
}

export default Button