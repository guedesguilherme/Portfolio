import React from 'react'

const SubTitle = ({ text, className }) => {
  return (
    <p className={`font-primary font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${className}`}>
      {text}
    </p>
  )
}

export default SubTitle
