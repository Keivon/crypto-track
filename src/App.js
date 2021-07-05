import { useEffect, useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import Sidebar from './components/Sidebar';
import Modal from './components/Modal';
import { getCoinsAsync } from './features/coins/coinsSlice';
import './App.css';






function App() {

  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const coins = useSelector((state) => state.coin);

 

  useEffect(() => {
		dispatch(getCoinsAsync());
	}, [dispatch]);

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
