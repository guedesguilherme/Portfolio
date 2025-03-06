import React from 'react'

const Ballons = ({ text, className }) => {
  return (
    <button className={`
      bg-lightGray font-primary text-smoke 
      px-6 sm:px-8 md:px-10 lg:px-10 
      py-2 sm:py-3 md:py-4 
      text-base sm:text-lg md:text-xl 
      border-2 border-solid 
      font-semibold rounded-full 
      hover:bg-smoke 
      hover:border-primaryPurple 
      hover:text-primaryPurple 
      transition-all duration-300 ${className}
    `}>
      {text}
    </button>
  )
}

export default Ballons
