import React from 'react'
import { Link } from 'react-router-dom'

const SuccessPage = () => {
  return (
    <div className='m-20'>
       <h2 className='text-3xl'>Submission Made Successfully</h2>
       <p className='mt-6'> <Link to={'/'} >Back to Home Page</Link> </p>
    </div>
  )
}

export default SuccessPage