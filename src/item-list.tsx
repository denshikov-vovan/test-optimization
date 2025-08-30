import { forwardRef } from "react";

export const ItemList = forwardRef<HTMLUListElement>((_, ref) => {
  console.log('ItemList render');

  return (
  <ul 
    className='' 
    ref={ref}
  ></ul>);
});