import React from 'react';

const SecondaryBtn = ({ text, onClick, className, downloadUrl }) => {
  const handleClick = () => {
    if (downloadUrl) {
      // Cria um link temporário para o download
      const link = document.createElement('a');
      link.href = downloadUrl; // Caminho do arquivo
      link.download = text + '.pdf'; // Nome do arquivo para download (pode personalizar)
      document.body.appendChild(link); // Adiciona o link ao DOM
      link.click(); // Simula o clique no link
      document.body.removeChild(link); // Remove o link do DOM
    } else {
      // Executa a função onClick, se fornecida
      if (onClick) onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className='
        bg-lightGray font-primary text-smoke 
        px-6 sm:px-8 md:px-10 lg:px-10 
        py-2 sm:py-3 md:py-4 
        text-base sm:text-lg md:text-xl 
        border-2 border-solid 
        font-semibold rounded-full 
        hover:bg-smoke 
        hover:border-lightGray 
        hover:text-lightGray 
        transition-all duration-300
        cursor-pointer'
    >
      {text}
    </button>
  );
};

export default SecondaryBtn;