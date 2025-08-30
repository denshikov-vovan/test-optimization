type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};

export const Button: React.FC<Props> = ({
  onClick,
  children
}) => {
  console.log('Button render');

  return (
    <button className="border border-black py-1 px-3" onClick={onClick}>
      {children}
    </button>
  )
}
