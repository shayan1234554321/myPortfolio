import React from "react";
import {motion} from 'framer-motion'

export default function Button2({ image }) {
  return (
    <motion.div animate={{x:-20 , opacity: 0  }}  whileInView={{x:0 , opacity: 1 , transition:{duration: 0.5}}} className="button2">
      <div className="buttonImage" style={{backgroundImage:`url( ${image} )` }} ></div>
    </motion.div>
  );
}
