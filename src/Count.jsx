import {useReducer} from "react";

import useCounterMaxHook from "./useCounterMaxHook";

function Count() {

    const { valuecountmax, increment, decrement, error } = useCounterMaxHook(5);
    const [value,dispatch] = useReducer((value,action) => {
        switch(action.type) {
            case 'INCREMENT':
                return value + 1;
            case 'DECREMENT':
                return value - 1;
            default:
                return value;
        }
    }, 0);

    return (
        <div>
            <h1>Count</h1>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>+</button>
            <span>{value}</span>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>-</button>
            <div>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>  
            </div>
            <p>valuecountmax: {valuecountmax}</p>
            <p>{error}</p>
         </div>
    );
}
export default Count;