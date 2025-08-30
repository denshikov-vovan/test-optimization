import { Button } from "./button"
import { Input } from "./input";
import { useAppContext } from "./app-context";
import { useRef } from "react";

export const ActionLine: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { addItem } = useAppContext();

  const onAddItem = () => {
    if (inputRef.current) {
      addItem(inputRef.current.value);
      inputRef.current.value = '';
    }
  }

  return (
    <div className='flex gap-3 items-center justify-center'>
      <Input inputRef={inputRef} />
      <Button onClick={onAddItem}>Add item</Button>
    </div>
  )
}
