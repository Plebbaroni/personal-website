import React from 'react'
import classes from './navbar.module.css'
import Link from 'next/link';
import Image from 'next/image';
function navbar() {
  return (
    <div className={classes.wrapper}>
        <div className={classes.logowrapper}>
            <Link href="/">
                <Image src="/icons/greenicon.png" alt="greenicon" className={classes.icon} width={75} height={75}/>
            </Link>
        </div>
        <div className={classes.links}>
        <Link href="/comingsoon" className={classes.link}>Projects</Link>
        <Link href="/comingsoon" className={classes.link}>Blog</Link>
        <Link href="/comingsoon" className={classes.link}>Sandbox</Link>
        </div>
    </div>
  )
}

export default navbar