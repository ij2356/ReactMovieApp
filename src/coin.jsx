import React, { useEffect, useState } from "react";

const Coin = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoin] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoin(json);
        setLoading(false);
      });
  }, []);

  function click() {
    console.log(coins);
  }
  return (
    <div>
      {/* <Array></Array> */}
      <h1>The Coin! ({loading ? null : coins.length})</h1>
      <button onClick={click}> 콘솔에다가 찍기</button>
      {loading ? (
        <strong>loading..</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id} id={coin.id}>
              {coin.name}
              <br />
              {/* {coin.symbol} */}
              {coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Coin;
