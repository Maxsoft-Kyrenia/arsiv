import React from 'react'

const NumbersSection = () => {
  return (
    <div className='md:flex flex justify-between pb-7 md:px-28 px-10 bg-aboutbg pt-8 bg-cover'>
    <section className='flex flex-col text-start text-white'> 
        <h3 className='font-bold md:text-4xl text-2xl'>12.542</h3>
        <p>Kullanıcı</p>
    </section>
    <section className='flex flex-col text-start text-white'> 
        <h3 className='font-bold md:text-4xl text-2xl'>12.542</h3>
        <p>Trade</p>
    </section>
    <section className='flex flex-col text-start text-white'> 
        <h3 className='font-bold md:text-4xl text-2xl'>12.5M</h3>
        <p>Hacim</p>
    </section>
    <section className='flex flex-col text-start text-white'> 
        <h3 className='font-bold md:text-4xl text-2xl'>$122.5M</h3>
        <p>Aylık Hasılat</p>
    </section>
</div>
  )
}

export default NumbersSection