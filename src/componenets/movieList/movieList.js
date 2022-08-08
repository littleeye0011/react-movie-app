import { useEffect, useState } from "react";
import Cards from "../card/card";
import "./movieList.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddFavorites from "./AddFavorites";
import { useParams } from "react-router-dom";

const apiKey = "07faef61cdf5a6c5e2032f4c4e54c366";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=${apiKey}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
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
    if (!favorites.find((favorite) => favorite.id === movie.id)) {
      setFavorites(newFavoriteList);
      saveToLocalStorage(newFavoriteList);
    }
  };

  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list__cards">
        {movieList.map((movie, idx) => (
          <Cards
            movie={movie}
            key={idx}
            movies={movieList}
            handleAddFavoritesClick={addFavoriteMovie}
            AddFavoriteComponent={AddFavorites}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
