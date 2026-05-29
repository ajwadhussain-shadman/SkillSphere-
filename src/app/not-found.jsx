import React from 'react';
import notFoundImg from '@/assets/image.png'
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@heroui/react';
const NotFound = () => {
    return (
        <div className=' flex justify-center items-center flex-col gap-5'>
           <Image src={notFoundImg} alt='not-found' width={700} height={700}></Image>
           <Button className='btn btn-info text-white '><Link href={'/'}>Back to Home</Link></Button>
        </div>
    );
};

export default NotFound;