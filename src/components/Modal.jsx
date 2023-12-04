import React, { useEffect } from 'react'

function Modal({useModal, setUseModal}) {
    
    useEffect(() => {
        setTimeout(() => setUseModal(false), 5000)
    })
  return (
    <div>
        {useModal && <div id="modal" className='text-red-600 flex justify-center items-center fixed top-0 left-0 w-screen h-screen'>
            <div id="modalText" className='p-8 bg-gradient-to-b from-black to-gray-800 text-white rounded-lg border border-white'>
                <p className='text-center text-lg'><b>Site Under Construction</b></p>
                <p className='pt-4 text-center'>Coming January 2, 2024.</p>
            </div>
        </div>}
    </div>

  )
}

export default Modal