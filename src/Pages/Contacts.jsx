import React from 'react';
import SecondaryHeadline from '../Components/Texts/SecondaryHeadline';
import ContactLink from '../Components/Texts/ContactLink';
import SecondaryBtn from '../Components/Buttons/SecondaryBtn';

const Contacts = () => {
  return (
    <section id='contacts' className='bg-mediumGray w-full py-[200px]'>
      <div className='max-w-[80%] w-full mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-12'>
        
        {/* Texto e Links de Contato */}
        <div className="flex-1 flex flex-col gap-8">
          <div className="flex gap-2">
            <SecondaryHeadline text="Entre em" className="text-smoke"/>
            <SecondaryHeadline text="Contato" className="text-primaryPurple" />
          </div>

          <div className="flex flex-col gap-6">
            <ContactLink 
              url="https://github.com/guedesguilherme"
              text="Github"
              image="/img/github-icon.svg"
              altText="Github"
            />
            <ContactLink 
              url="https://linkedin.com/in/guedesguilherme"
              text="LinkedIn"
              image="/img/linkedin-icon.svg"
              altText="LinkedIn"
            />
            <ContactLink 
              url="mailto:gryan.guedes@gmail.com"
              text="gryan.guedes@gmail.com"
              image="/img/gmail-icon.svg"
              altText="E-mail"
            />
          </div>

          <div className="mt-8">
            <SecondaryBtn text="Download CV" downloadUrl="/docs/guilherme-guedes-cv.pdf"/>
          </div>
        </div>

        {/* Imagem */}
        <div className="flex-1 flex justify-center">
          <img src="/img/messaging.svg" alt="" className="w-full max-w-[500px] h-auto"/>
        </div>

      </div>
    </section>
  );
};

export default Contacts;