import React from 'react';
// import { useMovieContext } from './context/MovieContext';
import { useMovieContext } from '../Context/MovieContext';
import MovieCard from './MovieCard';

const Favorites = () => {
  const { favorites } = useMovieContext();

  return (
    <div className="favorites">
      <h1>Your Favorite Movies</h1>
      {favorites.length === 0 ? (
        <div className="no-favorites">
          <p>You haven't added any movies to favorites yet.</p>
        </div>
      ) : (
        <div className="movies-grid">
          {favorites.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;