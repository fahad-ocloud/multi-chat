import React from 'react';
type IChatBody = {
  children: React.ReactNode;
};
export default function HomeChatBody({ children }: IChatBody) {
  return (
    <div className=' w-[80%] bg-[#222325] rounded-lg flex flex-col flex-grow'>
      {children}
    </div>
  );
}
