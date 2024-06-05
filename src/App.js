
import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovie from './AddMovie';
import './App.css';


const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.',
      posterURL: 'https://m.media-amazon.com/images/I/912AErFSBHL._AC_UF1000,1000_QL80_.jpg',
      rating: 8.8,
      genre: 'A mind-bending thriller',
    },
    {
      title: 'The Matrix',
      description: 'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      rating: 8.7,
      genre: 'A sci-fi classic',
    },
    {
      title: ' The Usual Suspect',
      description: 'The sole survivor of a pier shoot-out tells the story of how a notorious criminal influenced the events that began with five criminals meeting in a seemingly random police lineup.',
      posterURL: 'https://www.tvguide.com/a/img/catalog/provider/1/2/1-172369979.jpg',
      rating: 10,
      genre: 'Crime-Drama-Mystery',
    },
    {
      title: 'The Godfather',
      description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRWU4BB_TIirPXQyr6BJpNkh0aYJ3HuhOxlg&s',
      rating: 9.2,
      genre: 'Crime-Drama',
    },
    {
      title: 'The Lord of the Rings',
      description: 'Gandalf and Aragorn lead the World of Men against Sauron"s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJBhSj6SGjvDroTSsOzr_8UaVZmFFXAtmdlg&s',
      rating: 9.0,
      genre: 'Action-Adventure-Drama',
    },
    {
      title: 'Gladiator',
      description: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
      posterURL: 'https://m.media-amazon.com/images/I/71qx-AMnP-L._AC_UF894,1000_QL80_.jpg',
      rating: 8.5,
      genre: 'Action-Adventure-Drama',
    },
    // Add more initial movies if needed
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const filterMovies = (title, rating) => {
    setFilteredMovies(
      movies.filter(movie =>
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        (rating === '' || movie.rating >= rating)
      )
    );
  };

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      <h1 className='habib'>Best Movies</h1>
      <br/>
      <Filter filterMovies={filterMovies} />
      <MovieList movies={filteredMovies} />
      <AddMovie addMovie={addMovie} />
    </div>
  );
};

export default App;
