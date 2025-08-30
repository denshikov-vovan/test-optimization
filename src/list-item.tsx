import { memo } from 'react';

type Props = {
  value: string;
};

export const ListItem: React.FC<Props> = memo(({
  value
}) => {
  console.log('ListItem render');

  return (
    <li className='flex flex-col gap-2 items-center'>
      {value}
    </li>
  )
});
