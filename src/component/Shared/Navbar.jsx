'use client'
import Link from 'next/link';
import React from 'react';
import Navlink from './Navlink';
import { authClient } from '@/lib/auth-client';
import { div } from 'framer-motion/client';
import { Avatar, Button } from '@heroui/react';

const Navbar = () => {
  const userData = authClient.useSession();

  const data = userData?.data?.user;
  const isPending = userData?.isPending;
  const handleSignOut = async () => {
    await authClient.signOut();
  }

  return (
    <div className=''>
      <div className="navbar  bg-base-100 shadow-sm">
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

          {
            isPending ? (<div className="w-20 h-8 bg-base-200 animate-pulse rounded"></div>) : (
              data ? <div className='flex gap-4'>
                <Avatar size="md">
                  <Avatar.Image
                    alt={data?.name}
                    src={data?.image}
                  />
                </Avatar>
                <Button onClick={handleSignOut} size="sm" variant="danger-soft">SignOut</Button>
              </div> : (<div className='flex items-center gap-3'>
                <Link href='/auth/login' style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  fontSize: '16px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  border: '1px solid #079C9C',
                  color: '#079C9C'
                }}>
                  Login
                </Link>
                <Link href='/auth/register' className='btn bg-cyan-600 text-white'>
                  Register
                </Link>
              </div>)
            )

          }

          { }

        </div>
      </div>
    </div>
  );
};

export default Navbar;