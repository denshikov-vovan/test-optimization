type Props = React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<Props> = (props) => {
  console.log('Input render');

  return (
    <input
      id="item"
      type="text"
      className="border border-black p-1"
      {...props}
    />
  )
}
