import React, { useState, createContext, useContext} from 'react'

const ChoreContext = createContext({})

export const useChore = () => useContext(ChoreContext)

export const ChoreProvider = ({ children }) => {
  const [action, setAction] = useState("LOADING")
  

  return (<ChoreContext.Provider value={{ action, setAction }}>{children}</ChoreContext.Provider>)
}