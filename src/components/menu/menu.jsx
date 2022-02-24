import React, { useEffect, useState } from "react";
import "./scss/main.css";
import Cursor from "../cursor/cursor1";
import { motion } from "framer-motion";

export default function Menu({main , work , experties , about , contact}) {
  // -----------------------------------Constants------------------------------------

  const [isHover, setIsHover] = useState(false);
  const [display, setDisplay] = useState(false);

  // ---------------------Animating framer Components (variants) ----------------------

  const blob = {
    initial:{
      borderRadius:"50% 50% 50% 50%"
    },
    animate: {
      borderRadius: isHover
        ? "50% 50% 50% 50%"
        : [
            "50% 50% 50% 50%",
            "4% 70% 70% 100%",
            "60% 40% 60% 50%",
            "10% 50% 100% 30%",
            "70% 90% 4% 90%",
            "90% 60% 30% 20%",
            "50% 50% 50% 50%",
          ],
      transition: {
        duration: isHover ? 0.3 : 8,
        repeat: isHover ? "" : Infinity,
      },
      scale: isHover ? "1.1" : "1",
    },
    animateInside: {
      x: isHover ? "0%" : ["0%", "30%", "50%", "-50%", "50%", "0%"],
      y: isHover ? "0%" : ["0%", "50%", "-50%", "70%", "-65%", "0%"],
      transition: {
        duration: isHover ? 0.3 : 8,
        repeat: isHover ? "" : Infinity,
      },
    },
    animateInside2: {
      x: isHover ? "0%" : ["0%", "-30%", "10%", "60%", "20%", "0%"],
      y: isHover ? "0%" : ["0%", "-80%", "50%", "30%", "-30%", "0%"],
      transition: {
        duration: isHover ? 0.3 : 7,
        repeat: isHover ? "" : Infinity,
      },
    },
    animateInside3: {
      x: isHover ? "0%" : ["0%", "-60%", "30%", "70%", "10%", "0%"],
      y: isHover ? "0%" : ["0%", "-40%", "-70%", "10%", "50%", "0%"],
      transition: {
        duration: isHover ? 0.3 : 4,
        repeat: isHover ? "" : Infinity,
      },
    },
  };

  const text = {
    hover: {
      scale: 1.1,
      x: [0, 0, -8],
    },
    tap: {
      scale: 0.9,
    },
  };

  // ---------------------------------------Functions--------------------------

  //----Hiding/displaying menu tab----

  function menuclick(e) {
    e.stopPropagation();
    setDisplay(false);
  }

  return (
    <div
      className="menu"
      onClick={menuclick}
      style={{pointerEvents: display? 'all':'none' }}
    >
      <Cursor  />
      {/* ------------------- Main ---------------- */}
      <motion.div
        onClick={(e) => {
          e.stopPropagation();
          setDisplay(!display);
        }}
        onMouseOver={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
        variants={blob}
        animate="animate"
        className="setting"
        initial="initial"
        style={{ backgroundColor: display ? "black" : "white" }}
      >
        {/* -----------Inside------------------ */}

        {/* 1st */}

        <motion.div
          onMouseOver={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
          variants={blob}
          animate="animateInside"
          className="settingInside"
          style={{ backgroundColor: display ? "white" : "black" }}
        ></motion.div>

        {/* 2nd */}

        <motion.div
          onMouseOver={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
          variants={blob}
          animate="animateInside2"
          className="settingInside"
          style={{ backgroundColor: display ? "white" : "black" }}
        ></motion.div>

        {/* 3rd */}

        <motion.div
          onMouseOver={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
          variants={blob}
          animate="animateInside3"
          className="settingInside"
          style={{ backgroundColor: display ? "white" : "black" }}
        ></motion.div>
      </motion.div>

      {/* ------------------ Blurred -------------- */}

      <motion.div
        variants={blob}
        animate="animate"
        className="settingBlur"
        style={{ backgroundColor: display ? "black" : "white" }}
      ></motion.div>

      {/* ------------------sideBar----------------- */}

      <motion.div
        className="sidebar"
        style={{
          borderLeft: display
            ? "rgba(0, 0, 0, 0.300) 2px solid"
            : "rgba(0, 0, 0, 0) 2px solid",
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="circle" style={{ right: display ? "-50%" : "-200%" }}>
          <motion.a
            whileHover="hover"
            whileTap="tap"
            variants={text}
            className="menuText"
            onClick={() => {
              setDisplay(!display);
              main.current.scrollIntoView({
                behavior: "smooth"
              })     
            }}
          >
            Top
          </motion.a>

          <motion.a
            whileHover="hover"
            whileTap="tap"
            variants={text}
            className="menuText"
            onClick={() => {
              setDisplay(!display);
              work.current.scrollIntoView({
                behavior: "smooth"
              }) 
            }}
          >
            Work
          </motion.a>

          <motion.a
            whileHover="hover"
            whileTap="tap"
            variants={text}
            className="menuText"
            onClick={() => {
              setDisplay(!display);
              experties.current.scrollIntoView({
                behavior: "smooth"
              }) 
            }}
          >
            My Experties
          </motion.a>

          <motion.a
            whileHover="hover"
            whileTap="tap"
            variants={text}
            className="menuText"
            onClick={() => {
              setDisplay(!display);
              about.current.scrollIntoView({
                behavior: "smooth"
              }) 
            }}
          >
            About Me
          </motion.a>

          <motion.a
            whileHover="hover"
            whileTap="tap"
            variants={text}
            className="menuText"
            onClick={() => {
              setDisplay(!display);
              contact.current.scrollIntoView({
                behavior: "smooth"
              }) 
            }}
          >
            Contact
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
