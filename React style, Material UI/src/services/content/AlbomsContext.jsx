import { createContext, useState } from "react";

export const AlbomContext = createContext("turxan");

const AlbomContextProvider = ({ children }) => {
  const [alboms, setAlboms] = useState([]);
  const [name, setName] = useState("turxan");

  return (
    <AlbomContext.Provider value={{name,setName, alboms, setAlboms }}>
      {children}
    </AlbomContext.Provider>
  );
};

export default AlbomContextProvider;
