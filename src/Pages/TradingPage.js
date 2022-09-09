import React from 'react'
import Index from '../Components/TradingComponent/Index'
import { Helmet } from 'react-helmet';

const TradingPage = () => {
  return (
    <div>
       <Helmet>
        <title>Trading Page</title>
      </Helmet>
        <Index/>
    </div>
  )
}

export default TradingPage