type IQuestion = {
  label: string;
  key: string;
  type: string;
  placeholder?: string;
};

export const questions: IQuestion[] = [
  {
    label: 'Class',
    key: 'standard',
    type: 'text',
    placeholder: 'Enter your class e.g: 10th, 11th, 12th',
  },
  {
    label: 'Subject',
    key: 'subject',
    type: 'text',
    placeholder: 'Enter your Subject eg: Physics, Chemistry, Biology',
  },
  {
    label: 'No of Questions',
    key: 'limit',
    type: 'number',
    placeholder: 'Enter number of questions you want (maximum 10)',
  },
];
