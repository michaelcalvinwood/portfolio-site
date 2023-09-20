import React from 'react'
import { Link } from 'react-scroll'

// https://www.google.com/search?q=stress+eraser+clinical+studies&oq=stress+eraser+clinical+studies&aqs=chrome..69i57j33i160j33i299.7247j0j7&sourceid=chrome&ie=UTF-8

function Inventions() {
  return (
    <div name="inventions" className='pt-20 lg:pt-0 w-full bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full'>
            <div className='pb-8'>
                <p id="inventions" className='text-4xl font-bold inline border-b-4 border-gray-500'>Inventions</p>
            </div>

            <div className='border border-white rounded p-4 mt-4'>
              <h2 className='text-3xl text-center'>Acurai</h2>
              <div className='text-center mb-2'>Patents Pending</div>
              <p className='text-xl'>Acurai solves the top five issues with generative AI. The top five issues solved are:</p>
              <div className='flex flex-col justify-center'>
                
                <div className='flex p-4 w-full justify-start'>
                  <div style={{width: '16rem'}}><b>Hallucinations</b></div><div>Making up false information out of thin air.</div>
                </div>
                <div className='flex justify-start p-4 '>
                  <div style={{width: '16rem'}}><b>Misquotes</b></div><div>Quotes get altered during the text generation process, making them unusable.</div>
                </div>
                <div className='flex justify-start p-4 '>
                  <div style={{width: '16rem'}}><b>Time Distortion</b></div><div>Writing about past events as if they are still to come in the future.</div>
                </div>
                <div className='flex justify-start p-4 '>
                  <div style={{width: '16rem'}}><b>Extraneous Data</b></div><div>Focusing on irrelevant parts of input sources.</div>
                </div>
                <div className='flex justify-start p-4 '>
                  <div style={{width: '16rem'}}><b>Input Structure Constraints</b></div><div>The output is constrained by the structure of the input.</div>
                </div>
              </div>
            </div>
            

            <div className='border border-white rounded p-4 mt-4'>
              <h2 className='text-3xl text-center'>Auto Network Architect</h2>
              <div className='text-center mb-2'>Sold to Micromuse for $98 million</div>
              <p className='text-xl'>The Auto Network Architect <a href="https://michaelcalvinwood.net/docs/US6405248.pdf" target="_blank" style={{textDecoration: "underline"}}>patent</a> was initially <a href="https://www.nytimes.com/1999/11/04/business/company-news-micromuse-will-buy-calvin-alexander-networking.html" target="_blank" style={{textDecoration: "underline"}}>sold to Micromuse for $42 million</a> with a one-year stock lockup. The invention more than doubled Micromuse's valuation in one year — resulting in over $98 million for the invention sale. Moreover, Micromuse's acquisition of the invention brought the company from the brink of bankruptcy to being <a href="https://www.cnet.com/tech/services-and-software/ibm-to-acquire-micromuse-for-865-million/" target="_blank" style={{textDecoration: "underline"}}>acquired by IBM for $865 million</a>. Auto Network Architect automatically:</p>
              <ul className='px-4 mt-2'>
              <li className='mt-1'>Disovers all network devices used in a world-wide infrastructure</li> 
              <li className='mt-1'>Deduces how the devices are physically cabled together</li>
              <li className='mt-1'>Displays a real-time blueprint of the architecture depicting the devices and their physical connections</li>
              <li className='mt-1'>Pinpoints the root cause of network outages and slowness down to the responsible cabled connection</li>
              </ul>
            </div>

            <div className='border border-white rounded p-4 mt-4'>
              <h2 className='text-3xl text-center'>Cybersecurity Inventions</h2>
              <div className='text-center mb-2'>Patents Granted</div>
              <p className='text-xl'>I have been granted the following cybersecurity patents. Click to view.:</p>
              <ul className='px-4 mt-2 flex flex-wrap justify-space-between'>
              <a href="https://michaelcalvinwood.net/docs/US9467324.pdf" target='_blank'><li className='mt-2 p-2 border border-white rounded w-auto inline-block ml-3 transform transition duration-300 hover:scale-110'>US9467324</li></a> 
              <a href="https://michaelcalvinwood.net/docs/US9742734.pdf" target='_blank'><li className='mt-2 p-2 border border-white rounded w-auto inline-block ml-3 transform transition duration-300 hover:scale-110'>US9742734</li></a> 
              <a href="https://michaelcalvinwood.net/docs/US9882877.pdf" target='_blank'><li className='mt-2 p-2 border border-white rounded w-auto inline-block ml-3 transform transition duration-300 hover:scale-110'>US9882877</li></a>
              <a href="https://michaelcalvinwood.net/docs/US9992233.pdf" target='_blank'><li className='mt-2 p-2 border border-white rounded w-auto inline-block ml-3 transform transition duration-300 hover:scale-110'>US9992233</li></a>
              <a href="https://michaelcalvinwood.net/docs/US10320746.pdf" target='_blank'><li className='mt-2 p-2 border border-white rounded w-auto inline-block ml-3 transform transition duration-300 hover:scale-110'>US10320746</li></a>
              <a href="https://michaelcalvinwood.net/docs/US10348682.pdf" target='_blank'><li className='mt-2 p-2 border border-white rounded w-auto inline-block ml-3 transform transition duration-300 hover:scale-110'>US10348682</li></a>
              <a href="https://michaelcalvinwood.net/docs/US10574628.pdf" target='_blank'><li className='mt-2 p-2 border border-white rounded w-auto inline-block ml-3 transform transition duration-300 hover:scale-110'>US10574628</li></a>
              <a href="https://michaelcalvinwood.net/docs/US11044228.pdf" target='_blank'><li className='mt-2 p-2 border border-white rounded w-auto inline-block ml-3 transform transition duration-300 hover:scale-110'>US11044228</li></a>

              </ul>
            </div>
   
        </div>
    </div>
  )
}

export default Inventions