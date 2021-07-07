import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteCard, cardsAmountValue } from '../../features/card/cardSlice';
import './card.css';





export default function Card(props) {

    const [amount, setAmount] = useState(0);
    const [id, setId] = useState(0);
    const [display, setDisplay] = useState(0);
    const [name, setName] = useState("");
    const [coinImage, setCoinImage] = useState("");
    const [currentPrice, setCurrentPrice] = useState("");
  

    const dispatch = useDispatch();

	



    useEffect(() => {
        setAmount(props.amount);
        setId(props.id);
        setName(props.name);
        setCoinImage(props.img);
        setCurrentPrice(props.currentPrice.toFixed(5));
       
    }, [props.id, props.img, props.currentPrice, props.value, props.amount, props.name]);
    

    return (
        <div className="card" key={id}>
          <div className="closeb" >  <i className="closebtn"
           onClick={ ( )=>{
               dispatch(deleteCard({id}))
               dispatch(cardsAmountValue())
               } }>&times;</i> </div>
        <img src={coinImage} alt={name} />
       <p>{name}</p>
        <h1>{amount}</h1>
        <p>${(amount * currentPrice).toFixed(3)} </p>
        {display?
        <p >@ {currentPrice}</p> :<> </>
        }
        <p className="cardtext"  onClick={() => setDisplay(!display) }> {!display?<i >&#8681;</i>:<i>&#8679;</i>}</p>
      </div>
    )
}