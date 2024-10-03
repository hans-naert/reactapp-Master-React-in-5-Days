import React, { useState, useEffect } from 'react';
function Counter({ init, end }) {
    var init = parseInt(init || 0);
    var end = parseInt(end || 0);
    const [count, setCount] = useState(init);
    const [start, setStart] = useState(true); // true for displaying the Start button
    useEffect(function () {
        if (!start) {
            // The Start button is not displayed; you can initiate the timer.
            var timer = setInterval(function () {
                setCount((count) => {
                    var newCount = count + 1;
                    if (newCount >= end) setStart(true);
                    return newCount;

                    function incr() {
                        setCount(count + 1);
                    }
                });
            }, 1000);
        }
        return function () {
            clearInterval(timer);
        }
    });
    function restart() {
        setStart(false); // Hide the Start button
        setCount(init); // Reset "count" to the initial value.
    }

    return (
        <>
            Initial value of the counter is: {init}
            <br />
            End of the counter at: {end}
            <br />
            The counter is set to: {count}
            <br />
            {
                (start) ?
                    <>
                        <b>Counter stopped</b>&nbsp;
                        <button onClick={restart}>Start</button>
                    </> :
                    <i>Counter in progress</i>
            }
        </>
    )
}
export default Counter;