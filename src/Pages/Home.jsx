import React from 'react';
import Headline from '../Components/Texts/Headline';
import PrimaryBtn from '../Components/Buttons/PrimaryBtn';
import SecondaryBtn from '../Components/Buttons/SecondaryBtn';

const Home = () => {
  return (
    <section id='home' className='bg-darkGray w-full py-[200px]'>
      <div className='max-w-[80%] w-full mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-12'>
        
        {/* Texto */}
        <div className='flex-1 flex flex-col gap-8'>
          <div>
            <Headline text="Software" className="text-smoke"/> 
            <Headline text="Developer" className="text-primaryPurple"/>
          </div>

          <div className='flex flex-wrap gap-x-4 gap-y-3'>
            <PrimaryBtn text="Entre em contato"/>
            <SecondaryBtn text="Download CV"/>
          </div>  
        </div>

        {/* Imagem */}
        <div className="flex-1 flex justify-center">
          <img src="/img/website.svg" alt="" className="w-full max-w-[500px] h-auto"/>
        </div>

      </div>
    </section>
  );
};

export default Home;