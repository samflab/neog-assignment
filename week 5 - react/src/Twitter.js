import React, { useState } from "react";

export default function Twitter() {
  const [count, setCount] = useState(20);
  const textHandler = (e) => {
    const len = e.target.value.length;
    setCount(20 - len);
  };

  return (
    <div>
      Twitter
      <br />
      <textarea onChange={textHandler} />
      <br />
      <span> {count} / 20 </span>
    </div>
  );
}
