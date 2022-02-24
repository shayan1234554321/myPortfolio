import React, { forwardRef } from "react";
import Form from "./form";
import "./scss/contact.css";
import whatsapp from "../../images/whatsapp.png";
import { motion } from "framer-motion";

const Contact = forwardRef(({...props},ref) => {
  return (
    <div className="contact" ref={ref} >
      {/* ------------ Top --------------- */}

      <div className="contactText">
        CONTACT FORM
        <div className="contactTextBelow">I WILL BE GLAD TO HEAR FROM YOU</div>
      </div>

      {/* ------------ bottom --------------- */}

      <div className="contactBottom">
        <div className="contactLeft">
          <div className="contactForm">
            <Form />
          </div>
        </div>
        <div className="contactRight">
          <motion.div
            animate={{ x: "6vw " , opacity:0 , rotate: 90}}
            whileInView={{ x: "-2vw ", opacity:1 ,rotate: 0 , transition: { duration: 1 ,delay: 0.2 } }}
            className="whatsappIcon"
            style={{ backgroundImage: `url(${whatsapp})` }}
          ></motion.div>
          <div className="number">
            PHONE : +92 316 8104861
            <br />
            HAVE A MARVELOUS DAY 
            <br />
          </div>
          <div className="hotPapper" >
            <a  target="_blank" href="https://icons8.com/icon/kQs5iqwxfvbp/hot-pepper">Hot Pepper</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
          </div>
        </div>
      </div>
    </div>
  );

});

export default Contact ;