import React, { forwardRef } from 'react';
import Button2 from './button2';
import Progress from './progress';
import './scss/expertise.css';
import bootstrap from '../../images/bootstrap.png'
import tailwind from '../../images/tailwind.png'
import material from '../../images/material.png'
import github from '../../images/github.png'
import figma from '../../images/figma.png'
import mongo from '../../images/mongo.png'
import { motion } from 'framer-motion'

const Expertise = forwardRef(({...props},ref) => {

  const parent = {
    initial: {
      opacity: 1 ,
      transition: {
        staggerChildren : 0.5,
        duration : 2
      }
    },
    inView : {
      opacity : 1 ,
      transition: {
        staggerChildren : 0.5,
        duration : 2
      }
    }
  }


  return (
  <div className='expertise' ref={ref} >
      <div className="button1">My Expertise</div>
      <motion.div className="experience">
        <Progress percentage={60} name={"HTML"} />
        <Progress percentage={70} name={"SCSS"} />
        <Progress percentage={50} name={"JS"} />
        <Progress percentage={70} name={"REACT"} />
        <Progress percentage={50} name={"REDUX"} />
        <Progress percentage={80} name={"AXIOS"} />
        <Progress percentage={70} name={"EXPRESS"} />
        <Progress percentage={50} name={"SOCKET.IO"} />
        <Progress percentage={50} name={"FRAMER"} />
      </motion.div>
      <div className="button1">I AM COMFORTABLE USING</div>
      <div className="comfortable">
        < Button2 image={bootstrap} />
        < Button2 image={tailwind} />
        < Button2 image={material} />
        < Button2 image={github} />
        < Button2 image={figma} />
        < Button2 image={mongo} />
      </div>
  </div>
  );
})

export default Expertise ;