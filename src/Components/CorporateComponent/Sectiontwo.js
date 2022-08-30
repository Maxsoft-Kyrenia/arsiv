import React from 'react'
import abouttwoimg from '../../assets/abouttwoimg.jpg'


const Sectiontwo = () => {
  return (
    <div className='bg-white text-black md:p-20 p-4'>
       <div className='md:flex w-[100%]'>
            <div className='w-[100%] h-fit'>
                <img
                className=''
                src={abouttwoimg}
                alt=''
                />
            </div> 
            <div className='w-[100%] md:px-10 px-5 pt-10 pb-10'>
                <div className='w-[90%]'>
                <h1 className='font-semibold text-3xl text-sectionthreeheader'>Lorem ipsum dolor sit amet, 
consetetur sadipscing.</h1>
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
       </div>
    </div>
  )
}

export default Sectiontwo