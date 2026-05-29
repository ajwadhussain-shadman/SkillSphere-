import { getExpertData } from '@/lib/data';
import { Avatar, Card } from '@heroui/react';
import React from 'react';

const Expert = async () => {
    const instructors= await getExpertData();
    const sortedInstructors=instructors.sort((a,b)=>b.rating-a.rating);
    const experts=sortedInstructors.slice(0,4);
    console.log(experts)
    return (
        <div className='my-3 w-11/12 mx-auto'>
            <h2 className='text-2xl font-semibold text-pink-500 text-center'>Our Experts</h2>
            <div className='flex flex-col md:flex-row justify-between gap-4 items-center mt-4 '>
                {
                    experts.map(expert=>{
                        return <Card key={expert.id} className=" w-full sm:w-[200px]  gap-2 ">
      <div className='flex justify-center'>
          <img
          alt="Indie Hackers community"
          className="pointer-events-none aspect-square w-14 rounded-2xl object-cover select-none "
          loading="lazy"
          src={expert.image}
        />
      </div>
        <Card.Header>
          <Card.Title className='text-accent text-center'>Name: {expert.name}</Card.Title>
          <Card.Title className='text-center text-danger'>Specialty: {expert.specialty}</Card.Title>
         <div className='flex justify-between items-center'>
           <Card.Title className=' text-fuchsia-700'>Courses: {expert.courses}</Card.Title>
          <Card.Title className=' text-fuchsia-700'>Rating: {expert.rating}</Card.Title>
         </div>
          <Card.Description className='text-center text-cyan-900'>Students: {expert.students}</Card.Description>
        </Card.Header>
       
      </Card>
                    })
                }
            </div>
        </div>
    );
};

export default Expert;