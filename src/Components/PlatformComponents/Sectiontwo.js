import React, { useEffect } from 'react'
import plat_two_scene from '../../assets/plat_two_scene.svg'
import Aos from 'aos'
import "aos/dist/aos.css"

const Sectiontwo = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div className='bg-white mb-40 text-black font-raleway'>
    <div className='md:flex md:mx-32 pt-20'>
         <div className='md:px-5 px-3'>

             <div className='md:w-[40%]'>
              <h4 className='text-3xl font-bold'>
              Join Forex Web with 
              Odea FX!
              </h4>
             </div>

             <p className='md:w-[70%]'>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa
             </p>

         </div>
         <div>
             <img
             data-aos="fade-up"
             className='md:mr-10 md:mt-0 mt-10'
             src={plat_two_scene}
             alt=''
             />
         </div>
    </div>
</div>
  )
}

export default Sectiontwo