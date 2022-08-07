import { useEffect, useState } from "react";
import Cards from "../card/card";
import "bootstrap/dist/css/bootstrap.min.css";
import AddFavorites from "./AddFavorites";
import "./movieList.css";

const date = new Date();
let years = date.getFullYear();

const apiKey = "07faef61cdf5a6c5e2032f4c4e54c366";

const MovieSearchList = () => {
  const [movieSearchList, setSearchMovieList] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const searchYear = (e) => {
    e.preventDefault();
    years = e.target[0].value;
    getData();
    resetField(e);
  };

  const resetField = (e) => {
    e.target[0].value = "";
  };

  useEffect(() => {
    const movieFavorites = JSON.parse(localStorage.getItem("movie-favorites"));

    if (movieFavorites) {
      setFavorites(movieFavorites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("movie-favorites", JSON.stringify(items));
  };

  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&year=${years}`
    )
      .then((res) => res.json())
      .then((data) => setSearchMovieList(data.results));
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [years]);

  return (
    <div>
      <div className="searchContainer">
        <form action="" onSubmit={searchYear} className="searchForm">
          <input type="number" placeholder="YEARS // ex.2020" />
          <button type="submit">searchYear</button>
        </form>
      </div>
      <div className="movie__list">
        <h2 className="list__title">Search {years}</h2>
        <div className="list__cards">
          {movieSearchList.map((movie, idx) => (
            <Cards
              movie={movie}
              key={idx}
              movies={movieSearchList}
              handleAddFavoritesClick={addFavoriteMovie}
              AddFavoriteComponent={AddFavorites}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieSearchList;
