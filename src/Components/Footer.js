import React from 'react'
import maxsoftlab_logo from '../assets/maxsoftlab_logo.svg'
import Logo from '../assets/logo.svg'
import google_play from '../assets/google_play.svg'
import app_store from '../assets/app_store.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
         //Main Div for footer
         <div className='bg-black md:h-[375px] h-[550px] font-raleway'>

           {/* Logo and Links */}
             <div className='mt-0 bottom-0 right-0 left-0 w-[100%] md:h-[300px] h-[400px] bg-buttonback -skew-y-3 origin-left'>

                {/* Logo and Links container */}
                   <div className='md:flex flex md:flex-row flex-col items-center md:mt-0 md:m-10 md:p-16 skew-y-3 text-white'>

                      {/* Logo */}
                   <Link to='/'>
                       <img
                          className='md:w-[90%] w-[78%] opacity-85 md:mt-0 mt-10 cursor-pointer'
                          src={Logo}
                          alt='Logo'
                         />
                    </Link>
                      {/* Logo */}


                        {/* Quick Links GENERAL SECTION */}
                          <div className='ml-8 md:flex'>


                           {/* Section for quick links like markets and platform. */}
                               <div className='flex justify-between'>

                                 {/* Individual Item */}
                                     <section className='mt-12 mx-6'>
                                             <h3 className='font-bold text-xl'>Markets</h3>
                                             <p className='hover:underline cursor-pointer'>About us</p>
                                             <p className='hover:underline cursor-pointer'>Why THYFX Ltd.</p>
                                             <p className='hover:underline cursor-pointer'>Terms {'&'} Conditions</p>
                                       </section>
                                  {/* Individual Item */}
                                   
                                  {/* Individual Item */}
                                       <section className='mt-12 mx-6'>
                                             <h3 className='font-bold text-xl'>Platform</h3>
                                             <p className='hover:underline cursor-pointer'>Android Platform</p>
                                             <p className='hover:underline cursor-pointer'>iOS Platform.</p>
                                             <p className='hover:underline cursor-pointer'>Windwos Platform</p>
                                       </section>
                                    {/* Individual Item */}

                               </div>
                            {/* Section for quick links like markets and platform. */}
                              
                              {/* Contact section with address */}
                                        <section className='mt-12 mx-6'>
                                             <h3 className='font-bold text-xl'>Contact</h3>
                                             <p className='cursor-pointer'>Francis Rachel Street, </p>
                                             <p className='cursor-pointer'>Victoria, Mahe, P.O. Box </p>
                                             <p className='cursor-pointer'>1004, Seychelles</p>
                                        </section>
                               {/* Contact section with address */}

                           </div>
                           {/* Quick Links GENERAL SECTION */}

                       {/* Google play store and apple store images */}
                         <section className='md:flex-col flex md:mt-10 mt-5 ml-4'>
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
                         {/* Google play store and apple store images */}
               </div>
                 {/* Logo and Links container */}   


             </div>
              {/* Logo and Links */}

             
              {/* Maxsoftlab Logo */}
             <img
             className='bottom-0 right-0 float-right mx-10 md:w-[10%] md:mt-0 mt-28'
             src={maxsoftlab_logo}
             alt='logo'
             />
              {/* Maxsoftlab Logo */}

         </div>
         //Main Div ENDING for footer
  )
}

export default Footer