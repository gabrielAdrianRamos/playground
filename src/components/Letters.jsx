import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";

export default function Letters(props) {
  const [letter, setLetter] = useState("");
  const [show, setShow] = useState(false);

  function clicked(event) {
    setLetter(event.target.value);
    setShow(true);
  }

  return (
    <div className="container">
      <div className="button-container">
        <button id="btn" value="A" onClick={clicked}>
          A
        </button>
        <button id="btn" value="B" onClick={clicked}>
          B
        </button>
        <button id="btn" value="C" onClick={clicked}>
          C
        </button>
        <button id="btn" value="D" onClick={clicked}>
          D
        </button>
        <button id="btn" value="E" onClick={clicked}>
          E
        </button>
        <button id="btn" value="F" onClick={clicked}>
          F
        </button>
        <button id="btn" value="G" onClick={clicked}>
          G
        </button>
        <button id="btn" value="H" onClick={clicked}>
          H
        </button>
        <button id="btn" value="I" onClick={clicked}>
          I
        </button>
        <button id="btn" value="J" onClick={clicked}>
          J
        </button>
        <button id="btn" value="K" onClick={clicked}>
          K
        </button>
        <button id="btn" value="L" onClick={clicked}>
          L
        </button>
        <button id="btn" value="M" onClick={clicked}>
          M
        </button>
        <button id="btn" value="N" onClick={clicked}>
          N
        </button>
        <button id="btn" value="O" onClick={clicked}>
          O
        </button>
        <button id="btn" value="P" onClick={clicked}>
          P
        </button>
        <button id="btn" value="Q" onClick={clicked}>
          Q
        </button>
        <button id="btn" value="R" onClick={clicked}>
          R
        </button>
        <button id="btn" value="S" onClick={clicked}>
          S
        </button>
        <button id="btn" value="T" onClick={clicked}>
          T
        </button>
        <button id="btn" value="U" onClick={clicked}>
          U
        </button>
        <button id="btn" value="V" onClick={clicked}>
          V
        </button>
        <button id="btn" value="W" onClick={clicked}>
          W
        </button>
        <button id="btn" value="X" onClick={clicked}>
          X
        </button>
        <button id="btn" value="Y" onClick={clicked}>
          Y
        </button>
        <button id="btn" value="Z" onClick={clicked}>
          Z
        </button>
        <Modal onClose={() => setShow(false)} show={show} value={letter} />
      </div>

      <button
        className="switch"
        onClick={() => {
          props.onFormSwitch("main-page");
        }}
      >
        <FontAwesomeIcon
          icon={faArrowRight}
          size="2xl"
          style={{ color: "#fff5ee" }}
        />
      </button>
    </div>
  );
}
