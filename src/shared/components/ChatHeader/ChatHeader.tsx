import React from 'react';

type IChatHeader = {
  heading: string;
  actions?: React.ReactNode;
};

export default function ChatHeader({ heading, actions }: IChatHeader) {
  return (
    <div className='flex items-center justify-between mb-4'>
      <div className='text-white text-2xl font-bold'>{heading}</div>
      {actions && <div>{actions}</div>}
    </div>
  );
}
