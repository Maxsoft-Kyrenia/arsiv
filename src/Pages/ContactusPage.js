import React from 'react'
import Index from '../Components/ContactusComponent/Index'
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';

const ContactusPage = () => {
  return (
    <div className='bg-black font-raleway'>
        <Helmet>
        <title>Contact</title>
      </Helmet>
         <Index/>
    </div>
  )
}

export default ContactusPage