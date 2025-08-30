import { useAppContext } from "./app-context";
import { ListItem } from "./list-item";

export const ItemList: React.FC = () => {
  const { items } = useAppContext();

  console.log('ItemList render');

  return (
    <ul className=''>
      {items.map(({ id, value}) => (
          <ListItem key={id} value={value} />
        ))}
    </ul>
  )
}
