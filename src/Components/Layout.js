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
import Goldtable from './SpreadComponent/Goldtable'
import Viptable from './SpreadComponent/Viptable'
import Platinumtable from './SpreadComponent/Platinumtable'
import { ToastContainer } from 'react-toastify';
import SuccessPage from '../Pages/SuccessPage'

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
       <Route path='/trading/gold' element={<Goldtable/>}/>
       <Route path='/trading/vip' element={<Viptable/>}/>
       <Route path='/trading/platinum' element={<Platinumtable/>}/>
       <Route path='/success' element={<SuccessPage/>}/>
   </Routes> 
   </>
  )
}

export default Layout