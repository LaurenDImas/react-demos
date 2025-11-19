import React, {useState} from 'react'

const Movies = () => {
    const [movie, setMovie] = useState({
        title: "Equalizer 3",
        ratings: 7,
    })

    const handleClick = () => setMovie({...movie, ratings: 5});

    const [movies, setMovies] = useState([
        {id: 1, title: "Spider Man", ratings: 7},
        {id: 2, title: "Superman", ratings: 6},
        {id: 3, title: "Super Mario", ratings: 3},
    ])

    const handleClickMovies = () => {
        setMovies(
            movies.map((movie) => (movie.id === 1 ? {...movie, title: 'John Wick'} : movie))
        )
        console.log(movies)
    }

    return (
        <div>
            <div>
                <h1>Title: {movie.title}</h1>
                <h1>Ratings: {movie.ratings}</h1>
                <button onClick={handleClick}>Change Ratings</button>
            </div>
            <br/>
            <div>
                {movies.map(movie => (
                    // eslint-disable-next-line react-hooks/purity
                    <li key={Math.random()}>{movie.title}</li>
                ))}
                <button onClick={handleClickMovies}>Change Name</button>
            </div>
        </div>
    )
}
export default Movies
