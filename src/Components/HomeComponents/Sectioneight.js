import React, { useEffect } from 'react'
import meta from '../../assets/metatrader_img.svg'
import logo from '../../assets/logo.svg'
import apple from '../../assets/app_store.svg'
import google from '../../assets/google_play.svg'
import desktop from '../../assets/deskto_play.svg'
import Aos from 'aos'
import "aos/dist/aos.css"

const Sectioneight = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
    <div data-aos="fade-up" className='md:p-20 p-6 bg-buttonback mt-10 motion-safe:animate-fadeIn'>
         <div className='md:flex w-[100%] md:justify-between '>
              <div data-aos="fade-right" className='w-[100%] mr-20'>
                    <img
                    className='md:w-[90%]'
                    src={meta}
                    alt=''
                    />
              </div>
              <div className='w-[100%]'>
                 <img
                 className='md:mt-0 mt-10'
                 src={logo}
                 alt=''
                 />
                 <h1 className='md:text-3xl text-2xl font-semibold text-white mt-4'>METATRADER 5</h1>
                 <p className='mt-2 text-white'>MetaTrader 5 platformu, dünya çapında acemiden profesyonele her seviyedeki yatırımcının en çok kullandığı işlem platformu olma özelliğini taşır. Çünkü MetaTrader 5 kullanırken kullanıcı dostu arayüzü ve özelleştirilebilir yapısı ile işlem performansınızı olumlu etkileyecek düzenlemeleri edinebilirsiniz.</p>
                 <div className='md:flex mt-10 text-center'>
                 <img
                 className='md:w-[26%] mr-4'
                 src={google}
                 alt=''
                 />
                  <img
                className='md:w-[26%] mr-4 md:mt-0 mt-3'
                 src={desktop}
                 alt=''
                 />
                  <img
               className='md:w-[26%] mr-4 md:mt-0 mt-3'
                 src={apple}
                 alt=''
                 />
                 </div>
              </div>
         </div>
    </div>
  )
}

export default Sectioneight