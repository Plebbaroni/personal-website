import React from 'react'
import classes from './navbar.module.css'
import Link from 'next/link';
function navbar() {
  return (
    <div className={classes.wrapper}>
        <div className={classes.logowrapper}>
            <Link href="/">
                <img src="icons/greenicon.png" alt="greenicon" className={classes.icon}/>
            </Link>
        </div>
        <div className={classes.links}>
        <Link href="/comingsoon" className={classes.link}><p className={classes.link}>Projects</p></Link>
        <Link href="/comingsoon" className={classes.link}><p className={classes.link}>Blog</p></Link>
        <Link href="/comingsoon" className={classes.link}><p className={classes.link}>Sandbox</p></Link>
        </div>
    </div>
  )
}

export default navbar