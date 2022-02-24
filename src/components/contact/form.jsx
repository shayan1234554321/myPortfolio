import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Form() {
  //----------------Constants---------
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");
  const [button , setButton ] = useState("SUBMIT")
  const inView = {
    x: [-50, 0],
    opacity: [0, 1],
    transition: {
      delay: 0.2
    }
  };

  //---------Submiting form------------

  function submit(e) {
    e.preventDefault();

    setButton("SENDING");

    emailjs
      .send(
        "shayan_12902",
        "job_shayan",
        {
          name: name,
          email: email,
          country: country,
          website: website,
          message: message,
          subject: subject,
        },
        "user_JJWJdHtLayDNb7KXtDkMZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setButton("Submit");

        },
        (error) => {
          console.log(error.text);
          setButton("ERROR");

        }
      );

    setName("");
    setSubject("");
    setEmail("");
    setCountry("");
    setWebsite("");
    setMessage("");
  }

  return (
    <form className="form" onSubmit={submit}>

      {/* ---------------------- Name ---------------------- */}

      <div className="formButton">
        <div className="formText">Name</div>
        <motion.input
          whileInView={inView}
          type="text"
          placeholder="Ali"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
          className="formInput"
        />
      </div>

      {/* ---------------------- Subject ---------------------- */}
        
      <div className="formButton">
        <div className="formText">Subject</div>
        <motion.input
          whileInView={inView}
          type="text"
          placeholder="Urgent Work"
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
          required
          className="formInput"
        />
      </div>

      {/* ---------------------- Email ---------------------- */}

      <div className="formButton">
        <div className="formText">Email</div>
        <motion.input
          whileInView={inView}
          type="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
          className="formInput"
        />
      </div>

      {/* ---------------------- Country ---------------------- */}
        
      <div className="formButton">
        <div className="formText">Country</div>
        <motion.input
          whileInView={inView}
          type="text"
          placeholder="Pakistan"
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
          required
          className="formInput"
        />
      </div>

      {/* ---------------------- Company website ---------------------- */}

      <div className="formButton">
        <div className="formText">
          Company
          <br />
          Website
        </div>
        <motion.input
          whileInView={inView}
          type="url"
          placeholder="http://www.example.com"
          value={website}
          onChange={(e) => {
            setWebsite(e.target.value);
          }}
          required
          className="formInput"
        />
      </div>

      {/* ---------------------- Message ---------------------- */}

      <div className="formButton">
        <div className="formText">Message</div>
        <motion.textarea
          whileInView={inView}
          className="formInput"
          placeholder="Theres an important work to do ."
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          required
          cols="30"
          rows="10"
        ></motion.textarea>
      </div>

      {/* ---------------------- Submit button ---------------------- */}

      <button className="submitButton" type="submit">
        {button}
      </button>
    </form>
  );
}
