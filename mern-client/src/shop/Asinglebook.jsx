import React from 'react'
import { useLoaderData } from 'react-router'

function Asinglebook() {
    const {_id ,book_title , imageurl} = useLoaderData()
  return (
    <div className='mt-28  px-4 lg:px-28'>
        <img src={imageurl} alt='' className='h-96 '/>
      <h2>{book_title}</h2>
    </div>
  )
}

export default Asinglebook
