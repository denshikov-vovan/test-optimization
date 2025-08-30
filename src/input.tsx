import { forwardRef } from "react";


export const Input = forwardRef<HTMLInputElement>((props, ref) => {
  console.log('Input render');

  return (
    <input
      ref={ref}
      id="item"
      type="text"
      className="border border-black p-1"
      {...props}
    />
  )
})