import React from 'react';
import line from "../img/line.svg"
import line2 from "../img/line2.svg"
import line3 from "../img/line3.svg"
import curve from "../img/curve.svg"

const Header = () => {
    const handleClick = () => {
        window.location.href = '/Calender'; 
    };

  return (
    <div className='relative flex flex-col-reverse lg:flex-row w-full items-center justify-center px-6 md:px-12 py-12 lg:py-16 space-y-12 lg:space-y-0 min-h-[90vh] text-black'>
        <div className='absolute top-16 left-4 sm:left-16 lg:top-20 lg:left-28 items-end flex flex-col'>
            <img src={line} alt='Background' loading='lazy' width={40} height={40} className='w-8 sm:w-10'/>
            <div className='bg-white shadow-md w-48 sm:w-60 px-4 py-2 mt-4 rounded-xl flex flex-col space-y-4'>
                <h1 className='text-sm font-bold'>Weekly Growth</h1>
                <div className='flex flex-col items-center'>
                    <img src={curve} alt='Growth Chart' loading='lazy' width={100} height={100} className='object-contain'/>
                    <div className='flex items-center gap-3 justify-center mt-4'>
                        <div className='flex items-center space-x-2'>
                            <div className='w-3 h-3 md:w-4 md:h-4 rounded-full bg-gray-400'></div>
                            <span className='text-xs font-medium'>12345</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <div className='w-3 h-3 md:w-4 md:h-4 rounded-full bg-teal-600'></div>
                            <span class="text-xs font-medium">2.4%</span>
                            <span class="text-orange-500 text-lg">↑</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full lg:w-[55%] space-y-6 text-center z-10 items-center justify-center lg:text-left px-4'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl text-center font-extrabold font-bricolage leading-tight'>
                <span className='inline-flex items-center gap-2'>The Beloved<span className='bg-[#FFC2EA] rounded-full px-4'>experts</span>in</span>
                <div className='relative inline-block'>
                    <span className='text-5xl font-extrabold leading-none'>devXpress</span>
                    <img src={line2} alt='Underline Decoration' loading='lazy' width={200} height={10} className='absolute left-0 top-full mt-[1px] w-full' />
                </div>
            </h1>
            <div className='flex flex-col items-center'>
                <p className='text-sm max-w-lg text-center pt-10 text-[#516371]'>We build, you chill – we bring the expertise, you pocket the rewards. It‘s that simple.</p>
                <ul className='list-disc flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 mt-4 text-gray-500 text-sm'>
                    <li>UI/UX Design</li>
                    <li>Prototype</li>
                    <li>Web Design</li>
                    <li>Landing Page</li>
                    <li>Mobile Design</li>
                    <li>Development</li>
                </ul>
                <div className='mt-8'>
                    <button className='bg-[#257180] text-white px-8 py-3 rounded-full shadow-md hover:bg-[#1c5560] transition duration-300' onClick={handleClick}>Get in Touch</button>
                </div>
            </div>
        </div>
        <div className='absolute bottom-16 right-24'>
            <img src={line3} alt='Background' loading='lazy' width={40} height={40} className='w-8 sm:w-10'/>
            <div className='bg-white shadow-md w-48 sm:w-60 p-4 mt-4 rounded-xl flex flex-col gap-4'>
                <h1 class="text-sm font-bold">Client Trusted</h1>
                <div className='flex items-center space-x-4'>
                    <div className='flex -space-x-2'>
                        <img src='https://www.devxpress.tech/_next/image?url=%2Fclient1.png&w=48&q=75' alt="Client 1" loading="lazy" width={40} height={40} className="rounded-full border-2 border-white object-cover"  />
                        <img src='https://www.devxpress.tech/_next/image?url=%2Fclient2.png&w=48&q=75' alt="Client 2" loading="lazy" width={40} height={40} className="rounded-full border-2 border-white object-cover"  />
                        <img src='https://www.devxpress.tech/_next/image?url=%2Fclient1.png&w=48&q=75' alt="Client 3" loading="lazy" width={40} height={40} className="rounded-full border-2 border-white object-cover"  />
                        <img src='https://www.devxpress.tech/_next/image?url=%2Fclient2.png&w=48&q=75' alt="Client 4" loading="lazy" width={40} height={40} className="rounded-full border-2 border-white object-cover"  />
                    </div>
                    <div className='flex items-center space-x-2'>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" class="text-orange-500" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                        <span className='text-sm font-semibold text-gray-600'>1,234+</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='absolute bottom-0 w-full flex justify-center'>
            <img src='https://www.devxpress.tech/_next/image?url=%2Fcurve2.png&w=1080&q=75' alt="Background" loading="lazy" width={1000} height={1000} className="w-full max-h-64 object-contain"/>
        </div>
    </div>
  )
}

export default Header;