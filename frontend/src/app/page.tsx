import Image from "next/image";
import classes from "./page.module.css";
import Infopanel from "@/components/infopanel/Infopanel";
export default function Home() {
  return (
    <main className={classes.wrapper}>
      <div className={classes.left}>
        <Infopanel/>
      </div>
      <div className={classes.right}>

      </div>
    </main>
  );
}
