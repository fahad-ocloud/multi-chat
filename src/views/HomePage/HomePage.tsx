import React from 'react';

export default function HomePage() {
  return (
    <div className='flex flex-col justify-center items-center flex-grow gap-2'>
      <div className='font-bold text-5xl'>Welcome to M U L T I C H A T !</div>
      <div className='font-extralight text-2xl'>{`Let's start a conversation`}</div>
      <button
        type='button'
        aria-label='Start a conversation'
        className='bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-bold py-2 px-4 rounded-lg'
      >
        Get Started
      </button>
    </div>
  );
}
