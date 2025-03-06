import React from 'react'

const Card = ({ imageUrl, altText, title, description, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="cursor-pointer flex flex-col items-center w-[300px] h-[530px] bg-mediumGray rounded-3xl p-6 shadow-mg shadow-smoke hover:shadow-xl hover:shadow-primaryPurple transition-shadow duration-300">
      
      <img
        src={imageUrl}
        alt={altText}
        className="w-[250px] h-[250px] object-cover rounded-xl mb-4" // Tamanho fixo e margem inferior
      />
      
      <div className="text-left w-full">
        {/* Título com padding igual e distância de 16px da imagem */}
        <p className="text-2xl font-bold text-smoke font-primary mb-4">{title}</p>

        {/* Descrição com padding igual e distância de 16px do título */}
        <p className="text-sm sm:text-base md:text-lg text-smoke font-primary">{description}</p>
      </div>

    </a>
  )
}

export default Card
