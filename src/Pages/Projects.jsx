import React from 'react'
import SecondaryHeadline from '../Components/Texts/SecondaryHeadline'
import Card from '../Components/Utilities/Card'

const Projects = () => {
  return (
    <section id='projects' className='bg-darkGray w-full py-[200px] flex items-center justify-center'>
      
      <div className='max-w-[80%] w-full mx-auto flex flex-col lg:flex-row items-center gap-12'>
        
        <div className='flex flex-col gap-24'>
            <div className="flex gap-2">
                <SecondaryHeadline text="Meus" className="text-smoke"/>
                <SecondaryHeadline text="Projetos" className="text-primaryPurple" />
            </div>

            <div className='flex flex-wrap gap-x-16 gap-y-12'>
                <Card imageUrl="/img/infracall-logo.svg" altText="Infra Call" title="InfraCall" 
                description="Gerenciador de chamados feito com React, Node e MySQL. O projeto permite adicionar
                e gerenciar chamados com tipos de usuários diferentes." link="https://github.com/guedesguilherme/InfraCall"/>
                <Card imageUrl="/img/farmafacil-logo.svg" altText="Farma Fácil" title="FarmaFácil" description="Marketplace para farmácias focado no público idoso. 
                Projeto feito com React, Node e MongoDB. Com práticas de Scrum, CI/CD e testes automatizados" link="https://github.com/guedesguilherme/FarmaFacil"/>
                <Card imageUrl="/img/logo.svg" altText="Comming Soon" title="Comming Soon" description="..." link="https://github.com/guedesguilherme/"/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Projects