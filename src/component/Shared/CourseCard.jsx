import { Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiStar } from 'react-icons/bi';

const CourseCard = ({ course }) => {
    return (
        <Card className='w-[350]'>
            <div className=' aspect-square relative '>
                <Image src={course.image}
                    fill
                    alt={course.title}
                    className='object-cover rounded-2xl'
                    ></Image>
            </div>
            <div className='flex justify-between items-center'>
                <h3 className='font-semibold text-lg'>{course.instructor}</h3>
                <p className='font-bold'><BiStar className='text-amber-500 pb-1 inline-block mr-2'></BiStar>{course.rating}</p>
            </div>
            <h2 className='font-bold text-xl text-cyan-900'>{course.title}</h2>
        <p className='font-medium text-gray-600 text-sm'>{course.description}</p>
        <Link href={`/courseDetails/${course.id}`}>
         <button className='btn btn-secondary font-bold'>View Details</button></Link>
           
        </Card>
    );
};

export default CourseCard;