import React, { useState } from "react";

export default function DisableSubmit() {
  const [password, setPassword] = useState("");
  const [btn, setBtn] = useState(false);
  const passwordHandler = (e) => setBtn(password === e.target.value);

  return (
    <div>
      Password:
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      Confirm Password:
      <input
        type="password"
        name="confirmpassword"
        onChange={passwordHandler}
      />
      <br />
      <br />
      <button disabled={!btn} onClick={() => console.log(password)}>
        {" "}
        Submit
      </button>
    </div>
  );
}
