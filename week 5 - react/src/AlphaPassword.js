import React, { useState } from "react";

export default function AlphaPassword() {
  const [msg, setMsg] = useState("");
  const [password, setPassword] = useState(false);
  const passwordHandler = (e) => {
    setPassword(/^[0-9a-zA-Z]*[0-9][0-9a-zA-Z]*$/g.test(e.target.value));
    password
      ? setMsg("")
      : setMsg("Password should be a number and alphabets combo");
  };
  return (
    <div>
      Password:
      <input type="text" onChange={passwordHandler} />
      <br />
      <span>{msg}</span>
    </div>
  );
}
