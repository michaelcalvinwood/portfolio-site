import React from 'react'
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { FaRegFaceGrin } from 'react-icons/fa6'
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill}  from 'react-icons/bs';
import { MdOutlineFeed } from 'react-icons/md';


const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child:  <>References <MdOutlineFeed size={30}/></>,
            href: 'https://michaelcalvinwood.net/docs/Michael_Recommendation_PYMNTS.pdf',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child:  <>Resume <BsFillPersonLinesFill size={30}/></>,
            href: 'https://michaelcalvinwood.net/docs/resume.pdf',
            style: '',
            download: true
        },
        {
            id: 3,
            child:  <>GitHub <FaGithub size={30}/></>,
            href: 'https://github.com/michaelcalvinwood',
            style: ''
        },
        {
            id: 4,
            child:  <>Medium <FaMedium size={30}/></>,
            href: 'https://medium.com/@michaelwood33311',
            style: ''
        },
        {
            id: 5,
            child:  <>LinkedIn <FaLinkedin size={30}/></>,
            href: 'https://www.linkedin.com/in/michael-calvin-wood/',
            style: ''
        },
        {
            id: 6,
            child:  <>Hugging Face <FaRegFaceGrin size={30}/></>,
            href: 'https://huggingface.co/mwood33311',
            style: ''
        },
        {
            id: 7,
            child:  <>Contact <HiOutlineMail size={30}/></>,
            // href: 'mailto:michaelwood33311@icloud.com',
            href: "https://www.michaelcalvinwood.net/#Contact",
            style: 'rounded-br-md'
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