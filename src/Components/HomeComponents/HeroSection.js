import React from 'react'
import Star from '../../assets/star_icon.svg'
import Sideimg from '../../assets/home_slide_img.png'
import { Link} from 'react-router-dom'

const HeroSection = () => {

  return (
    <div className='md:flex md:mx-20 md:ml-14 mx-5 pb-20'>
        <div className='md:w-[90%] w-[100%] text-white md:mt-28 mt-10 md:ml-32'>
           <h5 className=' font-bold text-4xl'>Zwei flinke Boxer jagen die quirlige Eva und.</h5>
           <p className='mt-5'>Zwei flinke Boxer jagen die quirlige Eva und ihren Mops durch Sylt. Franz jagt im komplett verwahrlosten Taxi quer durch Bayern. Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter.</p>
           <div className='flex mt-5'>
             <img
             className='mr-1'
             src={Star}
             alt='ratings'
             />
               <img
             className='mr-1'
             src={Star}
             alt='ratings'
             />
             <img
             className='mr-1'
             src={Star}
             alt='ratings'
             />
               <img
             className='mr-1'
             src={Star}
             alt='ratings'
             />
               <img
             className='mr-1'
             src={Star}
             alt='ratings'
             />
             <p className='ml-2'>Tam not almış Forex sitesi!</p>
           </div>
           <button
           className='mt-5 p-4 bg-gradient-to-r from-fromdark to-tolight hover:bg-gradient-to-l rounded-md font-medium'>  
           <Link to='/demoaccount' className=''>
           Create a Demo Account
           </Link>
           </button>
          

        </div>
        <div className='flex items-center justify-center'>
          <img
          className='h-[90%] md:float-right text-center md:mt-0 mt-10'
          src={Sideimg}
          alt='sideimg'
          />
        </div>
      </div>
  )
}

export default HeroSection