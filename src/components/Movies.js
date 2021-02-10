import React from 'react';
import { movies } from '../data';

const Movies = () => {

function generateMovieList() {
  return movies.map(movie => <div>Movie: {movie.title} at {movie.time} <ul>{movie.genres.join(', ')}</ul></div>)
}

  return (
    <div>
        <h1>Movies Page</h1>
        {generateMovieList()}
        {/* can do it this way as well ===> {movies.map(movie => <div>Movie: {movie.title} at {movie.time} <ul>{movie.genres.join(', ')}</ul></div>)} */}
    </div>
  );
};

export default Movies;
