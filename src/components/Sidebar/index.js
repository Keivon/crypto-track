import './sidebar.css';

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function myFunction() {
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

function Sidebar() {
  return (
    <div id="mySidenav" className="sidenav">
  <i className="closebtn" onClick={() => {closeNav()}}>&times;</i>
  <input type="text" id="mySearch" onKeyUp={() => {myFunction()}} 
  placeholder="Search.." title="Type in a cion"></input>
 <div id="myMenu">
  <li><i>HTML</i></li>
  <li><i >CSS</i></li>
  <li><i >JavaScript</i></li>
  <li><i >PHP</i></li>
  <li><i >Python</i></li>
  <li><i >jQuery</i></li>
  <li><i >SQL</i></li>
  <li><i >Bootstrap</i></li>
  <li><i >Node.js</i></li>
</div>
</div>
  );
}

export default Sidebar;
