import React from 'react'

const PrimaryBtn = ({ text, onClick, className}) => {
  return (
    <button 
        onClick={onClick} 
        className='bg-primaryPurple font-primary 
        text-smoke px-[32px] 
        py-[10px] text-lg 
        border-2 border-style: 
        solid font-bold rounded-3xl 
        border-primaryPurple
        hover:bg-smoke 
        hover:border-primaryPurple 
        hover:text-primaryPurple 
        transition-all duration-300
        cursor-pointer'
    > 
        {text}
    </button>
  )
}

export default PrimaryBtn