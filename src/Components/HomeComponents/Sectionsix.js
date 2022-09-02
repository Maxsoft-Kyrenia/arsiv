import React, { useEffect } from 'react'
import hm_one_icon1 from '../../assets/hm_one_icon1.svg'
import hm_one_icon2 from '../../assets/hm_one_icon2.svg'
import hm_one_icon3 from '../../assets/hm_one_icon3.svg'
import hm_one_icon4 from '../../assets/hm_one_icon4.svg'
import Aos from 'aos'
import "aos/dist/aos.css"

const Sectionsix = () => {
   useEffect(() => {
      Aos.init({duration: 2000});
    }, []);
  return (
    <div data-aos="fade-up" className='bg-section-six bg-cover mt-20 md:p-12 p-2 pt-10 opacity-90 motion-safe:animate-fadeIn'>
         <div className='flex items-center justify-center text-center text-white'>
            <div className='md:w-[38%]'>
            <h4 className='text-2xl font-bold'>Lorem ipsum dolor sit amet, 
consetetur sadipscing.</h4>
            </div>
         </div>
         <div className='md:flex md:justify-between justify-center mt-10'>
                <section className='border border-white rounded-md p-5 text-white mx-2 flex flex-col items-center justify-center text-center'>
                     <span>
                        <img
                        className='text-center'
                        src={hm_one_icon1}
                        alt=''
                        />
                     </span>
                     <h4 className='mt-4 md:text-2xl text-xl font-bold '>
                     INVESTING
                     </h4>
                     <p className='mt-4'>
                     Lorem ipsum dolor sit amet, consectetur adipiscing 
                     elit, sed do eiusmod tempor incididunt ut labore 
                     et dolore magna aliqua. Ut enim ad minim veniam, 
                     quis nostrud exercitation ullamco laboris nisi ut
                     </p>
                </section>
                <section className='border border-white rounded-md md:p-5 p-2 text-white mx-2 flex flex-col items-center justify-center text-center md:mt-0 mt-4'>
                     <span>
                        <img
                        className='text-center'
                        src={hm_one_icon1}
                        alt=''
                        />
                     </span>
                     <h4 className='mt-4 md:text-2xl text-xl font-bold '>
                     TRADING
                     </h4>
                     <p className='mt-4'>
                     Lorem ipsum dolor sit amet, consectetur adipiscing 
                     elit, sed do eiusmod tempor incididunt ut labore 
                     et dolore magna aliqua. Ut enim ad minim veniam, 
                     quis nostrud exercitation ullamco laboris nisi ut
                     </p>
                </section>
                <section className='border md:mt-1 mt-3 border-white rounded-md p-5 text-white mx-2 flex flex-col items-center justify-center text-center'>
                     <span>
                        <img
                        className='text-center'
                        src={hm_one_icon1}
                        alt=''
                        />
                     </span>
                     <h4 className='mt-4 md:text-2xl text-xl font-bold '>
                     WEALTH MANAGEMENT
                     </h4>
                     <p className='mt-4'>
                     Lorem ipsum dolor sit amet, consectetur adipiscing 
                     elit, sed do eiusmod tempor incididunt ut labore 
                     et dolore magna aliqua. Ut enim ad minim veniam, 
                     quis nostrud exercitation ullamco laboris nisi ut
                     </p>
                </section>
                <section className='border md:mt-1 mt-3 border-white md:text-2xl text-xl rounded-md p-5 text-white mx-2 flex flex-col items-center justify-center text-center'>
                     <span>
                        <img
                        className='text-center'
                        src={hm_one_icon1}
                        alt=''
                        />
                     </span>
                     <h4 className='mt-4 md:text-2xl text-xl font-bold '>
                     SMART PORTFOLIO
                     </h4>
                     <p className='md:mt-4 mt-2 text-sm font-medium'>
                     Lorem ipsum dolor sit amet, consectetur adipiscing 
                     elit, sed do eiusmod tempor incididunt ut labore 
                     et dolore magna aliqua. Ut enim ad minim veniam, 
                     quis nostrud exercitation ullamco laboris nisi ut
                     </p>
                </section>
            </div>
    </div>
  )
}

export default Sectionsix