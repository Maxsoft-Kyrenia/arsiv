import React from 'react'
import Index from '../Components/SpreadComponent/Index'
import { Helmet } from 'react-helmet';

const SpreadPage = () => {
  return (
    <div>
        <Helmet>
        <title>Spread Page</title>
      </Helmet>
        <Index/>
    </div>
  )
}

export default SpreadPage