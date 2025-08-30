import { useState } from "react"
import { Button } from "./button"
import { ItemList } from "./item-list";
import { ListItem } from "./list-item";
import { Input } from "./input";

export const App: React.FC = () => {
  const [items, setItems] = useState<string[]>(['Item 1', 'Item 2', 'Item 3'])
  const [newItem, setNewItem] = useState<string>('')

  const onAddItem = () => {
    setItems([newItem, ...items])
    setNewItem('')
  }

  console.log('App render');

  return (
    <div className='w-full flex flex-col justify-center gap-6 p-6'>
      <div className='flex gap-3 items-center justify-center'>
        <Input value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
        <Button onClick={onAddItem}>Add item</Button>
      </div>

      <ItemList>
        {items.map((item, index) => (
          <ListItem key={index} value={item} />
        ))}
      </ItemList>

    </div>
  )
}
