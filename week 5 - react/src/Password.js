import React, { useState } from "react";
export default function Password() {
  const [pwd, setPwd] = useState("");
  const passwordHandler = (e) => {
    e.target.value === pwd ? console.log("okay") : console.log("not okay");
  };

  return (
    <div>
      Password:
      <input
        type="text"
        onChange={(e) => setPwd(e.target.value)}
        name="password"
      />
      <br />
      <br />
      Confirm Password:
      <input type="text" name="confirmPassword" onChange={passwordHandler} />
    </div>
  );
}
