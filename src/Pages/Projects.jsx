import React from 'react'
import SecondaryHeadline from '../Components/Texts/SecondaryHeadline'
import Card from '../Components/Utilities/Card'

const Projects = () => {
  return (
    <section id='about' className='bg-darkGray w-full py-[200px] flex items-center justify-center'>
      
      <div className='max-w-[80%] w-full mx-auto flex flex-col lg:flex-row items-center gap-12'>
        
        <div className='flex flex-col gap-24'>
            <div className="flex gap-2">
                <SecondaryHeadline text="Meus" className="text-smoke"/>
                <SecondaryHeadline text="Projetos" className="text-primaryPurple" />
            </div>

            <div className='flex flex-wrap gap-x-16 gap-y-12'>
                <Card imageUrl=".././public/img/logo.svg" altText="Alternative Text" title="Projeto 01" description="Descrição do Projeto 01" link="https://www.google.com.br"/>
                <Card imageUrl=".././public/img/logo.svg" altText="Alternative Text" title="Projeto 01" description="Descrição do Projeto 01" link="https://www.google.com.br"/>
                <Card imageUrl=".././public/img/logo.svg" altText="Alternative Text" title="Projeto 01" description="Descrição do Projeto 01" link="https://www.google.com.br"/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Projects