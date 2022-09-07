import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Viptable = () => {

  const [tabledata, settabledata] = useState('')

  const novalue = [
    {symbol:"VIP", value:"003"},
    {symbol:"VIP", value:"003"},
  ]

  return (
    <div className='bg-black text-white mb-28 md:p-16 p-2 font-raleway'>

      {/*ICON*/}
    <h1 className='font-bold text-base items-center text-center'> Spread</h1>

    <div className='flex justify-between mt-5'>
       <button className='bg-divider p-3 w-[100%] md:mr-10 mr-2 rounded-md'><Link to='/spread' className=''>Standard</Link></button>
       <button className='bg-divider p-3 w-[100%] md:mr-10 mr-2 rounded-md'><Link to='/trading/gold' className=''>Gold</Link></button>
       <button className='bg-white text-black p-3 w-[100%] md:mr-10 mr-2 rounded-md'><Link to='/trading/vip' className=''>VIP</Link></button>
        <button className='bg-divider p-3 w-[100%] rounded-md'><Link to='/trading/platinum' className=''>Platinum</Link></button>
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

export default Viptable