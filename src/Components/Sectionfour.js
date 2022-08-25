import React from 'react'
import homescfourimg from '../assets/homescfourimg.png'

const Sectionfour = () => {
  return (
    <div className='bg-sectionfourbackground pt-20'>
         <div className='flex mx-20'>
             <div className='mr-40 m-20 w-[90%]'>
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
                   className='bg-buttonback p-4 mt-4 text-white font-semibold rounded-md'
                   >
                       Demo Hesap Olustur
                   </button>
             </div>
             <div>
                <img
                className='float-right'
                src={homescfourimg}
                alt=''
                /> 
             </div>
         </div>
    </div>
  )
}

export default Sectionfour