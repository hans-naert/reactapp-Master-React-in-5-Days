import useFetch from './useFetch';
function Countries() {
    const { data, error } = useFetch('https://countries.dev/countries');
    return (
        <div>
            <h1>Countries</h1>
            {error && <p>Error: {error.message}</p>}
            {data && <p>{data.length} countries found.</p>}
        </div>
    )
}
export default Countries;