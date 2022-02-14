import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const toggleNav = () => {
    const nav: any = document.getElementById("ulNav");
    if (nav.classList.contains("hidden")) {
      nav.classList.remove("hidden");
      nav.classList.add("flex");
    } else {
      nav.classList.remove("flex");
      nav.classList.add("hidden");
    }
  };

  return (
    <>
      <div
        data-navbar
        className="h-14 fixed bg-white shadow-2xl grid grid-cols-2 px-2 sm:px-4 md:px-7 lg:px-10 top-0 w-full z-50"
      >
        <div className="col-span-2 lg:col-span-1 grid grid-cols-6">
          <div className="h-full flex justify-start items-center col-span-5">
            <h1
              data-aos="fade-right"
              className="text-2xl lg:text-3xl font-[Courgette]"
            >
              <span className="text-[#FF6F0B]">Renuka</span> Music Academy
            </h1>
          </div>
          <div className="col-span-1 flex lg:hidden lg:invisible justify-end items-center">
            <button
              data-aos="fade-left"
              onClick={toggleNav}
              className="px-3 py-2 rounded-3xl shadow-4xl"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
        <ul
          data-aos="fade-left"
          id="ulNav"
          className="mlg:fixed mlg:top-14 mlg:left-0 mlg:flex-col mlg:w-full mlg:h-auto mlg:bg-white mlg:justify-center mlg:items-center mlg:leading-[3rem] z-50 lg:flex lg:justify-end lg:items-center lg:flex-row lg:col-span-1 hidden transition-all duration-300"
        >
          <li className="mlg:mt-4">
            {(()=>{
              if(location.pathname !== '/'){
                return(
                  <Link
                    onClick={toggleNav}
                    className="mx-2 px-2 ring ring-[#FF6F0B] ring-offset-2 transition-colors duration-150 hover:bg-yellow-200 rounded-xl py-1"
                    to="/"
                  >
                    Home
                  </Link>
                )
              }
              else if(location.pathname === '/'){
                return(
                  <HashLink onClick={toggleNav} to="#home" className="mx-2 px-2 ring ring-[#FF6F0B] ring-offset-2 transition-colors duration-150 hover:bg-yellow-200 rounded-xl py-1">Home</HashLink>
                )
              }
            })()}
            
          </li>
          <li>
            <HashLink
              onClick={toggleNav}
              className="mx-2 px-2 ring ring-[#FF6F0B] ring-offset-2 transition-colors duration-150 hover:bg-yellow-200 rounded-xl py-1"
              to="/#about"
            >
              About
            </HashLink>
          </li>
          <li>
            <HashLink
              onClick={toggleNav}
              className="mx-2 px-2 ring ring-[#FF6F0B] ring-offset-2 transition-colors duration-150 hover:bg-yellow-200 rounded-xl py-1"
              to="/#courses"
            >
              Courses
            </HashLink>
          </li>
          <li>
            {/* <Link
              onClick={toggleNav}
              className="mx-2 px-2 ring ring-[#FF6F0B] ring-offset-2 transition-colors duration-150 hover:bg-yellow-200 rounded-xl py-1"
              to="/gallery"
            >
              Gallery
            </Link> */}
          </li>
          <li className="mlg:mb-4">
            <Link
              onClick={toggleNav}
              className="mx-2 px-2 ring ring-[#FF6F0B] ring-offset-2 transition-colors duration-150 hover:bg-yellow-200 rounded-xl py-1"
              to="/contact"
            >
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
