import React from 'react'

const Paragraph = ({ text, className }) => {
  return (
    <p className={`font-primary text-base sm:text-lg md:text-xl lg:text-2xl opacity-75 ${className}`}>
      {text}
    </p>
  )
}

export default Paragraph
