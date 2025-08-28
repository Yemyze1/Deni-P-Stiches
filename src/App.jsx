import React from 'react'
// import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Nav from './Nav'
import Hero from './Hero'
import Collections from './Collections'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'




function App() {

  return (
     <>
    {/* <div>
    <Link to="/about">About</Link>
   <BrowserRouter>
    <Route path="/about" element={<About/>}/>
    </BrowserRouter>
    </div> */}
    
    <Nav />
    <Hero />
    <Collections />
    <About />
    <Contact />
    <Footer />
    </>
  )
}

export default App
