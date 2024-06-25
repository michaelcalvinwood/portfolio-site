import React, { useEffect } from 'react'
import HeroImage from '../assets/webdev-michael-wood.jpeg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const scrollToHash = () => {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    if (top !== 0) return;
    const location = window.location.href;
    const hashIndex = location.indexOf('#');
    if (hashIndex === -1) return;
    const hash = location.substring(hashIndex + 1);
    const hashEl = document.getElementById(hash);
    if (!hashEl) return;
    const rect = hashEl.getBoundingClientRect();
    console.log(hash, rect);
    scroll.scrollTo(rect.y);
}

const Home = () => {
    useEffect(() => {
     setTimeout(scrollToHash, 300)
    }, [])
  return (
    <div name='home' className='pt-24 sm:mt-0 sm:pt-0 w-full bg-gradient-to-b from-black via-black to-gray-800 md:h-screen'>   
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 md:flex-row mt-20' >
            <div className='flex flex-col justify-center w-auto'>
                <h2 className='text-4xl sm:text-4xl font-bold text-white'>
                    AI Engineer &
                    Full&#8209;Stack Developer
                </h2>
                <p className='text-gray-500 py-4 pr-8'>
                    Over 30 years of experience building and designing software, hardware, servers, and networks. I especially love creating AI-driven, full-stack webapps that also run natively on iOS and Android.
                </p> 
                <h3 className='text-lg text-gray-500 text-center'>AI, ML, & NLP</h3>    
                <p className='text-gray-500 py-4 pr-8'>
                TensorFlow, Keras, SciKit Learn, Flan-T5, Bert, GPT, OpenAI, Spark NLP, SpaCy, Hugging Face Transformers, Stanford NLP, Allen NLP, NLTK, Qdrant, Pinecone.
                </p>
                <h3 className='text-lg text-gray-500 text-center'>WebDev Stack</h3>    
                <p className='text-gray-500 py-4 pr-8'>    
                    Nodejs, React, Redux, Socket.io, NextJs, Vite, PHP, Python, Flask, Streamlit, SQL, Redis, MongoDB, WordPress, Apache, NGINX, Javascript, HTML, CSS, SASS, Ionic, TailWind, Bootstrap, and Chakra-UI. 
                </p>
            
                <div className='hidden md:block'>
                    {/* <Link to={'AIportfolio'} smooth={true} duration={500}> */}
                    <a href='https://github.com/michaelcalvinwood' target="_blank">
                        <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                
                            Repositories
                            <span className='group-hover:rotate-90 duration-300' >
                                <MdOutlineKeyboardArrowRight size={20} className='ml-2'/>
                            </span>
                        </button>
                    </a>
                </div>
            </div>
            <div className='flex flex-col justify-center'>
                <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-1/2'/>
                <div className='mt-4'>
                    <h3 className='text-lg text-white text-xl text-center font-bold'>100% Accurate AI Finally Here</h3>    
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/bCPXhZpynIQ?si=NO9PHrFB6E9n22zh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <p className='text-gray-500 pt-4 pb-1 pr-8'>I will be releasing the first 100% accurate, hallucination-free AI on July 18th. No kidding. No hype.</p>
                    
                </div>
            </div>
        </div>
    </div>
  )
  
}

export default Home