import {useReducer} from "react";

function Count() {
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
        </div>
    )
}
export default Count;