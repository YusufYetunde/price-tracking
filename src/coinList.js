import React from 'react';

const CoinList = ({ coins }) => {

  return (
    <div className='coin-headers'>
        <p>Rank</p>
        <p>Name</p>
        <p>Symbol</p>
        <p>Price</p>
        <p>Volume</p>
        <p>Price Change</p>
        <p>Market Cap</p>
      </div>
  );
};

export default CoinList;
