import React from 'react'

const SubTitle = ({ text, className}) => {
  return (
    <p className={`font-primary font-bold text-4xl ${className}`}>{text}</p>
  )
}

export default SubTitle