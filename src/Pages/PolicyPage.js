import React from 'react'
import Index from '../Components/PolicyComponents'
import { Helmet } from 'react-helmet';

const PolicyPage = () => {
  return (
    <div>
       <Helmet>
        <title>Policy Page</title>
      </Helmet>
        <Index/>
    </div>
  )
}

export default PolicyPage