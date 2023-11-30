import { createContext, useState } from "react";
export const BasketContext = createContext("");

const BasketContextProvider = ({ children }) => {
  const [count, setCount] = useState(
    localStorage.getItem("count") ? JSON.parse(localStorage.getItem("count")) : [] 
  );
  return (
    <BasketContext.Provider value={{ count, setCount }}>
      {children}
    </BasketContext.Provider>
  );
  // console.log(count)
};
export default BasketContextProvider