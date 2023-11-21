// eslint-disable-next-line no-unused-vars
import React from 'react'
import style from "./index.module.scss";

const index = () => {
  return (
    <>
        <container className={style.container}>
        <div className={style.portfolioBody}>
          <div className={style.portfolioTitle}>
                <h1>Stylish Portfolio is the perfect theme for your next project!</h1>
                <h3>This theme features a flexible, UX friendly sidebar menu and stock photos from our friends at <a href="№" className={style.link}>Unsplash</a> !</h3>
                <button>What We Offer</button>
          </div>
        </div>
      </container>
    </>
  )
}

export default index