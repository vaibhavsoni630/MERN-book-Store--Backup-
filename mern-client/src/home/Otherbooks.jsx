import React, { useEffect, useState } from 'react'
import Bookcards from '../components/Bookcards'

function Otherbooks() {
    const [books ,setBooks] = useState([])

    useEffect(()=>{
        fetch("https://bookbackend44.onrender.com/all-books").then(res => res.json()).then(data => setBooks(data.slice(4,10)))
    },[])

  return (
    <div>
      <Bookcards books={books} headline="More books" />
    </div>
  );
}

export default Otherbooks
