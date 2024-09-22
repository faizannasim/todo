
import './App.css';
import React from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero';
import About from './Component/About';
import Service from './Component/Service';
import Project from './Component/Project';
import Contact from './Component/Contact';
import Footer from './Component/Footer';




const App = () => {
  return (
    <div>
     <Navbar />
     <Hero />
     <About />
     <Hero />
     <Service />
     <Project />
     <Contact />
     <Footer />

    </div>

  )
}
export default App;
