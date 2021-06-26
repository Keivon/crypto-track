import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import './App.css';





function App() {

  const [coins, setCoins] = useState([]);

  useEffect(() => {
for(let i = 1; i < 3; i++) {
  fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=${i}&sparkline=false`, {
    method: 'GET', 
    headers: {'Content-Type': 'application/json'} })
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
      setCoins(myJson);
    });
  }
  }, []);

  return (
    <div className="App">
      <Sidebar coins = {coins} />
      <div className="contaner">
        <div className="box-pink">1</div>
        <div className="box-pink">2</div>
        <div className="box-pink">3</div>
        <div className="box-pink">4</div>
      </div>

    </div>
  );
}

export default App;
