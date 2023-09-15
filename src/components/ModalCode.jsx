import React from 'react'
import {AiOutlineCloseSquare} from 'react-icons/ai'

function ModalCode({modalCodeInfo, setModalCodeInfo}) {
    
  return (
    <div id="modalDemo">
         <div id="modal" className='text-red-600 flex justify-center items-center fixed top-0 left-0 w-screen h-screen'>
            <div id="modalText" className='relative p-8 bg-gradient-to-b from-black to-gray-800 text-white rounded-lg border border-white'>
                <div id="demoDescription">
                    <p className='font-bold text-center mt-2 text-lg'>Links</p>
                    <div style={{width: '80vw', maxWidth: '700px'}}>

                        {modalCodeInfo.map(({description, link, id, endpoints}) => {
                            console.log('description', description)
                            return (
                                <div key={id} className=''>
                                    <div className='hidden md:flex text-left my-3 justify-between items-center'>
                                        <p className='me-4 hidden lg:block'>{description}:</p>
                                        <a href={link} target="_blank" className='text-decoration-underline p-1 block w-fit mt-2 mb-1'>{link}</a>
                                    </div>
                                    <div className='text-white my-2 md:hidden'>
                                        <a href={link} target="_blank" className='underline text-white'>{description}</a>
                                    </div>
                                    {endpoints && endpoints.length && <p className='font-bold text-center mt-2 text-lg'>Endpoints</p>}
                                    {endpoints && endpoints.length && endpoints.map(({id, description, endpoint}) => {
                                        return(
                                            <div key={id} className=''>
                                                <div className='hidden md:flex text-left my-3 justify-between items-center'>
                                                    <p className='me-4 hidden lg:block'>{description}</p>
                                                    <p className='me-4 hidden lg:block'>{endpoint}</p>
                                                
                                                </div>
                                            <div className='text-white my-2 md:hidden'>
                                                {description}: {endpoint}
                                            </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <AiOutlineCloseSquare id="modalDemo__Close" color='white' size={'2rem'} className='absolute top-1 right-1 cursor-pointer' 
                    onClick={() => setModalCodeInfo([])}
                />
            </div>
        </div>
        
    </div>
  )
}

export default ModalCode