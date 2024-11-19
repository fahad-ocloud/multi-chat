'use client';
import { CSSProperties } from 'react';
import ChatHeader from '@/shared/components/ChatHeader/ChatHeader';
import Input from '@/shared/UI/Input';
import React from 'react';
import { questions } from './McqGenerator.utils';
import useMcqGenerator from './useMcqGenerator';
import Button from '@/shared/UI/Button';
import ChatResult from '@/shared/components/ChatResult/ChatResult';
import { IMCQPayload } from '@/shared/types/MCQResponse';

export default function McqGenerator() {
  const { handleAnswers, mcqData, answers, handleSubmit } = useMcqGenerator();

  return (
    <div className='p-5'>
      <ChatHeader heading='AI MCQs JSON Generator' />
      <div className='flex gap-4'>
        {questions.map((item, index) => {
          return (
            <Input
              key={index}
              label={item.label}
              type={item.type}
              onChange={(value) => {
                handleAnswers(item.key, value);
              }}
              value={answers[item.key as keyof IMCQPayload]}
              placeholder={item.placeholder}
            />
          );
        })}
      </div>
      <div className='mt-5 text-center '>
        <Button title='Generate' onClick={handleSubmit} />
      </div>
      <div
        className='mt-5 bg-[#0d1117] rounded-lg border border-slate-400 overflow-y-scroll h-[35vh]'
        style={scrollBarStyle}
      >
        {mcqData && <ChatResult data={mcqData} />}
      </div>
    </div>
  );
}

const scrollBarStyle: CSSProperties = {
  scrollbarWidth: 'none',
  '-ms-overflow-style': 'none',
  'scrollbar-width': 'none',
};
