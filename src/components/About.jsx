import React from 'react'

const About = () => {
  return (
    <div id='about' name="about" className='pt-20 lg:pt-0 w-full lg:h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full text-gray-500'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 text-white'>About</p>
            </div>
            <p className='text-xl mt-5 '>
                My love for programming began with the very first computers — with my starting programming languages being Assembler, Pascal, Fortran, and BASIC. Shortly thereafter I pursued Linux network programming in C. Over the decades, I passionately devoured new languages and frameworks; keeping my skills current through continuing education &#8212; including obtaining a full-stack Web Development diploma from Brainstation &#8212; and also passionately devouring the latest in AI, NLP and ML development. 
            </p>
            <br />
            <p className='text-xl'>
                Due to my constant pursuit of knowledge:</p> 
                
            <ul className='list-disc list-inside'>
                <li className='text-xl mx-1'>I'm proficient in a variety of programming paradigms and languages &#8212; including the latest AI technologies.</li>
                <li className='text-xl mx-1'>I'm well-versed in the leading NLP libraries: Spark NLP, SpaCy, Hugging Face, nltk, Stanford Core NLP and Allen NLP.</li>
                <li className='text-xl '>I'm equally comfortable with a variety of databases such as SQL, MongoDb, Redis, as well as vector databases such as Qdrant and Pinecone.</li>
                <li className='text-xl '>I'm equally comfortable with frontend and backend development.</li>
                <li className='text-xl '>I'm proficient in developing real-time collaboration apps using Socket.IO and Redis for horizontal scaling.</li>
                <li className='text-xl '>I'm proficient in designing webapps that also run natively on iOS and Android from a single code base using the Ionic framework.</li>
            </ul>   
            <br />
                
            <p className='text-xl'>My current employment involves a combination of Nodejs, React, Redux, PHP, Python, SQL, Redis, MongoDB, LangChain, OpenAI, Flan-T5, Qdrant, WordPress, Javascript, HTML, CSS, Ionic, and Nextjs. I also manage all DevOps as well.
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