import React from "react";
import favoritebook from "../assets/favoritebook.jpg";
import { Link } from "react-router-dom";

function Bestook() {
     return (
          <div className="px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12">
               <div className="md:w-1/2">
                    <img src={favoritebook} className="rounded md:w-10/12" />
               </div>

               <div className="md:w-1/2 space-y-6">
                    <h2 className="text-5xl font-bold my-5 md:w-3/4">
                         Choose the best book <span className="text-blue-800">FOR you!!</span>
                    </h2>
                    <p className="mb-12 text-lg md:w-5/6">
                         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea culpa minima hic expedita voluptas? Voluptatem obcaecati iste
                         quidem, aperiam mollitia enim .
                    </p>

                    <div className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14">
                         <div>
                              <h3 className="text-3xl font-bold">950+</h3>
                              <p className="text-base">Book Available</p>
                         </div>
                         <div>
                              <h3 className="text-3xl font-bold">8000+</h3>
                              <p className="text-base">Active users</p>
                         </div>
                         <div>
                              <h3 className="text-3xl font-bold">600+</h3>
                              <p className="text-base">Books downloaded </p>
                         </div>
                    </div>

                    <Link to="/shop" className="mt-8 block"><button className="bg-green-800 text-white font-semibold px-4
                    rounded py-2 hover:bg-black transition-all duration-300 ">Explore More</button></Link>
               </div>
          </div>
     );
}

export default Bestook;
