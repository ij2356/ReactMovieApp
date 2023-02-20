import './App.css';
import { useEffect, useState } from 'react';
import Array from "./ArrayState.js";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((response) => console.log(response))
  }
  ,[])



  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts");

  // }, [])
  
  return (
    <div>
      {/* <Array></Array> */}
      <h1>The Coin!</h1>
      {loading ? <strong>loading..</strong> : null}
      
    </div>
  );
}

export default App;
