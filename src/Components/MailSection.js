import React from 'react'
import Background from '../assets/contactbg.jpg'
import '../assets/Mailsection.css';

const MailSection = () => {
  return (
    <div className='font-raleway px-20 bg-hero-pattern bg-cover pt-20 pb-20'>
         <div className='flex text-white z-10'>
           <div className='mt-20'>
           <div className='w-[34%]'>
               <h4 className='text-xl font-bold'>Formu Doldurun Ücretsiz Size Ulaşalım!</h4>
             </div>
             <p className='w-[80%] mt-2 text-base font-medium'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
             <div className='flex'>
               <section>

               </section>
             </div>
           </div>
           <div>
             <div className='bg-mailsection p-5'>
               <div className='flex'>
                <section className='text-start'>
                <label className='font-semibold'>Adınız</label>
               <input className='bg-buttonback p-2 mt-2 rounded-md mr-2 w-fit'/>
                </section>
                <section className='text-start'>
                <label className='font-semibold'>Soyadınız</label>
               <input className='bg-buttonback p-2 mt-2 rounded-md w-fit'/>
                </section>
               </div>
               <section className='text-start mt-2'>
                <label className=' font-semibold'>E-posta</label>
               <input className='bg-buttonback w-[96%] p-2 mt-2 rounded-md'/>
                </section>
                <section className='text-start mt-2'>
                <label className=' font-semibold'>Telefon</label>
               <input className='bg-buttonback w-[96%] p-2 mt-2 rounded-md'/>
                </section>
                <button
                className='mt-5 rounded-md p-2 bg-buttonback w-[96%]'
                >Gonder</button>
             </div>
           </div>
         </div>
    </div>
  )
}

export default MailSection