import { ItemList } from "./item-list";
import { ActionLine } from "./action-line";

export const App: React.FC = () => {
  console.log('App render');

  return (
    <div className='w-full flex flex-col justify-center gap-6 p-6'>
      <ActionLine />
      <ItemList />
    </div>
  )
}
