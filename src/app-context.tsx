import { createContext, useContext, type RefObject } from "react";

export type IItem = {
  id: string;
  value: string;
}

export type AppContext = {
  items: IItem[];
  addItem: RefObject<(item: string) => void>;
}

export const AppContext = createContext<AppContext | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error();
  }

  return context;
}
