import React from 'react'
import HeroSection from '../Components/CorporateComponent/HeroSection'
import NumbersSection from '../Components/CorporateComponent/NumbersSection'
import SectionFour from '../Components/CorporateComponent/SectionFour'
import Sectiontwo from '../Components/CorporateComponent/Sectiontwo'

const CorporatePage = () => {
  return (
    <div className='font-raleway'>
      {/*FIRST SECTION*/}
        <HeroSection/>

        {/*SECOND SECTION*/}
        <Sectiontwo/>

        {/*THIRD SECTION*/}
        <NumbersSection/>

        {/*FOURTH SECTION*/}
        <SectionFour/>
    </div>
  )
}

export default CorporatePage