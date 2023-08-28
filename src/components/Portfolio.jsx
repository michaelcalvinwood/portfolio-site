import React from 'react';
import whisper from '../assets/portfolio/whisper.png';
import instaNews from '../assets/portfolio/instaNews.png';
import blender from '../assets/portfolio/blender.png';
import aimixer from '../assets/portfolio/aimixer.png';
import instantChatbot from '../assets/portfolio/instantChatbot.png';
import instantBlog from '../assets/portfolio/instantBlog.png';
import vectraDB from '../assets/portfolio/vectraDB.png';
import NLPKit from '../assets/portfolio/NLPKit.png';
import machineLearning from '../assets/portfolio/machineLearning.png';
import contributorPage from '../assets/portfolio/contributorPage.png';

const Portfolio = ({setUseModal, setModalDemoInfo, modalCodeInfo, setModalCodeInfo}) => {
    const portfolios = [
        {
            id: '4889f0dcf608212e2d9b5de6cdad659c',
            src: instantChatbot,
            name: "Instant ChatBot",
            demo: {
                description: "Instant ChatBot allows organizations to rapidly create chatbots based on company website content, PDFs, Word docs, and more.",
                videos: [
                    {
                        id: '224e5e48843584ae14c4483391da30c5',
                        description: `Proof of concept presented to PYMNTS.\nChatBot knowledge was loaded from a PYMNTS article and a PYMNTS study.`,
                        link: 'https://michaelcalvinwood.net/videos/chatbot-001.mp4'
                    },
                    {
                        id: '8ce64b83e3c4e9317e5fcfd13e9991d1',
                        description: `Proof of concept presented to PYMNTS.\nChatBot knowledge was loaded with all PYMNTS' articles, studies, and trackers published in 2023.`,
                        link: 'https://michaelcalvinwood.net/videos/chatbot-002.mp4'
                    }
                ]
            },
            code: [
                {
                    id: '9be48999f6edc4e67904dda8623ad8f6',
                    description: 'React Client',
                    link: 'https://github.com/michaelcalvinwood/instant-chatbot'
                },
                {
                    id: 'b0a85aa6419404873a7a6cb20054156b',
                    description: 'Website Home',
                    link: 'https://github.com/michaelcalvinwood/chatbot-home'
                },
                {
                    id: 'c23b50f2cae5d8ceca1932e4f6553b71',
                    description: "Nodejs App Server",
                    link: 'https://github.com/michaelcalvinwood/chatbot-app'
                },
                {
                    id: 'f77cadca2450055557441d0ecce9aab1',
                    description: "NodeJs Ingest Server",
                    link: 'https://github.com/michaelcalvinwood/chatbot-ingest'
                },
                {
                    id: '71f6417746074f2cfcd85bd2ec0a6eb7',
                    description: "NodeJs PDF Service",
                    link: 'https://github.com/michaelcalvinwood/chatbot-pdf'
                },
                {
                    id: '5945d9094924fb31afee8d3cdf1c7c0e',
                    description: 'NodeJs Admin Server',
                    link: 'https://github.com/michaelcalvinwood/chatbot-admin'
                },
                {
                    id: '39fd61d2ce581acb1bc809e03f8807d8',
                    description: 'iframe widget',
                    link: 'https://github.com/michaelcalvinwood/chatbot-iframe'
                }
            ],
        },
        {
            id: '6b551075b646b3eb0719332ef6ea7d40',
            src: aimixer,
            name: "AI Mixer",
            demo: null,
            code: null,
        },
        {
            id: 'a312d597a52801c9ae230f21162ee8e8',
            src: contributorPage,
            name: "100% AI-Generated Pages",
            msg: "1,500 Pages",
            demo: null,
            code: null,
        },
        {
            id: '1260b365778a7a6481e47cfc0cef7dc6',
            src: NLPKit,
            name: "Vectra DB",
            demo: null,
            code: null,
        },
        {
            id: 'dbaf4c9f835496c4cc59379cc397e0a7',
            src: vectraDB,
            name: "NLP Kit",
            demo: null,
            code: null,
        },
        {
            id: '30adc32401a80686c4d078b3227a7f28',
            src: machineLearning,
            name: "ML Matters",
            demo: null,
            code: null,
        },
        {
            id: '17a82864e5bad676b69370b4fa4d0d41',
            src: whisper,
            name: "PYMNTS Whisper",
            demo: null,
            code: null,
        },
        {
            id: 'fdf698f37cc9efbad3791a2b604ce48c',
            src: blender,
            name: "PYMNTS Blender",
            demo: null,
            code: null,
        },
        {
            id: 'f768f7a5239ea56643c8b94dc577951e',
            src: instantBlog,
            name: "Instant Blog",
            demo: null,
            code: null,
        }
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
                {portfolios.map(({id, src, name, demo, code, msg}) => {
                    return <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                         <div className='pb-1 text-center'>{name}</div>
                        <div className='relative '>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-center'>
                                {msg && <div className='hover:scale-105 cursor-pointer text-blue-700 text-3xl border-2 border-blue-700 rounded p-3 inline-block'>{msg}</div>}
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
                                else setModalCodeInfo(code);
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