import React from 'react';

import CourseCard from './CourseCard';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { getCourseData } from '@/lib/data';

const PopularSection = async () => {
    const data= await getCourseData();
    const sortedCourses = data.sort((a, b) => b.rating - a.rating);
    const PopularCourses = sortedCourses.slice(0, 3);
    

    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex justify-between items-center' >
                <h2 className='font-bold text-xl text-cyan-500'>Popular courses</h2>
                <Link href={'/courses'}  className='text-pink-500'>View all <FaArrowRight className='inline-block' /> </Link>
            </div>
            <div className='flex justify-between gap-4 my-5 '>
                {
                    PopularCourses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default PopularSection;