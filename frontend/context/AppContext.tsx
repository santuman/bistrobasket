import { createContext, useState } from 'react'

interface AppStore {
  selectedCat: string
  handleSelectedCat: (arg0: string) => void
}

const appStore = {
  selectedCat: 'Pastry',
  handleSelectedCat: (arg0: string) => {},
}

const AppContext = createContext<AppStore>(appStore)

interface AppContextProviderProps {
  children: React.ReactNode
}

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [selectedCat, setSelectedCat] = useState('Pastry')

  const handleSelectedCat = (val: string) => {
    setSelectedCat(val)
  }

  return (
    <AppContext.Provider value={{ selectedCat, handleSelectedCat }}>{children}</AppContext.Provider>
  )
}

export default AppContext
