import React from 'react';
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg';
import installNode from '../assets/portfolio/installNode.jpg';
import navbar from '../assets/portfolio/navbar.jpg';
import reactParallax from '../assets/portfolio/reactParallax.jpg';
import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
import reactWeather from '../assets/portfolio/reactWeather.jpg';
import usestate from '../assets/portfolio/usestate.jpg';
import whisper from '../assets/portfolio/whisper.png';
import instaNews from '../assets/portfolio/instaNews.png'
import blender from '../assets/portfolio/blender.png'
import aimixer from '../assets/portfolio/aimixer.png'
import instantChatbot from '../assets/portfolio/instantChatbot.png'
import instantBlog from '../assets/portfolio/instantBlog.png'
import vectraDB from '../assets/portfolio/vectraDB.png'
import NLPKit from '../assets/portfolio/NLPKit.png'
import machineLearning from '../assets/portfolio/machineLearning.png'

const Portfolio = ({setUseModal, setModalDemoInfo}) => {

    const portfolios = [
        {
            id: 8,
            src: instantChatbot,
            name: "Instant ChatBot",
            demo: {
                description: "Instant ChatBot allows organizations to rapidly create chatbots based on company website content, PDFs, Word docs, and more.",
                videos: [
                    {
                        id: 1,
                        description: `Proof of concept presented to PYMNTS.\nChatBot knowledge was loaded from a PYMNTS article and a PYMNTS study.`,
                        link: 'https://michaelcalvinwood.net/videos/chatbot-001.mp4'
                    },
                    {
                        id: 2,
                        description: `Proof of concept presented to PYMNTS.\nChatBot knowledge was loaded with all PYMNTS' articles, studies, and trackers published in 2023.`,
                        link: 'https://michaelcalvinwood.net/videos/chatbot-002.mp4'
                    }
                ]
            },
            code: null,
        },
        {
            id: 1,
            src: aimixer,
            name: "AI Mixer",
            demo: null,
            code: null,
        },
        {
            id: 2,
            src: blender,
            name: "PYMNTS Blender",
            demo: null,
            code: null,
        },
        {
            id: 4,
            src: NLPKit,
            name: "Vectra DB",
            demo: null,
            code: null,
        },
        {
            id: 5,
            src: vectraDB,
            name: "NLP Kit",
            demo: null,
            code: null,
        },
        {
            id: 6,
            src: machineLearning,
            name: "ML Matters",
            demo: null,
            code: null,
        },
        {
            id: 3,
            src: instaNews,
            name: "PYMNTS InstaNews",
            demo: null,
            code: null,
        },
        {
            id: 7,
            src: whisper,
            name: "PYMNTS Whisper",
            demo: null,
            code: null,
        },
        
        {
            id: 9,
            src: instantBlog,
            name: "Instant Blog",
            demo: null,
            code: null,
        },


        

    ]

  return (
    <div name='AIportfolio' className='pt-20 md:pt-24 bg-gradient-to-b from-black to-gray-800 w-full text-white '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>AI Portfolio</p>
                <p className='pt-6'>Example AI-Driven Web Apps and SaaS Services.</p> 
                <p>For a full list, see my <a href="https://github.com/michaelcalvinwood" target="_blank" style={{textDecoration: 'underline'}}><span style={{fontWeight: 'bold', fontSize: '1.2rem'}}>150 project repositories</span></a>.</p>
               
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-0 md:px-12'>
                {portfolios.map(({id, src, name, demo, code}) => {
                    return <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                         <div className='pb-1 text-center'>{name}</div>
                        <div className='relative '>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-center'>
                                {/* {ai && <div className='hover:scale-105 cursor-pointer text-blue-700 text-3xl border-2 border-blue-700 rounded p-3 inline-block'>AI</div>} */}
                                {/* {mobile && <div className='hover:scale-105 cursor-pointer text-blue-700 text-3xl border-2 border-blue-700 rounded p-3 inline-block mx-2'>iOS</div>} */}
                            </div>
                        </div>
                       
                        <div className='flex items-center justify-center'>
                            <button className={demo ? 'w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105 text-white' : 'w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105 text-gray-600'}
                                onClick={() => {
                                    if (!demo) setUseModal(true);
                                    else setModalDemoInfo(demo)
                                }}
                            >
                                Demo
                            </button>
                            <button className={code ? 'w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105 text-white' : 'w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105 text-gray-600'}
                             onClick={() => {
                                if (!code) setUseModal(true);
                            }}>
                                Code
                            </button>
                        </div>
                    </div>
                })}

                
            </div>
        </div>

    </div>
  )
}

export default Portfolio