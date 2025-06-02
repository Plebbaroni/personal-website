'use client';

import React from 'react'
import classes from "./projects.module.css";
import { motion } from "framer-motion";

function page() {
  return (
    <div className={classes.wrapper}>
        <motion.div
          className={classes.content}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <h1 className={classes.comingsoon}>projectshere</h1>
        </motion.div>
    </div>
  )
}

export default page