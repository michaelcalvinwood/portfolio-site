import React from 'react'
import {AiOutlineCloseSquare} from 'react-icons/ai'

function ModalDemo({modalDemoInfo, setModalDemoInfo}) {
    const {id, description, videos} = modalDemoInfo;

  return (
    <div id="modalDemo">
         <div id="modal" className='text-red-600 flex justify-center items-center fixed top-20 sm:top-0 left-0 w-screen h-screen'>
            <div id="modalText" className='w-5/6 relative p-8 bg-gradient-to-b from-black to-gray-800 text-white rounded-lg border border-white'>
                <div id="demoDescription">
                    <p className='font-bold  text-lg' dangerouslySetInnerHTML={{__html: description.replaceAll("\n", "<br />")}}></p>
                    {/* <p>{description}</p> */}
                    <p className='font-bold text-center mt-2 text-lg'>Links</p>
                    {videos.map(({description, link, id}) => {
                        console.log('description', description)
                        return (
                            <div key={id} className='border border-white rounded p-4 my-3'>
                                <div className='hidden sm:block'  dangerouslySetInnerHTML={{__html: description.replaceAll("\n", "<br />")}}></div> 
                                <a href={link} target="_blank" className='border border-white rounded p-1 block w-fit mx-auto mt-2 mb-1'>Demo</a>
                            </div>
                        )
                    })}
                </div>
                <AiOutlineCloseSquare id="modalDemo__Close" color='white' size={'2rem'} className='absolute top-1 right-1 cursor-pointer' 
                    onClick={() => setModalDemoInfo(null)}
                />
            </div>
        </div>
        
    </div>
  )
}

export default ModalDemo