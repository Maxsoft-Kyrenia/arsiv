import React from 'react'
import usercreate from '../../assets/usercreateicon.svg'
import userkaricon from '../../assets/userkaricon.svg'
import usermoneyicon from '../../assets/usermoneyicon.svg'
import stepsaftericon from '../../assets/stepsaftericon.svg'
import stepsbeforeicon from '../../assets/stepsbeforeicon.svg'

const Sectionthree = () => {
  return (
    <div className='bg-white font-raleway md:pt-24 pb-24 pt-7'>
        <div className='items-center justify-center text-center flex'>
               <div className='md:w-[36%] w-[70%]'>
               <h4 className='md:text-2xl text-xl text-sectionthreeheader font-bold'>3 adımda kolayca yatırım yapmaya başlayın.</h4>
               </div>
        </div>
        <div className='md:flex md:mx-16 md:mt-20 mt-10'>
           <section className='border-2 border-cardborder p-7 mx-3 rounded-lg'>
                <img
                className='w-[20%]'
                src={usercreate}
                alt='icon'
                />
                <h3 className='text-sectionthreeheader font-bold mt-2 text-xl'>Ücretsiz Bir Hesap Oluştur</h3>
                <p className='mt-3'>
                Zwei flinke Boxer jagen die quirlige Eva und ihren Mops durch Sylt. Franz jagt im komplett verwahrlosten Taxi quer durch Bayern. Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter.
                </p>
           </section>
           <section className='border-2 border-cardborder p-7 mx-3 rounded-lg md:mt-0 mt-10'>
                <img
                className='w-[16%]'
                src={userkaricon}
                alt='icon'
                />
                <h3 className='text-sectionthreeheader font-bold mt-2 text-xl'>Hesabına Para Ekle</h3>
                <p className='mt-3'>
                Zwei flinke Boxer jagen die quirlige Eva und ihren Mops durch Sylt. Franz jagt im komplett verwahrlosten Taxi quer durch Bayern. Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter.
                </p>
           </section>
           <section className='border-2 border-cardborder p-7 mx-3 rounded-lg md:mt-0 mt-10'>
                <img
                className='w-[20%]'
                src={usermoneyicon}
                alt='icon'
                />
                <h3 className='text-sectionthreeheader font-bold mt-2 text-xl'>Kar Elde Etmeye Başla!</h3>
                <p className='mt-3'>
                Zwei flinke Boxer jagen die quirlige Eva und ihren Mops durch Sylt. Franz jagt im komplett verwahrlosten Taxi quer durch Bayern. Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter.
                </p>
           </section>
        </div>
    </div>
  )
}

export default Sectionthree