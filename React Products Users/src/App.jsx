/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import { ChakraProvider} from "@chakra-ui/react";
import Products from "./components/Products.jsx"
function App() {
  return (
    <>
      <ChakraProvider>
        <Products/>
      </ChakraProvider>
    </>
  );
}

export default App;
