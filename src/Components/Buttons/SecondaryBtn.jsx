import React from 'react'

const SecondaryBtn = ( {text, onClick, className}) => {
  return (
    <button onClick={onClick} 
    className='bg-lightGray font-primary 
        text-smoke px-[32px] 
        py-[10px] text-lg 
        border-2 border-style: 
        solid font-bold rounded-3xl 
        border-lightGray
        hover:bg-smoke 
        hover:border-lighytGray 
        hover:text-lightGray 
        Gtransition-all duration-300
        cursor-pointer'
      >
        {text}
    </button>
  )
}

export default SecondaryBtn