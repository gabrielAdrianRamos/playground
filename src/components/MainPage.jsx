import React, { useEffect } from "react";
import sound from "../source/Welcome.mp3";
import abc from "../source/letters.png";
import number from "../source/numbers.png";

export default function MainPage(props) {
  function play() {
    new Audio(sound).play();
  }

  useEffect(() => {
    window.onload = play();
  }, []);

  return (
    <>
      <div className="title">
        <span>T</span>
        <span>O</span>
        <span>B</span>
        <span>Y</span>
        <span>'</span>
        <span>S</span>
        <span> </span>
        <span>P</span>
        <span>L</span>
        <span>A</span>
        <span>Y</span>
        <span>G</span>
        <span>R</span>
        <span>O</span>
        <span>U</span>
        <span>N</span>
        <span>D</span>
      </div>
      <div className="container-box">
        <div
          className="main-letter"
          onClick={() => {
            props.onFormSwitch("alphabets");
          }}
        >
          <img src={abc} alt="abc" className="main-image" />
        </div>
        <div
          className="main-number"
          onClick={() => {
            props.onFormSwitch("numbers");
          }}
        >
          <img src={number} alt="123" className="main-image" />
        </div>
      </div>
    </>
  );
}
