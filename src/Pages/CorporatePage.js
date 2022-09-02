import React, { useEffect } from 'react'
import HeroSection from '../Components/CorporateComponent/HeroSection'
import NumbersSection from '../Components/CorporateComponent/NumbersSection'
import SectionFour from '../Components/CorporateComponent/SectionFour'
import Sectiontwo from '../Components/CorporateComponent/Sectiontwo'
import Aos from 'aos'
import "aos/dist/aos.css"

const CorporatePage = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div className='font-raleway'>

      <div data-aos="fade-up">
      {/*FIRST SECTION*/}
        <HeroSection/>

      </div>


<div data-aos="fade-up">

        {/*SECOND SECTION*/}
        <Sectiontwo/>

</div>


<div data-aos="fade-up">

        {/*THIRD SECTION*/}
        <NumbersSection/>

</div>


<div>

        {/*FOURTH SECTION*/}
        <SectionFour/>

</div>
    </div>
  )
}

export default CorporatePage