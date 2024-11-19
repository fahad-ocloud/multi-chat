'use client';
import React from 'react';
import { sidebarData } from './ChatSidebar.utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ChatSidebar() {
  const path = usePathname();

  return (
    <div className=' w-[20%] bg-[#222325]  rounded-lg p-5'>
      <h1 className='text-[#eeee] text-xl font-bold mb-2'>Features</h1>
      {sidebarData.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={`flex gap-2 items-center cursor-pointer ${
              path === item.path ? 'bg-[#720979]' : ''
            } hover:bg-[#720979] rounded-lg px-2 py-1 mb-1`}
          >
            <p className='text-[#eeee] text-sm'>{item.title}</p>
          </Link>
        );
      })}
    </div>
  );
}
