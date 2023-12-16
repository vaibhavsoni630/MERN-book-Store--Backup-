import React from "react";
import { Link } from "react-router-dom";
import awardbook from "../assets/awardbooks.png"

function Promobanner() {
     return (
          <div className="mt-16 py-12 bg-teal-100 px-4 lg:px-24">
               <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="w-1/2">
                         <h2 className="text-3xl font-bold mb-6 leading-snug">
                              2023 <span className="text-orange-700">Inter-National</span> Book Awards for Fiction Shortlist
                         </h2>
                         <Link to="/shop" className="block">
                              <button
                                   className="bg-green-800 text-white font-semibold px-4
                    rounded py-2 hover:bg-black transition-all duration-300 "
                              >
                                   Get PromoCode
                              </button>
                         </Link>
                    </div>

                    <div>
                        <img src={awardbook} alt="" className="w-96"/>
                    </div>
               </div>
          </div>
     );
}

export default Promobanner;
