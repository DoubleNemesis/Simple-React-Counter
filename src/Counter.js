import React, { useState } from "react";
import Button from "./Button";

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick(e) {
    e.target.id === "increment"
      ? setCount((prev) => prev + 1)
      : setCount((prev) => prev - 1);
  }

  return (
    <div>
      <h1>Counter</h1>
      <h1>{count}</h1>
      <Button
        className="mainBTN"
        id="increment"
        name="+1"
        handleClick={handleClick}
      />
      <Button
        className="mainBTN"
        id="decremenr"
        name="-1"
        handleClick={handleClick}
      />
    </div>
  );
}

export default Counter;
