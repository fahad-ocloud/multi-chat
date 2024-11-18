export type IMCQResponse = {
  question: string;
  choice: string[];
};

export type IMCQPayload = {
  standard: string;
  subject: string;
  limit: number;
};
