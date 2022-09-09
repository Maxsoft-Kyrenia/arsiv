import React from 'react'
import { Helmet } from 'react-helmet';

const ErrorPage = () => {
  return (
    <div className='mt-4 mb-4 flex items-center justify-center text-center p-20'>
      <Helmet>
        <title>404</title>
      </Helmet>
         <h2 className='text-5xl font-bold'> 404 Page Not Found </h2>
    </div>
  )
}

export default ErrorPage