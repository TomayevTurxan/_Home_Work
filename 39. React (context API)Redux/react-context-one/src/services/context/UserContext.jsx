import { createContext, useState } from "react";

export const UserContext = createContext("");

// eslint-disable-next-line react/prop-types
const UserContextProvider = ({children}) => {
  let [user, setUser] = useState(false);
  return <UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
