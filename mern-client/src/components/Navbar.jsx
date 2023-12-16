import React, { useContext, useEffect, useState } from "react";
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../contacts/AuthProvider";

const Navbar = () => {
     const [isMenuOpen, setisMenuOpen] = useState(false);
     const [isSticky, setisSticky] = useState(false);

     const {user} =useContext(AuthContext)


     // toggle menu
     const toggleMenu = () => {
          setisMenuOpen(!isMenuOpen);
     };

     useEffect(() => {
          const HandleScroll = () => {
               if (window.scrollY > 100) {
                    setisSticky(true);
               } else {
                    setisSticky(false);
               }
          };
          window.addEventListener("scroll", HandleScroll);
          return () => window.removeEventListener("scroll", HandleScroll);
     }, []);

     // navitems here
     const navItems = [
          { link: "Home", path: "/" },
          { link: "About", path: "/about" },
          { link: "Shop", path: "/shop" },
          { link: "Sell Your Book", path: "/admin/dashboard" },
          { link: "Blog", path: "/blog" },
     ];

     return (
          <header className=" w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
               <nav className={`py-4 lg:px24 px-10 ${isSticky ? "sticky top-0 left-0 right-0 bg-green-200" : ""}`}>
                    <div className="flex justify-between items-center text-black text-base gap-8">
                         <Link to="/" className="text-2xl font-bold flex text-blue-900 items-center gap-2">
                              <FaBlog className="inline-block" />
                              Books Bar
                         </Link>

                         {/* nav items for large devices */}

                         <ul className="md:flex font-bold space-x-12 hidden">
                              {navItems.map(({ link, path }) => (
                                   <Link key={path} to={path} className="block text-base uppercase cursor-pointer">
                                        {link}
                                   </Link>
                              ))}
                         </ul>
                         {/* button for large devices */}
                         <div>
                              <button className="space-x-12 hidden items-center">
                                   <FaBarsStaggered className="w-5 hover:text-red-900 " />
                              </button>
                              {
                                   user?user.email : ""
                              }
                         </div>

                         {/* menu btn for mobile devices */}
                         <div className="md:hidden">
                              <button onClick={toggleMenu} className="text-black focus:outline-none">
                                   {isMenuOpen ? <FaXmark className="h-5 w-5 text-black" /> : <FaBarsStaggered className="h-5 w-5 text-black" />}
                              </button>
                         </div>

                         {/* navitems for small devices */}
                         <div className={`space-y-4 px-4 mt-10 py-7 font-bold bg-teal-900 text-white ${isMenuOpen ? "block fixed top-5 right-0 left-0" : "hidden"}`}>
                              {navItems.map(({ link, path }) => (
                                   <Link key={path} to={path} className="block text-base uppercase cursor-pointer">
                                        {link}
                                   </Link>
                              ))}
                         </div>
                    </div>
               </nav>
          </header>
     );
};

export default Navbar;
