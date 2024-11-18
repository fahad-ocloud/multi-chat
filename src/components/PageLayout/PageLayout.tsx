import React from 'react';
import TopBar from './TopBar/TopBar';
import BottomBar from './BottomBar/BottomBar';

type IPageLayout = {
  children: React.ReactNode;
};
export default function PageLayout({ children }: IPageLayout) {
  return (
    <div className='flex flex-col justify-between max-h-[100vh] h-[100vh] overflow-hidden m-auto w-[80%] py-10'>
      <TopBar />
      {children}
      <BottomBar />
    </div>
  );
}
