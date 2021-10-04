import React from 'react';
import logo from "../../images/Logo.png";
import { Link } from 'react-router-dom';
import "./NavMenu.css";
const NavMenu = () => {
    return (
        <div className="container">
            <div className="Nav-container">
        <div className="row">
          <div className="col-md-2">
            <div className="logo-img">
              <img className="w-75" src={logo} alt="" />
            </div>
          </div>
          <div className="col-md-10">
            <div className="menu-container ">
              <ul className="d-flex align-items-end justify-content-end">
                <Link to="/home" className="items">
                  <li>Home</li>
                </Link>
                <Link to="/services" className="items">
                  <li>Services</li>
                </Link>
                <Link to="blog" className="items">
                  <li>Blog</li>
                </Link>
                <Link to="/about" className="items">
                  <li>About us</li>
                </Link>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default NavMenu;