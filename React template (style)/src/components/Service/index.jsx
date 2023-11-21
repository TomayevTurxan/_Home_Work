// eslint-disable-next-line no-unused-vars
import React from "react";
import style from "./index.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
const Index = () => {
  return (
    <>
      <section id={style.service}>
        <div className={style.container}>
          <div className={style.portfolioBody}>
            <div className={style.portfolioTitle}>
              <h4>SERVICES</h4>
              <h2>What We Offer</h2>
            </div>
          <div className={style.blog}>
            <div className={style.box}>
              <div className={style.boxImg}>
              <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className={style.boxTitle}>
                <h4>Responsive</h4>
                <span>Looks great on any screen size!</span>
              </div>
            </div>
            <div className={style.box}>
              <div className={style.boxImg}>
              <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className={style.boxTitle}>
                <h4>Responsive</h4>
                <span>Looks great on any screen size!</span>
              </div>
            </div>
            <div className={style.box}>
              <div className={style.boxImg}>
              <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className={style.boxTitle}>
                <h4>Responsive</h4>
                <span>Looks great on any screen size!</span>
              </div>
            </div>
            <div className={style.box}>
              <div className={style.boxImg}>
              <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className={style.boxTitle}>
                <h4>Responsive</h4>
                <span>Looks great on any screen size!</span>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
