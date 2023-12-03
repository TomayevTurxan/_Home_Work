import { createContext, useState } from "react";
import { PropTypes } from "prop-types";
export const CurrentUserContex = createContext("");

const CurrentUserContextProvider = ({children})=>{
    let[user,setUser] = useState(null);
    return <CurrentUserContex.Provider value={{user,setUser}}>
        {children}
    </CurrentUserContex.Provider>
}

CurrentUserContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default CurrentUserContextProvider
