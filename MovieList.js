import React, { useState, useEffect } from 'react'
import Header from './Header'
import MovieCard from './MovieCard'
import Ratings from './Ratings'
import SearchBar from './SearchBar'
import MovieData from './MovieData'


function MovieList() {
   

    const [movies, setMovies] = useState(MovieData)

    console.log(MovieData)
    const [searchMovie, setSearchMovie] = useState('')
    const [rating, setRating] = useState(0)

    const getMovieRequest= (searchMovie)=> {
       const searchedMovies = (movies.filter(function(ele){
           return ele.Title.toLowerCase().includes(searchMovie.toLowerCase())
       }))

       if(searchMovie){
        setMovies(searchedMovies)
       }else{
           setMovies(movies)
       }

      console.log(searchedMovies)
    }
    


    
    useEffect(() => {
      getMovieRequest(searchMovie);
    
      return () => {
        if(searchMovie === ''){
            return {movies}
        }
      };
    }, [searchMovie]);
    
    

    return (
        <div className='container-fluid'>
            <div className='container'>
                <div className='row m-4'>
                    <Header header='Horsmantube' />
                    <SearchBar searchMovie={searchMovie} setSearchMovie={setSearchMovie}  />
                    <Ratings rating= {rating} setRating={setRating}/>
                </div>    
            </div>
            <br/>
            <div className='container'>
                 <div className='row m-20'>
                    <MovieCard  movies = {movies} />
                 </div>
             </div>
            
        </div>
    )
}

export default MovieList
