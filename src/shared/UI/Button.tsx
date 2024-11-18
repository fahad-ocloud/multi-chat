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
      className={`w-[${width}] bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 from-pink-500 to-orange-500 text-white font-bold py-2 px-4 rounded-xl`}
    >
      {title}
    </button>
  );
}
