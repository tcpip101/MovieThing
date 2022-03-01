import React from 'react'
import Display from './Display'
import MovieData from './MovieData'


const MovieCard =({ movies }) => {
    return (
        <>
            {movies.map((movie, key) => (
                <Display movie= { movie } key= { movie.id } />
            ))}   
        </>
    )
}

export default MovieCard
