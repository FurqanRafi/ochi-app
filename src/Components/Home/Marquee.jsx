// 'use client';
// import { motion } from 'framer-motion'
// import React from 'react'

// const Marquee = () => {


//     return (
//         <div data-scroll data-scroll-section data-scroll-speed='.3' className='w-full py-10 rounded-tl-3xl rounded-tr-3xl   bg-[#004f46] ' >
//             <div className='text border-t-1 border-b-1 border-zinc-400 flex mt-20 mb-20  overflow-hidden whitespace-nowrap'>
//                 <motion.h1 initial={{ x: '0' }} animate={{ x: '-100%' }} transition={{ repeat: Infinity, ease: 'linear', duration: 10 }} className='text-[30vw]  text-white uppercase leading-100 tracking-tighter font-[`Founders Grotesk X Condensed`] -mb-7vw pr-20  font-extrabold   '>We are Ochi
//                 </motion.h1>
//                 <motion.h1 initial={{ x: '0' }} animate={{ x: '-100%' }} transition={{ repeat: Infinity, ease: 'linear', duration: 10 }} className='text-[30vw] text-white uppercase leading-100 tracking-tighter font-[`Founders Grotesk X Condensed`] -mb-7vw pr-20 font-extrabold   '>We are Ochi
//                 </motion.h1>
//             </div>
//         </div>
//     )
// }

// export default Marquee

'use client';
import { motion } from 'framer-motion';
import React from 'react';

const Marquee = () => {
    return (
        <div
        data-scroll data-scroll-section data-scroll-speed='.3' 
            className="w-full py-20 mt-[-100] lg:mt-[0] rounded-tl-3xl rounded-tr-3xl bg-[#004f46]"
        >
            <div className="text border-t border-b border-zinc-400  flex overflow-hidden whitespace-nowrap">

                <motion.h1 initial={{ x: '0' }} animate={{ x: '-100%' }} transition={{ repeat: Infinity, ease: 'linear', duration: 10 }} className='text-[30vw]   text-white uppercase leading-none tracking-tighter font-[`Founders Grotesk X Condensed`]  pr-20  font-extrabold   '>We are Ochi
                </motion.h1>
                <motion.h1 initial={{ x: '0' }} animate={{ x: '-100%' }} transition={{ repeat: Infinity, ease: 'linear', duration: 10 }} className='text-[30vw]  text-white uppercase leading-none tracking-tighter font-[`Founders Grotesk X Condensed`]  pr-20 font-extrabold   '>We are Ochi
                </motion.h1>

            </div>
        </div>
    );
};

export default Marquee;
