import React from 'react'
import tradeicon from '../../assets/trade.svg'

const Index = () => {
  return (
    <div className='bg-black text-white mb-28 p-16 font-raleway'>

<div className='justify-center flex flex-col items-center text-center'>
  {/*ICON*/}
<div className='justify-center flex flex-col items-center text-center'>
{/*ICON*/}
  <img
  className='items-center justify-center text-center w-[10%]'
  src={tradeicon}
  alt=''
  />
<h1> Forex Trading Hours</h1>
<p>You can contact us about customer or corporate affairs at any time.</p>
</div>

         <table className='bg-secblack w-full rounded-md border-spacing-y-2 p-5 border-separate mt-10'>
         <thead className=''>
    <tr>
      <th className='p-3 text-sm font-semibold tracking-wide text-left'>Forex Market Center</th>
      <th className='p-3 text-sm font-semibold tracking-wide text-left'>Country</th>
      <th className='p-3 text-sm font-semibold tracking-wide text-left'>Turkey Opening Hours</th>
      <th className='p-3 text-sm font-semibold tracking-wide text-left'>Turkey Closing Hours</th>
    </tr>
  </thead>
  <tbody className='bg-divider rounded-md'>
    <tr className='bg-divider mt-5 mb-5 rounded-md'>
      <td className='p-3 text-sm'>Sydney</td>
      <td className='p-3 text-sm'>Sydney</td>
      <td className='p-3 text-sm'>00:00</td>
      <td className='p-3 text-sm'>00:00</td>
    </tr>
    <tr className='bg-divider mt-5 mb-5'>
      <td className='p-3 text-sm'>Sydney</td>
      <td className='p-3 text-sm'>Sydney</td>
      <td className='p-3 text-sm'>00:00</td>
      <td className='p-3 text-sm'>00:00</td>
    </tr>
    <tr className='bg-divider mt-5 mb-5'>
      <td className='p-3 text-sm'>Sydney</td>
      <td className='p-3 text-sm'>Sydney</td>
      <td className='p-3 text-sm'>00:00</td>
      <td className='p-3 text-sm'>00:00</td>
    </tr>
    <tr className='bg-divider mt-5 mb-5'>
      <td className='p-3 text-sm'>Sydney</td>
      <td className='p-3 text-sm'>Sydney</td>
      <td className='p-3 text-sm'>00:00</td>
      <td className='p-3 text-sm'>00:00</td>
    </tr>
    <tr className='bg-divider mt-5 mb-5'>
      <td className='p-3 text-sm'>Sydney</td>
      <td className='p-3 text-sm'>Sydney</td>
      <td className='p-3 text-sm'>00:00</td>
      <td className='p-3 text-sm'>00:00</td>
    </tr>
    <tr className='bg-divider mt-5 mb-5'>
      <td className='p-3 text-sm'>Sydney</td>
      <td className='p-3 text-sm'>Sydney</td>
      <td className='p-3 text-sm'>00:00</td>
      <td className='p-3 text-sm'>00:00</td>
    </tr>
  </tbody>
          </table>
</div>
         </div>
  )
}

export default Index