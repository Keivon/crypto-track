import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Modal from './components/Modal';
import './App.css';





function App() {

  const [coins, setCoins] = useState([]);

  useEffect(() => {

  fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false`, {
    method: 'GET', 
    headers: {'Content-Type': 'application/json'} })
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
      setCoins(myJson);
    });
  
  }, []);

  return (
    <div className="App">
      <Sidebar coins = {coins} />
      <Modal/>
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
