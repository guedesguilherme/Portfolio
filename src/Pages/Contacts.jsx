import React from 'react'
import SecondaryHeadline from '../Components/Texts/SecondaryHeadline'
import ContactLink from '../Components/Texts/ContactLink'

const Contacts = () => {
  return (
    <section id='about' className='bg-mediumGray w-full py-[200px] flex items-center justify-center'>
      
      <div className='max-w-[80%] w-full mx-auto flex flex-col lg:flex-row items-center gap-12'>
      <div className="flex gap-2">
            <SecondaryHeadline text="Entre em" className="text-smoke"/>
            <SecondaryHeadline text="Contato" className="text-primaryPurple" />
      </div>

      <div>
        <ContactLink text="https://github.com/guedesguilherme" link="https://github.com/guedesguilherme"/>
      </div>
      </div>
    </section>
  )
}

export default Contacts