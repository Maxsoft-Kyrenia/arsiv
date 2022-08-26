import React from 'react'
import HeroSection from '../Components/HeroSection'
import MailSection from '../Components/MailSection'
import NumbersSection from '../Components/NumbersSection'
import Sectionfive from '../Components/Sectionfive'
import Sectionfour from '../Components/Sectionfour'
import Sectionnine from '../Components/Sectionnine'
import Sectionsix from '../Components/Sectionsix'
import Sectionthree from '../Components/Sectionthree'

const Homepage = () => {
  return (
    <div className='bg-black pt-16 font-raleway'>
      <HeroSection/>
      <NumbersSection/>
      <MailSection/>
      <Sectionthree/>
      <div className='bg-white'>
      <Sectionfour/>
      <Sectionfive/>
      <Sectionsix/>
      <Sectionnine/>
      </div>
    </div>
  )
}

export default Homepage