import React from "react";
import { useState, useEffect } from "react";


function Count({init=0,end=5}) {
  const [count, setCount] = useState(init);
  const [start, setStart] = useState(true);

  useEffect(() => {
    if(!start) {
      const timer = setInterval(() => {
        setCount((c) => {
            if(c+1>=end) 
                setStart(true);
            return c+1;
        });
        
      }, 1000);

      return () => clearInterval(timer);
    }
  });

  return (
    <>
      <p>Count is {count}</p>
      { (start) ?
      <button onClick={() => setStart(false)} >
        Start
      </button> : <p>Counting...</p>
     }
    </>
  );
}
export default Count;