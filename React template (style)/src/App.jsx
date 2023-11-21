/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Main from "./components/Main";
import Offer from "./components/Offer";
import Service from "./components/Service";
import Welcome from "./components/Welcome";
import RecentProject from "./components/RecentProject";
import Link from "./components/Link";
import Map from "./components/Map";
import Footer from "./components/Footer";
import Hamburger from "./components/Hamburger";

const App = () => {
  return (
    <>
      <Hamburger />
      <Main />
      <Offer />
      <Service />
      <Welcome />
      <RecentProject />
      <Link />
      <Map />
      <Footer />
    </>
  );
};

export default App;
