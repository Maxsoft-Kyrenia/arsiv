import './App.css';
import Layout from './Components/Layout';
import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {

console.log(window.location.pathname)

  return (
   <>
   <Navbar/>
    <Layout/>
    <Footer/>
   </>
  );
}

export default App;
