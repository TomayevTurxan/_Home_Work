import { createContext, useState } from "react";
export const BasketContextItem = createContext("");

const BasketContextItemProvider = ({ children }) => {
  let [basketitem, setBasketItem] = useState(
    localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [] 
  );

  return (
    <BasketContextItem.Provider value={{ basketitem, setBasketItem }}>
      {children}
    </BasketContextItem.Provider>
  );
  // console.log(count)
};
export default BasketContextItemProvider;
