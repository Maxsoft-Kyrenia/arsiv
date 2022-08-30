import React from 'react'
import sectionsevenbg from '../../assets/sectionsevenbg.png'

const Sectionnine = () => {
  return (
    <div className='pt-20 md:pr-20 md:pl-20 md:px-0 px-4 pb-20'>
        <div className='bg-sectionfourbackground rounded-md md:flex'>
             <div className='w-[100%] md:p-16 p-3'>
                 <h4 className='text-sectionthreeheader text-2xl font-bold'>Hemen Şimdi Kolay bir Şekilde 
                 Demo Hesap Oluşturun.</h4>
                 <p className='mt-3'>
                 Lorem ipsum dolor sit amet, consetetur 
                 sadipscing elitr, sed diam nonumy eirmod tempor 
                 invidunt ut labore et dolore magna aliquyam erat.
                 </p>
                 <button
                   className='bg-gradient-to-r from-fromdark to-tolight hover:bg-gradient-to-l p-4 mt-6 text-white font-semibold rounded-md'
                   >
                       Demo Hesap Olustur
                   </button>
             </div>
             <div className='md:block hidden'>
                 <div className='w-[100%] float-right'>
                     <img
                     className='w-[70%] float-right'
                     src={sectionsevenbg}
                     alt=''
                     />
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Sectionnine