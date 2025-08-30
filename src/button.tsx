import { memo } from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};

export const Button: React.FC<Props> = memo(({
  onClick,
  children,
  ...props
}) => {
  console.log('Button render');

  return (
    <button className="border border-black py-1 px-3" onClick={onClick} {...props}>
      {children}
    </button>
  )
})
