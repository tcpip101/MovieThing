import React from 'react';
import { useParams, Link } from 'react-router-dom';
import MovieData from './MovieData';


function MovieDetails(props) {
    const  { movieId } = useParams()
    const movie = MovieData.filter(movies => movies.id === movieId)
    console.log(movie)

    return (
        <div>
            { movie }
        </div>
    )
}

export default MovieDetails;
