import { IMCQPayload } from '@/shared/types/MCQResponse';

const BASE_URL = 'http://localhost:8080';

export const getMCQData = async (mcqPayload: IMCQPayload) => {
  try {
    const res = await fetch(`${BASE_URL}/getMultipleChoiceQuestion`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mcqPayload),
    });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (error) {
    console.error(error);
  }
};
