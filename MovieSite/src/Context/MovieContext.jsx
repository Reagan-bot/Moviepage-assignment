// import React, { createContext, useContext, useState, useEffect } from 'react';

// const MovieContext = createContext();

// export const useMovieContext = () => {
//   const context = useContext(MovieContext);
//   if (!context) {
//     throw new Error('useMovieContext must be used within a MovieProvider');
//   }
//   return context;
// };

// export const MovieProvider = ({ children }) => {
//   const [favorites, setFavorites] = useState([]);

//   // Load favorites from localStorage on component mount
//   useEffect(() => {
//     const storedFavorites = localStorage.getItem('movieFavorites');
//     if (storedFavorites) {
//       setFavorites(JSON.parse(storedFavorites));
//     }
//   }, []);

//   // Save favorites to localStorage whenever favorites change
//   useEffect(() => {
//     localStorage.setItem('movieFavorites', JSON.stringify(favorites));
//   }, [favorites]);

//   const addToFavorites = (movie) => {
//     if (!favorites.find(fav => fav.id === movie.id)) {
//       setFavorites(prev => [...prev, movie]);
//     }
//   };

//   const removeFromFavorites = (movieId) => {
//     setFavorites(prev => prev.filter(movie => movie.id !== movieId));
//   };

//   const isFavorite = (movieId) => {
//     return favorites.some(movie => movie.id === movieId);
//   };

//   const value = {
//     favorites,
//     addToFavorites,
//     removeFromFavorites,
//     isFavorite
//   };

//   return (
//     <MovieContext.Provider value={value}>
//       {children}
//     </MovieContext.Provider>
//   );
// };




import React, { createContext, useContext, useState, useEffect } from 'react';

const MovieContext = createContext();

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovieContext must be used within a MovieProvider');
  }
  return context;
};

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const storedFavorites = localStorage.getItem('movieFavorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Save favorites to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem('movieFavorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie) => {
    if (!favorites.find(fav => fav.id === movie.id)) {
      setFavorites(prev => [...prev, movie]);
    }
  };

  const removeFromFavorites = (movieId) => {
    setFavorites(prev => prev.filter(movie => movie.id !== movieId));
  };

  const isFavorite = (movieId) => {
    return favorites.some(movie => movie.id === movieId);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite
  };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
};