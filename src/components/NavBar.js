import { IoMdArrowForward } from "react-icons/io";

function NavBar(props) {
  return (
    <div className="nav">
      <div className="logo">
        <span>Lyf-&#41;</span> /isurance@tiropay.au
      </div>
      <div className="nav-buttons-menu">
        <div className="log-start">
          <button className="log-in">Log In</button>
          <button className="start">Get Started</button>
        </div>
        <div className="burger">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
