import useFetch from "./useFetch.jsx";

const CustomApp = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/posts");
    return (
        <div>
            {data && data.map(item => {
                return <p key={item.id}>{item.title}</p>
            })}
        </div>
    )
}
export default CustomApp
