import React, { forwardRef } from "react";
import "./scss/about.css";
import picture from "../../images/shayan.jpg";
import plant from "../../images/plant.png";
import hat from "../../images/hat.png";
import { motion } from "framer-motion";

const About = forwardRef(({...props},ref) => {
  return (
    <div className="about" ref={ref} >
      {/* ----------Left side---------- */}

      <div className="leftSide">
        {/* ------------- Background -------- */}

        <motion.div className="bgBlue"></motion.div>

        {/* ---------- Plant -------- */}

        <motion.div
          className="bgPlant"
          style={{ backgroundImage: `url(${plant})` }}
          animate={{ x: "-10vw " }}
          whileInView={{ x: "0vw ", transition: { duration: 1, delay: 0.3 } }}
        ></motion.div>

        <div className="aboutMe">
          ABOUT ME <motion.div whileInView={{ x:[ -50 , 50 ,0 ] , opacity: [0 ,1] , transition: {duration : 1} }} className="aboutLine"></motion.div>{" "}
        </div>

        {/* ---------------- Frame ------------------ */}

        <div className="tabletFrame">
          <div className="frontEnd">
            FRONTEND <br />
            REACT <br />
            <a className="developer">DEVELOPER</a>
          </div>
          <div className="myPictureText">-SHAYAN</div>
          <div
            className="picture"
            style={{ backgroundImage: `url(${picture})` }}
          ></div>
        </div>
      </div>

      {/* ----------Right side---------- */}

      <div className="rightSide">
        {/* ---------------- Blue bg --------------- */}

        <motion.div
          className="bgBlue2"
          animate={{ x: "-25vw " }}
          whileInView={{ x: "0vw ", transition: { duration: 1, delay: 0.2 } }}
        ></motion.div>

        {/* ---------------- Hat --------------- */}

        <div className="bgHat" style={{ backgroundImage: `url(${hat})` }}></div>

        {/* --------------- Frame ------------- */}

        <div className="rightFrame">
          <a className="frameText">I AM</a>
          <a className="frameText">
            <div style={{ overflow: "scroll", height: "60%" }}>
              I am from Pakistan . Getting my Computer Science Bechelor degree
              from City University of Science and Technology of Peshawar
            </div>
          </a>
          <a className="frameText">
            <div style={{ overflow: "scroll", height: "80%" }}>
              I am looking for an online React Job and would love to put my
              efforts in contributing in a company. I am comfortable in working
              in almost all workspaces .
            </div>
          </a>
          <a className="frameText">
            LOOKING
            <br />
            FOR
          </a>
        </div>
      </div>
    </div>
  );
})

export default About ;