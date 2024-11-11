import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/hooks/useIsOnline";

const Header = () => {
  const [login, setLogin] = useState(false);
  console.log("header is redner");

  const isOnline = useIsOnline();
  console.log("hi is onlei", isOnline)

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>

          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          {isOnline?<h3>online</h3>:<h3>offline</h3>}
          {console.log("is online status", isOnline)}
          <li>Cart</li>
          <li>
            <button onClick={() => setLogin(!login)} className="login">
              {login ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
