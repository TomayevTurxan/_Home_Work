// eslint-disable-next-line no-unused-vars
import React from "react";
import style from "./index.module.scss";

const index = () => {
  return (
    <>
      <container className={style.container}>
        <div className={style.portfolioBody}>
          <div className={style.portfolioTitle}>
            <h2>The buttons below are impossible to resist...</h2>
            <div className={style.buttons}>
              <button>Click me!</button>
              <button>Look at Me!</button>
            </div>
          </div>
        </div>
      </container>
    </>
  );
};

export default index;
