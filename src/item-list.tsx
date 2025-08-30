import { memo } from "react";
import type { KeyedItem } from "./app";
import { ListItem } from "./list-item";

type Props = {
  items: KeyedItem[];
};

export const ItemList: React.FC<Props> = memo(({ items }) => {
  console.log('ItemList render');

  return (
    <ul className=''>
      {items.map((item) => (
        <ListItem key={item.key} value={item.value} />
      ))}
    </ul>
  );
});