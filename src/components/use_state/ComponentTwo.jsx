import React from 'react'

const ComponentTwo = ({count, onClickHandler}) => {

    const handleClickMovies = () => onClickHandler()
    return (
        <div>
            <p>{count}</p>
            <button onClick={handleClickMovies}>Click Movie</button>
        </div>
    )
}
export default ComponentTwo
