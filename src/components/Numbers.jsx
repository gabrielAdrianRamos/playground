import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Numbers(props) {
  const [numbers, setNumbers] = useState("Pick a number");

  function clickedNumber(event) {
    setNumbers(event.target.value);
    console.log(event.target.value);
  }

  useEffect(() => {
    document.addEventListener("keypress", detectKeyPress, true);
  }, []);

  const detectKeyPress = (e) => {
    setNumbers(e.key);
    console.log(e.key);
  };

  return (
    <div className="container">
      <div className="display-letter">
        <h1>{numbers}</h1>
      </div>
      <div className="letter-container" onClick={clickedNumber}>
        <button id="btn" value="0">
          0
        </button>
        <button id="btn" value="1">
          1
        </button>
        <button id="btn" value="2">
          2
        </button>
        <button id="btn" value="3">
          3
        </button>
        <button id="btn" value="4">
          4
        </button>
        <button id="btn" value="5">
          5
        </button>
        <button id="btn" value="6">
          6
        </button>
        <button id="btn" value="7">
          7
        </button>
        <button id="btn" value="8">
          8
        </button>
        <button id="btn" value="9">
          9
        </button>
        <button id="btn" value="10">
          10
        </button>
      </div>
      <button
        className="switch-alpha"
        onClick={() => props.onFormSwitch("main-page")}
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
