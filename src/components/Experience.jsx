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


const Experience = () => {
    const techs = [
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
            id: 5,
            src: Nextjs,
            title: 'Next JS',
            style: 'shadow-white'
        },
        {
            id: 6,
            src: Tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 7,
            src: Graphql,
            title: 'GraphQL',
            style: 'shadow-pink-400'
        },
        {
            id: 8,
            src: Github,
            title: 'GitHub',
            style: 'shadow-gray-400'
        },
        {
            id: 1,
            src: Html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        
    ]
  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6 '>These are the technologies that I have worked with.</p>
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