import { createContext, useState } from "react";
export const ProductContext = createContext("");

const ProductContextProvider = ({ children }) => {
    let[products,setProducts] = useState([]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
  // console.log(count)
};
export default ProductContextProvider