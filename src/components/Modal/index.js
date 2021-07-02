import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { modalClose } from '../../features/modal/modalSlice';
import './modal.css';





export default function Modal(props) {

    const [value, setValue] = useState(0);
    const [name, setName] = useState("");
    const [coinImage, setCoinImage] = useState("");
    const [currentPrice, setCurrentPrice] = useState("");
  

    const dispatch = useDispatch();

	const handleCloseModal = () => {
		dispatch(modalClose());
	};



    useEffect(() => {
        setName(props.id);
        setCoinImage(props.img);
        setCurrentPrice(props.currentPrice);
    }, [props.id, props.img, props.currentPrice]);


    return (
        <>
            
            <div id="myModal" className="modal"  >
                <div className="modal-content">
                    <span className="close" onClick={ handleCloseModal } >&times;</span>
                    <div className="modal-card">
                        <div className="modal-card center">
                            <img src={coinImage}
                                alt=""
                                width='100px'
                                height='100px' />
                            <h3>{name}</h3>
                        </div>

                        <div style={{ marginRight: "auto" }}>
                            <label htmlFor="amount">Amount:</label>
                            <input
                                id="amount"
                                onChange = {(e) =>{ setValue(e.target.value) }}
                                name="amount"
                                style={{ marginRight: "10px" }}
                                type="number"
                                value={value}
                                size="1000000"></input>
                            <p style={{ display: "inline-block" }} > @ ${currentPrice} usd</p>
                        </div>
                        <button
                            style={{ margin: "auto" }}
                        >Add</button>
                    </div>
                </div>

            </div>
        </>
    )
}