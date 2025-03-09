import React from 'react';

const ContactLink = ({ url, text, image, altText, className }) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`flex items-center gap-4 font-primary text-smoke font-bold 
                  sm:text-2xl md:text-3xl lg:text-4xl 
                  hover:text-primaryPurple transition-all duration-200 
                  break-words ${className}`} // Adicionado break-words
    >
      {image && (
        <img 
          src={image} 
          alt={altText || text} 
          className="w-6 sm:w-8 md:w-10 lg:w-12 h-auto object-contain"
        />
      )}
      <span className="break-words">{text}</span> {/* Adicionado break-words */}
    </a>
  );
};

export default ContactLink;