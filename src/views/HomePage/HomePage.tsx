'use client';

import Button from '@/shared/UI/Button';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className='flex flex-col justify-center items-center flex-grow gap-3 relative'>
      <div className='font-bold text-3xl'>
        Welcome to <span className='text-[#720979]'>M U L T I C H A T</span>
      </div>
      <div className='font-extralight text-lg'>{`Let's start a conversation`}</div>
      <Button
        title='Get Started'
        onClick={() => {
          router.push('/mcq-generator');
        }}
      />
    </div>
  );
}
