"use client";

import React, {useState} from 'react'
import classes from "./Accordion.module.css";
import projects from './featuredprojects';
import Accordionitem from '../accordionitem/Accordionitem';
function Accordion() {
  const [openIndex, setOpenIndex] = useState<number|null>();
  const handleClick = (index:number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={classes.wrapper}>
        <p className={classes.category}>Featured Projects</p>
        <div className={classes.accordionwrapper}>
        {projects.map((project, index) => (
          <Accordionitem
            key={index}
            title={project.title}
            description={project.description}
            imglink={project.sample}
            iconlink={project.image}
            githublink={project.githublink}
            deployedlink={project.deployedlink}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
          />
        ))
        }
        </div>
    </div>
  )
}

export default Accordion;