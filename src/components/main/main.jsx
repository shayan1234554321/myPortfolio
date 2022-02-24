import React, {  useState, forwardRef } from "react";
import Cursor1 from "../cursor/cursor1";
import MouseScroll from "./mouseScroll";
import "./scss/main.css";

const Main = forwardRef(({...props},ref) => {
  const words = ["Incredible", "Attractive", "Appealing"];
  const [showMouse, setShowMouse] = useState(false);

  return (
    <div
      ref={ref}
      className="main"
      onMouseEnter={() => {
        setShowMouse(true);
      }}
      onMouseLeave={() => {
        setShowMouse(false);
      }}
      style={{ cursor: "none" }}
    >
      <Cursor1 showMouse={showMouse} />
      <div className="mainText">
        <div>An</div>
        <div className="mainTextInside">
          {/*-------- Chanhing text ----------- */}
          {words.map((word) => (
            <div className="words">{word}</div>
          ))}
        </div>
        <div>Portfolio</div>
      </div>
      <MouseScroll />
    </div>
  );
});

export default Main;
