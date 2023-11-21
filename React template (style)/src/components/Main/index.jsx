// eslint-disable-next-line no-unused-vars
import React from "react";
import style from "./index.module.scss";
const index = () => {
  return (
    <>

      <container className={style.container}>
        <div className={style.portfolioBody}>
          <div className={style.portfolioTitle}>
                <h1>Stylish Portfolio</h1>
                <h3>A Free Bootstrap Theme by Start Bootstrap</h3>
                <button>Find out More</button>
          </div>
        </div>
      </container>
      
    </>
  );
};

export default index;
