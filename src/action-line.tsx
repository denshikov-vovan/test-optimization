import { Button } from "./button"
import { Input } from "./input";
import { useAppContext } from "./app-context";
import { useCallback, useRef } from "react";

export const ActionLine: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { addItem } = useAppContext();

  const onAddItem = useCallback(() => {
    if (inputRef.current) {
      addItem.current(inputRef.current.value);
      inputRef.current.value = '';
    }
  }, [])

  return (
    <div className='flex gap-3 items-center justify-center'>
      <Input inputRef={inputRef} />
      <Button onClick={onAddItem}>Add item</Button>
    </div>
  )
}
