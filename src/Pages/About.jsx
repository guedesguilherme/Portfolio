import React from 'react'
import SecondaryHeadline from '../Components/Texts/SecondaryHeadline'
import Ballons from '../Components/Utilities/Ballons'
import SubTitle from '../Components/Texts/SubTitle'
import Paragraph from '../Components/Texts/Paragraph'

const About = () => {
  return (
    <section id='about' className='bg-mediumGray w-full py-[200px] flex items-center justify-center'>
      
      <div className='max-w-[80%] w-full mx-auto flex flex-col lg:flex-row items-center gap-12'>
        
        {/* Texto */}
        <div className="flex-1">
          <div className="flex gap-2">
            <SecondaryHeadline text="Sobre" className="text-smoke"/>
            <SecondaryHeadline text="Mim" className="text-primaryPurple" />
          </div>

          <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis..."
          className="opacity-75 text-smoke"/>

          <div className='mt-20 flex flex-col gap-12'>
            {/* Hard Skills */}
            <div>
              <div className="flex gap-2">
                <SubTitle text="Hard" className="text-smoke"/>
                <SubTitle text="Skills" className="text-primaryPurple" />
              </div>
              <div className='mt-8 flex flex-wrap gap-x-4 gap-y-3'>
                <Ballons text="NodeJS"/> <Ballons text="ReactJS"/> <Ballons text="MySQL"/>
                <Ballons text="MongoDB"/> <Ballons text="API RESTful"/> <Ballons text="HTML & CSS"/>
                <Ballons text="Git & Github"/> <Ballons text="Project Management"/>
              </div>
            </div>   

            {/* Soft Skills */}
            <div>
              <div className="flex gap-2">
                <SubTitle text="Soft" className="text-smoke"/>
                <SubTitle text="Skills" className="text-primaryPurple" />
              </div>
              <div className='mt-8 flex flex-wrap gap-x-4 gap-y-3'>
                <Ballons text="Comunicação"/> <Ballons text="Trabalho em equipe"/> <Ballons text="Resolução de problemas"/>
                <Ballons text="Adaptabilidade"/> <Ballons text="Pensamento crítico"/>
              </div>
            </div>
          </div>
        </div>

        {/* Imagem */}
        <div className="flex-1 flex justify-center">
          <img src="../public/img/presentation.svg" alt="" className="w-full max-w-[500px] h-auto"/>
        </div>

      </div>
    </section>
  )
}

export default About
