import Link from 'next/link';
import React from 'react';
import Navlink from './Navlink';

const Navbar = () => {
  return (
    <div className='container mx-auto'>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
               <li><Navlink href={"/"}>Home</Navlink></li>
            <li><Navlink href={"/courses"}>Courses</Navlink></li>
            <li><Navlink href={"/my-profile"}>My Profile</Navlink></li>
            </ul>
          </div>
          <Link href={"/"}
            className=" text-3xl font-bold text-cyan-500">SkillSphere</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Navlink href={"/"}>Home</Navlink></li>
            <li><Navlink href={"/courses"}>Courses</Navlink></li>
            <li><Navlink href={"/my-profile"}>My Profile</Navlink></li>
          </ul>
        </div>
        <div className="navbar-end space-x-4 mr-4">
         <button className=''><Navlink href={'/auth/login'} className={'btn border-2 border-cyan-800 bg-cyan-500 text-white'} >Login</Navlink ></button>
         <button className=''><Navlink href={'/auth/register'} className={'btn border-2 border-cyan-800 bg-cyan-500 text-white'} >Register</Navlink ></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;