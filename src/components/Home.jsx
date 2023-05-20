import React from 'react'
import HeroImage from '../assets/webdev-michael-wood.jpeg';
import { HiArrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>   
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full '>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    Full-Stack Developer Plus
                </h2>
                <p className='text-gray-500 py-4 pr-8'>
                    I have over 30 years of experience building and designing software, hardware, servers, networks, and more. Currently, I love working on full-stack websites and apps using Nodejs, React, Redux, NextJs, PHP, WordPress, HTML, CSS, SASS, TailWind, and Chakra-UI. 
                </p>
                <div>
                    <button>
                        Portfolio
                        <span>
                            <HiArrowRight />
                        </span>
                    </button>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto, w-2/3 md:w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Home