/* eslint-disable no-unused-vars */
import React, { useState, createContext } from "react";
import PropTypes from "prop-types";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes";
import "./App.css";
import BasketContextProvider from "./services/context/BasketContext";
import ProductContextProvider from "./services/context/ProductContext";
import BasketContextItemProvider, { BasketContextItem } from "./services/context/BasketItem";
const router = createBrowserRouter(ROUTES);

const App = () => {
  return (
    <BasketContextItemProvider>
      <ProductContextProvider>
        <BasketContextProvider>
          <RouterProvider router={router} />
        </BasketContextProvider>
      </ProductContextProvider>
    </BasketContextItemProvider>
  );
};

export default App;
