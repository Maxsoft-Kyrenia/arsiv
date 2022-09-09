import React from 'react'
import platfromsconeright from '../../assets/platfromsconeright.png'

const HeroSection = () => {
  return (
    <div className='bg-platformbg bg-cover mb-20 text-white font-raleway'>
        <div className='md:flex md:mx-32 pt-20'>
             <div className='md:px-10 px-5'>

                 <div className='md:w-[40%]'>
                  <h4 className='text-3xl font-bold'>
                  Join Forex Web with 
                  Odea FX
                  </h4>
                 </div>

                 <p className='md:w-[70%]'>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa
                 </p>

             </div>
             <div>
                 <img
                 className='md:mr-10 md:mt-0 mt-10'
                 src={platfromsconeright}
                 alt=''
                 />
             </div>
        </div>
    </div>
  )
}

export default HeroSection