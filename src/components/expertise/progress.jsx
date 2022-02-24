import React, { useState } from "react";
import { motion } from 'framer-motion'

export default function Progress({ percentage, name }) {


  return (
    <motion.div animate={{x:-20 , opacity: 0  }}  whileInView={{x:0 , opacity: 1 , transition:{duration: 0.5 }}} className="progress">
      <svg className="circleSvg" width="13vh" height="13vh" >
        <circle
          className="circle"
          cx="6.5vh"
          cy="6.4vh"
          r="5vh"
          style={{ strokeDashoffset: `calc( 31vh - ( 31vh * ${percentage} ) / 100 )` }}
        />
      </svg>
      <div className="circleName">{name + " " } <br /> { percentage + "%" }</div>
      
    </motion.div>
  );
}
