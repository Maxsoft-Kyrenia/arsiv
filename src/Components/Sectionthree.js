import React from 'react'
import usercreate from '../assets/usercreateicon.svg'
import userkaricon from '../assets/userkaricon.svg'
import usermoneyicon from '../assets/usermoneyicon.svg'
import stepsaftericon from '../assets/stepsaftericon.svg'
import stepsbeforeicon from '../assets/stepsbeforeicon.svg'

const Sectionthree = () => {
  return (
    <div className='bg-white font-raleway pt-24 pb-24'>
        <div className='items-center justify-center text-center flex'>
               <div className='w-[36%]'>
               <h4 className='text-2xl text-sectionthreeheader font-bold'>3 adımda kolayca yatırım yapmaya başlayın.</h4>
               </div>
        </div>
        <div className='flex mx-16 mt-20'>
           <section className='border-2 border-cardborder p-7 mx-3 rounded-lg'>
                <img
                className='w-[20%]'
                src={usercreate}
                alt='icon'
                />
                <h3 className='text-sectionthreeheader font-bold mt-2 '>Ücretsiz Bir Hesap Oluştur</h3>
                <p>
                Zwei flinke Boxer jagen die quirlige Eva und ihren Mops durch Sylt. Franz jagt im komplett verwahrlosten Taxi quer durch Bayern. Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter.
                </p>
           </section>
           <section className='border-2 border-cardborder p-7 mx-3 rounded-lg'>
                <img
                className='w-[16%]'
                src={userkaricon}
                alt='icon'
                />
                <h3 className='text-sectionthreeheader font-bold mt-2'>Hesabına Para Ekle</h3>
                <p>
                Zwei flinke Boxer jagen die quirlige Eva und ihren Mops durch Sylt. Franz jagt im komplett verwahrlosten Taxi quer durch Bayern. Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter.
                </p>
           </section>
           <section className='border-2 border-cardborder p-7 mx-3 rounded-lg'>
                <img
                className='w-[20%]'
                src={usermoneyicon}
                alt='icon'
                />
                <h3 className='text-sectionthreeheader font-bold mt-2'>Kar Elde Etmeye Başla!</h3>
                <p>
                Zwei flinke Boxer jagen die quirlige Eva und ihren Mops durch Sylt. Franz jagt im komplett verwahrlosten Taxi quer durch Bayern. Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter.
                </p>
           </section>
        </div>
    </div>
  )
}

export default Sectionthree