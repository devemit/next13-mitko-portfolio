'use client';
import { pages } from '../lib/pages';
import { SiMonzo } from 'react-icons/si';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function Navbar() {
  const activeSegment = useSelectedLayoutSegment();
  return (
    <>
      <nav>
        <SiMonzo className='text-[#E5E5E5]' size={32} />
        <ul className='flex gap-4 py-2 md:flex-col md:mt-4'>
          {pages.map((page) => (
            <li
              key={page.label}
              className='text-[#737373] text-xl hover:text-[#E5E5E5]'
            >
              <Link
                className={`${
                  activeSegment === page.activeSegment && 'text-[#E5E5E5]'
                }`}
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
