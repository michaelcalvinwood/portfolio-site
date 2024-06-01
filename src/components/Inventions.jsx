import React from 'react'
import { Link } from 'react-scroll'
import RAGFix from '../assets/RAGFix_branding_01.jpg';

// https://www.google.com/search?q=stress+eraser+clinical+studies&oq=stress+eraser+clinical+studies&aqs=chrome..69i57j33i160j33i299.7247j0j7&sourceid=chrome&ie=UTF-8

function Inventions() {
  return (
    <div name="inventions" className='pt-20 lg:pt-0 w-full bg-gradient-to-b from-black to-gray-800 text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full'>
            <div className='pb-8'>
                <p id="inventions" className='text-4xl font-bold inline border-b-4 border-gray-500'>Inventions</p>
            </div>

            <div className='border border-white rounded p-4 mt-4'>
              <h2 className='text-3xl text-center'>RAGFix</h2>
              <div className='text-center mb-2'>100% Accurate AI</div>
              <img src={RAGFix} style={{width: '50%', display: 'block', margin: 'auto'}} alt='RAGFix Branding'/>
              <p className='text-xl mt-4'><a href="https://www.ragfix.ai" class="underline" target="_blank" rel="noreferrer">RAGFix</a> is the world's first AI that provides 100% accurate, hallucination-free responses. Available July 1, 2024.</p>
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
   
            <div className='border border-white rounded p-4 mt-4'>
              <h2 className='text-3xl text-center'>Real-Time Measurement of Respiration using Heart Rate Variability</h2>
              <div className='text-center mb-2'>Sold to Respironics</div>
              <p className='text-xl'>Created a mathematical method to convert variations in heart rate into a real-time measurement of respiration.The method was incorporated into a medical biofeedback device that proved successful in multiple clinical trials. The device successfully attenuated <a href='https://link.springer.com/article/10.1007/s10484-007-9046-6' target="_blank" style={{textDecoration: "underline"}}>"anxiety disorders,"</a> <a href='https://link.springer.com/article/10.1007/s10484-015-9293-x' target="_blank" style={{textDecoration: "underline"}}>"reduced stress, anxiety and depressive symptoms,"</a> and <a href='https://meridian.allenpress.com/biofeedback/article-abstract/41/3/131/113409/Heart-Rate-Variability-and-Posttraumatic-Stress' target="_blank" style={{textDecoration: "underline"}}>"improving physiological and psychological health for individuals with PTSD."</a> The <a href='https://michaelcalvinwood.net/docs/US8938288.pdf' target='_blank' style={{textDecoration: "underline"}}>patent</a> was sold to Respironics.</p>
            </div>

            <div className='border border-white rounded p-4 mt-4'>
              <h2 className='text-3xl text-center'>REDOC-II</h2>
              <div className='text-center mb-2'>Strongest Block Cipher</div>
              <p className='text-xl'>Created <a href="https://en.wikipedia.org/wiki/REDOC" target="_blank" style={{textDecoration: "underline"}}>REDOC-II</a> and co-authored a <a href='https://www.semanticscholar.org/paper/The-REDOC-II-Cryptosystem-Cusick-Wood/d2aea0c4a4c40f0d4bceed115576a99382d4a8d3' target="_blank" style={{textDecoration: "underline"}}>published paper</a> with Dr. Thomas Cusick (PhD, Cambridge University, Cryptography). REDOC-II is <a href="https://link.springer.com/chapter/10.1007/3-540-46766-1_11" target="_blank" style={{textDecoration: "underline"}}>the strongest block cipher</a>. The REDOC-II <a href="https://michaelcalvinwood.net/docs/US5003596.pdf" target="_blank" style={{textDecoration: "underline"}}>patent</a> was sold to Libera Inc.</p>
            </div>
        </div>
    </div>
  )
}

export default Inventions