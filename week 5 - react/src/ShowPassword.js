import React, { useState } from "react";

export default function ShowPassword() {
  const [buttonName, setButtonName] = useState("Show");
  const [inputType, setInputType] = useState("password");
  const passwordHandler = () => {
    if (buttonName === "Show") {
      setButtonName("Hide");
      setInputType("text");
    } else {
      setButtonName("Show");
      setInputType("password");
    }
  };
  return (
    <div>
      Reset password
      <br />
      <input type={inputType} name="password" />
      <button onClick={passwordHandler}>{buttonName}</button>
    </div>
  );
}
