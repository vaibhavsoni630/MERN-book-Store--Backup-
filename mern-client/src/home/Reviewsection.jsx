import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import required modules
import { FaStar } from "react-icons/fa6";
import Profile from "../assets/profileimage.png";

import { Avatar } from "flowbite-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

function Reviewsection() {
     return (
          <div className="my-12 px-4 lg:px-24">
               <h2 className="text-5xl font-bold text-center mb-10 leading-snug">Our Customers </h2>
               <div>
                    <Swiper
                         slidesPerView={1}
                         spaceBetween={30}
                         pagination={{
                              clickable: true,
                         }}
                         breakpoints={{
                              640: {
                                   slidesPerView: 1,
                                   spaceBetween: 20,
                              },
                              768: {
                                   slidesPerView: 2,
                                   spaceBetween: 40,
                              },
                              1024: {
                                   slidesPerView: 3,
                                   spaceBetween: 50,
                              },
                         }}
                         modules={[Pagination]}
                         className="mySwiper"
                    >
                         <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
                              <div className=" space-y-6">
                                   <div>
                                        <Avatar img={Profile} rounded bordered className=" w-12 mt-4 mb-4" />
                                        <h5 className="font-bold text-2xl">Vaibhav soni</h5>
                                        <p className="text-gray-400 text-sm">Full Stack Developer</p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, recusandae distinctio dolore odit.
                                   </div>
                                   <div className="text-orange-400 flex gap-3 mt-4">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                   </div>
                              </div>
                         </SwiperSlide>
                         <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
                              <div className=" space-y-6">
                                   <div>
                                        <Avatar img={Profile} rounded bordered className=" w-12 mt-4 mb-4" />
                                        <h5 className="font-bold text-2xl">Vaibhav soni</h5>
                                        <p className="text-gray-400 text-sm">Full Stack Developer</p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, recusandae distinctio dolore odit.
                                   </div>
                                   <div className="text-orange-400 flex gap-3 mt-4">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                   </div>
                              </div>
                         </SwiperSlide>
                         <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
                              <div className=" space-y-6">
                                   <div>
                                        <Avatar img={Profile} rounded bordered className=" w-12 mt-4 mb-4" />
                                        <h5 className="font-bold text-2xl">Vaibhav soni</h5>
                                        <p className="text-gray-400 text-sm">Full Stack Developer</p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, recusandae distinctio dolore odit.
                                   </div>
                                   <div className="text-orange-400 flex gap-3 mt-4">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                   </div>
                              </div>
                         </SwiperSlide>
                         <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
                              <div className=" space-y-6">
                                   <div>
                                        <Avatar img={Profile} rounded bordered className=" w-12 mt-4 mb-4" />
                                        <h5 className="font-bold text-2xl">Vaibhav soni</h5>
                                        <p className="text-gray-400 text-sm">Full Stack Developer</p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, recusandae distinctio dolore odit.
                                   </div>
                                   <div className="text-orange-400 flex gap-3 mt-4">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                   </div>
                              </div>
                         </SwiperSlide>
                    </Swiper>
               </div>
          </div>
     );
}

export default Reviewsection;
