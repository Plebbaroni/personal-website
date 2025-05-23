// import Image from "next/image";
'use client';
import classes from "./page.module.css";
import Infopanel from "@/components/infopanel/Infopanel";
import Accordion from "@/components/accordion/Accordion";
import { motion } from "framer-motion"
import Latestblog from "@/components/latestblog/Latestblog";
export default function Home() {
  return (
    <motion.div
            className={classes.wrapper}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className={classes.left}>
        <Infopanel/>
      </div>
      <div className={classes.right}>
        <Accordion/>
        <Latestblog/>
      </div>
    </motion.div>
  );
}
