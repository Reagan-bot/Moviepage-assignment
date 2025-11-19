"use client";
import React from 'react';
import { useEffect, useState } from 'react';
import { moviesData } from '../data/moviesData';

const MovieCard = ({poster_path,title, release_date, popularity,shortened_overview} ) => {
  const [movieData, setMovieData] = useState(null);
  const posterUrl = poster_path 

  const releaseYear = release_date 
  ? new Date(release_date).getFullYear() : '';

    return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={posterUrl} alt={title} />
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-popularity">Popularity: {popularity}</p>
        <p className="movie-shortened_overview">Overview: {shortened_overview}</p>
        <p className="movie-release_date">Release Date: {release_date}</p>
      </div>
    </div>
  )
};

export default MovieCard;