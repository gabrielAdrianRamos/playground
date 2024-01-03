import React from "react";
import sound from "../source/pick-92276.mp3";
import abc from "../source/letters.png";
import number from "../source/numbers.png";

export default function MainPage(props) {
  function play() {
    new Audio(sound).play();
  }

  return (
    <div className="main">
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
      <div
        className="main-letter"
        onClick={() => {
          props.onFormSwitch("alphabets");
          play();
        }}
      >
        <img src={abc} alt="abc" className="main-image" />
      </div>
      <div
        className="main-number"
        onClick={() => {
          props.onFormSwitch("numbers");
          play();
        }}
      >
        <img src={number} alt="123" className="main-image" />
      </div>
    </div>
  );
}
