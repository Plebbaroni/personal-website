import React from 'react'
import classes from './infopanel.module.css';
import Image from 'next/image';
function infopanel() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.imgwrapper}>
        <Image src="/icons/meimgfull.jpeg" alt="greenicon" className={classes.meimg} fill style={{ objectFit: 'cover', objectPosition: 'center' }}/>
      </div>
      <div className={classes.content}>
        <h2 className={classes.greeting}>Hi, I'm{' '}<span className={classes.name}>Jared.</span>{' '}Nice to meet you!</h2>
        <p className={classes.greetingbody}>I'm a 2nd year CS Student at UNSW. On the right you'll find featured projects as well as the latest posts of my blog(eventually). If you'd like to contact me, please check the links below. Thanks for dropping by! :D</p>
        <div className={classes.socialsdiv}>

        </div>
      </div>
    </div>
  )
}

export default infopanel