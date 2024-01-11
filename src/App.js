import React, { useState, useEffect } from "react";
import "./App.css";

import Movie from "./js/components/movies";
import Search from "./js/components/searchbar";
import Footer from "./js/components/Footer";

const MOVIE_API_URL = "https://www.omdbapi.com/?apikey=45f0782a&s=war";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setMovies(jsonResponse.Search);
        setLoading(false);
      });
  }, []);

  const search = (searchValue) => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=45f0782a&s`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  };

  return (
    <div className="App">
      <main>
        <Search search={search} />
        <div className="movies">
          {loading && !errorMessage ? (
            <img
              className="loader"
              src="https://www.w3tweaks.com/images/essentials/css-loaders/hourglass-loader.gif"
            />
          ) : errorMessage ? (
            <div className="errorMessage">{errorMessage}</div>
          ) : (
            movies.map((movie, index) => (
              <Movie key={`${index}-${movie.Title}`} movie={movie} />
            ))
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
