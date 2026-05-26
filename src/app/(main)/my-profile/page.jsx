'use client'
import { authClient } from '@/lib/auth-client';
import { Avatar, Button, Modal, Spinner } from '@heroui/react';
import { div } from 'framer-motion/client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const MyProfile = () => {
    const userData = authClient.useSession();

    const data = userData?.data?.user;
    const isPending = userData?.isPending;
    console.log(data, isPending)
    return (
        <div>
            {
                isPending ?
                    (
                        <div className="flex flex-col justify-center items-center gap-2">
                            <Spinner size="xl" />
                        </div>
                    )

                    : (data ? <div className=' w-2/3 py-5 mx-auto mt-20  rounded-2xl bg-gray-100'>
                        <h2 className='text-center font-bold my-5 text-2xl text-cyan-500'>
                            My profile
                        </h2>
                        <div className='flex justify-center'>
                            <Image src={data.image} alt={data.name} width={200} height={100} className='rounded-full'></Image>
                        </div>
                        <div className='text-center space-y-5 my-5 font-semibold text-cyan-900 text-xl '>
                            <p>Name: {data.name}</p>
                            <p>Email: {data.email}</p>
                        </div>
                        <div className='flex justify-center'>
                            <Link href={'/auth/updateData'} className='btn bg-cyan-400 text-white'>Update User Information </Link>
                        </div>

                    </div> : <div className='text-center font-bold text-red-500 text-2xl mt-10'> Please Login or Register</div>

                    )
            }
        </div>
    );
};

export default MyProfile;