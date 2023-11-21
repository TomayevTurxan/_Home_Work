// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import style from "./index.module.scss";

const Index = () => {
  return (
    <>
      <div className={style.hamburgerIcon}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </>
  );
};

export default Index;
