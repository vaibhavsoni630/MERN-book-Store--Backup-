import React, { useEffect, useState } from 'react'
import { Card } from 'flowbite-react';

function Shop() {
  const [books,setBooks] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/all-books").then(res => res.json()).then(data => setBooks(data))
  },[])


  return (
    <div>
      <h2 className='text-5xl font-bold text-center mt-20'>All Books Here</h2>

      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 '>
        {
          books.map(book =>
            <Card>
      <img src={book.imageurl} className=' h-96 '/>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
        {book.book_title.slice(0,40)}...
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400  ">
        {book.book_description.slice(0,200)}...
      </p>
      
      <button className='bg-green-800 hover:bg-black rounded font-semibold transition-all duration-300 text-white py-2'>Buy Now</button>

    </Card>)
        }
      </div>

    </div>
  )
}

export default Shop