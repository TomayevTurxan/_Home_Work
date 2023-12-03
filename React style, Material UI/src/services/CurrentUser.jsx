import { createContext, useState } from "react";

export const CurrentUser = createContext();

const CurrentUserProvider = ({ children }) => {
    let [currentUser, setCurrentUser] = useState({ name: "", password: "" });

  return (
    <CurrentUser.Provider value={{currentUser,setCurrentUser }}>
      {children}
    </CurrentUser.Provider>
  );
};

export default CurrentUserProvider;
