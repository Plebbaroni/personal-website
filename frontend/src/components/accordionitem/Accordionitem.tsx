import React from 'react'
import classes from './Accordionitem.module.css';
import Image from 'next/image';
type accordionProps = {
    title: string;
    description: string;
    githublink: string;
    deployedlink:string;
    imglink:string;
    iconlink:string;
    isOpen: boolean;
    onClick: () => void;
  };

function Accordionitem(props:accordionProps) {
  return (
    <div className={classes.masterwrapper}>
      <div className={classes.headerwrapper}>
        <Image src={props.iconlink} alt="greenicon" className={classes.icon} width={40} height={40}/>
        <h4 className={classes.title}>{props.title}</h4>
      </div>
      <div className={classes.imgwrapper}>
        <Image src={props.imglink} alt="greenicon" className={classes.meimg} fill style={{ objectFit: 'cover', objectPosition: 'center' }}/>
      </div>
      <div className={classes.links}>
        <p>[github]</p>
        <p>[live demo]</p>
      </div>
    </div>
  )
}

export default Accordionitem