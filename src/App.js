import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from './components/sidebar';
import Modal from './components/modal';
import Card from './components/card';
import { getCoinsAsync } from './features/coins/coinsSlice';
import './App.css';






function App() {

  const dispatch = useDispatch();

  const modal = useSelector((state) => state.modal);
  const coins = useSelector((state) => state.coin);
  const cards = useSelector((state) => state.card);
  const [value, setValue] = useState(0);
  const [cardsfs, setCardsfs] = useState([]);
 


  useEffect(() => {
    dispatch(getCoinsAsync());
  }, [dispatch]);

  useEffect(() => {
    setValue(cards.value)
    setCardsfs(cards.cards)
  }, [cards.value, cards.cards]);



  return (
    <div className="App">
      <Sidebar coins={coins} />
      {modal.display ?
        <Modal
          id={modal.coinName}
          img={modal.coinImage}
          currentPrice={modal.currentPrice}
        /> : <></>
      }
      <p className='text'>Current gains / losses = ${value.toFixed(2)}</p>
      <div className="contaner">

        {cards ?
         <div className="landing"> 

           <p> &#8598; Add a card from the menu</p> 

           </div> :
         cardsfs.map(card => (
          <Card 
          id={card.id}
          name = {card.coinName}
          amount={card.amount} 
          img={card.coinImage}
          currentPrice={card.currentPrice}
           key={card.id}
           />
        ))   }

      </div>

    </div>
  );
}

export default App;
