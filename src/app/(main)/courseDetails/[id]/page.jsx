import CourseCard from '@/component/Shared/CourseCard';
import { getCourseData } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiStar } from 'react-icons/bi';

const CourseDetails = async ({ params }) => {
    const { id } = await params;
    const courses = await getCourseData();
    const course = courses.find(c => c.id === parseInt(id));
    console.log(course)
    return (
        <div className="w-11/12 mx-auto py-10">

            <div className="flex justify-between flex-col md:flex-row gap-10 items-center">

                <div>
                    <Image
                        src={course.image}
                        alt={course.title}
                        width={600}
                        height={400}
                        className="rounded-2xl"
                    />
                </div>
                <div className="space-y-5">

                    <div className="badge bg-cyan-600 text-white px-4 py-3">
                        {course.category}
                    </div>

                    <h1 className="text-4xl font-bold">
                        {course.title}
                    </h1>

                    <p className="text-lg text-gray-600">
                        {course.description}
                    </p>

                    <div className="space-y-2 text-lg">
                        <p>
                            <span className="font-semibold">Instructor:</span>
                           {" "} {course.instructor}
                        </p>

                        <p>
                            <span className="font-semibold">Level:</span>
                           {" "}  {course.level}
                        </p>

                        <p>
                            <span className="font-semibold">Duration:</span>
                              {" "}  {course.duration}
                        </p>


                        <p>
                         <span className="font-semibold">Rating: </span><BiStar className='inline-block text-amber-600 pb-1'></BiStar>
                                    
                                    {" "}     {course.rating}
                        </p>
                    </div>

                    <div className='flex gap-5 items-center'>
                        <button className="btn bg-cyan-600 text-white mt-5">Purchase</button>
                        <Link href={'/courses'}><button className='btn mt-5 btn-accent text-white'>Back</button></Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
