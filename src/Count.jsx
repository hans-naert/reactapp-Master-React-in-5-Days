import React from "react";
import { useState, useEffect, useRef } from "react";


function Count({ init = 0, end = 5, autostart = false }) {
    const [count, setCount] = useState(init);
    const [start, setStart] = useState(true);
    //const [initValue, setInitValue] = useState(true);
    const initialInit = useRef(true);

    useEffect(() => {
        if (!start) {
            const timer = setInterval(() => {
                setCount((c) => {
                    if (c + 1 >= end)
                        setStart(true);
                    return c + 1;
                });

            }, 1000);

            return () => clearInterval(timer);
        }
    });

    useEffect(() => {
        if (initialInit.current) {
          initialInit.current = false;
        //if (initValue) {
          //  setInitValue(false);
            console.log("autostart", autostart);
            if (autostart) {
                setStart(false);
                setCount(init);
            }
        }
    }, []);

    return (
        <>
            <p>Count is {count}</p>
            {(start) ?
                <button onClick={() => setStart(false)} >
                    Start
                </button> : <p>Counting...</p>
            }
        </>
    );
}
export default Count;