import React from "react";

export default function Modal({ setIsOpen }) {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)}></div>
      <div className="centered">
        <div className="modal">
          <div className="header">
            <h5 className="dialog">Dialog</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            &times;
          </button>
          <div className="modalContent">
            Are you sure you want to delete the item?
          </div>
        </div>
      </div>
    </>
  );
}
