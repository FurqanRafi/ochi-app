'use client';
import { motion } from 'framer-motion'
import { div } from 'framer-motion/client'
import React, { useEffect, useState } from 'react'

const Start = () => {


    const [rotate, setRotate] = useState(0)

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX
            let mouseY = e.clientY
            let deltaX = mouseX - window.innerWidth / 2
            let deltaY = mouseY - window.innerHeight / 2
            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
            setRotate(angle - 180)
        })
    })

    return (
        <div  className='eyes w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-speed='-.7' className=' relative bg-[#adee52] text-zinc-900 rounded-2xl  w-full flex flex-col items-center justify-center '>
                <div className='  pt-[8vw] pb-[8vw] flex flex-col items-center justify-center font-[`Founders_Grotesk`]'>
                    <h1 className=' text-[9vw] font-extrabold font-stretch-200% leading-none tracking-tight  '>Ready</h1>
                    <h1 className=' text-[9vw] font-extrabold font-stretch-200% leading-none tracking-tight  '>to Start </h1>
                    <h1 className=' text-[9vw] font-extrabold font-stretch-200% leading-none tracking-tight  '>the Project?</h1>
                </div>
                <div className='flex items-center gap-10 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] w-1/3 '>
                    <div className='flex items-center justify-center w-[10vw] h-[10vw] rounded-full bg-zinc-100 '>
                        <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900 '>
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-[50%] left-[50%] w-full h-20'>
                                <div className='w-6 h-6 rounded-full bg-zinc-100 '></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center w-[10vw] h-[10vw] rounded-full bg-zinc-100 '>
                        <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900 '>
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-[50%] left-[50%]  w-full h-10'>
                                <div className='w-6 h-6 rounded-full bg-zinc-100 '></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center -mt-10'>
                    <button className='border-2 px-7 flex items-center gap-7 font-light py-4 rounded-full text-xl leading-none tracking-tight'>Start the Project <div className='bg-zinc-900 w-2 h-2 rounded-full'></div></button>
                    <h1 className='text-2xl font-light mt-3 mb-3'>Or</h1>
                    <button className=' mb-[10vw] border-2 px-7 flex items-center gap-7 font-light py-4 rounded-full text-xl leading-none tracking-tight'>Hello@Ochi.Design <div className='bg-zinc-900 w-2 h-2 rounded-full'></div></button></div>
            </div>
        </div>
    )
}

export default Start
