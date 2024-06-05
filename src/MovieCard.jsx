import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div ><div class="movie_card" id="bright">
    <div class="info_section">
      <div class="movie_header">
        <img class="locandina" src={movie.posterURL} alt="pic"/>
        <h1>{movie.title}</h1>
        <br />
        <p class="genre">{movie.genre}</p>
        <br />
        <span class="rate">{movie.rating}</span>
        <br />
      </div>
      <div class="movie_desc">
        <p class="text">
          {movie.description} 
        </p>
      </div>
      
    </div>
    <div class="blur_back bright_back"></div>
  </div>
  
  
    </div>
  );
};

export default MovieCard;