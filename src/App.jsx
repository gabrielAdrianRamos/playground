import React, { useState } from "react";
import MainPage from "./components/MainPage";
import Letters from "./components/Letters";
import Numbers from "./components/Numbers";

export default function App() {
  const [currentForm, setCurrentForm] = useState("main-page");

  function toggleForm(formName) {
    setCurrentForm(formName);
  }
  return (
    <div>
      {currentForm === "alphabets" ? (
        <Letters onFormSwitch={toggleForm} />
      ) : currentForm === "numbers" ? (
        <Numbers onFormSwitch={toggleForm} />
      ) : (
        <MainPage onFormSwitch={toggleForm} />
      )}
    </div>
  );
}
