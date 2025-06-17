'use client';
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Button from '../Button';

const Start = () => {
    const [rotate, setRotate] = useState(0)

    useEffect(() => {
        const handleMouseMove = (e) => {
            let mouseX = e.clientX
            let mouseY = e.clientY
            let deltaX = mouseX - window.innerWidth / 2
            let deltaY = mouseY - window.innerHeight / 2
            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
            setRotate(angle - 180)
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
        <div className='relative w-full h-screen overflow-hidden bg-[#adee52] flex items-center justify-center'>
            {/* Title */}
            <div className='absolute top-10 text-center justify-center z-10 font-[Founders_Grotesk] px-4'>
                <h1 className='text-[10vw] sm:text-[8vw] md:text-[7vw] lg:text-[6vw] font-extrabold leading-tight tracking-tight'>
                    Ready
                </h1>
                <h1 className='text-[10vw] sm:text-[8vw] md:text-[7vw] lg:text-[6vw] font-extrabold leading-tight tracking-tight'>
                    to Start
                </h1>
                <h1 className='text-[10vw] sm:text-[8vw] md:text-[7vw] lg:text-[6vw] font-extrabold leading-tight tracking-tight'>
                    the Project?
                </h1>
            </div>

            {/* Eyes */}
            <div className='absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-10 sm:gap-12 md:gap-16 lg:gap-20'>
                {[1, 2].map((_, i) => (
                    <div key={i} className='flex items-center justify-center w-[25vw] h-[25vw] sm:w-[12vw] sm:h-[12vw] max-w-[120px] max-h-[120px] rounded-full bg-zinc-100'>
                        <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                            <div
                                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                                className='absolute top-[50%] left-[50%] w-full h-[4rem] sm:h-[5rem]'
                            >
                                <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Buttons */}
            <div className='absolute bottom-[8vw] z-10 flex flex-col justify-center items-center gap-4 px-4'>
                <Button
                    className='border-2 px-6 py-3 rounded-full text-base sm:text-lg lg:text-xl font-light tracking-tight cursor-pointer flex items-center'
                    text='Start the Project'
                    icon={<div className='bg-zinc-900 w-2 h-2 rounded-full ml-5'></div>}
                />
                <h1 className='text-base sm:text-xl font-light'>Or</h1>
                <Button
                    className='border-2 px-6 py-3 rounded-full text-base sm:text-lg lg:text-xl font-light tracking-tight cursor-pointer flex items-center'
                    text='Hello@Ochi.Design'
                    icon={<div className='bg-zinc-900 w-2 h-2 rounded-full ml-5'></div>}
                />
            </div>
        </div>
    )
}

export default Start;
