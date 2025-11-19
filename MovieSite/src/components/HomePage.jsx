import React from "react";
import { moviesData } from '../data/moviesData';
import MovieCard from './MovieCard';
import Navbar from "./Navbar";

export default function HomePage() {
  return (
    <>
        <Navbar />
        <div className='flex flex-row gap-3'>
            {moviesData.results.map((item, index) => {
                return (
                <div>
                    <MovieCard 
                    key={index} 
                    poster_path={item.poster_path} 
                    title={item.title} 
                    release_date={item.release_date} 
                    popularity={item.popularity} 
                    shortened_overview={item.overview} 
                    />
                </div>
                )
            })}
            </div>
        </>
  );
}