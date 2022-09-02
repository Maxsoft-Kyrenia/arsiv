import React from 'react'
import HeroSection from '../Components/PlatformComponents/HeroSection'
import Sectionthree from '../Components/PlatformComponents/SectionThree'
import Sectiontwo from '../Components/PlatformComponents/Sectiontwo'

const PlatformPage = () => {
  return (
    <div className='bg-white'>
         <HeroSection/>
         <Sectiontwo/>
         <div className='bg-black'>
         <Sectionthree/>
         </div>
    </div>
  )
}

export default PlatformPage