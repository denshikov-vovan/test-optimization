import { useCallback, useRef, useState } from "react"
import { Button } from "./button"
import { ItemList } from "./item-list";
import { ListItem } from "./list-item";
import { Input } from "./input";

type Item = {
  text: string;
  id: string;
}

export const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    {
      text: 'Item 1',
      id: 'meyj141w'
    }, 
    {
      text: 'Item 2',
      id: 'meyj1ra4'
    },
    {
      text: 'Item 3',
      id: 'meyj1zu5'
    }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  const onAddItem = useCallback(() => {
    setItems((prevItems) => {
      return [{
        text: inputRef.current?.value || '',
        id: Date.now().toString(36)
      }, ...prevItems];
    });
    inputRef.current.value = '';
  }, [setItems]);

  console.log('App render');

  return (
    <div className='w-full flex flex-col justify-center gap-6 p-6'>
      <div className='flex gap-3 items-center justify-center'>
        <Input ref={inputRef} />
        <Button onClick={onAddItem}>Add item</Button>
      </div>

      <ItemList>
        {items.map((item) => (
          <ListItem key={item.id} value={item.text} />
        ))}
      </ItemList>

    </div>
  )
}
