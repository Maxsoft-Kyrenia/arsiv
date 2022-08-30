import './App.css';
import Layout from './Components/Layout';
import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {

  return (
   <>
   {/* Application theme layout, the navbar and 
   footer appear in every page that is loaded in the layout tag.
   Routes are defined in the layout component */}
   <Navbar/>
    <Layout/>
    <Footer/>
   </>
  );
}

export default App;
