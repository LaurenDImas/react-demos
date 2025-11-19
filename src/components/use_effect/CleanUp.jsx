import {useEffect, useState} from "react";

function Demo() {
    const [show, setShow] = useState(true);

    return (
        <div>
            <button onClick={() => setShow((s) => !s)}>
                Toggle Child
            </button>

            {show && <Child />}
        </div>
    );
}

function Child() {
    useEffect(() => {
        console.log("🔥 Child effect jalan");

        return () => {
            console.log("🧹 Child cleanup jalan");
        };
    }, []);

    return <h1>Child Component</h1>;
}

export default Demo;