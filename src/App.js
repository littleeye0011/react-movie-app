import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componenets/header/Header";
import Home from "./pages/home/home";
import MovieList from "./componenets/movieList/movieList";
import Movie from "./pages/movieDetail/movie";
import MovieSearchList from "./componenets/movieList/movieSearchList";
import FavoriteMovie from "./componenets/movieList/favoriteMovie";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<Movie />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="favorite/" element={<FavoriteMovie />}></Route>
          <Route path="search/" element={<MovieSearchList />}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
