import React, { useState } from 'react'
import Logo from '../assets/logo.svg'
import {IonIcon} from "react-ion-icon";

const Navbar = () => {

  const [open, setOpen] = useState(false)
  return (
    <div className='bg-black text-white md:pt-5 font-raleway'>
     <div className='flex md:mx-20 mx-10 justify-between'>
    <div className='md:flex mt-5 md:mt-0'>
    <img
      className='md:w-[28%] w-30%'
      src={Logo}
      alt='Logo'
      />
      <div onClick={() => setOpen(!open)} className='text-3xl absolute right-3 top-6 cursor-pointer md:hidden md: items-center pt-[-3]'>
            <ion-icon name={open ? 'close': 'menu'}></ion-icon>
      </div>
      <ul className={`text-white md-text-black md:mx-5 md:mt-3 mt-0 md:flex md:z-auto z-[-1] font-medium cursor-pointer  transition-all duration-500 ease-in ${open ? 'opacity-100 right-0': 'hidden top-20'}`}>
        <li className='mx-2'>
          CORPORATE
        </li>
        <li className='mx-2'>
          ANALYZES
        </li>
        <li className='mx-2' >
          PLATFORM
        </li>   
        <li className='mx-2' >
          CONTACT
        </li>
           </ul>
    </div>
    <div className='flex'>
      <button 
      className={`md:bg-buttonback md:p-3 md:rounded-md md:font-semibold md:px-6 md:mx-3 hidden`}>
        Hesap Olustur</button>
        <button 
      className='bg-buttonback md:p-3 p-2 h-fit md:mt-0 mt-5 rounded-md font-semibold md:px-4 px-5 flex flex-row justify-center items-center text-center md:mx-0 mx-5'>
      EN
      <span  className='ml-2 mt-1' >
      <IonIcon name="chevron-down-outline"/>
      </span>
      </button>
    </div>
     </div>
      <hr className='text-divider h-2 md:mx-16 mt-4'></hr>
      </div>
  )
}

export default Navbar