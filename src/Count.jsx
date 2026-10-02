import React from "react";
import { useState } from "react";


function Count({init=0,end=5}) {
  const [count, setCount] = useState(init);
  return (
    <>
      <p>Count is {count}</p>
      <button onClick={() => setCount((c) => Math.min(c + 1, end))}>
        Increment
      </button>
    </>
  );
}
export default Count;