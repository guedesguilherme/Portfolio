import React from 'react'

const Headline = ({ text, className}) => {
  return (
    <p className={`font-primary font-bold text-8xl ${className}`}>{text}</p>
  )
}

export default Headline