import { useEffect, useState } from "react";
import Cards from "../card/card";
import "./movieList.css";
import { useParams } from "react-router-dom";

const apiKey = "07faef61cdf5a6c5e2032f4c4e54c366";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
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

  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list__cards">
        {movieList.map((movie, idx) => (
          <Cards movie={movie} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
