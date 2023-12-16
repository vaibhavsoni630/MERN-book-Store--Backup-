// this is the the bestseller section


import React, {useEffect, useState} from 'react'
import Bookcards from '../components/Bookcards'

const FavoriteBooks = () => {
    const [books ,setBooks] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/all-books").then(res => res.json()).then(data => setBooks(data.slice(0,9)))
    },[])
  return (
    <div>
      <Bookcards books={books} headline="BestSeller Books" />
    </div>
  )
}

export default FavoriteBooks

