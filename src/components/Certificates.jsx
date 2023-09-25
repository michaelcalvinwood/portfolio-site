import React from 'react';
import whisper from '../assets/portfolio/whisper.png';
import instaNews from '../assets/portfolio/instaNews.png';
import blender from '../assets/portfolio/blender.png';
import llmMastery from '../assets/certificates/Cerificate-JPG-LLMs-Mastery-Complete-Guide.jpg';
import brainStation from '../assets/certificates/BrainStation-Diploma-JPG.jpg';
import instantBlog from '../assets/portfolio/instantBlog.png';
import vectraDB from '../assets/portfolio/vectraDB.png';
import NLPWithPython from '../assets/certificates/Certificate-JPG-NLP-Natural-Language-Processing-with-Python.jpg';
import machineLearning from '../assets/portfolio/machineLearning.png';
import practicalDeepLearning from '../assets/certificates/Certificate-JPG-Practical_Deep_Learning_with_Tensorflow_2x_and_Keras.jpg';
import nextJsOpenAIBlog from '../assets/certificates/Certficiate-JPG-NextJS-OpenAI-GPT.jpg'
import { Link } from 'react-scroll';

const Certficates = ({setUseModal, setModalDemoInfo, modalCodeInfo, setModalCodeInfo}) => {
    const portfolios = [
        {
            id: '538765e2ba10fb314d402dfafd525164',
            src: brainStation,
            name: "BrainStation",
            descr: "A leading bootcamp for Web Development: React, Nodejs, javascript, CSS, SASS, HTML, Agile Development, and Git."
        },
        {
            id: '0ed52b3156facd4f2c1c60c011cc9b2a',
            src: llmMastery,
            name: "LLMs Mastery: Complete Guide to Transformers & Generative AI",
            descr: "Cutting-edge application development using the latest transformers empowering generative AI.",
            demo: null,
            code: null,
        },
        {
            id: '090b31fab1243d5844715fd7cd4e620e',
            src: practicalDeepLearning,
            name: "Practical Deep Learning with Tensorflow 2.x and Keras",
            descr: 'By Dr. Nauman, co-author of <a style="text-decoration: underline;" href="https://link.springer.com/article/10.1007/s10723-018-9450-6" target="_blank">Beyond Homology Transfer: Deep Learning for Automated Annotation of Proteins</a>. Focuses on reshaping raw information (such as amino acid sequences) for use as AI input — including a 97% accurate model for predicting whether a protein performs ATP binding.'
        },
        {
            id: '2d3b72117427f5d0191a448813ab63ba',
            src: NLPWithPython,
            name: "Natural Language Processing with Python",
            descr: 'Natural Language Processing refresher with real-world tips and tricks for SpaCy, NLTK, and Keras. Keras focus on Deep Learning LSTMs — including building an LSTM-based, text generating chatbot.'
        },
        {
            id: '20165458f4c772d00929e4a7f1d4f338',
            src: nextJsOpenAIBlog,
            name: "NextJs & OpenAI/GPT: Next-Generation NextJs & AI Apps",
            descr: 'NextJs 13 was a major paradigm shift. The course covered the latest changes in NextJs development with a focus on developing innovative backend libraries for OpenAI/GPT integration.'
        },
        
    ]

  return (
    <div id="certificates" name='certficates' className='pt-20 md:pt-24 bg-gradient-to-b from-black to-gray-800 w-full text-white '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Continuing Education</p>
                <p className='pt-6'>AI is a constantly changing field. After all, less than five years ago RNNs were all the rage. Yet, now, transformers are the reigning champions. It is imperative to stay up to date with the latest models and pipelines. I also engage in continual learning to master models and aspects of programming languages that I have not yet needed to use so that I am instantly ready to employ them when they're appropriate for solving a newly encountered problem.</p>
                
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-0 md:px-12'>
                {portfolios.map(({id, src, name, descr, msg}) => {
                    return <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                         <div className='pb-1 text-center'>{name}</div>
                        <div className='relative '>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-center'>
                                {msg && <div className='hover:scale-105 cursor-pointer text-blue-700 text-3xl border-2 border-blue-700 rounded p-3 inline-block'>{msg}</div>}
                                {/* {mobile && <div className='hover:scale-105 cursor-pointer text-blue-700 text-3xl border-2 border-blue-700 rounded p-3 inline-block mx-2'>iOS</div>} */}
                            </div>
                        </div>
                       
                        <div className='p-3' dangerouslySetInnerHTML={{__html: descr}}>
                            
                        </div>
                    </div>
                })}

                
            </div>
        </div>

    </div>
  )
}

export default Certficates