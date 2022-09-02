import React, { useEffect } from 'react'
import corporatemanpng from '../../assets/corporatemanpng.png'
import guvenicons from '../../assets/guvenicons.svg'
import ozsermayeicon from '../../assets/ozsermayeicon.svg'
import deneyimiconsi from '../../assets/deneyimiconsi.svg'
import alsaticons from '../../assets/alsaticons.svg'
import Aos from 'aos'
import "aos/dist/aos.css"

const Sectionfive = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
    <div data-aos="fade-up" className='bg-white md:px-20 px-3 md:mt-32 mt-0 motion-safe:animate-fadeIn'>
         <div className='bg-gradient-to-r from-fromdark to-tolight flex relative w-[100%] md:mt-60 mt-20 h-[160%] pt-10 md:px-12 px-5 pb-32 rounded-md'>
        <div data-aos="fade-right" className='md:w-60% md:min-w-[50%] md:block hidden'>
                <img
                className='absolute -top-[72px] w-[40%]'
                src={corporatemanpng}
                alt='image'
                />
        </div>
            <div className='md:w-[80%] md:min-w-[50%]'>
            <div className=' text-white'>
               <h4 className='font-semibold text-2xl'>Zwei flinke Boxer jagen die quirlige Eva und.</h4>
               <p>Zwei flinke Boxer jagen die quirlige Eva und ihren Mops durch Sylt. Franz jagt im komplett verwa.</p>
              </div>
             <div className='text-white'>
             <div className='md:flex mt-10'>
             <div className='flex items-start mx-0 md:mt-0 mt-8'>
               <img
                        className=' mr-5 bg-icon rounded-[28px] p-4 opacity-80 md:w-[66%]'
                        src={guvenicons}
                        alt=''
                        />
                      <div>
                          <h4 className='text-base font-semibold'>Güven</h4>
                          <p className='text-sm'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                      </div>
                  </div>
                  <div className='flex items-start mx-0 md:mt-0 mt-8'>
               <img
                        className=' mr-5 bg-icon rounded-[28px] p-4 opacity-80 md:w-[66%]'
                        src={ozsermayeicon}
                        alt=''
                        />
                      <div>
                          <h4 className='text-xl font-semibold'>Güçlü özsermaye yapısı</h4>
                          <p className='text-sm'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                      </div>
                  </div>
              </div>
              <div className='md:flex mt-4'>
              <div className='flex items-start md:mt-0 mt-8'>
               <img
                        className=' mr-5 bg-icon rounded-[28px] p-4 opacity-80 md:w-[66%]'
                        src={deneyimiconsi}
                        alt=''
                        />
                      <div>
                          <h4 className='text-base font-semibold'>Deneyim</h4>
                          <p className='text-sm'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                      </div>
                  </div>
                  <div className='flex items-start md:mt-0 mt-8'>
               <img
                        className=' mr-5 bg-icon rounded-[28px] p-4 opacity-80 md:w-[66%]'
                        src={alsaticons}
                        alt=''
                        />
                      <div>
                          <h4 className='text-base font-semibold'>Al/Sat Sinyal Servisi</h4>
                          <p className='text-sm'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                      </div>
                  </div>
              </div>
             </div>
            </div>
         </div>
    </div>
  )
}

export default Sectionfive