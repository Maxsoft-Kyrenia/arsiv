import React, { useState } from 'react'
import Logo from '../assets/logo.svg'
import {IonIcon} from "react-ion-icon";

const Navbar = () => {
  
  const [open, setOpen] = useState(true)
  const [menuopen, setmenuOpen] = useState(false)
  const [langopen, setlangOpen] = useState(false)

  return (
          <div className='bg-black text-white md:pt-5 font-raleway md:px-0 relative'>
     <div className='flex md:mx-20 mx-8 justify-between z-0'>
    <div className='md:flex mt-5 md:mt-0'>
  <a href='/' className='w-[90%]'>
  <img
      className=' opacity-85 cursor-pointer'
      src={Logo}
      alt='Logo'
      />
  </a>
      <div onClick={() => setOpen(!open)} className='text-4xl absolute right-3 top-6 cursor-pointer md:hidden md: items-center pt-[-3]'>
            <ion-icon name={open ? 'menu': 'close'}></ion-icon>
      </div>
      <ul className={`text-white md-text-black pl-12 md:mx-5 md:mt-4 mt-0 md:flex md:z-auto z-[-1] font-bold cursor-pointer  transition-all duration-500 ease-in ${open ? 'hidden': 'hidden top-20'}`}>
        <li className='mx-2 hover:underline hover:transition-all hover:duration-500 ease-in '>
        <a href='/corporate'>
       CORPORATE
        </a>
        </li>
        <li className='mx-2 hover:underline hover:transition-all hover:duration-500 ease-in'>
          ANALYZES
        </li>
        <li onClick={() => setmenuOpen(!menuopen)} className='mx-2 flex flex-row hover:underline hover:transition-all hover:duration-500 ease-in' >
          PLATFORM
          <span  className='ml-1 text-center mt-1 hover:underline hover:transition-all hover:duration-500 ease-in' >
      <IonIcon name="chevron-down-outline"/>
      </span>
   <span className={`${menuopen ? 'absolute z-10 mt-10 bg-buttonback text-white text-center p-7 rounded-md' : 'hidden'}`}>
   <li className='m-1'>Test 1</li>
      <li className='m-1'>Test 1</li>
      <li className='m-1'>Test 1</li>
   </span>
        </li>   
        <li className='mx-2 hover:underline hover:transition-all hover:duration-500 ease-in'>
          <a href='/contact'>
          CONTACT
            </a> 
        </li>
           </ul>
    </div>
    <div className='flex z-0'>
      <button 
      className={`bg-gradient-to-r from-fromdark to-tolight hover:bg-gradient-to-l md:p-3 md:rounded-md md:font-semibold md:px-6 md:mx-3 hidden md:block`}>
        <a href='/demoaccount'>
        Hesap Olustur
        </a>
        </button>
        <button onClick={() => setlangOpen(!langopen)}
      className='bg-gradient-to-r from-fromdark to-tolight hover:bg-gradient-to-l md:p-3 p-2 h-fit md:mt-0 mt-5 rounded-md font-semibold md:px-4 px-5 flex flex-row justify-center items-center text-center md:mx-0 mx-5 text-base'>
      EN
      <span  className='ml-2 mt-1' >
      <IonIcon name="chevron-down-outline"/>
      </span>
      <span className={`${langopen ? 'absolute z-10 mt-28 bg-buttonback text-white text-start p-7 rounded-md' : 'hidden'}`}>
        <ul>
   <li className='m-1'>ENG</li>
      <li className='m-1'>TURK</li>
        </ul>
   </span>
      </button>
    </div>
     </div>
     <div className='bg-white h-full text-black float-right fixed right-0 top-0 z-10  block'>
  <div className={`${open ? 'hidden transition-all duration-500 ease-in': 'm-12 transition-all duration-500 ease-in'} transition-all duration-500 ease-in`}>
  <span onClick={() => setOpen(!open)} className='pr-10 pt-10 transition-all duration-500 ease-in'>
  <ion-icon name={open ? 'menu': 'close'}></ion-icon>
  </span>
         <ul className={`${open ? 'hidden':'float-left pl-12 pr-16 mt-32 font-semibold text-base transition-all duration-500 ease-in'}`}>
           <li className=''> 
            <a href='/corporate'>
       CORPORATE
        </a>
        </li>
           <li  className='mt-10'> ANALYZES</li>
           <li  className='mt-10'> PLATFORM
           <span onClick={() => setmenuOpen(!menuopen)} className='ml-1 text-center mt-1 hover:underline hover:transition-all hover:duration-500 ease-in' >
      <IonIcon name="chevron-down-outline"/>
      </span>
           <span className={`${menuopen ? 'absolute z-10 mt-10 bg-buttonback text-white text-center p-7 rounded-md' : 'hidden'}`}>
   <li className='m-1'>Test 1</li>
      <li className='m-1'>Test 1</li>
      <li className='m-1'>Test 1</li>
   </span>
           </li>
           <li  className='mt-10'> CONTACT</li>
         </ul>
  </div>
    </div>
      <hr className='text-divider h-2 md:mx-16 md:mt-4 mt-2'></hr>
      </div>
  )
}

export default Navbar