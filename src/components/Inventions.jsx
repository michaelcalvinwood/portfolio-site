import React from 'react'

function Inventions() {
  return (
    <div name="inventions" className='pt-20 lg:pt-0 w-full lg:h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>AI Inventions</p>
            </div>
            <h2 className='text-3xl text-center'>Acurai</h2>
            <div className='text-center mb-2'>Patents Pending</div>
            <p>Acurai solves the top five issues with generative AI. The top five issues solved are:</p>
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
            <div className='pb-8 mt-8' >
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>IT Inventions</p>
            </div>
            <h2 className='text-3xl text-center'>Auto Network Architect</h2>
            <div className='text-center mb-2'>Sold to Micromuse for $98 million</div>
            <p>The Auto Network Architect <a href="https://patents.google.com/patent/US6405248B1/en?oq=6405248" target="_blank" style={{textDecoration: "underline"}}>patent</a> was initially <a href="https://www.nytimes.com/1999/11/04/business/company-news-micromuse-will-buy-calvin-alexander-networking.html" target="_blank" style={{textDecoration: "underline"}}>sold to Micromuse for $42 million</a> with a one-year stock lock up. The invention more than doubled Micromuse's valuation in one year — causing the stock to be valued at over $98 million when the lockup expired. The invention brought Micromuse from the brink of bankruptcy to being <a href="https://www.cnet.com/tech/services-and-software/ibm-to-acquire-micromuse-for-865-million/" target="_blank" style={{textDecoration: "underline"}}>acquired by IBM for $865 million</a>.</p> 
            <p className='mt-2'>Auto Network Architect automatically:</p>
            <ul className='px-4'>
            <li>Disovers all network devices used in a world-wide infrastructure</li> 
            <li>Deduces how the devices are physically cabled together</li>
            <li>Displays a real-time blueprint of the architecture depicting the devices and their physical connections</li>
            <li>Pinpoints the root cause of network outages and slowness down to the responsible cabled connection</li>
            </ul>
        </div>
    </div>
  )
}

export default Inventions