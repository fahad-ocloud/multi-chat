import React from 'react';

export default function TopBar() {
  return (
    <div className='d-flex flex gap-2 justify-center py-2 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-lg'>
      {[1, 2, 3, 4, 5].map((item, index) => {
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
