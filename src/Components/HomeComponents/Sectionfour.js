import React from 'react'
import homescfourimg from '../../assets/homescfourimg.png'

const Sectionfour = () => {
  return (
    <div className='bg-sectionfourbackground pt-16 pb-'>
         <div className='md:flex md:mx-20'>
             <div className='md:mr-40 md:m-20 md:w-[90%] mx-8'>
                   <div className=''>
                       <h1 className='text-3xl font-extrabold text-sectionthreeheader'>Zwei flinke Boxer jagen die quirlige Eva und.</h1>
                   </div>
                   <p className=' mt-3 text-base font-medium'>
                   Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                   eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  
                   voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet 
                   clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy  
                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam 
                    voluptua. At vero eos et accusam et justo duo
                   </p>

                   <button
                   className='bg-gradient-to-r from-fromdark to-tolight hover:bg-gradient-to-l p-4 mt-6 text-white font-semibold rounded-md'
                   >
                       Demo Hesap Olustur
                   </button>
             </div>
             <div className='flex justify-center items-center text-center mt-10'>
                <img
                className='float-right w-[90%]'
                src={homescfourimg}
                alt=''
                /> 
             </div>
         </div>
    </div>
  )
}

export default Sectionfour