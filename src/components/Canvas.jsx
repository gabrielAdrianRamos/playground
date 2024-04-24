import React from "react";
import CanvasDrawer from "./CanvasDrawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Canvas(props) {
  return (
    <div className="canvas-container">
      <CanvasDrawer width={1000} height={600} />
      <button
        className="switch-alpha"
        onClick={() => {
          props.onFormSwitch("main-page");
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
