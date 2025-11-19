import React, {useReducer, useState} from 'react'

const initialState = {count: 0}

const reducer = (state, action) => {
    switch (action.type){
        case 'increment':
            return {...state, count: state.count + 1}
        case 'decrement':
            if(state.count === 0) return {...state, count: state.count}
            return {...state, count: (state.count === 0) ? state.count : state.count - 1}
        case 'reset':
            return {...state, count: 0}
        default:
            return state;
    }
}

const ReducerApp = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    // const [count, setCount] = useState(0)
    return (
        <div>
            <div>
                <button onClick={() => dispatch({ type: "increment" })}>+</button>
                <button onClick={() => dispatch({ type: "decrement" })}>-</button>
                <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
                <h1>Count: {state.count}</h1>
            </div>
            {/*<div>*/}
            {/*    <button onClick={() => setCount(prev => prev + 1)}>+</button>*/}
            {/*    <button onClick={() => setCount(prev => prev === 0 ? prev : prev - 1)}>-</button>*/}
            {/*    <button onClick={() => setCount(0)}>Reset</button>*/}
            {/*    <h1>Count: {count}</h1>*/}
            {/*</div>*/}
        </div>
    )
}
export default ReducerApp
