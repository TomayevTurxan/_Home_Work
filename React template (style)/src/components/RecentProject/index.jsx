// eslint-disable-next-line no-unused-vars
import React from "react";
import style from "./index.module.scss";

const index = () => {
  return (
    <>
      <section id={style.service}>
        <div className={style.container}>
          <div className={style.portfolioBody}>
            <div className={style.portfolioTitle}>
              <h4>SERVICES</h4>
              <h2>Recent Projects</h2>
            </div>
          </div>
          <div className={style.projects}>
            <div className={style.projectBlog}>
              <div className={style.projectBox}>
                <div className={style.caption}>
                  <div className={style.captionContent}>
                    <span>Stationary</span>
                    <p>
                      A yellow pencil with envelopes on a clean, blue backdrop!
                    </p>
                  </div>
                  <img
                    src="	https://startbootstrap.github.io/startbootstrap-stylish-portfolio/assets/img/portfolio-1.jpg"
                    alt="..."
                  ></img>
                </div>
              </div>
              <div className={style.projectBox}>
                <div className={style.caption}>
                  <div className={style.captionContent}>
                    <span>Stationary</span>
                    <p>
                      A yellow pencil with envelopes on a clean, blue backdrop!
                    </p>
                  </div>
                  <img
                    src="	https://startbootstrap.github.io/startbootstrap-stylish-portfolio/assets/img/portfolio-2.jpg"
                    alt="..."
                  ></img>
                </div>
              </div>
              <div className={style.projectBox}>
                <div className={style.caption}>
                  <div className={style.captionContent}>
                    <span>Stationary</span>
                    <p>
                      A yellow pencil with envelopes on a clean, blue backdrop!
                    </p>
                  </div>
                  <img
                    src="	https://startbootstrap.github.io/startbootstrap-stylish-portfolio/assets/img/portfolio-3.jpg"
                    alt="..."
                  ></img>
                </div>
              </div>
              <div className={style.projectBox}>
                <div className={style.caption}>
                  <div className={style.captionContent}>
                    <span>Stationary</span>
                    <p>
                      A yellow pencil with envelopes on a clean, blue backdrop!
                    </p>
                  </div>
                  <img
                    src="	https://startbootstrap.github.io/startbootstrap-stylish-portfolio/assets/img/portfolio-4.jpg
                    "
                    alt="..."
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
