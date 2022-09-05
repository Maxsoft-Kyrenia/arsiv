import React from 'react'
import { 
    Routes,
    Route,} from 'react-router-dom'
import ContactusPage from '../Pages/ContactusPage'
import CorporatePage from '../Pages/CorporatePage'
import DemoAccount from '../Pages/DemoAccount'
    import Homepage from '../Pages/Homepage'
    import PlatformPage  from '../Pages/PlatformPage'
    import ErrorPage from '../Pages/ErrorPage'
import PolicyPage from '../Pages/PolicyPage'
import TradingPage from '../Pages/TradingPage'
import SpreadPage from '../Pages/SpreadPage'

const Layout = () => {
  return (
   <>
   {/* Routes Defined also with component to load up */}
   <Routes>
       <Route path='/' element={<Homepage/>}></Route>
       <Route path='/contact' element={<ContactusPage/>}></Route>
       <Route path='/demoaccount' element={<DemoAccount/>}></Route>
       <Route path='/corporate' element={<CorporatePage/>}></Route>
       <Route path='/platform' element={<PlatformPage/>}></Route>
       <Route path='/policy' element={<PolicyPage/>}></Route>
       <Route path="*"  element={<ErrorPage/>}/>
       <Route path='/trading' element={<TradingPage/>}/>
       <Route path='/spread' element={<SpreadPage/>}/>
   </Routes> 
   </>
  )
}

export default Layout