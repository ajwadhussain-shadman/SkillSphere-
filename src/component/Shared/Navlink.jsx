'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navlink = ({ href, children, className = "" }) => {

    const pathName = usePathname();
    const active = href === pathName;

    return (
        <Link
            href={href}
            className={`${className} ${active ? "font-bold text-cyan-700 text-xl" : ""}`}
        >
            {children}
        </Link>
    );
};

export default Navlink;