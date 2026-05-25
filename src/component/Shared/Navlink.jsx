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
      className={`
  ${className}
  ${active ? "border-b-2 border-cyan-500 text-cyan-500 font-bold" : ""}
`}
    >
      {children}
    </Link>
    );
};

export default Navlink;