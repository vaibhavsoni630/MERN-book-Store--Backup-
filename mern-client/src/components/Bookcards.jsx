import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import  { FaCartShopping } from "react-icons/fa6";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Bookcards = ({headline ,books}) => {
   


  return (
    <div className='my-15 px-5 lg:px:25'>
      <h2 className='text-5xl text-center font-bold text-black py-7'>{headline}</h2>

      {/* cards */}
      <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >
        {
          books.map(book => <SwiperSlide key={book._id}>
            <Link to={`/book/${book._id}`}>
              <div className='relative'>
                <img src={book.imageurl} alt=""/>
                <div className='absolute top-2 right-2 bg-green-800 hover:bg-black p-3 mt-2 rounded'>
                  <FaCartShopping className='w-4 h-4 text-white'/>
                </div>
              </div>
              <div>
                <h4 className=' font-bold'>{book.book_title}</h4>
                <p>{book.authorname}</p>
                <p>$25.00</p>
              </div>
              
              
            </Link>
          </SwiperSlide>)
        }
      </Swiper>

      </div>
    </div>
  )
}

export default Bookcards

