import React from 'react'
import Banner from '../components/Banner'
import FavoriteBooks from './FavoriteBooks'
import Bestook from './Bestook'
import Promobanner from './Promobanner'
import Otherbooks from './Otherbooks'
import Reviewsection from './Reviewsection'

function Home() {
  return (
    <>
    <Banner/>
    <FavoriteBooks/>
    <Bestook/>
    <Promobanner/>
    <Otherbooks/>
    <Reviewsection/>
    </>
  )
}

export default Home