import About from '@/Components/Home/About'
import LandingPage from '@/Components/Home/LandingPage'
import Marquee from '@/Components/Home/Marquee'
import React from 'react'

const Home = () => {
  return (
    <div>
        <LandingPage />
        <Marquee />
        <About />
    </div>
  )
}

export default Home