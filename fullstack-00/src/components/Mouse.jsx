import React, { useState, useEffect } from "react";

const Mouse = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const [color, setColor] = useState("#ffffff");

  const updateMousePosition = (event) => {
    console.log("mover");
    setPosition({ x: event.clientX, y: event.clientY });
  };
  useEffect(() => {
    console.log('hola')
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      console.log('adios')
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  useEffect(() => {
    if (position.x < 150) {
      setColor("#ff00ff");
    } else if (position.x < 300) {
      setColor("#ffff00");
    } else {
      setColor("#00ffff");
    }
  },[position.x]);
  return (
    <div
      style={{
        width: "450px",
        height: "450px",
        background: color,
      }}
    >{`x: ${position.x}, y: ${position.y}`}</div>
  );
};

export default Mouse;
