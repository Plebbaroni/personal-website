import React from 'react'
import classes from './Latestblog.module.css'

function Latestblog() {
  return (
    <div className={classes.wrapper}>
        <p className={classes.category}>Latest Blog Posts</p>
        <div className={classes.latestpostswrapper}>
            <div className={classes.latestposts}>
                <p>Coming Soon!</p>
            </div>
        </div>
    </div>
  )
}

export default Latestblog