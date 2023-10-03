import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link }  from 'react-scroll';
const NavBar = () => {
    const [nav, setNav] = useState(false);

    //https://michaelcalvinwood.net/docs/Michael_Recommendation_PYMNTS.pdf
    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'AI portfolio'
        },
        {
            id: 4,
            link: 'inventions'
        },
        {
            id: 5,
            link: 'experience'
        },
        {
            id: 6,
            link: 'recommendations',
            href: 'https://michaelcalvinwood.net/docs/Michael_Recommendation_PYMNTS.pdf'
        },
        {
            id: 7,
            link: 'contact'
        },
       
    ]
  return (
    <div className='px-4 flex justify-between items-center w-full h-20 text-white bg-black fixed top-0 z-50'>
       <div>
         <h1 className='text-5xl font-signature ml-2'>Michael</h1>
       </div>
       <ul className='hidden lg:flex'>
            {links.map(link => (
            <li key={link.id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                {!link.href && <Link to={link.link.replaceAll(' ', '')} smooth={true} duration={500}>{link.link}</Link>}
                {link.href && <a href={link.href} target="_blank">{link.link}</a>}
            </li>))}
       </ul>
      
       <div  className='cursor-pointer pr-4 z-10 text-gray-500 lg:hidden' onClick={() => setNav(!nav)}>
        {nav ? <FaTimes size={30} /> : <FaBars size={30}/>}
       </div>
       { nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
        {links.map(link => <li key={link.id} className='px-4 capitalize cursor-pointer py-6 text-4xl'>
                {!link.href && <Link onClick={()=>setNav(false)} to={link.link.replaceAll(' ', '')} smooth={true} duration={500}>{link.link}</Link>}
                {link.href && <a href={link.href} target="_blank">{link.link}</a>}
            </li>)
        }
        
        </ul>
       )}
      
    </div>
  )
}

export default NavBar