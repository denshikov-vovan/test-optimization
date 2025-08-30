import { forwardRef, useImperativeHandle, useRef } from 'react';

export type InputRef = {
  getValue: () => string;
  clear: () => void;
};

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<InputRef, Props>((props, ref) => {
  const innerRef = useRef<HTMLInputElement>(null);

  console.log('Input render');

  useImperativeHandle(ref, () => ({
    getValue: () => innerRef.current?.value ?? '',
    clear: () => {
      if (innerRef.current) {
        innerRef.current.value = '';
      }
    }
  }));

  return (
    <input
      {...props}
      id="item"
      ref={innerRef}
      type="text"
      className="border border-black p-1"
    />
  )
});
