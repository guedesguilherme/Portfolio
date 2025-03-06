import React from 'react'

const SecondaryHeadline = ({ text, className }) => {
  return (
    <p className={`font-primary font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${className}`}>
      {text}
    </p>
  )
}

export default SecondaryHeadline
