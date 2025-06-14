'use client';
import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'

const Featured = () => {

    const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()]

    const handleHover = (index) => {
        cards[index].start({ y: '0' })
    }

    const handleHoverEnd = (index) => {
        cards[index].start({ y: '100%' })
    }
    return (
        <div className='w-full pt-20  '>
            <div className=' w-full Mycontainer1  border-b-[1px] border-zinc-700 pb-20  '>
                <h1 className='text-8xl font-[Neue Montreal] tracking-tight'>Featured Projects</h1>
            </div>
            <div className="cards relative w-full  py-15 lg:p-15 flex flex-col lg:flex-row gap-20 ">
                <div className="left Mycontainer1 w-full lg:w-1/2">
                    <div className=' flex  items-center gap-2 pb-10  '>
                        <div className='w-3 h-3 lg:w-[.8vw] lg:h-[.8vw] rounded-full bg-zinc-300 '></div>
                        <h1 className='text-lg uppercase leading-none tracking-wide  font-[Neue Montreal] '>SALIENCE LAB</h1>
                    </div>
                    <motion.div
                        onHoverStart={() => handleHover(0)}
                        onHoverEnd={() => handleHoverEnd(0)}
                        className="cardContainer relative w-full lg:h-[75vh] ">
                        <div className='  absolute text-amber-300 font-[Neue Montreal] text-9xl font-semibold z-[9] leading-none tracking-tighter uppercase left-full top-1/2 -translate-x-1/2 -translate-y-1/2 '>
                            <h1 className='hidden md:flex absolute overflow-hidden text-amber-300 font-[Neue Montreal] text-8xl font-md text-center z-[9] leading-none tracking-tighter uppercase right-full top-1/2 translate-x-1/2 -translate-y-1/2 '>
                                {"SALIENCE LAB".split('').map((item, index) =>
                                    <motion.span
                                        key={index}
                                        initial={{ y: '100%' }}
                                        animate={cards[0]}
                                        transition={{ ease: [0.83, 0, 0.17, 1], delay: index * .05 }}
                                    >{item}</motion.span>)}
                            </h1>
                        </div>
                        <div className="card w-full h-full lg:rounded-4xl overflow-hidden">

                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png" alt="" />
                        </div>
                    </motion.div>
                </div>
                <div className="right  Mycontainer1 w-full lg:w-1/2">
                    <div className=' flex  items-center gap-2 pb-10  '>
                        <div className=' w-3 h-3 lg:w-[.8vw] lg:h-[.8vw] rounded-full bg-zinc-300 '></div>
                        <h1 className='text-lg uppercase leading-none tracking-wide font-[Neue Montreal] '>CardBoard Spaceship</h1>
                    </div>
                    <motion.div onHoverStart={() => handleHover(1)}
                        onHoverEnd={() => handleHoverEnd(1)} className="cardContainer relative lg:h-[75vh] ">
                        <div className="card  w-full h-full lg:rounded-4xl overflow-hidden">
                            <h1 className='hidden md:flex absolute overflow-hidden text-amber-300 font-[Neue Montreal] text-8xl font-bold text-center z-[9] leading-none tracking-tighter uppercase right-full top-1/2 translate-x-1/2 -translate-y-1/2 '>
                                {"CardBoard Spaceship".split('').map((item, index) => <motion.span
                                    key={index}
                                    initial={{ y: '100%' }}
                                    animate={cards[1]}
                                    transition={{ ease: [0.83, 0, 0.17, 1], delay: index * .05 }}
                                >{item}</motion.span>)}
                            </h1>
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="cards relative w-full  py-15 lg:p-15 flex flex-col lg:flex-row gap-20">
                <div className="left Mycontainer1 w-full lg:w-1/2">
                    <div className=' flex  items-center gap-2 pb-10  '>
                        <div className='w-3 h-3 lg:w-[.8vw] lg:h-[.8vw] rounded-full bg-zinc-300 '></div>
                        <h1 className='text-lg uppercase leading-none tracking-wide  font-[Neue Montreal] '>
                            AH2 & Matt Horn</h1>
                    </div>
                    <motion.div onHoverStart={() => handleHover(2)}
                        onHoverEnd={() => handleHoverEnd(2)} className="cardContainer relative w-full lg:h-[75vh] ">
                        <div className='absolute text-amber-300 font-[Neue Montreal] text-9xl text-center font-semibold z-[9] leading-none tracking-tighter uppercase left-full top-1/2 -translate-x-1/2 -translate-y-1/2 '>
                            <h1 className='hidden md:flex absolute  overflow-hidden text-amber-300 font-[Neue Montreal] text-8xl font-md  z-[9] leading-none tracking-tighter uppercase right-full top-1/2 translate-x-1/2 -translate-y-1/2 '>
                                {"AH2 & Matt Horn".split('').map((item, index) => <motion.span
                                    key={index}
                                    initial={{ y: '100%' }}
                                    animate={cards[2]}
                                    transition={{ ease: [0.83, 0, 0.17, 1], delay: index * .05 }}
                                >{item}</motion.span>)}
                            </h1>
                        </div>
                        <div className="card w-full h-full lg:rounded-4xl overflow-hidden">
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="" />
                        </div>
                    </motion.div >
                </div>
                <div className="right  Mycontainer1 w-full lg:w-1/2">
                    <div className=' flex  items-center gap-2 pb-10  '>
                        <div className='w-3 h-3 lg:w-[.8vw] lg:h-[.8vw] rounded-full bg-zinc-300  '></div>
                        <h1 className='text-lg uppercase leading-none tracking-wide font-[Neue Montreal] '>Fyde</h1>
                    </div>
                    <motion.div onHoverStart={() => handleHover(3)}
                        onHoverEnd={() => handleHoverEnd(3)} className="cardContainer relative lg:h-[75vh] ">
                        <div className="card w-full h-full lg:rounded-4xl overflow-hidden">
                            <h1 className='hidden md:flex absolute overflow-hidden text-amber-300 font-[Neue Montreal] text-8xl font-bold  z-[9] leading-none tracking-tighter uppercase right-full top-1/2 translate-x-1/2 -translate-y-1/2 '>
                                {"Fyde".split('').map((item, index) => <motion.span
                                    key={index}
                                    initial={{ y: '100%' }}
                                    animate={cards[3]}
                                    transition={{ ease: [0.83, 0, 0.17, 1], delay: index * .05 }}
                                >{item}</motion.span>)}
                            </h1>
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-663x551.png" alt="" />
                        </div>
                    </motion.div >
                </div>



            </div>
        </div>
    )
}

export default Featured