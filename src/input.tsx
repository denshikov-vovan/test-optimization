import { forwardRef, useImperativeHandle, useState } from 'react';

export type InputRef = {
  getValue: () => string;
  clear: () => void;
};

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<InputRef, Props>((props, ref) => {
  const [value, setValue] = useState('');

  console.log('Input render');

  useImperativeHandle(ref, () => ({
    getValue: () => value,
    clear: () => setValue('')
  }));

  return (
    <input
      {...props}
      id="item"
      type="text"
      className="border border-black p-1"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
});
