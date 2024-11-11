
import './App.css';
import React, { useState } from 'react';
import MovieList from './Components/MovieList';
import Filter from './Components/Filter';

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A skilled thief is given a chance to erase his past crimes.",
      posterURL: "https://via.placeholder.com/150",
      rating: 4.8,
    },
    {
      title: "The Dark Knight",
      description: "Batman faces the Joker, a criminal mastermind.",
      posterURL: "https://via.placeholder.com/150",
      rating: 4.9,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  const addNewMovie = () => {
    const newMovie = {
      title: prompt("Enter movie title:"),
      description: prompt("Enter movie description:"),
      posterURL: prompt("Enter movie poster URL:"),
      rating: Number(prompt("Enter movie rating (0-5):")),
    };
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      <h1>My Favorite Movies</h1>
      <Filter setTitleFilter={setTitleFilter} setRatingFilter={setRatingFilter} />
      <button onClick={addNewMovie} style={{ marginBottom: '20px' }}>
        Add New Movie
      </button>
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
