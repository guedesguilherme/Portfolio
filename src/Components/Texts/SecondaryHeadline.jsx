import React from 'react'

const SecondaryHeadline = ({ text, className}) => {
  return (
    <p className={`font-primary font-bold text-6xl ${className}`}>{text}</p>
  )
}

export default SecondaryHeadline