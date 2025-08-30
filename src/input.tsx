import React, { memo, forwardRef } from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = memo(forwardRef<HTMLInputElement, Props>((props, ref) => {
  console.log('Input render');

  return (
    <input
      ref={ref}
      id="item"
      type="text"
      className="border border-black p-1"
      {...props}
    />
  );
}));