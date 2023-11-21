// eslint-disable-next-line no-unused-vars
import React from "react";
import style from "./index.module.scss";
const index = () => {
  return (
    <>

      <container className={style.container}>
        <div className={style.portfolioBody}>
          <div className={style.portfolioTitle}>
                <h1>Welcome to your next website!</h1>
                <button>Download Now!</button>
          </div>
        </div>
      </container>
    </>
  );
};

export default index;
