import React, { Component } from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="LOGO" />
          </Link>
          <ul className="navbar-nav float-right">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/recipes" className="nav-link">
                Recipes
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
