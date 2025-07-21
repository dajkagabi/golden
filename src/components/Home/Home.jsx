import React from 'react'
import Hero from '../Hero/Hero'
import Contact from '../Contact/Contact'
import Menu from '../Menu/Menu';
import About from '../About/About';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {
  return (
    <div>
    <Hero/>
    <Menu/>
    <About/>
    <Contact/>
    <Newsletter/>
    </div>
  )
}

export default Home