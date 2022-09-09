import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Index = () => {

  const navigate = useNavigate()

  const [tabledata, settabledata] = useState('')

  const novalue = [
    {symbol:"Standard", value:"001"},
    {symbol:"Standard", value:"001"},
  ]
  const gold = () => {
    navigate('/trading/gold')
  }
  const vip = () => {
   navigate('/trading/vip')
 }
 const platinum = () => {
   navigate('/trading/platinum')
 }
  return (
    <div className='bg-black text-white mb-28 md:p-16 p-2 font-raleway'>

      {/*ICON*/}
    <h1 className='font-bold text-base items-center text-center'> Spread</h1>

    <div className='flex justify-between mt-5'>
    <button className='bg-white text-black p-3 rounded-md w-[100%] md:mr-10 mr-2'>Standard</button>
   <button className='bg-divider p-3 w-[100%] md:mr-10 mr-2 rounded-md' onClick={gold}>Gold</button>
   <button className='bg-divider p-3 w-[100%] md:mr-10 mr-2 rounded-md' onClick={vip}>VIP</button>
    <button className='bg-divider p-3 w-[100%] rounded-md' onClick={platinum}>Platinum</button>
    </div>

             <table className='bg-secblack w-full rounded-md border-spacing-y-2 p-5 border-separate mt-10'>
             <thead className=''>
        <tr>
          <th className='p-3 text-sm font-semibold tracking-wide text-left'>Symbol</th>
          <th className='p-3 text-sm font-semibold tracking-wide text-left'>Value</th>
        </tr>
      </thead>
      <tbody className='bg-divider rounded-md'>
       
       { novalue.map((row) => (
          <tr key={row.symbol} className='bg-divider mt-5 mb-5 rounded-md'>
          <td className='p-3 text-sm'>{row.symbol}</td>
          <td className='p-3 text-sm'>{row.value}</td>
        </tr>
       )) }
    
      </tbody>
              </table>

    </div>
      
  )
}

export default Index