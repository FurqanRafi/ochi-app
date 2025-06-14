import About from '@/Components/Home/About'
import Eyes from '@/Components/Home/Eyes'
import Featured from '@/Components/Home/Featured'

import LandingPage from '@/Components/Home/LandingPage'

import Marquee from '@/Components/Home/Marquee'
import React from 'react'

const Home = () => {
  return (
    <div>
        <LandingPage />
        <Marquee />
        <About />
        <Eyes />
        <Featured />
      
    </div>
  )
}

export default Home