import { useEffect, useState } from "react";
import "./Row.css";
import YouTube from "react-youtube";
const base_url = "https://image.tmdb.org/t/p/original/";
function Row(props) {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  async function contentHandler() {
    const response = await fetch(
      `https://api.themoviedb.org/3${props.fetchUrl}`
    );
    const data = await response.json();
    setMovie(data.results);
  }
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  async function playHandller(event) {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let response;
      if (
        event.currentTarget.className.includes("poster_large") ||
        event.currentTarget.getAttribute("data-media-type") === "tv"
      ) {
        response = await fetch(
          `https://api.themoviedb.org/3/tv/${event.currentTarget.id}/videos?api_key=4f24a3fdbf2adfe3a102b0f28fae6be5&language=en-US`
        );
      } else {
        response = await fetch(
          `https://api.themoviedb.org/3/movie/${event.currentTarget.id}/videos?api_key=4f24a3fdbf2adfe3a102b0f28fae6be5&language=en-US`
        );
      }
      const data = await response.json();
      console.log(data);
      const updatedData = data.results.filter((info) => {
        return info.type === "Trailer" && info.official;
      });
      setTrailerUrl(updatedData[0].key);
    }
  }

  useEffect(() => {
    contentHandler();
  }, [props.fetchUrl]);
  return (
    <div className="test">
      <h3>{props.title}</h3>
      {movie.length === 0 && <h1>loading...</h1>}
      <div className="movieList">
        {movie.length > 0 &&
          movie.map((movieData) => {
            return (
              <img
                className={`poster ${
                  props.title === "NETFLIX ORIGINALS" && "poster_large"
                }`}
                key={Math.random()}
                id={movieData.id}
                src={`${base_url}${
                  props.title === "NETFLIX ORIGINALS"
                    ? movieData.poster_path
                    : movieData.backdrop_path
                }`}
                alt={movieData.name}
                onClick={playHandller}
                data-media-type={movieData.media_type}
              />
            );
          })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
