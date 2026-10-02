import React from "react";
import { useState, useEffect, useRef } from "react";


function Count({ init = 0, end = 5, autostart = false, setTotal }) {
    const [count, setCount] = useState(init);
    const [start, setStart] = useState(true);
    const [inputValue, setInputValue] = useState("");
    //const [initValue, setInitValue] = useState(true);
    const initialInit = useRef(true);
    const refCounter = useRef(null);

    useEffect(() => {
        refCounter.current?.focus();
    },[]);

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
            <input onChange={(e) => {
                setTotal(t => t-parseInt(inputValue||"0"))
                setTotal(t => t+parseInt(e.target.value||"0"))
                setInputValue(e.target.value)
            }
            } onKeyDown={(e) => {
                // Allow control/navigation keys (Backspace, Delete, Arrow keys, Tab, ...)
                if (e.key.length > 1) {
                    return;
                }
                if (!/^[0-9a-fA-F]$/.test(e.key)) {
                    e.preventDefault();
                }
            }} ref={refCounter} />
            <div>inputValue: {inputValue}</div>
        </>
    );
}
export default Count;