import React from 'react'
import {  BrowserRouter,
    Routes,
    Route,} from 'react-router-dom'
import AboutPage from '../Pages/AboutPage'
    import Homepage from '../Pages/Homepage'

const Layout = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
       <Route path='/' element={<Homepage/>}></Route>
       <Route path='/about' element={<AboutPage/>}></Route>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default Layout