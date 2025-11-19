import React, {useEffect, useState} from 'react'

const ExampleThree = () => {
    const [name, setName] = useState(() => {
        const saveName = localStorage.getItem('name');
        return saveName ? JSON.parse(saveName) : null;
    })

    useEffect(() => {
        localStorage.setItem('name', JSON.stringify(name));
    },[name])

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleClear = () => setName("");
    return (
        <div>
            <h1>Your Name: {name}</h1>
            <input type="text"
                   value={name}
                   onChange={handleChange}
                   placeholder="Enter Name"
            />
            <button onClick={handleClear}>Clear Name</button>
        </div>
    )
}
export default ExampleThree
