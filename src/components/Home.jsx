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
    <div name='home' className='pt-24 sm:mt-0 sm:pt-0 sm:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>   
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full '>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    AI Engineer &
                    Full&#8209;Stack Developer
                </h2>
                <p className='text-gray-500 py-4 pr-8'>
                    I have over 30 years of experience building and designing software, hardware, servers, networks, and more. Currently, I love creating AI-driven, full-stack webapps that also run natively on iOS and Android. My primary tech stack includes: Tensorflow, Keras, Scikit Learn, Nodejs, React, Redux, Socket.io, NextJs, Vite, PHP, Python, SQL, MongoDB, Vector Databases (e.g. Qdrant), Natural Language Processing (NLP) including Spacy and NLTK, WordPress, Apache, NGINX, Javascript, HTML, CSS, SASS, Ionic, TailWind, Bootstrap, and Chakra-UI. 
                </p>
                <div>
                    <Link to={'AIportfolio'} smooth={true} duration={500}>
                        <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                
                            AI Portfolio
                            <span className='group-hover:rotate-90 duration-300' >
                                <MdOutlineKeyboardArrowRight size={20} className='ml-2'/>
                            </span>
                        </button>
                    </Link>
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