import React from 'react'
import {  BrowserRouter,
    Routes,
    Route,} from 'react-router-dom'
import ContactusPage from '../Pages/ContactusPage'
import CorporatePage from '../Pages/CorporatePage'
import DemoAccount from '../Pages/DemoAccount'
    import Homepage from '../Pages/Homepage'

const Layout = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
       <Route path='/' element={<Homepage/>}></Route>
       <Route path='/contact' element={<ContactusPage/>}></Route>
       <Route path='/demoaccount' element={<DemoAccount/>}></Route>
       <Route path='/corporate' element={<CorporatePage/>}></Route>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default Layout