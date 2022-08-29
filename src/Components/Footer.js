import React from 'react'
import maxsoftlab_logo from '../assets/maxsoftlab_logo.svg'
import Logo from '../assets/logo.svg'
import google_play from '../assets/google_play.svg'
import app_store from '../assets/app_store.svg'

const Footer = () => {
  return (
         <div className='bg-black md:h-[375px] h-[550px] font-raleway'>
             <div className='mt-0 bottom-0 right-0 left-0 w-[100%] md:h-[300px] h-[400px] bg-buttonback -skew-y-3 origin-left'>
       <div className='md:flex flex md:flex-row flex-col md:mt-0 md:m-10 md:p-16 skew-y-3 text-white'>
       <img
      className='md:w-[20%] w-28% opacity-85 md:mt-0 mt-10'
      src={Logo}
      alt='Logo'
      />
    <div className='ml-8 md:flex'>
  <div className='flex justify-between'>
  <section className='mt-12 mx-6'>
        <h3 className='font-bold text-xl'>Markets</h3>
        <p className='hover:underline cursor-pointer'>About us</p>
        <p className='hover:underline cursor-pointer'>Why THYFX Ltd.</p>
        <p className='hover:underline cursor-pointer'>Terms {'&'} Conditions</p>
      </section>
      <section className='mt-12 mx-6'>
        <h3 className='font-bold text-xl'>Platform</h3>
        <p className='hover:underline cursor-pointer'>Android Platform</p>
        <p className='hover:underline cursor-pointer'>iOS Platform.</p>
        <p className='hover:underline cursor-pointer'>Windwos Platform</p>
      </section>
  </div>
      <section className='mt-12 mx-6'>
        <h3 className='font-bold text-xl'>Contact</h3>
        <p className='cursor-pointer'>Francis Rachel Street, </p>
        <p className='cursor-pointer'>Victoria, Mahe, P.O. Box </p>
        <p className='cursor-pointer'>1004, Seychelles</p>
      </section>
    </div>

    <section className='md:flex-col flex mt-10 ml-4'>
        <img
         className='md:w-[60%] w-[25%] md:mr-0 mr-10'
        src={google_play}
        alt=''
        />
          <img
          className='mt-2 md:w-[60%] w-[25%]'
        src={app_store}
        alt=''
        />
    </section>
       </div>
             </div>
             <img
             className='bottom-0 right-0 float-right mx-10 md:w-[10%] md:mt-0 mt-20'
             src={maxsoftlab_logo}
             alt='logo'
             />
         </div>

  )
}

export default Footer