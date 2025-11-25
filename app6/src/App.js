import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = React.useState([
    // Initial example movies can be added here or start empty
  ]);
  const [filterTitle, setFilterTitle] = React.useState('');
  const [filterRating, setFilterRating] = React.useState(0);

  // Handler to add new movie
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  // Filter movies based on title and rating
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
  );

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>My Movie App</h1>
      <AddMovie addMovie={addMovie} />
      <Filter
        filterTitle={filterTitle}
        setFilterTitle={setFilterTitle}
        filterRating={filterRating}
        setFilterRating={setFilterRating}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
