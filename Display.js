import React from 'react';
import { Link } from 'react-router-dom';

const Display = ({ movie}) => {
  return (
    <div className='image-container col-md-4 align-text-center'>
      <Link to={`/moviechannel/${movie.id}`} key={movie.id}>
        <img src={movie.Poster} alt={movie.Title} />
        <h5>{movie.Title} ({movie.Year})</h5>
      </Link>
    </div>
  )
}



export default Display;
