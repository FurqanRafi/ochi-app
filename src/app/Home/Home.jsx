import Footer from '@/Components/Footer'
import About from '@/Components/Home/About'
import Cards from '@/Components/Home/Cards'
import Eyes from '@/Components/Home/Eyes'
import Featured from '@/Components/Home/Featured'


import LandingPage from '@/Components/Home/LandingPage'

import Marquee from '@/Components/Home/Marquee'
import Start from '@/Components/Home/Start'
import React from 'react'

const Home = () => {
  return (
    <div>
        <LandingPage />
        <Marquee />
        <About />
        <Eyes />
        <Featured />
        <Cards />
        <Start />
       
        
      
    </div>
  )
}

export default Home