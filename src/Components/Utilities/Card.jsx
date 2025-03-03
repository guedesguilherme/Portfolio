import React from 'react'

const Card = ({ imageUrl, altText, title, description }) => {
  return (
    <div className="flex flex-col items-center w-[300px] h-[530px] bg-darkGray rounded-3xl">
      <img
        src={imageUrl}
        alt={altText}
        className="p-5 w-[250] h-[250] object-cover rounded-x1" 
      />
      <div className="p-4">
        <div>
            <p className="text-3xl font-bold text-smoke">{title}</p>
        </div>
        <p className="text-smoke mt-3 font-regular">{description}</p>
      </div>
    </div>
  )
}

export default Card