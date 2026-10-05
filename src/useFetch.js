import {useState,useEffect} from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        ( async () => {
            try {
                let response = await fetch(url);
                let data = await response.json();
                setData(data);
            } catch (error) {
                setError(error);
            }
        })()},[url]);
        
    return { data, error };
}
export default useFetch;