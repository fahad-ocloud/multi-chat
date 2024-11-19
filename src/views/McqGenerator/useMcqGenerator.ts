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
  const [mcqData, setMcqData] = useState<IMCQResponse[]>([]);

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
