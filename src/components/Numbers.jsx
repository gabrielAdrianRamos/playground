import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import sound from "../source/pick-92276.mp3";
import Modal from "./Modal";

export default function Numbers(props) {
  const [numbers, setNumbers] = useState("");
  const [show, setShow] = useState(false);

  function clickedNumber(event) {
    setNumbers(event.target.value);
    setShow(true);
    play();
  }

  function play() {
    new Audio(sound).play();
  }

  return (
    <div className="container">
      <div className="button-container">
        <button id="btn" value="0" onClick={clickedNumber}>
          0
        </button>
        <button id="btn" value="1" onClick={clickedNumber}>
          1
        </button>
        <button id="btn" value="2" onClick={clickedNumber}>
          2
        </button>
        <button id="btn" value="3" onClick={clickedNumber}>
          3
        </button>
        <button id="btn" value="4" onClick={clickedNumber}>
          4
        </button>
        <button id="btn" value="5" onClick={clickedNumber}>
          5
        </button>
        <button id="btn" value="6" onClick={clickedNumber}>
          6
        </button>
        <button id="btn" value="7" onClick={clickedNumber}>
          7
        </button>
        <button id="btn" value="8" onClick={clickedNumber}>
          8
        </button>
        <button id="btn" value="9" onClick={clickedNumber}>
          9
        </button>
        <button id="btn" value="10" onClick={clickedNumber}>
          10
        </button>
        <Modal onClose={() => setShow(false)} show={show} value={numbers} />
      </div>
      <button
        className="switch-alpha"
        onClick={() => {
          props.onFormSwitch("main-page");
          play();
        }}
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          size="2xl"
          style={{ color: "#fff5ee" }}
        />
      </button>
    </div>
  );
}
