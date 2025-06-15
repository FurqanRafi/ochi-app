
import React from 'react'
import Home from './Home/Home'
import ScrollProvider from '@/Components/ScrollProvider'

const page = () => {
  return (
    <div>
      <ScrollProvider>
        <Home />
        </ScrollProvider>
    </div>
  )
}

export default page