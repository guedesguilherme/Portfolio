import React from 'react'

const Ballons = ({ text, className}) => {
  return (
    <button className='bg-lightGray font-primary 
    text-smoke px-[32px] 
    py-[10px] text-lg 
    border-2 border-style: 
    solid font-semibold rounded-3xl 
    hover:bg-smoke 
    hover:border-primary_Purple 
    hover:text-primaryPurple 
    Gtransition-all duration-300'> {text}
    </button>
  )
}

export default Ballons