import { createContext, useState } from "react";

export const ModeContext = createContext("");

// eslint-disable-next-line react/prop-types
const ModeContextProvider = ({children}) => {
  let [mode, setMode] = useState(false);
  return <ModeContext.Provider value={{mode,setMode}}>{children}</ModeContext.Provider>;
};

export default ModeContextProvider;
