import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img
            className="header__icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            alt=""
          />
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>TopRate</span>
        </Link>
        <Link to="/favorite" style={{ textDecoration: "none" }}>
          <span>Favorite</span>
        </Link>
        <Link to="/search" style={{ textDecoration: "none" }}>
          <span>Search</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
