import React from 'react'
import HeroSection from '../Components/HeroSection'
import MailSection from '../Components/MailSection'
import NumbersSection from '../Components/NumbersSection'
import Sectionfour from '../Components/Sectionfour'
import Sectionthree from '../Components/Sectionthree'

const Homepage = () => {
  return (
    <div className='bg-black pt-16 font-raleway'>
      <HeroSection/>
      <NumbersSection/>
      <MailSection/>
      <Sectionthree/>
      <Sectionfour/>
    </div>
  )
}

export default Homepage