import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/hooks/useIsOnline";

const Header = () => {
  const [login, setLogin] = useState(false);
  console.log("header is redner");

  const isOnline = useIsOnline();
  console.log("hi is onlei", isOnline);

  return (
    <div className="flex justify-between bg-pink-50 shadow-sm">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex m-4 p-4">
          <li className="p-5">
            <Link to="/">Home</Link>
          </li>
          <li className="p-5">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-5">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-5">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-5">

          {isOnline ? <h3>online</h3> : <h3>offline</h3>}
          {console.log("is online status", isOnline)}
          </li>
          <li className="p-5">Cart</li>
          <li className="p-5">
            <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"  onClick={() => setLogin(!login)}>
              {login ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
