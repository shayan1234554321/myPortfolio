import React from 'react';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Card({link, name , image}) {

  const child = {
    animate : {
      opacity: 0,
      transition:{
        duration:2
      }
    },
    onScreen:{
      opacity: [0 ,1],
      transition:{
        duration:2
      }
    }
  }

  return (
  <motion.div variants={child} animate="animate" whileInView="onScreen" className='card' >
      <a className='cardName'>{ name }</a>
      <div className="cardInside" style={{backgroundImage: `url(${image})`}} >
      </div>
      <Link to={`${link}`} className="cardVisit" >Visit Site</Link>
  </motion.div>
  );
}
