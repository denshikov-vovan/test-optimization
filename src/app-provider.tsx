import { useState, type PropsWithChildren } from "react"
import { AppContext, type IItem } from "./app-context"

export const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [items, setItems] = useState<IItem[]>(['Item 1', 'Item 2', 'Item 3'].map(formItem))

  const addItem = (item: string) => {
    setItems([formItem(item), ...items])
  }

  const context: AppContext = {
    items,
    addItem
  }

  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  )
}

function generateId (): string {
  return Math.random().toString(36).substring(2, 9)
}

function formItem (value: string): IItem {
  return {
    id: generateId(),
    value: value
  }
}
