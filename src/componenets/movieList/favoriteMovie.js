import { useEffect, useState } from "react";
import CardFavorite from "../card/cardFavorite";
import "./movieList.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RemoveFavorites from "./RemoveFavorites";

const FavoriteMovie = () => {
  const [favorites, setFavorites] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const movieFavorites = JSON.parse(localStorage.getItem("movie-favorites"));

    if (movieFavorites) {
      setMovieList(movieFavorites);
      setFavorites(movieFavorites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("movie-favorites", JSON.stringify(items));
  };

  const removeFavoriteMovie = (movie) => {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.id !== movie.id
    );

    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
    window.location.reload();
  };
  return (
    <div className="movie__list">
      <h2 className="list__title">Favorite</h2>
      <div className="list__cards">
        {movieList.map((movie, idx) => (
          <CardFavorite
            movie={movie}
            key={idx}
            movies={movieList}
            handleRemoveFavoritesClick={removeFavoriteMovie}
            RemoveFavoriteComponent={RemoveFavorites}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoriteMovie;
