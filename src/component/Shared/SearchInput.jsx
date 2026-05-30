'use client'
import { Input } from '@heroui/react';
import React from 'react';

const SearchInput = ({search}) => {
    return (
        <form className='shadow-cyan-700 rounded-2xl '>

                    <Input name="search" type='text' defaultValue={search} className="w-30 md:w-64" placeholder="Search By Title"
                   onSubmit={(e) => e.target.form.submit()} />
                </form>
    );
};

export default SearchInput;