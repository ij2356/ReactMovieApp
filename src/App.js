import './App.css';
import { useEffect, useState } from 'react';
import Array from "./ArrayState.js";
import Coin from "./coin.js";
import "./css/index.css";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year").then((response) => response.json().then((result) => console.log(result.data.movies[1])));
  },[])
  return (
    <>
      <div>
        {loading ? <h1>loading</h1> : null}
      </div>
    </>
  );
}

export default App;
