import React, { useEffect } from 'react'
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
import CookieConsent from 'react-cookie-consent'
import Aos from 'aos'
import "aos/dist/aos.css"
import { Helmet } from 'react-helmet';

const Homepage = () => {

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div className='bg-black pt-16 font-raleway'>
       <Helmet>
        <title>Home</title>
      </Helmet>
      {/*FIRST SECTION*/}
      <HeroSection className='motion-safe:animate-fadeIn'/>
      
      {/*SECOND SECTION*/}
      <NumbersSection className='motion-safe:animate-fadeIn'/>

      {/*THIRD SECTION*/}
      <MailSection data-aos="fade-up" className='motion-safe:animate-fadeIn'/>

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

      <CookieConsent debug={true} className='motion-safe:animate-fadeIn'>
      By clicking “Accept All Cookies”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.
      </CookieConsent >
      </div>
    </div>
  )
}

export default Homepage