import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link className="shop" to="/">
          HOME
        </Link>
        <Link className="shop" to="/login">
          LOGIN
        </Link>
        <Link to="/Cart">
          <ShoppingCart size={32} color={"white"} />
        </Link>
        
      </div>
    </div>
  );
};

export default Navbar;
