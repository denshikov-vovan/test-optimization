import { useRef, useEffect } from "react";
import { createRoot } from "react-dom/client";

import { LIST } from "./constants";
import type { IListItem } from "./types";

import { ItemList } from "./item-list";
import { ListItem } from "./list-item";
import { Input } from "./input";
import { Button } from "./button";

const prependChild = (parent: HTMLUListElement, newFirstChild: HTMLLIElement) => {
  parent.insertBefore(newFirstChild, parent.firstChild)
}
export const App: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const itemsRef = useRef<IListItem[]>(LIST);

  const addItem = (item: IListItem) => {
    if (!listRef.current) return;

    itemsRef.current.push(item);

    const li = document.createElement("li");
    prependChild(listRef.current, li);

    createRoot(li).render(<ListItem value={item.name} />);
    return <></>
  };

  const onClick = () => {
    if (inputRef.current?.value) {
      addItem({id: '', name: inputRef.current.value});
      inputRef.current.value = "";
    }
  }

  useEffect(() => {
    if (!listRef.current) return;

    itemsRef.current.reverse().forEach((item) => addItem(item));
    itemsRef.current = [];
  }, []);



  return (
    <div className='w-full flex flex-col justify-center gap-6 p-6'>
      <div className='flex gap-3 items-center justify-center'>
        <Input ref={inputRef} />
            
        <Button onClick={onClick}>
          Add item
        </Button>
      </div>

      <ItemList ref={listRef} />
    </div>
  );
}