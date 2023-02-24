import "./App.css";
import { useEffect, useState } from "react";
import Array from "./ArrayState.js";
import Coin from "./coin.js";
import "./css/index.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState([]);
  const getMovies = async () => {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");
    const json = await response.json();
    setMovieData(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  const onClick = () => {
    console.log(movieData);
  };

  //엑박처리
  const handleImgError = (e) => {
    e.target.src = "http://placehold.it/320x100/E8117F/ffffff?text=sample";
  };
  return (
    <>
      <div>
        {loading ? <h1>loading</h1> : null}
        <ul>
          {movieData.map((item, key) => (
            <div key={item.id}>
              <div className="thumbnail">
                <img src={item.medium_cover_image} alt="썸네일" onError={handleImgError} />
              </div>
              <h2>
                {key + 1} {item.title}
              </h2>
              <div className="rating">{item.rating}</div>

              {item.hasOwnProperty("genres") ? (
                <ul>
                  {item.genres.map((g, index) => (
                    <li key={index}>{g}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </ul>
        <button onClick={onClick}>클릭시 콘솔</button>
      </div>
    </>
  );
}

export default App;
