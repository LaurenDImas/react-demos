import React, {useEffect} from 'react'

const BasicEffect = () => {
    useEffect(() => {
        console.log("BasicEffect componentDidMount")
    },[])
    return (
        <div>
            <h1>Check Console</h1>
        </div>
    )
}
export default BasicEffect
