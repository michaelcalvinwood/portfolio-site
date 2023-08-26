import React from 'react';
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg';
import installNode from '../assets/portfolio/installNode.jpg';
import navbar from '../assets/portfolio/navbar.jpg';
import reactParallax from '../assets/portfolio/reactParallax.jpg';
import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
import reactWeather from '../assets/portfolio/reactWeather.jpg';
import usestate from '../assets/portfolio/usestate.jpg';
import whisper from '../assets/portfolio/whisper.png';

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: whisper,
            ai: true
        },
        {
            id: 2,
            src: reactParallax,
            ai: false
        },
        {
            id: 3,
            src: navbar,
            ai: false
        },
        {
            id: 4,
            src: reactSmooth,
            ai: false
        },
        {
            id: 5,
            src: installNode,
            ai: false
        },
        {
            id: 6,
            src: reactWeather,
            ai: false
        },
       

    ]

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 gap-8 px-0 md:px-12'>
                {portfolios.map(({id, src, ai}) => {
                    return <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <div className='relative '>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                            {ai && <div className='absolute hover:scale-105 cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-700 text-3xl border-2 border-blue-700 rounded p-3'>AI</div>}
                        </div>
                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                        </div>
                    </div>
                })}

                
            </div>
        </div>

    </div>
  )
}

export default Portfolio