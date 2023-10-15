'use client';
import { pages } from '../lib/pages';
import { SiMonzo } from 'react-icons/si';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
   const pathname = usePathname();

   return (
      <>
         <nav>
            <SiMonzo className='text-[#E5E5E5]' size={32} />
            <ul className='flex gap-4 py-2 md:flex-col md:mt-4'>
               {pages.map((page) => (
                  <li key={page.label}>
                     <Link
                        className={`${
                           pathname === page.href && 'text-[#E5E5E5]'
                        } text-[#737373] text-lg hover:text-[#E5E5E5]`}
                        href={page.href}
                     >
                        {page.label}
                     </Link>
                  </li>
               ))}
            </ul>
         </nav>
      </>
   );
}
