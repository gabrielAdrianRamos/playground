import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Letters(props) {
  const [letter, setLetter] = useState("Click the letters");

  function clicked(event) {
    setLetter(event.target.value);
    console.log(event.target.value);
  }

  useEffect(() => {
    document.addEventListener("keypress", detectKeyPress, true);
  }, []);

  const detectKeyPress = (e) => {
    const str = e.key;
    const capLetter = str.charAt(0).toUpperCase();
    setLetter(capLetter);
    console.log(capLetter);
  };

  return (
    <div className="container">
      <div className="display-letter">
        <h1>{letter}</h1>
      </div>
      <div className="letter-container" onClick={clicked}>
        <button id="btn" value="A">
          A
        </button>
        <button id="btn" value="B">
          B
        </button>
        <button id="btn" value="C">
          C
        </button>
        <button id="btn" value="D">
          D
        </button>
        <button id="btn" value="E">
          E
        </button>
        <button id="btn" value="F">
          F
        </button>
        <button id="btn" value="G">
          G
        </button>
        <button id="btn" value="H">
          H
        </button>
        <button id="btn" value="I">
          I
        </button>
        <button id="btn" value="J">
          J
        </button>
        <button id="btn" value="K">
          K
        </button>
        <button id="btn" value="L">
          L
        </button>
        <button id="btn" value="M">
          M
        </button>
        <button id="btn" value="N">
          N
        </button>
        <button id="btn" value="O">
          O
        </button>
        <button id="btn" value="P">
          P
        </button>
        <button id="btn" value="Q">
          Q
        </button>
        <button id="btn" value="R">
          R
        </button>
        <button id="btn" value="S">
          S
        </button>
        <button id="btn" value="T">
          T
        </button>
        <button id="btn" value="U">
          U
        </button>
        <button id="btn" value="V">
          V
        </button>
        <button id="btn" value="W">
          W
        </button>
        <button id="btn" value="X">
          X
        </button>
        <button id="btn" value="Y">
          Y
        </button>
        <button id="btn" value="Z">
          Z
        </button>
      </div>
      <button
        className="switch"
        onClick={() => props.onFormSwitch("main-page")}
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
