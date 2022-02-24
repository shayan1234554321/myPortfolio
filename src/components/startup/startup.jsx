import React, { useEffect, useState } from "react";
import "./scss/startup.css";
import { motion } from "framer-motion";

export default function Startup() {
    const [ show , setShow ] = useState(false);

    useEffect(()=>{
        setTimeout(() => {
            setShow(true);
        }, 4000);
    },[])
    
  const welcome = {
    initial: {
      x: "8vw",
      y: "8vh",
      opacity: 1,
    },
    animate: {
      x: ["8vw", "8vw", "0vw", "0vw", "0vw"],
      y: ["8vh","8vh","8vh","8vh","0vh"],
      opacity: ["1", "1", "1", "1", "1"],
      transition: {
        duration: 3,
      },
    },
  };
  const myName = {
    initial: {
      x: "8vw",
      y: "",
      opacity: 0,
    },
    animate: {
      x: ["8vw", "8vw", "0vw", "0vw", "0vw"],
      y: ["8vh", "8vh", "8vh", "8vh", "0vh"],
      opacity: ["0", "0", "1", "1", "1"],
      transition: {
        duration: 3,
      },
    },
  };
  const shayan = {
    initial: {
      x: "8vw",
      y: "8vh",
      opacity: 1,
    },
    animate: {
      x: ["8vw", "8vw", "0vw", "0vw", "0vw"],
      y: ["8vh", "8vh", "8vh", "8vh", "0vh"],
      opacity: ["0", "0", "0", "0", "1"],
      transition: {
        duration: 3,
      },
    },
  };

  return (
    <div className="startup" style={{top: show? '-120vh':'0' , transition: 'ease-in-out 2s' }} >
      <div style={{ display: "flex" }}>
        <motion.div
          variants={welcome}
          initial="initial"
          animate="animate"
          className="welcome"
        >
          Welcome
        </motion.div>
        <motion.div
          variants={myName}
          initial="initial"
          animate="animate"
          className="myName"
        >
          My Name Is
        </motion.div>
      </div>
      <motion.div
        variants={shayan}
        animate="animate"
        initial="initial"
        className="shayan"
      >
        SHAYAN
      </motion.div>
    </div>
  );
}
