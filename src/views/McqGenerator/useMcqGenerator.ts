import { getMCQData } from '@/services/request.';
import { IMCQPayload, IMCQResponse } from '@/shared/types/MCQResponse';
import { useState } from 'react';

export default function useMcqGenerator() {
  const [isLoading, setIsLoading] = useState(false);
  const [answers, setAnswers] = useState<IMCQPayload>({
    standard: '',
    subject: '',
    limit: 0,
  });
  const [mcqData, setMcqData] = useState<IMCQResponse[]>([
    {
      question: 'What does the law of conservation of energy state?',
      choice: [
        'Energy can be created',
        'Energy can be destroyed',
        'Energy can neither be created nor destroyed',
        'None of the above',
      ],
    },
    {
      question: 'What is the unit of force in SI system?',
      choice: ['Newton', 'Joule', 'Watt', 'Ohm'],
    },
    {
      question:
        'Which principle states that the total linear momentum of a system of particles is conserved?',
      choice: [
        "Newton's first law",
        "Newton's second law",
        "Newton's third law",
        'Principle of conservation of linear momentum',
      ],
    },
    {
      question: 'What is the speed of light?',
      choice: [
        '3.00 x 10^8 m/s',
        '3.00 x 10^7 m/s',
        '3.00 x 10^9 m/s',
        'None of the above',
      ],
    },
    {
      question: "What is Ohm's Law?",
      choice: ['V = IR', 'P = IV', 'I = Q/t', 'None of the above'],
    },
    {
      question: 'Which of the following is a scalar quantity?',
      choice: ['Velocity', 'Acceleration', 'Displacement', 'Speed'],
    },
    {
      question: 'What is the unit of frequency in SI system?',
      choice: ['Hertz', 'Joule', 'Newton', 'Watt'],
    },
    {
      question: 'What is the gravitational constant (G) value?',
      choice: [
        '6.674 x 10^-11 N.m^2/kg^2',
        '9.8 m/s^2',
        '6.674 x 10^-10 N.m^2/kg^2',
        'None of the above',
      ],
    },
    {
      question: 'What is the formula for kinetic energy?',
      choice: [
        'KE = 1/2 mv^2',
        'KE = mv',
        'KE = 1/2 m^2v',
        'None of the above',
      ],
    },
    {
      question: 'Which of the following is not a form of energy?',
      choice: [
        'Chemical energy',
        'Nuclear energy',
        'Mechanical energy',
        'Color energy',
      ],
    },
  ]);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await getMCQData(answers);
      if (response) {
        setMcqData(response);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnswers = (key: string, value: string) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [key]: value }));
  };

  return { answers, handleAnswers, handleSubmit, mcqData, isLoading };
}
