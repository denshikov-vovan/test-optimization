type Props = {
  children: React.ReactElement<HTMLLIElement>[];
};

export const ItemList: React.FC<Props> = ({
  children
}) => {
  console.log('ItemList render');

  return (
    <ul className=''>
      {children}
    </ul>
  )
}
