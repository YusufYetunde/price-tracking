import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Coin from "./coin";
import CoinList from "./coinList";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState(" ");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=NGN&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search for Coin</h1>
        <form>
          <input
            className="coin-input"
            type="text"
            onChange={handleChange}
            placeholder="Search"
          />
        </form>
      </div>
      <div className="coin-heading">
        <CoinList />
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            rank={coin.market_cap_rank}
            key={coin.id}
            image={coin.image}
            name={coin.name}
            symbol={coin.symbol}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
          />
        );
      })}
    </div>
  );
}

export default App;
