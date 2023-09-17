import { useState, ChangeEvent } from 'react';

export const useInput = (initalValue: string) => {
  const [value, setValue] = useState(initalValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return [value, onChange];
};
