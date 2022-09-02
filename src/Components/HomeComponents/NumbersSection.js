import React from 'react'

const NumbersSection = () => {
    
  return (
    <div className='md:flex flex justify-between pb-7 md:px-28 px-5 bg-mailsection pt-8 motion-safe:animate-fadeIn'>
    <section className='flex flex-col text-start text-white'> 
        <h3 className='font-bold md:text-4xl text-xl'>12.542</h3>
        <p>Kullanıcı</p>
    </section>
    <section className='flex flex-col text-start text-white'> 
        <h3 className='font-bold md:text-4xl text-xl'>12.542</h3>
        <p>Trade</p>
    </section>
    <section className='flex flex-col text-start text-white'> 
        <h3 className='font-bold md:text-4xl text-xl'>12.5M</h3>
        <p>Hacim</p>
    </section>
    <section className='flex flex-col text-start text-white'> 
        <h3 className='font-bold md:text-4xl text-xl'>$122.5M</h3>
        <p>Aylık Hasılat</p>
    </section>
</div>
  )
}

export default NumbersSection