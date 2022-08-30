import React from 'react'
import grouppeople from '../../assets/grouppeople.jpg'
import logo from '../../assets/logo.svg'

const SectionFour = () => {
  return (
    <div className='md:p-10 p-2 mt-10 rounded-md mb-10'>
        <div className='md:flex bg-black text-white'>
             <div className='md:w-[60%] md:p-10 p-5'>
                 <img
                 className=''
                 src={logo}
                 alt=''
                 />
                <div className='md:w-[60%] mt-5'>
                    <h2 className='text-white text-3xl font-semibold'>JOIN WORLD BRANDS with Odea FX!</h2>
                </div>
                <p className='mt-5 text-white font-normal'>Zwei flinke Boxer jagen die quirlige Eva und ihren Mops durch Sylt. 
                Franz jagt im komplett verwahrlosten Taxi quer durch Bayern. Zwölf
                 Boxkämpfer jagen Viktor quer über den großen Sylter Deich. Vogel
                  Quax zwickt Johnys Pferd Bim. Sylvia wagt quick den Jux bei 
                  Pforzheim. Polyfon zwitschernd aßen Mäxchens Vögel Rüben, Joghurt
                   und Quark. "Fix, Schwyz!" quäkt Jürgen blöd vom Paß. Victor 
                   jagt zwölf Boxkämpfer quer über den großen Sylter Deich. 
                   Falsches.</p>
             </div>
             <div className='md:w-[40%] object-cover'>
                  <img
                  className='h-88 object-cover'
                  src={grouppeople}
                  alt=''
                  />
             </div>
        </div>
    </div>
  )
}

export default SectionFour