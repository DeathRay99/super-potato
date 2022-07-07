import { useEffect, useState } from "react";
import requests from "../requests";
import "./Banner.css";
const base_url = "https://image.tmdb.org/t/p/original/";
function Banner() {
  const [movie, setMovie] = useState({});
  async function contentHandler() {
    const response = await fetch(
      `https://api.themoviedb.org/3${requests.fetchTrending}`
    );
    const data = await response.json();
    setMovie(
      data.results[Math.floor(Math.random() * (data.results.length - 1))]
    );
  }
  useEffect(() => {
    contentHandler();
  }, []);
  return (
    <header
      className="movie_banner"
      style={{
        backgroundImage: ` url("${base_url}${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_info">
        <h1>{movie?.name || movie?.title || movie?.original_name}</h1>
        <div className="button_info">
          <button>Play</button>
          <button>My list</button>
        </div>
        <h4>{movie?.overview}</h4>
      </div>
      <div className="fadeBottom" />
    </header>
  );
}
export default Banner;
