import React from 'react'

const ContactLink = ({ link, text, className }) => {
  return (
    <a href={link} className={`
    target="_blank" 
    rel="noopener noreferrer" 
    font-primary 
    text-smoke 
    font-bold 
    text-2xl 
    sm:text-3xl 
    md:text-4xl 
    lg:text-5xl 
    hover:text-primaryPurple 
    transition-all
    duration-200
    ${className}`}>
        {text}
    </a>
  )
}

export default ContactLink