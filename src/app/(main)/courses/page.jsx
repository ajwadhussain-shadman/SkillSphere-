import CourseCard from '@/component/Shared/CourseCard';
import React from 'react';

const Courses =async () => {
    const res = await fetch('https://skill-sphere-bice-sigma.vercel.app/data.json');
    const data = await res.json();
    return (
        <div className='w-11/12 mx-auto my-5 space-y-4'>
           <h2 className='font-bold text-2xl text-cyan-700'> ALL COURSES</h2>
            <div className='flex flex-wrap justify-between items-center'>
                {
                    data.map(course=> <CourseCard key={course.id} course={course}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default Courses;