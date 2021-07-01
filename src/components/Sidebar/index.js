import { useState } from 'react';
import './sidebar.css';
import '../Modal/modal.css'
import Modal from '../Modal';



function Sidebar(props) {

  const [modal, setModal] = useState("");

  let closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  }

  let openModal = (rank) => {
    
      let coin = props.coins.find(element => element.market_cap_rank === rank);
      let modal = document.getElementById("myModal");
      console.log(coin);
      setModal(
      <Modal
        img={coin.image}
        id={coin.id}
        currentPrice={coin.current_price}
        key={coin.market_cap_rank}
      />);
      modal.style.display = "block";
    
  }



  let myFunction = ()=> {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("i")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

  return (

    <div id="mySidenav" className="sidenav">
      <i className="closebtn" onClick={ closeNav }>&times;</i>
      <input type="text" id="mySearch" onKeyUp={  myFunction }
        placeholder="Search.." title="Type in a cion"></input>
      <div id="myMenu">
        {props.coins.map(coin => (
          
            <li key={coin.market_cap_rank}>
              <button onClick={() => { openModal(coin.market_cap_rank) }} >
                {coin.id}</button></li>
         
        ))}
{modal}
      </div>
    </div>

  );
}

export default Sidebar;
