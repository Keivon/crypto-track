import { useDispatch } from 'react-redux';
import { modalOpen } from '../../features/modal/modalSlice';
import './sidebar.css';




function Sidebar(props) {


  const dispatch = useDispatch();
  let closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
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
          
            <li key={coin.market_cap_rank} >
              <button onClick={() =>dispatch(modalOpen({
                coinName:coin.id,
                coinImage: coin.image,
                currentPrice: coin.current_price
              }))} className='sidebar-button'>
                {coin.id}</button></li>
         
        ))}

      </div>
    </div>

  );
}

export default Sidebar;
