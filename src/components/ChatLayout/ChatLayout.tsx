import React from 'react';
import ChatSidebar from './ChatSidebar/ChatSidebar';

type IChatLayout = {
  children: React.ReactNode;
};

export default function ChatLayout({ children }: IChatLayout) {
  return (
    <div className='d-flex flex flex-grow gap-1 my-1'>
      <ChatSidebar />
      {children}
    </div>
  );
}
