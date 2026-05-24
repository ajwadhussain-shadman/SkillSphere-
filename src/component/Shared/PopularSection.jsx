import React from 'react';

import CourseCard from './CourseCard';

const PopularSection = async () => {
    const res = await fetch('https://skill-sphere-bice-sigma.vercel.app/data.json');
    const data = await res.json();
    const sortedCourses = data.sort((a, b) => b.rating - a.rating);
    const PopularCourses = sortedCourses.slice(0, 3);
    console.log(PopularCourses);

    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='font-bold text-xl text-cyan-500'>Popular courses</h2>
            <div className='flex justify-between gap-4 '>
                {
                    PopularCourses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default PopularSection;