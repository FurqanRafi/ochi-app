'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";
import Button from '../Button';

const LandingPage = () => {
    return (
        <div data-scroll data-scroll-speed=".8" className='w-full h-screen pt-30'>

            {/* TEXT BLOCK */}
            <div className='textStructure Mycontainer1 mt-20 lg:mt-40'>
                {["We Create", "Eye-Opening", "Presentations"].map((item, index) => (
                    <div key={index} className='masker'>
                        <div className='w-fit flex items-end'>
                            {index === 1 && (
                                <motion.div
                                    initial={{ width: '0' }}
                                    animate={{ width: '8vw' }}
                                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                                    className=' h-[10vw]  md:h-[6vw] lg:h-[10vh] relative top-[-1.4vw]  md:top-[-0.6vw] lg:top-[-0.6vw] rounded-md'>
                                    <img
                                        className='rounded-md bg-center bg-cover w-full h-full object-cover'
                                        src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                                        alt=""
                                    />
                                </motion.div>
                            )}
                            <h1 className=' uppercase text-[12vw]  md:text-[8vw] lg:text-[7vw] leading-[12vw]  md:leading-[7vw] lg:leading-[6vw]  tracking-tighter font-bold font-[Founders Grotesk] '>
                                {item}
                            </h1>
                        </div>
                    </div>
                ))}
            </div>

            {/* INFO + BUTTON BLOCK */}
            {/* Full-width border wrapper */}
            <div className="w-full border-t-[1px] border-zinc-300 mt-30 lg:mt-40">

                {/* Inner constrained content */}
                <div className="Mycontainer1">
                    <div className="flex flex-col md:flex-col  lg:flex-row items-start lg:items-center justify-between gap-7 pt-7 ">

                        {/* Text lines */}
                        <div className="flex items-center gap-8 lg:gap-60">
                            {[
                                "For public and private companies",
                                "From the first pitch to IPO"
                            ].map((item, index) => (
                                <p key={index} className="text-sm md:text-lg lg:text-lg font-light tracking-tight">
                                    {item}
                                </p>
                            ))}
                        </div>

                        {/* Button block */}
                        <div className="start flex items-center  gap-5 pt-3 lg:pt-0">
                            <Button
                                text="Start the Project"
                                className="px-6 py-3 font-sans border-1 hover:bg-black  hover:text-white text-black rounded-full text-sm sm:text-md mt-6 cursor-pointer" 
                                icon ={
                                    <div className="bg-white w-2 h-2 ml-3  rounded-full"></div>
                                }
                            />
                            
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default LandingPage;
