import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className=' p-5 my-5 '>
           <div className='w-11/12 mx-auto flex flex-col gap-2 md:flex-row justify-between'>
             <div className='w-[250px]'>
                <h1 className='text-2xl font-bold text-cyan-500'>SkillSphere</h1>
                <p className='font-semibold opacity-50'>A modern online learning platform where students can develop real-world skills.</p>
            </div>
            <div className='space-y-4'>
           <h2 className='text-2xl font-bold'>Quick Links</h2>
           <div className='flex flex-col'>
            <Link href={'/'} className='opacity-40'>Home</Link>
            <Link href={'/courses'} className='opacity-40'>Courses</Link>
            <Link href={'/my-profile'} className='opacity-40'>My Profile</Link>
           </div>
            </div>
            <div className='space-y-4'>
           <h2 className='text-2xl font-bold'>Contact</h2>
           <div className='flex flex-col'>
            <a className='opacity-40'>Email: skillsphere@gmail.com</a>
            <a className='opacity-40'>Mobile: 0123456787</a>
            <a href={'/my-profile'} className='opacity-40'>Sylhet,Bandladesh</a>
           </div>
            </div>
            <div className='space-y-4'>
           <h2 className='text-2xl font-bold'>Legal</h2>
           <div className='flex flex-col'>
            <a className='opacity-40'>Privacy Policy</a>
            <a className='opacity-40'>Terms & Conditions</a>
            <a href={'/my-profile'} className='opacity-40'>Support</a>
           </div>
            </div>
           </div>
           <hr  className='opacity-30 my-5'/>
           <p className='opacity-45 text-center text-sm'>© 2026 SkillSphere. All rights reserved.</p>
        </div>
    );
};

export default Footer;