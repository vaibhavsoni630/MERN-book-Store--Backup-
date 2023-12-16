import React from 'react'
import Bannercard from '../home/Bannercard'

function Banner() {
  return (
    <div className='px-5 lg:px-24 bg-teal-100 flex items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'> 
       {/*left side*/}
        <div className='md:w-1/2 space-y-8 h-full'>
            <h2 className='text-5xl font-bold text-black leading-snug'>Buy And Sell Your Books<span className=' text-blue-700'> With a great Price</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore dolorum consequatur, totam eius eaque veniam fugit praesentium molestiae. Aliquam debitis commodi animi nam voluptatibus perferendis nihil laudantium quam voluptatum consequuntur.</p>
            <div className='md: w-1/2 space-y-8 h-full'>
                <input type='search' name='search' id='search' placeholder='search your book' className='py-2 mt-2 px-2 rounded outline-none'/>
                <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all rounded mx-2 ease-in duration-200'>Search</button>
            </div>
        </div>
        {/*right side*/}
        <div>
            <Bannercard/>
        </div>
      </div>
    </div>
  )
}

export default Banner
