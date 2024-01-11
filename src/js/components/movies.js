import React from "react";
import "./Movies.css";
const DEFAULT_PLACEHOLDER_IMAGE =
  "https://image.tmdb.org/t/p/w300_and_h450_bestv2";

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className="movies">
      <div className="li">
        <a>
          <img
            width="200"
            alt={`The movie titled: ${movie.Title}`}
            src={poster}
          />
          <div className="p">
            <span className="title">{movie.Title}</span> <br />
            <span className="info"> Year of Movie Release{movie.Year}</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Movie;
