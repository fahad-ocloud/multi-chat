'use client';
import React from 'react';

type IButton = {
  title: string;
  onClick: () => void;
  width?: string;
};
export default function Button({ title, onClick, width = '30%' }: IButton) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`w-[${width}] bg-[#720979] hover:bg-[#720979a1] text-white font-bold py-2 px-4 rounded-xl`}
    >
      {title}
    </button>
  );
}
