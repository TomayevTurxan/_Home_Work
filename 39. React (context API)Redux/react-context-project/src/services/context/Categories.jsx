import { createContext, useState } from "react";
export const CategoryContextItem = createContext("");

const CategoryContextItemProvider = ({ children }) => {
    localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [] 
    let [categories, setCategories] = useState([]);


  return (
    <CategoryContextItem.Provider value={{ categories, setCategories }}>
      {children}
    </CategoryContextItem.Provider>
  );
  // console.log(count)
};
export default CategoryContextItemProvider;
