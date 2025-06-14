import { motion } from 'framer-motion';
import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";


const LandingPage = () => {

  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.5' className='w-full h-screen bg-zinc-900 pt-2'>
      <div className='textStructure mt-45 px-20'>
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return <div className='masker'>
            <div className='w-fit flex items-end '>
              {index === 1 && (
                <motion.div initial={{ width: '0' }} animate={{ width: '7.8vw' }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} className=' w-[7.8vw] h-[5.1vw] rounded-md top-[1.1vw]  relative '> <img className='rounded-md bg-center bg-cover' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" /></motion.div>
              )}
              <h1 className='pt-[2vw] -mb-[1vw] uppercase text-[6.6vw] leading-[5.9vw] tracking-tighter font-[Founders Grotesk] font-medium'>{item}</h1>
            </div>
          </div>
        })}
      </div>
      <div className='border-t-[1px] border-zinc-800 mt-20 flex items-center justify-between py-7 px-20'>
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) =>
          <p className='text-md font-light leading-none tracking-tight '>{item}</p>
        )}
        <div className='start flex items-center gap-5'>
          <div className='px-4 py-2 border-[1px] border-zinc-500 rounded-full uppercase text-md font-light'>Start the Project</div>
          <div className='flex items-center justify-center w-10  h-10 text-xl rounded-full border-[1px] border-zinc-500 rounded-'>
            <span className='rotate-180'>
              <MdOutlineArrowOutward />
            </span>
          </div>
        </div>

      </div>

    </div>
  )
}

export default LandingPage