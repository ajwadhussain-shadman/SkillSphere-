import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { BiStar } from 'react-icons/bi';

const CourseCard = ({course}) => {
    return (
        <Card className='max-w-[350] border border-red-500'>
            <Image src={course.image} 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            width={200}
            height={100}
            alt={course.title}></Image>
            <div className='flex justify-between items-center'>
                <h3>{course.instructor}</h3>
                <p><BiStar className='text-amber-500 inline-block mr-2'></BiStar>{course.rating}</p>
            </div>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <button className='btn '>View Details</button>
        </Card>
    );
};

export default CourseCard;