import React from 'react'

const Footer = () => {
    return (
        <div data-scroll data-scroll-speed="1" className='w-full min-h-screen flex flex-col md:flex-row bg-zinc-100 px-6 sm:px-10 md:px-16 lg:px-20 py-12 gap-10'>
            
            {/* Left Section */}
            <div className='w-full md:w-1/2 flex flex-col justify-between'>
                <div>
                    <h1 className='text-[12vw] sm:text-[10vw] md:text-[8vw] font-bold uppercase leading-none tracking-tight'>Eye-</h1>
                    <h1 className='text-[12vw] sm:text-[10vw] md:text-[8vw] font-bold uppercase leading-none tracking-tight'>Opening</h1>
                </div>

                {/* Logo SVG */}
                <div className="mt-10 md:mt-0">
                    <svg width="72" height="30" viewBox="0 0 72 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* SVG content unchanged */}
                        <path d="M9.8393 10.2032..." fill="currentColor" />
                        {/* Include all your other <path> elements here as needed */}
                    </svg>
                </div>
            </div>

            {/* Right Section */}
            <div className='w-full md:w-1/2 flex flex-col gap-10'>

                {/* Presentations Heading */}
                <h1 className='text-[10vw] sm:text-[7vw] font-bold leading-none tracking-tight'>Presentations</h1>

                {/* Social Links */}
                <div>
                    <h2 className='text-lg font-light mb-2'>S:</h2>
                    <div className='flex flex-col gap-1'>
                        {['Facebook', 'Instagram', 'Behance', 'Linkedin'].map((item, i) => (
                            <a key={i} href="#" className='text-lg font-light underline underline-offset-2'>{item}</a>
                        ))}
                    </div>
                </div>

                {/* Location & Menu */}
                <div className='flex flex-col sm:flex-row gap-10'>
                    {/* Location */}
                    <div className='w-full sm:w-1/2'>
                        <h2 className='text-lg font-light mb-2'>L:</h2>
                        <div className='flex flex-col gap-1'>
                            <a href="#" className='text-lg font-light underline underline-offset-2'>202-1965 W 4th Ave</a>
                            <a href="#" className='text-lg font-light underline underline-offset-2 mb-3'>Vancouver, Canada</a>
                            <a href="#" className='text-lg font-light underline underline-offset-2'>30 Chukarina St</a>
                            <a href="#" className='text-lg font-light underline underline-offset-2'>Lviv, Ukraine</a>
                        </div>
                    </div>

                    {/* Menu */}
                    <div className='w-full sm:w-1/2'>
                        <h2 className='text-lg font-light mb-2'>M:</h2>
                        <div className='flex flex-col gap-1'>
                            {['Home', 'Services', 'Our Work', 'About Us', 'Insights', 'Contact Us'].map((item, i) => (
                                <a key={i} href="#" className='text-lg font-light underline underline-offset-2'>{item}</a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Email */}
                <div>
                    <h2 className='text-lg font-light mb-2'>E:</h2>
                    <a href="#" className='text-lg font-light underline underline-offset-2'>furqan64123@gmail.com</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
