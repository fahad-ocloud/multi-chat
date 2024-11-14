import React from 'react';

export default function ChatSidebar() {
  return (
    <div className=' w-[20%] bg-[#222325]  rounded-lg p-5'>
      <h1 className='text-white text-xl font-bold'>Features</h1>
      {['AI MCQs Generator'].map((item, index) => {
        return (
          <div
            key={index}
            className='flex gap-2 items-center cursor-pointer hover:bg-orange-700 hover:rounded-lg px-2 py-1'
          >
            <div className='text-white text-sm'>{item}</div>
          </div>
        );
      })}
    </div>
  );
}
