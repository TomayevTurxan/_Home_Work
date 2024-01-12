import Link from 'next/link'
import React from 'react'
import styles from "./links.module.css"
const Links = () => {
    const links = [
        {
            title:"Homepage",
            path:"/"
        },
        {
            title:"artists",
            path:"/artists"
        },
        {
            title:"addAuthor",
            path:"/addAuthor"
        },
    ]
  return (
    <div className={styles.links}>
        {links.map((link,idx)=>(
            <Link  href={link.path} key={idx}>{link.title}</Link>
        ))}
    </div>
  )
}

export default Links