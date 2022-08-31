import React from 'react'
import HeroSection from '../Components/HomeComponents/HeroSection'
import MailSection from '../Components/HomeComponents/MailSection'
import NumbersSection from '../Components/HomeComponents/NumbersSection'
import Sectioneight from '../Components/HomeComponents/Sectioneight'
import Sectionfive from '../Components/HomeComponents/Sectionfive'
import Sectionfour from '../Components/HomeComponents/Sectionfour'
import Sectionnine from '../Components/HomeComponents/Sectionnine'
import Sectionseven from '../Components/HomeComponents/Sectionseven'
import Sectionsix from '../Components/HomeComponents/Sectionsix'
import Sectionthree from '../Components/HomeComponents/Sectionthree'

const Homepage = () => {

  return (
    <div className='bg-black pt-16 font-raleway'>
      {/*FIRST SECTION*/}
      <HeroSection/>
      
      {/*SECOND SECTION*/}
      <NumbersSection/>

      {/*THIRD SECTION*/}
      <MailSection/>

      {/*FOURTH SECTION*/}
      <Sectionthree/>

      {/*FIFTH SECTION*/}
      <div className='bg-white'>
      <Sectionfour/>

      {/*SIXTH SECTION*/}
      <Sectionfive/>

      {/*SEVENTH SECTION*/}
      <Sectionsix/>

      {/*EIGHT SECTION*/}
      <Sectionseven/>

      {/*NINTH SECTION*/}
      <Sectioneight/>

      {/*TENTH SECTION*/}
      <Sectionnine/>
      </div>
    </div>
  )
}

export default Homepage