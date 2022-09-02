import React, { useEffect } from 'react'
import nineimg from '../../assets/nineimg.jpg'
import newtradingicon from '../../assets/newtradingicon.svg'
import Aos from 'aos'
import "aos/dist/aos.css"

const Sectionseven = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, []);
  return (
    <div data-aos="fade-up" className='md:p-20 p-4 mt-10 motion-safe:animate-fadeIn'>
        <div className='md:flex bg-sectionfourbackground'>
             <div className='md:w-[60%] md:p-10 p-4'>
                <div className='md:w-[60%]'>
                    <h2 className='text-buttonback text-3xl font-semibold'>Zwei flinke Boxer jagen 
                    die quirlige Eva und.</h2>
                </div>
                <p className='mt-2 text-blue font-medium'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>

                <section className='flex mt-10 items-start'>
                    <img
                    className=' mr-3'
                    src={newtradingicon}
                    alt=''
                    />
                    <p className='text-blue font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </section>
                <section className='flex mt-5 items-start'>
                    <img
                    className=' mr-3'
                    src={newtradingicon}
                    alt=''
                    />
                    <p className='text-blue font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </section>
                <section className='flex mt-5 items-start'>
                    <img
                    className=' mr-3'
                    src={newtradingicon}
                    alt=''
                    />
                    <p className='text-blue font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </section>
             </div>
             <div className='md:w-[40%]'>
                  <img
                  className='h-88'
                  src={nineimg}
                  alt=''
                  />
             </div>
        </div>
    </div>
  )
}

export default Sectionseven