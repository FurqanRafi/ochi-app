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
        <LandingPage data-scroll data-scroll-section data-scroll-speed='-1' />
        <Marquee data-scroll data-scroll-section data-scroll-speed='.3' />
        <About />
        <Eyes data-scroll data-scroll-speed='-.5' />
        <Featured />
        <Cards />
        <Start data-scroll data-scroll-speed='-.7' />     
    </div>
  )
}

export default Home