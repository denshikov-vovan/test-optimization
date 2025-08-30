import { memo, type Ref } from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  inputRef: Ref<HTMLInputElement>
};

export const Input: React.FC<Props> = memo<Props>(({ inputRef, ...props}) => {
  console.log('Input render');

  return (
    <input
    {...props}
      id="item"
      type="text"
      className="border border-black p-1"
      ref={inputRef}
    />
  )
})
