'use client';

import React from 'react';
import Button from '../Button';

const Cards = () => {
  return (
    <div data-scroll data-scroll-speed=".02" className="w-full">
      {/* Header */}
      <div className="w-full px-4 md:px-[5vw] border-b border-zinc-300 pt-10 pb-6">
        <h1 className="text-4xl md:text-6xl font-[founders_grotesk] mb-4">Client's Review</h1>
      </div>
      {/* First Row */}
      <div className="w-full flex items-center  px-4 md:px-[5vw] py-6 gap-6 md:gap-10">
        <div className='flex flex-col md:flex-row md:items-center md:gap-5 w-full'>
          <h1 className="text-base md:text-lg font-light underline underline-offset-4 capitalize">Karman Ventures</h1>
        </div>
        <div className='hidden lg:flex flex-col md:flex-row md:items-center md:gap-5 w-full'>
        <h1 className="hidden md:block text-base md:text-lg font-light capitalize">Services:</h1>
        </div>
        <div className='flex flex-col md:flex-row md:items-center md:gap-5 w-full'>
        <h1 className="text-base md:text-lg font-light capitalize">William Barnes</h1>
        </div>
        <div className="opacity-50 ml-auto">
          <h1 className="text-base md:text-lg font-light capitalize">Read</h1>
        </div>
      </div>

      {/* Main Testimonial Section */}
      <div className="w-full px-4 md:px-[5vw] mt-8 flex flex-col md:flex-row gap-30">
        <div className="lg:w-1/2 w-full  flex items-start  gap-4">
        <Button className="uppercase border px-6 py-2 rounded-full font-medium flex items-center hover:bg-black hover:text-white cursor-pointer "
            text="Investor Deck"
              icon={
                <div className="bg-white w-2 h-2 ml-3 rounded-full"></div>
              }
             
          />
          <Button className="uppercase border px-6 py-2 rounded-full font-medium flex items-center hover:bg-black hover:text-white cursor-pointer "
            text="Sales Deck"
              icon={
                <div className="bg-white w-2 h-2 ml-3 rounded-full"></div>
              }
             
          />
        </div>
        <div className="w-full lg:w-1/2 md:w-2/3 flex flex-col gap-6">
          <div className="w-24 h-24 md:w-[6vw] md:h-[6vw] rounded-2xl overflow-hidden">
            <img src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" alt="Client" className="w-full h-full object-cover" />
          </div>
          <p className="lg:w-[80%] w-full text-sm md:text-base leading-relaxed font-light">
            They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5
          </p>
        </div>
      </div>

      {/* Multiple Testimonials */}
      <div className="mt-12">
        {[['Planetly', 'Nina Walloch'], ['Workiz Easy', 'Tomer Levy'], ['Premium Blend', 'Ellen Kim'], ['Hypercare Systems', 'Brendan Goss'], ['Officevibe', 'Raff Labrie'], ['Orderlion', 'Stefan Strohmer'], ['Black Book', 'Jaci Smith']].map(([company, person], i) => (
          <div key={i} className="w-full border-t border-zinc-300">
            <div className="flex items-center md:flex-row md:items-center md:justify-between px-5  md:px-[5vw] py-6">
              <div className="flex flex-col md:flex-row md:items-center md:gap-10 w-full">
                <h1 className="text-base md:text-lg font-light underline capitalize">{company}</h1>
              </div>
              <div className='flex flex-col md:flex-row md:items-center md:gap-10 w-full'>
              <h1 className="hidden md:block text-base md:text-lg font-light capitalize">{person}</h1>
              </div>
              <div className="ml-auto mt-2 md:mt-0">
                <Button className="uppercase text-base md:text-lg font-light underline underline-offset-4 cursor-pointer"
                text='Read'/>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Logos Section */}
      <div className="w-full bg-zinc-100 px-4 md:px-[5vw] py-10 flex flex-col md:flex-row items-start gap-10 mt-10">
        <div className="w-full md:w-1/2 h-[300px] md:h-[60vh] bg-[#004f46] rounded-2xl relative flex items-center justify-center">
          <img className="w-full h-full object-contain p-8" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="Logo 1" />
          <button className="absolute left-4 bottom-4 px-4 py-2 border rounded-full text-sm text-white">&copy;2021-2022</button>
        </div>

        <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-6">
          <div className="flex-1 h-[300px] md:h-[60vh] bg-green-900 rounded-2xl relative flex items-center justify-center">
            <img className="w-full h-full object-contain p-8" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="Logo 2" />
            <button className="absolute left-4 bottom-4 px-4 py-2 border rounded-full text-sm uppercase text-white">Rating 5.0 on clutch</button>
          </div>
          <div className="flex-1 h-[300px] md:h-[60vh] bg-[#212121] rounded-2xl relative flex items-center justify-center">
            <img className="w-full h-full object-contain p-8" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="Logo 3" />
            <button className="absolute left-4 bottom-4 px-4 py-2 border rounded-full text-sm uppercase text-white">Business Bootcamp Alumni</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
