import React from 'react';

export default function HomePage() {
  return (
    <>
      <div className='flex flex-col justify-center items-center flex-grow gap-2'>
        <div className='font-bold text-2xl'>Welcome to M U L T I C H A T !</div>
        <div>{`Let's start a conversation`}</div>
        <button
          type='button'
          aria-label='Start a conversation'
          className='bg-gradient-to-r hover:from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white font-bold py-2 px-4 rounded-lg'
        >
          Get Started
        </button>
      </div>
    </>
  );
}
