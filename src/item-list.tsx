import { memo } from 'react';

type Props = {
  children: React.ReactElement<HTMLLIElement>[];
};

export const ItemList: React.FC<Props> = memo(({
  children
}) => {
  console.log('ItemList render');

  return (
    <ul className=''>
      {children}
    </ul>
  )
});
