'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";

const LandingPage = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed='-.5' className='w-full h-screen pt-30'>

            {/* TEXT BLOCK */}
            <div className='textStructure Mycontainer1 mt-20 lg:mt-40'>
                {["We Create", "Eye Opening", "Presentations"].map((item, index) => (
                    <div key={index} className='masker'>
                        <div className='w-fit flex items-end'>
                            {index === 1 && (
                                <motion.div
                                    initial={{ width: '0' }}
                                    animate={{ width: '8vw' }}
                                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                                    className='w-[35vw] sm:w-[25vw] md:w-[15vw] lg:w-[8.3vw] h-[10vw] sm:h-[8vw] md:h-[6vw] lg:h-[5vw] relative top-[-1.4vw] sm:top-[-1vw] md:top-[-0.6vw] lg:top-[-0.9vw] rounded-md'>
                                    <img
                                        className='rounded-md bg-center bg-cover w-full h-full object-cover'
                                        src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                                        alt=""
                                    />
                                </motion.div>
                            )}
                            <h1 className=' uppercase text-[11vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] leading-[9vw] sm:leading-[8.5vw] md:leading-[7vw] lg:leading-[6.5vw]  tracking-tighter font-bold font-[Founders Grotesk] '>
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
                        <div className="flex items-center gap-8 lg:gap-80">
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
                        <div className="start flex items-center gap-5 pt-3 lg:pt-0">
                            <div className="
          px-4 py-2 border-[1px] border-zinc-500 
          rounded-full uppercase text-sm md:text-md font-light
        ">
                                Start the Project
                            </div>
                            <div className="
          flex items-center justify-center 
          w-10 h-10 text-xl 
          rounded-full border-[1px] border-zinc-500
        ">
                                <span className="rotate-180">
                                    <MdOutlineArrowOutward />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default LandingPage;
