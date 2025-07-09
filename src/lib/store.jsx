import { createContext } from "react";
import { useState } from "react";

export const appContext = createContext({
  tab: '',
  setTab: ()=>{},
})


export const AppContextProvider = ({children}) => {

 const [tab, setTab] = useState('Welcome');

  return (
    <appContext.Provider value={{tab, setTab}}>
      {children}
    </appContext.Provider>
  )
}