import {useState} from 'react'

function useCounterMaxHook(max) {
    const [valuecountmax, setValue] = useState(0);

    const increment = () => {
        if (valuecountmax < max) {
            setValue(valuecountmax + 1);
        }
    };

    const decrement = () => {
        if (valuecountmax > 0) {
            setValue(valuecountmax - 1);
        }
    };


    var error = "";
    if (valuecountmax >= max) {
        error = "Cannot increment further";
    } else if (valuecountmax <= 0) {
        error = "Cannot decrement further";
    }

    return { valuecountmax, increment, decrement, error };
}
export default useCounterMaxHook;