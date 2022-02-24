import React, { useEffect, useState } from "react";
import "./scss/cursor.css";

export default function Cursor1({ showMouse }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);
    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  return (
    showMouse?
    <div
      className="cursorScreen"
      style={{
        position: "fixed",
        zIndex: "9",
        pointerEvents: "none",
        width: "100%",
        height: "100vh",

      }}
    >
      <div
        className="cursor1"
        style={{ top: `${position.y}px`, left: `${position.x}px` }}
      >
      </div>
    </div>
    :<></>
  
  );
}
