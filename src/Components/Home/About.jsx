import React from 'react'

const About = () => {
  return (
    <div  className=" bg-[#9bc43c] z-0">
      <div className="Mycontainer1 ">
        <div className='w-full text-black rounded-3xl rounded-tr-3xl py-10'>
          <h1 className='font-[Neue Montreal] text-[8vw] sm:text-[6vw] md:text-[4vw] leading-tight tracking-tight'>
            Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
          </h1>

          <div className='w-full flex flex-col lg:flex-row gap-10 pt-10 mt-10 border-t-[1px] border-[#374518]'>

            {/* Text & Button */}
            <div className='w-full lg:w-1/2'>
              <h2 className='text-[10vw] sm:text-5xl lg:text-6xl font-normal font-[Founders Grotesk]'>
                Our approach:
              </h2>

              <button className="uppercase flex items-center  px-6 py-3 sm:py-4 mt-6 sm:mt-10 bg-gray-900 rounded-full text-white text-sm sm:text-md group cursor-pointer overflow-hidden">
                {"Read More".split('').map((letter, i) => (
                  <span
                    key={i}
                    className="inline-block animation-letter"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    {letter === '' ? '\u00A0' : letter}
                  </span>
                ))}
                <div className="w-3 h-3 bg-zinc-300 ml-4 rounded-full"></div>
              </button>
            </div>

            {/* Image */}
            <div className='w-full lg:w-1/2 h-[50vh] sm:h-[60vh] lg:h-[70vh] flex items-center justify-center'>
              <img
                className='w-full h-full object-cover rounded-2xl'
                src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
                alt="Ochi Team"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
