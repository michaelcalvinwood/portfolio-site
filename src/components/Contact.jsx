import React from 'react'
import axios from 'axios';

const Contact = ({setUseModal}) => {
  return (
    <div name='contact' className='pt-20 md:pt-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="" className='flex flex-col w-full md:w-1/2'>
                    <input id="formName" type="text" name="name" placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input id="formEmail" type="email" name="email" placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <textarea id="formMessage" name="message" rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' placeholder='Enter your message'></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex-items-center rounded-md hover:scale-110 duration-300'
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        const name = document.getElementById('formName').value;
                        const email = document.getElementById('formEmail').value;
                        const message = document.getElementById('formMessage').value;
                        const request = {
                            url: `https://michaelcalvinwood.net:6200/message`,
                            method: 'post',
                            data: {
                                name, email, message
                            }
                        }

                        axios(request)
                        .then(response => alert("Message Sent."))
                        .catch(err => alert("ERROR: Could not send message"));
                    }}
                    >
                        Let's Talk
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact