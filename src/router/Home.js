
import React, { useEffect, useState } from "react";
import Movie from "../components/movie.js";

function Home() {
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
            <Movie img={item.medium_cover_image} title={item.title} rating={item.rating} genres={item.genres} key={key} id={ item.id} />
          ))}
        </ul>
        <button onClick={onClick}>클릭시 콘솔</button>
      </div>
    </>
  );
}

export default Home;
