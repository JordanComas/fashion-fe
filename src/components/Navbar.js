import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Search from "./Search";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <nav>
      <Link to="/" className="logo">
        <h1>Fashion Passion</h1>
      </Link>
      <div className="nav-line"></div>
      <div className="nav-bottom">
        <Link
          className={pathname === "/accessories" ? "active" : ""}
          to="/accessories"
        >
          Accessories
        </Link>
        <Link className={pathname === "/tops" ? "active" : ""} to="/tops">
          Tops
        </Link>
        <Link className={pathname === "/bottoms" ? "active" : ""} to="/bottoms">
          Bottoms
        </Link>
      </div>

      {/* <div className="search-section"> */}
      <Search />
      {/* </div> */}

      <a className="telegram-link" href="#">
        Join Our Telegram
      </a>
    </nav>
  );
};

export default Navbar;
