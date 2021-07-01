import { useEffect, useState } from 'react';
import './modal.css';





export default function Modal(props) {


    const [value, setValue] = useState(0);
    const [name, setName] = useState("");
    const [coinImgae, setCoinImgae] = useState("");
    const [currentPrice, setCurrentPrice] = useState("");

  // Get the modal
  let modal = document.getElementById("myModal");

  // open the modal
  let openModal = () => {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  let closeModal = function () {
      modal.style.display = "none";
  }


    useEffect(() => {
        setName(props.id);
        setCoinImgae(props.img);
        setCurrentPrice(props.currentPrice);

    }, [props.id, props.img, props.currentPrice]);

console.log(props.id)
    return (
        <>
            <button id="myBtn" onClick={() => { openModal() }} >{name}</button>
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={() => { closeModal() }} >&times;</span>
                    <div className="modal-card">
                        <div className="modal-card center">
                            <img src={coinImgae}
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