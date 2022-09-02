import React, { useState, useEffect } from 'react'
import Logo from '../assets/logo.svg'
import {IonIcon} from "react-ion-icon";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

  //This open controls the menu icon when using mobile devices
  const [open, setOpen] = useState(true)
  //This controls the opening of the platform item children,
  const [menuopen, setmenuOpen] = useState(false)
  //This opens the language toggle to access the language options
  const [langopen, setlangOpen] = useState(false)

  const location = useLocation();
  useEffect(() => {
     console.log(open ? 'close': setOpen(!open))
  }, [location]);

  return (
     //First Div wrapping the whole Navbar
    <div className='bg-black text-white md:pt-5 font-raleway md:px-0 relative '>
    
    
    {/* Menu Bar Container */}
     <div className='flex md:mx-20 mr-8 ml-4 justify-between z-0'>


         {/* LOGO AND NAVIGATION LINKS */}
          <div className='md:flex mt-1 md:mt-0'>

              {/* LOGO  */}
                  <Link to='/' className=''>
                         <img
                             className=' opacity-85 cursor-pointer w-[80%]'
                             src={Logo}
                             alt='Logo'
                         />
                   </Link>
               {/* LOGO  */}

                 {/* Menu toogle open and close  */}
                      <span onClick={() => setOpen(!open)} className='text-3xl absolute right-3 top-6 cursor-pointer md:hidden md: items-center pt-[6] justify-center flex'>
                            <ion-icon name={open ? 'menu': 'close'} ></ion-icon>
                      </span>
                 {/* Menu toogle open and close  */}

               {/* Navigation Items Group [Unordered List] */}   
                 <ul className={`text-white md-text-black pl-12 md:mx-5 md:mt-4 mt-0 md:flex md:z-auto z-[-1] font-bold cursor-pointer  transition-all duration-500 ease-in ${open ? 'hidden': 'hidden top-20'}`}>
                     
                      {/* Navigation Item List */}   
                    <li className='mx-2 hover:underline hover:transition-all hover:duration-500 ease-in '>
                         <Link to='/corporate' className=''>
                           CORPORATE
                         </Link>
                    </li>
                        {/* Navigation Item */}  


                      {/* Navigation Items List items */}  
                     <li className='mx-2 hover:underline hover:transition-all hover:duration-500 ease-in'>
                           <Link to='/' className=''>
                              ANALYZES
                            </Link>
                      </li>
                       {/* Navigation Items List items */}  


                      {/* Navigation Items List items */}  
                    <li onClick={() => setmenuOpen(!menuopen)} className='mx-2 flex flex-row hover:underline hover:transition-all hover:duration-500 ease-in' >
                    <Link to='/platform' className=''>
                              PLATFORM
                            </Link>
                       <span  className='ml-1 text-center mt-1 hover:underline hover:transition-all hover:duration-500 ease-in' >
                           <IonIcon name="chevron-down-outline"/>
                       </span>
                            <span className={`${menuopen ? 'absolute z-10 mt-10 bg-buttonback text-white text-center p-7 rounded-md' : 'hidden'}`}>
                                <li className='m-1'>Test 1</li>
                                <li className='m-1'>Test 1</li>
                                <li className='m-1'>Test 1</li>
                            </span>
                      </li>   
                     {/* Navigation Items List items */}  


                     {/* Navigation Items List items */}  
                    <li className='mx-2 hover:underline hover:transition-all hover:duration-500 ease-in'>
                         <Link to='/contact' className=''>
                             CONTACT
                         </Link>
                    </li>
                       {/* Navigation Items List items */}  


                 </ul>
               {/* Navigation Items Group [Unordered List] */}   


       </div>
         {/* LOGO AND NAVIGATION LINKS */}

                 {/* Buttons on Navbar */}
                      <div className='flex z-0 mt-0'>
        <Link to='/demoaccount' className=''>  
      <button 
      className={`bg-gradient-to-r from-fromdark to-tolight hover:bg-gradient-to-l md:p-3 md:rounded-md md:font-semibold md:px-6 md:mx-3 hidden md:block`}>
        Hesap Olustur
        </button>
           </Link>
        <button onClick={() => setlangOpen(!langopen)}
      className='bg-gradient-to-r md:mr-0 mr-4 from-fromdark to-tolight hover:bg-gradient-to-l transition-colors duration-200 delay-200 md:p-3 p-2 h-fit md:mt-0 mt-5 rounded-md font-semibold md:px-4 px-5 flex flex-row justify-center items-center text-center md:mx-0 mx-5 text-base'>
      EN
      <span  className='ml-2 mt-1' >
      <IonIcon name="chevron-down-outline"/>
      </span>
      <span className={`${langopen ? 'absolute z-10 mt-48 bg-buttonback text-white text-start p-7 rounded-md' : 'hidden'}`}>
        <ul>
   <li className='m-1'>ENG</li>
      <li className='m-1'>TURK</li>
        </ul>
   </span>
      </button>
                      </div>
                  {/* Buttons on Navbar */}
     </div>
      {/* Menu Bar Container */}


          {/* Menu bar for mobile devices */}
             <div className='bg-white h-full text-black float-right fixed right-0 top-0 z-10  block'>
  <div className={`${open ? 'hidden transition-all duration-500 ease-in': 'm-12 transition-all duration-500 ease-in'} transition-all duration-500 ease-in`}>
  <span onClick={() => setOpen(!open)} className='pr-10 pt-10 transition-all duration-500 ease-in'>
  <ion-icon name={open ? 'menu': 'close'}></ion-icon>
  </span>
         <ul className={`${open ? 'hidden':'float-left pl-12 pr-16 mt-32 font-semibold text-base transition-all duration-500 ease-in'}`}>
           <li className=''> 
           <Link to='/corporate' className=''>
           CORPORATE
           </Link>
        </li>
           <li  className='mt-10'> 
           <Link to='/' className=''>
           ANALYZES
           </Link>
           </li>
           <li  className='mt-10'> <Link to='/platform' className=''>
                              PLATFORM
                            </Link>
           <span onClick={() => setmenuOpen(!menuopen)} className='ml-1 text-center mt-1 hover:underline hover:transition-all hover:duration-500 ease-in' >
      <IonIcon name="chevron-down-outline"/>
      </span>
           <span className={`${menuopen ? 'absolute z-10 mt-10 bg-buttonback text-white text-center p-7 rounded-md' : 'hidden'}`}>
   <li className='m-1'>Test 1</li>
      <li className='m-1'>Test 1</li>
      <li className='m-1'>Test 1</li>
   </span>
           </li>
           <li  className='mt-10'>
           <Link to='/contact' className=''>
           CONTACT
           </Link>
           </li>
         </ul>
  </div>
            </div>
          {/* Menu bar for mobile devices */}

      {/* Divider for menu bar */}
      <hr className='text-divider h-2 md:mx-16 md:mt-4 mt-0'></hr>
       {/* Divider for menu bar */}


    </div>
  )
}

export default Navbar