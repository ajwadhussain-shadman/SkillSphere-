'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({href,children,className}) => {
    const pathName=usePathname();
    const active= href==pathName;
           
    return (
        <Link
      href={href}
      className={`${active ?`bg-blue-200 text-blue-600 font-bold text-lg ${className} ` : "font-semibold"} `}
    >
      {children}
    </Link>
    );
};

export default Navlink;