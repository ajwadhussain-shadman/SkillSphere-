import { getTips } from '@/lib/data';
import { div } from 'framer-motion/client';
import React from 'react';
import TipCard from './TipCard';

const Tips = async () => {
    const tips=await getTips();
    console.log(tips);
    return (
        <div className='w-11/12 mx-auto my-10'>
            <h2 className='font-bold text-2xl text-cyan-500'>Learning Tips</h2>
            <div className=' flex justify-around  gap-3 mt-3 flex-col md:flex-row '>
                {
                    tips.map(tip=>{
                        return <TipCard key={tip.id} tip={tip}></TipCard>
                    })
                }
            </div>
          
        </div>
    );
};

export default Tips;