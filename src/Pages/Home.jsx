import React from 'react'
import Headline from '../Components/Texts/Headline'
import PrimaryBtn from '../Components/Buttons/primaryBtn'
import SecondaryBtn from '../Components/Buttons/SecondaryBtn'

const Home = () => {
  return (
    <div id='home' className='bg-darkGray w-full flex pt-[200px] pb-[200px] items-center justify-around'>
      <div className='flex flex-col bg-darkGray gap-20 items-start'>
        <div>
        <Headline text="Software" className="text-smoke"/> 
        <Headline text="Developer" className="text-primaryPurple"/>
        </div>

        <div className='flex gap-6'>
        <PrimaryBtn text="Entre em contato"/>
        <SecondaryBtn text="Download CV"/>
        </div>  
      </div>

      <div className="flex justify-start w-full max-w-[500px]">
        <img src="../public/img/website.svg" alt="" className="w-full h-auto"/>
      </div>
    </div>
  )
}

export default Home