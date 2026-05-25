
import CourseCard from '@/component/Shared/CourseCard';
import SearchInput from '@/component/Shared/SearchInput';
import { getCourseData, searchCourse } from '@/lib/data';
import { Input } from '@heroui/react';
import React from 'react';

const Courses = async ({ searchParams }) => {

    const { search = '' } = await searchParams;
    const data = await searchCourse(search);
    return (
        <div className='w-11/12 mx-auto my-5 space-y-4'>

            <div className='flex justify-between items-center'>
                <h2 className='font-bold text-2xl text-cyan-700'> ALL COURSES 
                    <p className='text-lg text-pink-400'>Total Course: {data.length}</p>
                </h2>
                <SearchInput search={search}></SearchInput>
            </div>
            { data.length>0 ? 
                <div className='flex flex-wrap justify-between items-center'>
                {
                    data.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                }
            </div> : <div className='text-center font-bold text-4xl text-red-600'>No Course Found</div>
            }
        </div>
    );
};

export default Courses;