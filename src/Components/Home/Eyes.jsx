'use client';
import React, { useEffect, useState } from 'react';

const Eyes = () => {
  const [rotate, setRotate] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      if (!isDesktop) return;

      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDesktop]);

  return (
    <div className='eyes w-full overflow-hidden'>
      <div
        data-scroll
        data-scroll-speed='-.5'
        className='relative w-full h-[60vh] md:h-screen bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg)] px-5 py-10 md:py-0 md:px-0'
      >
        <div className='flex items-center justify-center gap-6 sm:gap-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-2/3 lg:w-1/3'>
          
          {/* Eye 1 */}
          <div className='flex items-center justify-center w-[30vw] sm:w-[18vw] lg:w-[15vw] h-[30vw] sm:h-[18vw] lg:h-[15vw] rounded-full bg-zinc-100'>
            <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${isDesktop ? rotate : 0}deg)`,
                }}
                className='line absolute top-1/2 left-1/2 w-full h-10'
              >
                <div className='w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 rounded-full bg-zinc-100'></div>
              </div>
            </div>
          </div>

          {/* Eye 2 */}
          <div className='flex items-center justify-center w-[30vw] sm:w-[18vw] lg:w-[15vw] h-[30vw] sm:h-[18vw] lg:h-[15vw] rounded-full bg-zinc-100'>
            <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${isDesktop ? rotate : 0}deg)`,
                }}
                className='line absolute top-1/2 left-1/2 w-full h-10'
              >
                <div className='w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 rounded-full bg-zinc-100'></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Eyes;
