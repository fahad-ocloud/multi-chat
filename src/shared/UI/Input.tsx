'use client';
import React from 'react';

type IInput = {
  label: string;
  type: string;
  onChange: (value: string) => void;
  value: string | number;
  placeholder?: string;
};

export default function Input({
  label,
  type,
  onChange,
  value,
  placeholder,
}: IInput) {
  return (
    <div className='w-full'>
      <label className='block mb-2 text-md font-medium'>{label}</label>
      <input
        className='border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
        placeholder={placeholder || ''}
        type={type}
        defaultValue={value}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}
