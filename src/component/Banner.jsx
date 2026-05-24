import React from 'react';
import { SiHyperskill } from 'react-icons/si';
import BannerImg from '@/assets/bannerImg.png'
import Image from 'next/image';
const Banner = () => {
    return (
        <div className='w-11/12 m-5 mx-auto flex gap-4 flex-col md:flex-row items-center justify-between'>
            <div className='w-[600] space-y-10'>

                <p className='flex gap-2 items-center text-cyan-700 bg-cyan-200 badge font-semibold text-xl p-5 '><SiHyperskill /><span>Learn with the experts</span></p>
                <h2 className='font-extrabold text-4xl  md:text-6xl text-cyan-800'>Upgrade Your
                    Skills Today</h2>
                    <p className='text-xl font-semibold text-cyan-900'>
                        Explore modern online courses in development, design, marketing, and AI. Build real-world skills through interactive lessons and practical projects.
        
                    </p>

                    <div className='space-x-5'>
                        <button className='btn bg-cyan-300'>Explore</button>
                        <button className='btn btn-secondary'>Demo</button>
                    </div>
            </div>
            <div className='p-8 rounded-2xl bg-sky-100 shadow-xl'>
             <Image src={BannerImg} width={400} height={300} alt='bannerImg'></Image>
            </div>
        </div>
    );
};

export default Banner;