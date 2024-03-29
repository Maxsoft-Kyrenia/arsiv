import React, { useEffect, useState } from 'react'
import Background from '../../assets/contactbg.jpg'
import '../../assets/Mailsection.css';
import Aos from 'aos'
import "aos/dist/aos.css"
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'

const MailSection = () => {

  const navigate = useNavigate()
  
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  const [adiniz, setadiniz] = useState('')
  const [soyadiniz, setsoyadiniz] = useState('')
  const [eposta, seteposta] = useState('')
  const [telefon, settelefon] = useState('')
  const APIURL = ('https://odeaapi.fxcrm.me/api/new')

  async function submit() {
    const ref = document.title
      console.log(ref)
      const name = adiniz && soyadiniz
      const email = eposta
      const phone = telefon
      const data = {name, email, phone, ref}
    if( adiniz == ''){
        toast.error('Please fill in Adiniz')
    }else if (soyadiniz == ''){
      toast.error('Please fill in Soyadiniz')
    } else if (eposta.match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null){
      toast.error('Invalid posta')
    }else if (telefon.length < 10 ){
      toast.error('Please fill in a valid telefon')
    } else {
      await fetch((APIURL), {
        method: 'POST',
        body:JSON.stringify(data),
        headers: {
          "Content-Type": 'application/json',
          "token": "2s98XDwWauJNjpXQRFvPgUwQFQrEEQ"
        }
      }).then(res => res.json())
        .then(data => {
          if(data.error == true ){
            toast.info(data.status)
          } else {
           toast.success('Success')
           navigate('/success')
          }
        })
   }
   }

  return (
    <div data-aos="fade-up" className='font-raleway md:px-20 px-5 bg-hero-pattern bg-cover md:pt-20 pb-20 pt-5 motion-safe:animate-fadeIn'>
         <div className='md:flex text-white z-10 flex-col md:flex-row '>
           <div className='mt-20 md:mt-10 md:flex flex-col justify-center items-center text-center md:justify-start md:items-start md:text-start'>
           <div className='md:w-[34%]'>
               <h4 className='md:text-xl font-bold text-2xl'>Formu Doldurun Ücretsiz Size Ulaşalım!</h4>
             </div>
             <p className='md:w-[80%] mt-2 md:text-base  font-medium'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
             <div className='flex mt-12 md:mt-8 items-center justify-center'>
               <section className='flex mx-2'>
               <span className='md:w-[10%] w-[30%]'>
              <svg id="checked" xmlns="http://www.w3.org/2000/svg" width="30.981" height="30.981" viewBox="0 0 30.981 30.981">
										<g id="Group_38" data-name="Group 38">
										  <path id="Path_84" data-name="Path 84" d="M15.491,0A15.491,15.491,0,1,0,30.981,15.491,15.509,15.509,0,0,0,15.491,0Zm8.658,11.414-9.9,9.822a1.523,1.523,0,0,1-2.135.039L6.872,16.5a1.575,1.575,0,0,1-.116-2.174,1.536,1.536,0,0,1,2.174-.078l4.154,3.8L21.935,9.2a1.565,1.565,0,1,1,2.213,2.213Z" fill="#fff"/>
										</g>
									</svg>
              </span>
                  <h4 className='m-1'>7/24 Teknik Destek</h4>
               </section>
               <section className='flex mx-2'>
              <span className='md:w-[6%] w-[24%]'>
              <svg id="checked" xmlns="http://www.w3.org/2000/svg" width="30.981" height="30.981" viewBox="0 0 30.981 30.981">
										<g id="Group_38" data-name="Group 38">
										  <path id="Path_84" data-name="Path 84" d="M15.491,0A15.491,15.491,0,1,0,30.981,15.491,15.509,15.509,0,0,0,15.491,0Zm8.658,11.414-9.9,9.822a1.523,1.523,0,0,1-2.135.039L6.872,16.5a1.575,1.575,0,0,1-.116-2.174,1.536,1.536,0,0,1,2.174-.078l4.154,3.8L21.935,9.2a1.565,1.565,0,1,1,2.213,2.213Z" fill="#fff"/>
										</g>
									</svg>
              </span>
                  <h4 className='m-1'>Alanında Uzman Destek Ekibi</h4>
               </section>
             </div>
           </div>
           <div>
             <div className='bg-mailsection p-5 md:mt-0 mt-10'>
               <div className='md:flex'>
                <section className='text-start flex flex-col'>
                <label className='font-semibold'>Adınız</label>
               <input className='bg-buttonback p-2 mt-2 rounded-md mr-2 w-[96%] md:w-fit ' value={adiniz} onChange={(e) => {setadiniz(e.target.value)}}/>
                </section>
                <section className='text-start flex flex-col'>
                <label className='font-semibold'>Soyadınız</label>
               <input className='bg-buttonback p-2 mt-2 rounded-md mr-2 w-[96%] md:w-fit '  value={soyadiniz} onChange={(e) => {setsoyadiniz(e.target.value)}}/>
                </section>
               </div>
               <section className='text-start mt-2'>
                <label className=' font-semibold'>E-posta</label>
               <input className='bg-buttonback md:w-[98%] w-[96%] p-2 mt-2 rounded-md'  value={eposta} onChange={(e) => {seteposta(e.target.value)}}/>
                </section>
                <section className='text-start mt-2'>
                <label className=' font-semibold'>Telefon</label>
               <input className='bg-buttonback md:w-[98%] w-[96%] p-2 mt-2 rounded-md'  value={telefon} onChange={(e) => {settelefon(e.target.value)}}/>
                </section>
                <button
                className='mt-5 rounded-md p-2 bg-gradient-to-r from-fromdark to-tolight hover:bg-gradient-to-l md:w-[98%] w-[96%]'
                onClick={submit}
                >Gonder</button>
             </div>
           </div>
         </div>
    </div>
  )
}

export default MailSection