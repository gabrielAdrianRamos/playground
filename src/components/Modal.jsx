import React from "react";
import imageLetters from "../imageLetter";

export default function Modal(props) {
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-close">
          <button onClick={props.onClose} className="button">
            &times;
          </button>
        </div>
        <div className="modal-body">
          <h1>{props.value}</h1>

          {imageLetters
            .filter((e, index) => e.value === props.value)
            .map((imageLetter, index) => {
              return (
                <div className="image-container">
                  <img
                    src={imageLetter.imgSource}
                    alt="abc"
                    className="modal-image"
                  />
                  <label htmlFor="modal-image">{imageLetter.name}</label>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
