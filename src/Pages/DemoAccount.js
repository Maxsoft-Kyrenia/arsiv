import React from 'react'
import MailSection from '../Components/HomeComponents/MailSection'
import { Helmet } from 'react-helmet';

const DemoAccount = () => {
  return (
    <div className='bg-buttonback'>
        <Helmet>
        <title>Demo Account</title>
      </Helmet>
       <MailSection/>
    </div>
  )
}

export default DemoAccount