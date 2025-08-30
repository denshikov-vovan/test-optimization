import { useCallback, useRef, useState } from "react"
import { Button } from "./button"
import { ItemList } from "./item-list";
import { Input } from './input';

export type KeyedItem = {
  key: string,
  value: string
}

export const App: React.FC = () => {
  const [items, setItems] = useState<KeyedItem[]>([
    { key: crypto.randomUUID(), value: 'Item 1' },
    { key: crypto.randomUUID(), value: 'Item 2' },
    { key: crypto.randomUUID(), value: 'Item 3' }
  ]);

  const inputRef = useRef<HTMLInputElement>(null);

  const onAddItem = useCallback(() => {
    const newValue = inputRef.current!.value
    setItems(prevItems => [
      { key: crypto.randomUUID(), value: newValue },
      ...prevItems
    ]);
    inputRef.current!.value = "";
  }, [])


  console.log('App render');

  return (
    <div className='w-full flex flex-col justify-center gap-6 p-6'>
      <div className='flex gap-3 items-center justify-center'>
        <Input ref={inputRef}/>
        <Button onClick={onAddItem}>Add item </Button>
      </div>

      <ItemList items={items} />

    </div>
  )
}
