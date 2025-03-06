import React from 'react'

const Headline = ({ text, className }) => {
  return (
    <p className={`font-primary font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl ${className}`}>
      {text}
    </p>
  )
}

export default Headline
