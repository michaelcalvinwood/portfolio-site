import React from 'react'

const About = () => {
  return (
    <div id='about' name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-5 '>
                My love for programming began with the very first computers — with my starting programming languages being Assembler, Pascal, Fortran, and BASIC — as well as Linux network programming in C. Over the decades, I passionately devoured new languages and frameworks; keeping my skills current through continuing education, including obtaining a full-stack Web Development diploma from Brainstation.
            </p>
            <br />
            <p className='text-xl'>
                I'm now proficient in a variety of programming paradigms and languages, and I'm equally comfortable with a variety of databases such as SQL, MongoDb, Redis, and even newer AI vector databases such as Qdrant. I'm also equally comfortable with frontend and backend development. My current employment involves a combination of Nodejs, React, Redux, PHP, WordPress, HTML, CSS, and Nextjs.
            </p>
            <br />
            <p className='text-xl'>
                In short, I have no preference for any programming language, paradigm, nor environment. I strongly believe in selecting whatever provides the best solution to meet current requirements. I happily adapt — always striving to provide the best possible solution in the shortest amount of time.
            </p>
        </div>
    </div>
  )
}

export default About