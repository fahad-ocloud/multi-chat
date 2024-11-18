import JsonView from '@uiw/react-json-view';
import React from 'react';
import { githubDarkTheme } from '@uiw/react-json-view/githubDark';
import { IMCQResponse } from '@/shared/types/MCQResponse';

type IChatResult = {
  data: IMCQResponse[];
};
export default function ChatResult({ data }: IChatResult) {
  return (
    <JsonView value={data} displayDataTypes={false} style={githubDarkTheme} />
  );
}
