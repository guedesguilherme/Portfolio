import React from 'react';

const ContactLink = ({ url, text, image, altText, className }) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`flex items-center gap-4 font-primary text-smoke font-bold 
                  text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                  hover:text-primaryPurple transition-all duration-200 ${className}`}
    >
      {image && (
        <img 
          src={image} 
          alt={altText || text} 
          className="w-6 sm:w-8 md:w-10 lg:w-12 h-auto object-contain"
        />
      )}
      <span>{text}</span>
    </a>
  );
};

export default ContactLink;
