import { getCourseData } from '@/lib/data';
import { Card } from '@heroui/react';
import { div } from 'framer-motion/client';
import Image from 'next/image';
import React from 'react';
import { BiStar } from 'react-icons/bi';

const TrendingNow = async() => {
     
    const courses=await getCourseData();
     const trendingCourses=courses.slice(0,3);

    return (
        <div className='w-11/12 mx-auto card my-3 bg-gray-50'>
            <h2 className='text-2xl font-bold text-accent'>Trending Now</h2>
            <div className='space-y-5'>
                {
                    trendingCourses.map(course=>{
                        return <Card key={course.id} className='bg-gray-50 '>
                             <div className='flex justify-between'>
                                <div className='flex gap-5
                             '>
                                <h2 className='text-xl font-semibold text-accent/50'>0{course.id}</h2>
                                <div>
                                    <Image src={course.image} alt={course.title}
                                      width={50} height={50} 
                                      className='rounded-xl'
                                    ></Image>

                                </div>
                                <h2 className=' font-medium'>{course.title}</h2>
                             </div>
                             <div className='flex items-center gap-2'>
                                <BiStar className='text-amber-500'></BiStar>
                                 <p className='text-accent'>{course.rating}</p>
                             </div>
                            
                             </div>
                             
                        </Card>
                    })
                }
            </div>
            
        </div>
    );
};

export default TrendingNow;