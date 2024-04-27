"use client";
import { useState } from "react";
import UserInterface from "./UI";

function App() {
  const colors = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  const [color, setColor] = useState("#CCCCCC");
  function changeColor() {
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
      newColor += colors[Math.floor(Math.random() * colors.length)];
    }
    setColor(newColor);
  }
  return (
    <div className="main-container">
      <div style={{ background: color }} className="background"></div>
      <UserInterface color={color} changeClr={changeColor} />
    </div>
  );
}

export default App;
