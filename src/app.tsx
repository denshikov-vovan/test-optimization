import { useCallback, useRef, useState } from "react"
import { Button } from "./button"
import { ItemList } from "./item-list";
import { ListItem } from "./list-item";
import { Input, type InputRef } from "./input";

export type IItem = { id: string; value: string };

export const App: React.FC = () => {
  const [items, setItems] = useState<IItem[]>([
    { id: '3dbbbb08-880f-4e61-b09d-56d2f602ff0b', value: 'Item 1' },
    { id: '1bb7d967-5788-4ae0-9bab-7225df0d652e', value: 'Item 2' },
    { id: '5ff36dff-ea8e-4550-9909-d823dbfce115', value: 'Item 3' },
  ])

  const inputRef = useRef<InputRef>(null);

  const onAddItem = useCallback(() => {
    const val = inputRef.current?.getValue().trim();
    if (!val) return;

    setItems((item) => [
      { id: crypto.randomUUID(), value: val },
      ...item
    ])
    inputRef.current?.clear();
  }, [inputRef, setItems])

  console.log('App render');

  return (
    <div className='w-full flex flex-col justify-center gap-6 p-6 bg-white'>
      <div className='flex gap-3 items-center justify-center'>
        <Input
          ref={inputRef}
        />
        <Button onClick={onAddItem}>Add item</Button>
      </div>

      <ItemList>
        {items.map((item) => (
          <ListItem key={item.id} value={item.value} />
        ))}
      </ItemList>
    </div>
  )
}
