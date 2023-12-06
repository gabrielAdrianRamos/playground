import React, { useEffect } from "react";
import sound from "../source/mixkit-game-click-1114.wav";

export default function MainPage(props) {
  useEffect(() => {
    document.addEventListener("click", play, true);
  }, []);

  function play() {
    new Audio(sound).play();
  }

  return (
    <div className="main">
      <h1>Toby's Playground</h1>
      <div
        className="main-letter"
        onClick={() => props.onFormSwitch("alphabets")}
      >
        <img
          src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/25879/animal-alphabet-clipart-md.png"
          alt="abc"
        />
      </div>
      <div
        className="main-number"
        onClick={() => props.onFormSwitch("numbers")}
      >
        <img
          src="https://www.seekpng.com/png/full/117-1174359_123-blocks-financial-statement-analysis-simplified-an-accounting.png"
          alt="123"
        />
      </div>
    </div>
  );
}
