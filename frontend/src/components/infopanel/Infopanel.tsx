import React from 'react'
import classes from './infopanel.module.css';
import Image from 'next/image';
function infopanel() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.imgwrapper}>
        <Image src="/icons/meimgfull.jpeg" alt="greenicon" className={classes.meimg} fill style={{ objectFit: 'cover', objectPosition: 'center' }}/>
      </div>
        <h2 className={classes.greeting}>Hi, I'm{' '}<span className={classes.name}>Jared.</span>{' '}Nice to meet you!</h2>
    </div>
  )
}

export default infopanel