'use client';
import { motion } from 'framer-motion';
import React from 'react';

const Marquee = () => {
    return (
        <div
            data-scroll data-scroll-speed="2"
            className="w-full py-20 mt-[-100px] lg:mt-0 rounded-tl-3xl rounded-tr-3xl bg-[#004f46] overflow-hidden"
        >
            <div className="relative w-full h-[30vw]">
                <motion.div
                    className="absolute flex overflow-hidden whitespace-nowrap"
                    initial={{ x: '0%' }}
                    animate={{ x: '-100%' }}
                    transition={{ repeat: Infinity, ease: 'linear', duration: 20 }}
                >
                    <h1 className="text-[30vw] text-white uppercase leading-none tracking-tighter font-extrabold pr-20">
                        We are Ochi
                    </h1>
                    <h1 className="text-[30vw] text-white uppercase leading-none tracking-tighter font-extrabold pr-20">
                        We are Ochi
                    </h1>
                </motion.div>
            </div>
        </div>
    );
};

export default Marquee;
