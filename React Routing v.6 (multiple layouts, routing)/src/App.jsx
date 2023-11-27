/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from './routes/index.jsx';
import "./App.css"
const routes = createBrowserRouter(ROUTES);

const App = () => {


  return (
    <>
      <RouterProvider router={routes}/>
    </>
  );
};

export default App;
