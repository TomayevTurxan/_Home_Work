import React from "react";
import style from "./index.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
const index = () => {
  return (
    <>
      <footer className={style.footer}>
        <container className={style.container}>
          <div className={style.links}>
            <div className={style.link}>
            <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className={style.link}>
            <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className={style.link}>
            <FontAwesomeIcon icon={faFacebookF} />
            </div>
          </div>
          <p>Copyright © Your Website 2023</p>
        </container>
      </footer>
    </>
  );
};

export default index;
