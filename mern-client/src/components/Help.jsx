import React from 'react'
import  { FaLinkedin , FaWhatsapp , FaEnvelope , FaGithub } from "react-icons/fa6";


function Help() {
  return (
    <div>
        <div className='flex justify-center  w-screen h-screen'>
            <div className=' mt-20 my-7 flex flex-col gap-10'>
               <h1 className=' text-5xl font-bold '>Want any help ?<span className='text-red-600 '>  Connect US </span></h1>
               <div className='flex
                flex-row justify-center'>
                     <div className='flex grid-rows-6 flex-col mt-12 gap-20'>
                        <a href="https://www.linkedin.com/in/vaibhav-soni-98939a1a4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BLTHuPCWwQ36aygMT1wmNpg%3D%3D" className='h-9 w-9'><FaLinkedin className=' w-16 h-16 text-blue-800' /> </a>
                        <a href="https://wa.me/qr/TKGRTSQ3SCYUO1" className='h-9 w-9'><FaWhatsapp className=' w-16 h-16 text-green-600' /> </a>
                        
                        <a href="https://github.com/vaibhavsoni630" className='h-9 w-9'><FaGithub className=' w-16 h-16 text-black' /> </a>
                        <a title='vaibhavsoni630@gmail.com' className='h-9 w-9'><FaEnvelope className=' w-16 h-16 text-yellow-800' /> <span className=' text-lg font-bold'>Vaibhavsoni630@gmail.com</span> </a>

                        
                    
                    </div>
                    
               </div>
            </div>
            
            
        </div>
        
    </div>
  )
}

export default Help