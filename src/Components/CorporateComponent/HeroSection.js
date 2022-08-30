import React from 'react'
import abouttwoimg from '../../assets/abouttwoimg.jpg'
import abouttopimg from '../../assets/abouttopimg.jpg'

const HeroSection = () => {
  return (
    <div className='bg-newblack text-white'>
       <div className='md:flex w-[100%]'>

            <div className='w-[100%] md:px-20 px-5 pt-20 pb-20'>
                <div className='w-[60%]'>
                <h1 className='font-semibold text-2xl'>Zwei flinke Boxer jagen die 
quirlige Eva und.</h1>
                </div>
                <p className='mt-4'>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem 
                ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos 
                et accusam et justo duo
                </p>
            </div> 
            <div className='w-[100%] h-fit'>
                <img
                className=''
                src={abouttopimg}
                alt=''
                />
            </div> 
       </div>
    </div>
  )
}

export default HeroSection