import React, { useEffect } from 'react'
import HeroSection from '../Components/PlatformComponents/HeroSection'
import Sectionthree from '../Components/PlatformComponents/SectionThree'
import Sectiontwo from '../Components/PlatformComponents/Sectiontwo'
import Aos from 'aos'
import "aos/dist/aos.css"


const PlatformPage = () => {

  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div className='bg-white'>
      <div data-aos="fade-up">

         <HeroSection/>
      </div>
      <div data-aos="fade-up">

         <Sectiontwo/>
      </div>
         <div data-aos="fade-up" className='bg-black'>
         <Sectionthree/>
         </div>
    </div>
  )
}

export default PlatformPage