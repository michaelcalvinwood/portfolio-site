import React from 'react'
import Html from '../assets/html.png';
import Css from '../assets/css.png';
import Github from '../assets/github.png';
import Graphql from '../assets/graphql.png';
import Javascript from '../assets/javascript.png';
import Nextjs from '../assets/nextjs.png';
import Node from '../assets/node.png';
import ReactPng from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import Qdrant from '../assets/qdrant.png';
import Tensorflow from '../assets/tensorflow.png';
import OpenAI from '../assets/openai.png';
import Vite from '../assets/vite.png';
import Ionic from '../assets/ionic.png';
import Redux from '../assets/Redux.png';
import Wordpress from '../assets/Wordpress.png'
import Scikit from '../assets/Scikit.png';
import PHP from '../assets/PHP.png';
import Python from '../assets/python.png'
import LangChain from '../assets/LangChain-nbg.png';
import HuggingFace from '../assets/hf-logo.png';
import C from '../assets/C.png';
import { Link } from 'react-scroll';
import Streamlit from '../assets/Streamlit.png';
import MongoDB from '../assets/MongoDB.png';

/*
 * To add: Tailwind Colors: https://tailwindcolor.com/
 * 
 * MYSQL
 * MongoDB
 * Redis
 * 
 * C (already have logo)
 * Chakra UI
 * Boostrap 5
 * 
 * Linux
 */

const Experience = () => {
    const techs = [
        {
            id: 18,
            src: Python,
            title: 'Python',
            style: 'shadow-blue-700'
        },
        {
            id: 1,
            src: Html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: Css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: Javascript,
            title: 'Javascript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: ReactPng,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 14,
            src: Redux,
            title: 'Redux',
            style: 'shadow-purple-600'
        },
        {
            id: 5,
            src: Nextjs,
            title: 'Next JS',
            style: 'shadow-white'
        },
        {
            id: 6,
            src: Vite,
            title: 'Vite',
            style: 'shadow-purple-400'
        },
        {
            id: 10,
            src: Node,
            title: 'Nodejs',
            style: 'shadow-lime-500'
        },
        {
            id: 17,
            src: PHP,
            title: 'PHP',
            style: 'shadow-blue-900'
        },
        {
            id: 15,
            src: Wordpress,
            title: 'Wordpress',
            style: 'shadow-blue-300'
        },
        {
            id: 21,
            src: C,
            title: 'C',
            style: 'shadow-blue-500'
        },
        {
            id: 23,
            src: MongoDB,
            title: 'MongoDB',
            style: 'shadow-lime-300'
        },
        {
            id: 8,
            src: Tensorflow,
            title: 'Tensorflow',
            style: 'shadow-orange-400'
        },
        {
            id: 22,
            src: Streamlit,
            title: 'Streamlit',
            style: 'shadow-red-500'
        },
        {
            id: 9,
            src: OpenAI,
            title: 'OpenAI API',
            style: 'shadow-green-500'
        },
        {
            id: 16,
            src: Scikit,
            title: 'Scikit Learn',
            style: 'shadow-orange-300'
        },
        {
            id: 7,
            src: Qdrant,
            title: 'Qdrant',
            style: 'shadow-pink-400'
        },
        {
            id: 13,
            src: LangChain,
            title: 'LangChain',
            style: 'shadow-red-600'
        },
        {
            id: 20,
            src: HuggingFace,
            title: 'Hugging Face',
            style: 'shadow-yellow-400'
        },
        {
            id: 19,
            src: Ionic,
            title: 'Ionic Framework',
            style: 'shadow-sky-600'
        },
        {
            id: 11,
            src: Github,
            title: 'GitHub',
            style: 'shadow-gray-400'
        },
        {
            id: 12,
            src: Tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
     
    ]
  return (
    <div name='experience' className='pt-20 md:pt-24 bg-gradient-to-b from-black to-gray-800 w-full text-white '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                 
                <p className='pt-6'>For a full list, see:</p> 
                <ul className='px-4'>
                    <li><Link to='inventions' smooth={true} duration={500} style={{textDecoration: 'underline', cursor: 'pointer'}}>Inventions</Link></li>
                    <li><a href="https://github.com/michaelcalvinwood" target="_blank" style={{textDecoration: 'underline'}}>150 GitHub repositories</a>.</li>
                </ul>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-0 sm:px-12'>
               { techs.map(({id, src, title, style}) => {
                 return <div key={id} className={'shadow-md hover:scale-105 duration-500 py-2 rounded-lg' + ' ' + style} >
                    <img src={src} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                 </div>
               })}
            </div>
        </div>
    </div>
  )
}

export default Experience