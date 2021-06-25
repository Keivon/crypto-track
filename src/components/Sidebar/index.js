import './sidebar.css';

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function Sidebar() {
  return (
    <div id="mySidenav" className="sidenav">
  <i className="closebtn" onClick={() => {closeNav()}}>&times;</i>
  <i>About</i>
  <i>Services</i>
  <i >About</i>
  <i >Services</i>
</div>
  );
}

export default Sidebar;
