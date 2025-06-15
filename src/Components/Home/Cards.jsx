import React from 'react';

const Cards = () => {
  return (
    <div data-scroll data-scroll-speed="2" className='w-full'>
      {/* Header */}
      <div className='w-full mt-10 px-4 md:px-[5vw] border-b border-zinc-300'>
        <h1 className='text-4xl md:text-7xl font-[founders_grotesk] mb-10'>Client's Review</h1>
      </div>

      {/* First Row */}
      <div className='w-full mt-5 flex flex-wrap md:flex-nowrap items-center justify-between px-4 md:px-20 gap-4 md:gap-10'>
        <div className='flex flex-wrap gap-4 md:gap-20'>
          <h1 className='text-lg md:text-xl font-light underline underline-offset-4 capitalize'>Karman Ventures</h1>
          <h1 className='text-lg md:text-xl font-light capitalize'>Services:</h1>
          <h1 className='text-lg md:text-xl font-light capitalize'>William Barnes</h1>
        </div>
        <div className='opacity-50'>
          <h1 className='text-lg md:text-xl font-light capitalize'>Read</h1>
        </div>
      </div>

      {/* Main Testimonial Section */}
      <div className='w-full px-4 md:px-[10vw] mt-10 flex flex-col md:flex-row gap-10'>
        <div className='flex flex-col items-start gap-4 w-full md:w-1/3'>
          <button className='uppercase border px-6 py-2 rounded-full font-medium flex items-center gap-2'>
            Investor deck
            <div className='bg-white w-2 h-2 rounded-full'></div>
          </button>
          <button className='uppercase border px-6 py-2 rounded-full font-medium flex items-center gap-2'>
            Sales deck
            <div className='bg-white w-2 h-2 rounded-full'></div>
          </button>
        </div>
        <div className='w-full md:w-2/3 flex flex-col gap-6'>
          <div className='w-24 h-24 md:w-[7vw] md:h-[7vw] rounded-2xl overflow-hidden'>
            <img src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" alt="" className='w-full h-full object-cover' />
          </div>
          <p className='text-base leading-7 font-light'>
            They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5
          </p>
        </div>
      </div>

      {/* Multiple Testimonials */}
      {[
        ['Planetly', 'Nina Walloch'],
        ['Workiz Easy', 'Tomer Levy'],
        ['Premium Blend', 'Ellen Kim'],
        ['Hypercare Systems', 'Brendan Goss'],
        ['Officevibe', 'Raff Labrie'],
        ['Orderlion', 'Stefan Strohmer'],
        ['Black Book', 'Jaci Smith']
      ].map(([company, person], i) => (
        <div key={i} className='w-full border-t border-b border-zinc-700'>
          <div className='flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-[4vw] py-4'>
            <h1 className='text-lg font-light underline capitalize'>{company}</h1>
            <h1 className='text-lg font-light capitalize'>{person}</h1>
            <h1 className='uppercase tracking-tight leading-none text-lg font-light underline underline-offset-4'>read</h1>
          </div>
        </div>
      ))}

      {/* Bottom Logos Section */}
      <div className='w-full h-auto md:h-screen bg-zinc-100 px-4 md:px-10 py-10 flex flex-col md:flex-row items-center gap-10'>
        <div className="w-full md:w-1/2 h-[300px] md:h-[60vh] bg-[#004f46] rounded-2xl relative flex items-center justify-center">
          <img className='w-full h-full object-contain p-8' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <button className='absolute left-4 bottom-4 px-4 py-2 border rounded-full text-sm'>&copy;2021-2022</button>
        </div>

        <div className="w-full md:w-1/2 h-[300px] md:h-[60vh] flex flex-col md:flex-row gap-6">
          <div className='flex-1 bg-green-900 rounded-2xl relative flex items-center justify-center'>
            <img className='w-full h-full object-contain p-8' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className='absolute left-4 bottom-4 px-4 py-2 border rounded-full text-sm uppercase'>Rating 5.0 on clutch</button>
          </div>
          <div className='flex-1 bg-[#212121] rounded-2xl relative flex items-center justify-center'>
            <img className='w-full h-full object-contain p-8' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <button className='absolute left-4 bottom-4 px-4 py-2 border rounded-full text-sm uppercase'>Business Bootcamp Alumni</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
