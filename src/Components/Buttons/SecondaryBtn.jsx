import React from 'react'

const SecondaryBtn = ( {text, onClick, className}) => {
  return (
    <button onClick={onClick} 
    className='
        bg-lightGray font-primary text-smoke 
        px-6 sm:px-8 md:px-10 lg:px-10 
        py-2 sm:py-3 md:py-4 
        text-base sm:text-lg md:text-xl 
        border-2 border-solid 
        font-semibold rounded-full 
        hover:bg-smoke 
        hover:border-lightGray 
        hover:text-lightGray 
        transition-all duration-300
        cursor-pointer'
      >
        {text}
    </button>
  )
}

export default SecondaryBtn