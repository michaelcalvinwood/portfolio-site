import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill}  from 'react-icons/bs';

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child:  <>LinkedIn <FaLinkedin size={30}/></>,
            href: 'https://www.linkedin.com/in/michael-calvin-wood/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child:  <>GitHub <FaGithub size={30}/></>,
            href: 'https://github.com/michaelcalvinwood',
            style: ''
        },
        {
            id: 3,
            child:  <>Mail <HiOutlineMail size={30}/></>,
            href: 'mailto:michaelwood33311@icloud.com',
            style: ''
        },
        {
            id: 4,
            child:  <>Resume <BsFillPersonLinesFill size={30}/></>,
            href: '/resume.pdf',
            style: 'rounded-br-md',
            download: true
        },
    ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map(({id, child, href, style, download}) => {
                  return <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 cursor-pointer ' + style} >
                  <a href={href} className='flex justify-between items-center w-full text-white' target="_blank" download={download ? true : false} rel="noreferrer">
                      {child}
                  </a>
              </li>
            })}


          
        </ul>
    </div>
  )
}

export default SocialLinks