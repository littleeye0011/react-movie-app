import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import "./card.css";

const Cards = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const AddFavoriteComponent = props.AddFavoriteComponent;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <div>
          <div className="cards">
            <div
              onClick={() => {
                props.handleAddFavoritesClick(props.movie);
              }}
              className="overlay"
            >
              <AddFavoriteComponent />
            </div>
            <img
              className="cards__img"
              src={`https://image.tmdb.org/t/p/original${
                props.movie ? props.movie.poster_path : ""
              }`}
              alt={props.movie ? props.movie.original_title : ""}
            />
            <div className="cards__overlay">
              <Link
                to={`/movie/${props.movie.id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className="card__title">
                  {props.movie ? props.movie.original_title : ""}
                </div>
                <div className="card__runtime">
                  {props.movie ? props.movie.release_date : ""}
                  <span className="card__rating">
                    {props.movie ? props.movie.vote_average : ""}
                    <i className="fas fa-star" />
                  </span>
                </div>
                <div className="card__description">
                  {props.movie
                    ? props.movie.overview.slice(0, 118) + "..."
                    : ""}
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cards;
